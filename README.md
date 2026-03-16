# NextJS Template

Template frontend sử dụng **NextJS + TypeScript + TailwindCSS + Redux Toolkit**.
Mục đích: làm base project để phát triển nhanh các hệ thống web (landing page, dashboard, ecommerce, SaaS…).

---

# Yêu cầu môi trường

- NodeJS **>=18**
- npm hoặc yarn

Kiểm tra:

```bash
node -v
npm -v
```

---

# Cài đặt project

Clone project và cài dependency:

```bash
npm install
```

---

# Chạy môi trường development

```bash
npm run dev
```

Sau đó mở trình duyệt:

```
http://localhost:3000
```

Server sẽ **auto reload khi sửa code**.

---

# Kiểm tra code

### Kiểm tra lint

```bash
npm run lint
```

### Format code tự động

```bash
npm run format
```

### Kiểm tra TypeScript

```bash
npm run type-check
```

---

# Build production

Build project:

```bash
npm run build
```

Chạy server production:

```bash
npm run start
```

---

# Environment Variables

Tạo file `.env.local` ở root project.

Ví dụ:

```
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Các biến bắt đầu bằng `NEXT_PUBLIC_` sẽ được sử dụng ở frontend.

---

# Deploy VPS (NodeJS)

Build project:

```bash
npm run build
```

Chạy production server:

```bash
npm run start
```

Project mặc định chạy tại:

```
http://localhost:3000
```

Nếu deploy trên VPS nên dùng **process manager** như PM2 để giữ server luôn chạy.

Cài PM2:

```bash
npm install -g pm2
```

Chạy app:

```bash
pm2 start npm --name "next-app" -- start
```

---

# Stack công nghệ

- NextJS (App Router)
- React
- TypeScript
- TailwindCSS
- Redux Toolkit
- React Toastify

---

# Cấu trúc thư mục chính

```
src
 ├ app           # routing và layout
 ├ components    # UI components
 ├ config        # cấu hình app
 ├ constants     # constant dùng chung
 ├ hooks         # custom hooks
 ├ lib           # redux store
 ├ services      # API services
 ├ types         # TypeScript types
 └ utils         # helper functions
```
