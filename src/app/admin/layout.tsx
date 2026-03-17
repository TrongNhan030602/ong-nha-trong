export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex bg-gray-100">
            {/* SIDEBAR */}
            <aside className="w-64 bg-white/80 backdrop-blur-xl shadow-sm hidden md:flex flex-col">
                <div className="h-16 flex items-center px-6 font-bold text-lg tracking-wide">
                    Admin Panel
                </div>

                <nav className="flex flex-col gap-1 px-3">
                    <a
                        href="/admin/products"
                        className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition"
                    >
                        Sản phẩm
                    </a>
                </nav>
            </aside>

            {/* MAIN */}
            <div className="flex-1 flex flex-col">
                {/* TOPBAR */}
                <header className="h-16 bg-white/70 backdrop-blur-xl shadow-sm flex items-center justify-between px-6">
                    <h1 className="font-semibold text-gray-800">
                        Quản trị hệ thống
                    </h1>

                    {/* future: user dropdown */}
                    <div className="text-sm text-gray-500">
                        Admin
                    </div>
                </header>

                {/* CONTENT */}
                <main className="p-6">
                    <div className="bg-white rounded-2xl shadow-sm p-6">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}