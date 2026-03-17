"use client";

import { useRouter } from "next/navigation";
import {
    useState,
    ChangeEvent,
    FormEvent,
    useEffect,
} from "react";
import { toast } from "react-toastify";

type ProductForm = {
    name: string;
    price: string;
    unit: string;
    link: string;
    desc: string;
};

export default function AdminProducts() {
    const router = useRouter();

    const [form, setForm] = useState<ProductForm>({
        name: "",
        price: "",
        unit: "",
        link: "",
        desc: "",
    });

    const [file, setFile] = useState<File | null>(null);
    const [preview, setPreview] = useState("");
    const [submitting, setSubmitting] = useState(false);

    // ===== FORMAT PRICE =====
    const formatPrice = (value: string) => {
        const number = value.replace(/\D/g, "");
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

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

    // cleanup preview
    useEffect(() => {
        return () => {
            if (preview) URL.revokeObjectURL(preview);
        };
    }, [preview]);

    // ===== BACK =====
    const isDirty =
        form.name || form.price || form.unit || form.link || form.desc || file;

    const handleBack = () => {
        if (
            isDirty &&
            !confirm("Dữ liệu chưa lưu, bạn có chắc muốn quay lại?")
        ) {
            return;
        }

        if (window.history.length > 1) {
            router.back();
        } else {
            router.push("/admin/products");
        }
    };

    // ===== SUBMIT =====
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
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

        if (!file) {
            toast.warning("Chọn ảnh");
            return;
        }

        try {
            setSubmitting(true);

            const formData = new FormData();
            formData.append("file", file);

            Object.entries(form).forEach(([k, v]) =>
                formData.append(k, v)
            );

            const res = await fetch("/api/products", {
                method: "POST",
                body: formData,
            });

            if (!res.ok) throw new Error();

            toast.success("Tạo sản phẩm thành công");

            setForm({
                name: "",
                price: "",
                unit: "",
                link: "",
                desc: "",
            });

            setFile(null);
            setPreview("");
        } catch {
            toast.error("Tạo sản phẩm thất bại");
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl rounded-2xl p-6 space-y-6"
            >
                {/* HEADER */}
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold">
                        Thêm sản phẩm
                    </h2>

                    <button
                        type="button"
                        onClick={handleBack}
                        className="text-sm px-4 py-2 rounded-lg border hover:bg-gray-100 transition"
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
                        placeholder="25.500"
                        className="input"
                        value={form.price}
                        onChange={handleChange}
                    />

                    <input
                        name="unit"
                        placeholder="Đơn vị (vd: chai, hộp)"
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
                    <label className="font-semibold">
                        Ảnh sản phẩm
                    </label>

                    <div className="border-2 border-dashed rounded-xl p-6 text-center hover:border-blue-400 transition">
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            id="upload"
                        />

                        <label
                            htmlFor="upload"
                            className="cursor-pointer text-gray-500 block"
                        >
                            Click để chọn ảnh
                        </label>
                    </div>

                    {preview && (
                        <div className="flex items-center gap-4">
                            <img
                                src={preview}
                                className="w-24 h-24 object-cover rounded-lg border"
                            />

                            <p className="text-sm text-gray-500">
                                Ảnh sẽ được upload khi tạo sản phẩm
                            </p>
                        </div>
                    )}
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
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition disabled:opacity-50"
                >
                    {submitting ? "Đang tạo..." : "Tạo sản phẩm"}
                </button>
            </form>
        </div>
    );
}