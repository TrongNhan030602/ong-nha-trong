"use client";

import { useRouter, useParams } from "next/navigation";
import {
    useState,
    ChangeEvent,
    FormEvent,
    useEffect,
} from "react";
import { toast } from "react-toastify";

// ===== TYPES =====
type Product = {
    id: number;
    name: string;
    price: number;
    unit: string | null;
    link: string | null;
    desc: string | null;
    image: string;
};

type ProductForm = {
    name: string;
    price: string;
    unit: string;
    link: string;
    desc: string;
};

// ===== COMPONENT =====
export default function EditProductPage() {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const id = params.id;

    const [form, setForm] = useState<ProductForm>({
        name: "",
        price: "",
        unit: "",
        link: "",
        desc: "",
    });

    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState("");
    const [currentImage, setCurrentImage] = useState("");

    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);

    // ===== FORMAT PRICE =====
    const formatPrice = (value: string) => {
        const number = value.replace(/\D/g, "");
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    // ===== FETCH DATA =====
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await fetch(`/api/products/${id}`);
                if (!res.ok) throw new Error();

                const product: Product = await res.json();

                setForm({
                    name: product.name || "",
                    price: formatPrice(String(product.price || "")),
                    unit: product.unit || "",
                    link: product.link || "",
                    desc: product.desc || "",
                });

                setCurrentImage(product.image);
            } catch {
                toast.error("Không tải được sản phẩm");
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // ===== CHANGE =====
    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: name === "price" ? formatPrice(value) : value,
        }));
    };

    // ===== FILE =====
    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const selected = e.target.files?.[0];
        if (!selected) return;

        if (!selected.type.startsWith("image/")) {
            toast.error("Chỉ chọn file ảnh");
            return;
        }

        setFile(selected);
        setPreview(URL.createObjectURL(selected));
    };

    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    // ===== BACK =====
    const isDirty =
        form.name ||
        form.price ||
        form.unit ||
        form.link ||
        form.desc ||
        file;

    const handleBack = () => {
        if (isDirty && !confirm("Dữ liệu chưa lưu, bạn có chắc muốn quay lại?")) {
            return;
        }
        router.push("/admin/products");
    };

    // ===== SUBMIT =====
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (submitting) return;

        if (!form.name.trim()) {
            toast.warning("Nhập tên sản phẩm");
            return;
        }

        if (!form.price) {
            toast.warning("Nhập giá");
            return;
        }

        try {
            setSubmitting(true);

            const formData = new FormData();

            if (file) {
                formData.append("file", file);
            }

            Object.entries(form).forEach(([k, v]) =>
                formData.append(k, v)
            );

            const res = await fetch(`/api/products/${id}`, {
                method: "PATCH",
                body: formData,
            });

            if (!res.ok) throw new Error();

            toast.success("Cập nhật thành công");
            router.push("/admin/products");
        } catch {
            toast.error("Cập nhật thất bại");
        } finally {
            setSubmitting(false);
        }
    };

    // ===== LOADING UI =====
    if (loading) {
        return (
            <div className="max-w-3xl mx-auto p-6 space-y-4">
                <div className="h-8 bg-gray-200 rounded animate-pulse" />
                <div className="h-40 bg-gray-200 rounded animate-pulse" />
                <div className="h-20 bg-gray-200 rounded animate-pulse" />
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm p-6 space-y-6"
            >
                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-semibold">
                        Sửa sản phẩm
                    </h2>

                    <button
                        type="button"
                        onClick={handleBack}
                        className="text-sm px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 transition"
                    >
                        ← Quay lại
                    </button>
                </div>

                {/* GRID */}
                <div className="grid md:grid-cols-2 gap-4">
                    <input
                        name="name"
                        placeholder="Tên sản phẩm"
                        className="input"
                        value={form.name}
                        onChange={handleChange}
                    />

                    <input
                        name="price"
                        placeholder="25.000"
                        className="input"
                        value={form.price}
                        onChange={handleChange}
                    />

                    <input
                        name="unit"
                        placeholder="Đơn vị"
                        className="input"
                        value={form.unit}
                        onChange={handleChange}
                    />

                    <input
                        name="link"
                        placeholder="Link mua"
                        className="input"
                        value={form.link}
                        onChange={handleChange}
                    />
                </div>

                {/* IMAGE */}
                <div className="space-y-3">
                    <label className="font-medium">Ảnh sản phẩm</label>

                    <div className="flex items-center gap-4">
                        <img
                            src={preview || currentImage}
                            className="w-24 h-24 object-cover rounded-xl bg-gray-100"
                        />

                        <label className="cursor-pointer px-4 py-2 bg-gray-100 rounded-xl hover:bg-gray-200 text-sm">
                            Đổi ảnh
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="hidden"
                            />
                        </label>
                    </div>
                </div>

                {/* DESC */}
                <textarea
                    name="desc"
                    placeholder="Mô tả sản phẩm"
                    className="input h-28"
                    value={form.desc}
                    onChange={handleChange}
                />

                {/* SUBMIT */}
                <button
                    disabled={submitting}
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-medium transition disabled:opacity-50"
                >
                    {submitting ? "Đang cập nhật..." : "Cập nhật"}
                </button>
            </form>
        </div>
    );
}