export const runtime = "nodejs";

import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";



// 1. Create
export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const file = formData.get("file");
    const name = formData.get("name");
    const price = formData.get("price");
    const unit = formData.get("unit");
    const link = formData.get("link");
    const desc = formData.get("desc");

    // ===== VALIDATE =====
    if (!(file instanceof File)) {
      return NextResponse.json(
        { error: "File không hợp lệ" },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || typeof price !== "string") {
      return NextResponse.json(
        { error: "Thiếu name hoặc price" },
        { status: 400 }
      );
    }

    // ===== PARSE PRICE =====
    const cleanPrice = Number(price.replace(/\./g, ""));
    if (Number.isNaN(cleanPrice)) {
      return NextResponse.json(
        { error: "Giá không hợp lệ" },
        { status: 400 }
      );
    }

    // ===== FILE → BUFFER =====
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    // ===== UPLOAD (STREAM - KHÔNG BASE64) =====
    const uploadResult = await new Promise<{
      secure_url: string;
    }>((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "matong_trong",
            resource_type: "image",
            transformation: [
              { width: 800, height: 800, crop: "limit" },
              { quality: "auto" },
            ],
          },
          (error, result) => {
            if (error || !result) return reject(error);
            resolve(result as { secure_url: string });
          }
        )
        .end(buffer);
    });

    if (!uploadResult.secure_url) {
      throw new Error("Upload thất bại");
    }

    // ===== SAVE DB =====
    const product = await prisma.product.create({
      data: {
        name: name.trim(),
        price: cleanPrice,
        unit: typeof unit === "string" && unit ? unit : null,
        link: typeof link === "string" && link ? link : null,
        desc: typeof desc === "string" && desc ? desc : null,
        image: uploadResult.secure_url,
      },
    });

    return NextResponse.json(product, { status: 201 });
  } catch (error: unknown) {
    console.error("CREATE PRODUCT ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
// 2. List
export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "asc",
      },
    });

    return NextResponse.json(products);
  } catch (error: unknown) {
    console.error("GET PRODUCTS ERROR:", error);

    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Internal Server Error",
      },
      { status: 500 }
    );
  }
}
