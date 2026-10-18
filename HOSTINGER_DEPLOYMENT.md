# Hostinger Deployment Guide for Skill Matrix (`skillmatrix.in`)

This document provides step-by-step instructions to deploy the production-ready **Skill Matrix** website to Hostinger shared web hosting.

---

## Prerequisites

- Active Hostinger hosting account with domain **skillmatrix.in** pointing to your hosting.
- Local Node.js environment to run the production build.

---

## Step 1: Generate the Production Build

Open your terminal in the project root directory and run:

```bash
npm install
npm run build
```

This compiles the React + Vite application into static production assets inside the `dist/` directory.

The output folder (`dist/`) contains:
- `index.html`
- `assets/` (optimized JS & CSS bundles)
- `.htaccess` (Apache configuration for clean SPA routing)
- `robots.txt` & `sitemap.xml` (SEO files)

---

## Step 2: Access Hostinger File Manager

1. Log in to your **Hostinger HPanel**.
2. Navigate to **Hosting** → **Files** → **File Manager**.
3. Select your domain: **skillmatrix.in**.
4. Open the root folder: `public_html/`.

---

## Step 3: Clear Existing Default Files

If `public_html/` contains Hostinger's default `default.php` or `index.php` placeholder file, delete it to prevent interference with your React application.

---

## Step 4: Upload Production Files

1. Open the local `dist/` folder on your computer.
2. Select **all files and folders** inside `dist/` (including `index.html`, `assets`, `.htaccess`, `robots.txt`, `sitemap.xml`).
3. Drag and drop them directly into `public_html/` in the Hostinger File Manager (or use the **Upload** button).

> **CRITICAL:** Ensure that `index.html` is located directly at `public_html/index.html` (NOT inside a `public_html/dist/` subfolder).

---

## Step 5: Enable SSL / HTTPS

1. In Hostinger HPanel, go to **SSL / TLS**.
2. Ensure an active SSL certificate (Let's Encrypt) is installed and active for **skillmatrix.in** and **www.skillmatrix.in**.
3. Enable **Force HTTPS** redirect so all HTTP requests securely resolve to HTTPS.

---

## Step 6: Verify Deployment

Open your browser and visit:

**https://skillmatrix.in**

Verify:
- Homepage loads with the professional Skill Matrix corporate positioning (*"We Build Products We Own."*).
- All 6 ecosystem platforms (**Biztrix**, **RojgarMatrix**, **LinkQR**, **AppMatrix**, **ChatMatrix**, and **Jyotrix**) display correctly with working modals and external links.
- Light & Dark theme toggle functions smoothly across all devices.
- Contact form and official contact details (`skillmatrix24@gmail.com`, `+91 9300911588`) are fully visible.
- Page refreshing on sub-routes or anchors (`/#ecosystem`, `/#about`, `/#contact`) works without 404 errors due to `.htaccess`.

---

### Corporate Headquarters
Skill Matrix, Near The Ginger Leaf Restaurant, Rudri, Dhamtari – 493776, Chhattisgarh, INDIA.
