"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";

type Product = {
    id: number;
    name: string;
    price: number;
    image: string;
    unit?: string | null;
};

export default function AdminProductsPage() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [deletingId, setDeletingId] = useState<number | null>(null);

    // ===== FETCH =====
    const fetchProducts = async () => {
        try {
            setLoading(true);
            const res = await fetch("/api/products");

            if (!res.ok) throw new Error();

            const data = await res.json();
            setProducts(data);
        } catch {
            toast.error("Không tải được sản phẩm");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    // ===== DELETE =====
    const handleDelete = async (id: number) => {
        const ok = confirm("Bạn có chắc muốn xóa sản phẩm này?");
        if (!ok) return;

        try {
            setDeletingId(id);

            const res = await fetch(`/api/products/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) throw new Error();

            // remove khỏi UI ngay
            setProducts((prev) => prev.filter((p) => p.id !== id));

            toast.success("Đã xóa sản phẩm");
        } catch {
            toast.error("Xóa thất bại");
        } finally {
            setDeletingId(null);
        }
    };

    return (
        <div className="space-y-6">
            {/* HEADER */}
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold">
                    Danh sách sản phẩm
                </h2>

                <Link
                    href="/admin/products/create"
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                    + Thêm sản phẩm
                </Link>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto bg-white rounded-xl border">
                <table className="w-full">
                    <thead className="bg-gray-100 text-sm">
                        <tr>
                            <th className="p-3 text-left">Ảnh</th>
                            <th className="p-3 text-left">Tên</th>
                            <th className="p-3 text-left">Giá</th>
                            <th className="p-3 text-left">Đơn vị</th>
                            <th className="p-3 text-right">Hành động</th>
                        </tr>
                    </thead>

                    <tbody>
                        {loading ? (
                            <tr>
                                <td colSpan={5} className="p-6 text-center">
                                    Đang tải...
                                </td>
                            </tr>
                        ) : products.length === 0 ? (
                            <tr>
                                <td
                                    colSpan={5}
                                    className="p-6 text-center text-gray-500"
                                >
                                    Chưa có sản phẩm
                                </td>
                            </tr>
                        ) : (
                            products.map((p) => (
                                <tr
                                    key={p.id}
                                    className="border-t hover:bg-gray-50"
                                >
                                    {/* IMAGE */}
                                    <td className="p-3">
                                        <img
                                            src={p.image}
                                            alt={p.name}
                                            className="w-14 h-14 object-cover rounded-lg border"
                                        />
                                    </td>

                                    {/* NAME */}
                                    <td className="p-3 font-medium">
                                        {p.name}
                                    </td>

                                    {/* PRICE */}
                                    <td className="p-3">
                                        {new Intl.NumberFormat("vi-VN").format(
                                            p.price
                                        )}{" "}
                                        đ
                                    </td>

                                    {/* UNIT */}
                                    <td className="p-3 text-gray-500">
                                        {p.unit || "-"}
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="p-3">
                                        <div className="flex justify-end gap-2">
                                            {/* EDIT */}
                                            <Link
                                                href={`/admin/products/${p.id}`}
                                                className="px-3 py-1 text-sm rounded-lg border hover:bg-gray-100 transition"
                                            >
                                                Sửa
                                            </Link>

                                            {/* DELETE */}
                                            <button
                                                onClick={() =>
                                                    handleDelete(p.id)
                                                }
                                                disabled={
                                                    deletingId === p.id
                                                }
                                                className="px-3 py-1 text-sm rounded-lg bg-red-500 text-white hover:bg-red-600 transition disabled:opacity-50"
                                            >
                                                {deletingId === p.id
                                                    ? "Đang xóa..."
                                                    : "Xóa"}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}