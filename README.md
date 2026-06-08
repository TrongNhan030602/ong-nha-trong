# Ong Nhà Trọng - Premium Honey Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-15+-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Deploy](https://img.shields.io/badge/Deploy-PM2%20%7C%20Apache-green)]()

> **Live Production:** [https://ongnhatrong.vn/](https://ongnhatrong.vn/)
> **Repository:** [https://github.com/TrongNhan030602/ong-nha-trong](https://github.com/TrongNhan030602/ong-nha-trong)

## Overview

An enterprise-grade, high-performance Landing Page engineered for **Ong Nhà Trọng**, a premium brand specializing in high-quality honey products. This platform serves as the digital storefront, designed to seamlessly communicate the brand story, highlight product purity, and drive direct customer conversions.

Built entirely on the Next.js Server Components architecture, the system is strictly optimized for Technical SEO and maximum score on Core Web Vitals. For a product-focused landing page, lightning-fast initial page loads and immaculate image optimization are critical components of the conversion funnel.

## Core Architecture & Features

- **Next.js App Router (SSR/SSG):** Utilizes React Server Components to pre-render static content, guaranteeing near-zero Layout Shift (CLS) and rapid First Contentful Paint (FCP) – essential metrics for e-commerce SEO.
- **Advanced Media Optimization:** Deep integration of `next/image` to serve modern formats (WebP/AVIF) for high-resolution product photography without bloating payload sizes.
- **Conversion-Optimized UI/UX:** Strategic placement of Call-to-Action (CTA) sections, trust signals, and responsive product displays built with utility-first Tailwind CSS.
- **Strict Type Safety:** 100% TypeScript coverage with `strict: true`. All product data interfaces, component props, and state are strictly typed to eliminate runtime errors.

## Tech Stack

- **Frontend:** Next.js 15+ (App Router), React 19+
- **Language:** TypeScript (Strict)
- **Styling:** Tailwind CSS
- **Infrastructure / Ops:** Linux VPS, PM2 (Daemon/Process Management), Apache (Reverse Proxy)

## Local Development Setup

### Prerequisites
- Node.js (v20+ strictly recommended)
- npm, yarn, or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TrongNhan030602/ong-nha-trong.git
   cd ong-nha-trong
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Environment Configuration:
   Create a `.env.local` file in the root directory.
   ```env
   # API Endpoints / CMS integrations if applicable
   NEXT_PUBLIC_SITE_URL=https://ongnhatrong.vn
   NEXT_PUBLIC_CONTACT_API_ENDPOINT=/api/contact
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```
   *The application will boot at `http://localhost:3000`.*

## Production Deployment (VPS / PM2 / Apache)

In accordance with strict infrastructure policies, this platform is hosted on a Linux VPS utilizing PM2 for continuous process management and Apache acting as the Reverse Proxy. **Nginx is strictly prohibited.**

### 1. Build the Application
```bash
npm run build
```

### 2. Process Management with PM2
Ensure PM2 is globally installed (`npm install -g pm2`). Start the Next.js production server:
```bash
pm2 start npm --name "ong-nha-trong-fe" -- start
pm2 save
pm2 startup
```

### 3. Apache Reverse Proxy Configuration
Configure Apache to securely route external port 80/443 traffic to the internal PM2 process (default Port 3000).

*File: `/etc/apache2/sites-available/ongnhatrong.vn.conf`*
```apache
<VirtualHost *:80>
    ServerName ongnhatrong.vn
    ServerAlias www.ongnhatrong.vn
    
    # Redirect HTTP to HTTPS
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</VirtualHost>

<VirtualHost *:443>
    ServerName ongnhatrong.vn
    ServerAlias www.ongnhatrong.vn

    SSLEngine on
    SSLCertificateFile /path/to/cert.pem
    SSLCertificateKeyFile /path/to/privkey.pem

    # Proxy configuration for Next.js
    ProxyPreserveHost On
    ProxyPass / http://127.0.0.1:3000/
    ProxyPassReverse / http://127.0.0.1:3000/

    # Handle WebSockets (Critical for Next.js internal routing)
    RewriteEngine On
    RewriteCond %{HTTP:Upgrade} =websocket [NC]
    RewriteRule /(.*)  ws://127.0.0.1:3000/$1 [P,L]

    ErrorLog ${APACHE_LOG_DIR}/ongnhatrong_error.log
    CustomLog ${APACHE_LOG_DIR}/ongnhatrong_access.log combined
</VirtualHost>
```

Enable the necessary Apache modules and reload the service:
```bash
sudo a2enmod proxy proxy_http proxy_wstunnel rewrite ssl
sudo a2ensite ongnhatrong.vn.conf
sudo systemctl restart apache2
```

## Strict Coding Guidelines

- **Server-First Execution:** Maximize the use of Server Components. The `'use client'` directive is restricted exclusively to interactive components (e.g., product image galleries, order forms).
- **Responsive Media:** All product imagery must be optimized via `next/image` with predefined `width` and `height` attributes to prevent Layout Shift.
- **Semantic HTML:** Ensure structural tags (`<main>`, `<section>`, `<article>`) and proper heading hierarchies are maintained for E-commerce SEO.

---
*Maintained by the Technical Team.*
