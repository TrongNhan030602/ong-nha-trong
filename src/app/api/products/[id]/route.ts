export const runtime = "nodejs";

import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { NextResponse } from "next/server";

// ===== DELETE =====
export async function DELETE(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const productId = Number(id);

    if (Number.isNaN(productId)) {
      return NextResponse.json(
        { error: "ID không hợp lệ" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Không tìm thấy sản phẩm" },
        { status: 404 }
      );
    }

    // ===== xóa ảnh =====
    try {
      const publicId = extractPublicId(product.image);
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }
    } catch {}

    // ===== xóa DB =====
    await prisma.product.delete({
      where: { id: productId },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("DELETE ERROR:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// ===== UPDATE =====
export async function PATCH(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const productId = Number(id);

    if (Number.isNaN(productId)) {
      return NextResponse.json(
        { error: "ID không hợp lệ" },
        { status: 400 }
      );
    }

    const formData = await req.formData();

    const file = formData.get("file");
    const name = formData.get("name");
    const price = formData.get("price");
    const unit = formData.get("unit");
    const link = formData.get("link");
    const desc = formData.get("desc");

    // ===== tìm product =====
    const existing = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!existing) {
      return NextResponse.json(
        { error: "Không tìm thấy sản phẩm" },
        { status: 404 }
      );
    }

    // ===== parse price =====
    let cleanPrice = existing.price;

    if (typeof price === "string") {
      const parsed = Number(price.replace(/\./g, ""));
      if (Number.isNaN(parsed)) {
        return NextResponse.json(
          { error: "Giá không hợp lệ" },
          { status: 400 }
        );
      }
      cleanPrice = parsed;
    }

    // ===== xử lý ảnh =====
    let imageUrl = existing.image;

    if (file instanceof File) {
      const buffer = Buffer.from(await file.arrayBuffer());

      const uploadResult = await new Promise<{ secure_url: string }>(
        (resolve, reject) => {
          cloudinary.uploader
            .upload_stream(
              {
                folder: "matong_trong",
                transformation: [
                  { width: 800, height: 800, crop: "limit" },
                  { quality: "auto" },
                ],
              },
              (err, result) => {
                if (err || !result) return reject(err);
                resolve(result as { secure_url: string });
              }
            )
            .end(buffer);
        }
      );

      // xóa ảnh cũ
      try {
        const publicId = extractPublicId(existing.image);
        if (publicId) {
          await cloudinary.uploader.destroy(publicId);
        }
      } catch {}

      imageUrl = uploadResult.secure_url;
    }

    // ===== update DB =====
    const updated = await prisma.product.update({
      where: { id: productId },
      data: {
        name: typeof name === "string" ? name.trim() : existing.name,
        price: cleanPrice,
        unit:
          typeof unit === "string"
            ? unit || null
            : existing.unit,
        link:
          typeof link === "string"
            ? link || null
            : existing.link,
        desc:
          typeof desc === "string"
            ? desc || null
            : existing.desc,
        image: imageUrl,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("UPDATE ERROR:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const productId = Number(id);

    if (Number.isNaN(productId)) {
      return NextResponse.json(
        { error: "ID không hợp lệ" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id: productId },
    });

    if (!product) {
      return NextResponse.json(
        { error: "Không tìm thấy sản phẩm" },
        { status: 404 }
      );
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("GET DETAIL ERROR:", error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
// ===== helper =====
function extractPublicId(url: string) {
  try {
    const parts = url.split("/");
    const file = parts[parts.length - 1];
    const folder = parts[parts.length - 2];

    return `${folder}/${file.split(".")[0]}`;
  } catch {
    return null;
  }
}