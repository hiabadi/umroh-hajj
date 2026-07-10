# Panduan Instalasi & Menjalankan Proyek Secara Lokal

Dokumentasi ini menjelaskan langkah-langkah lengkap untuk menyiapkan dan menjalankan aplikasi Sistem Umrah & Haji di lingkungan lokal kamu!

---

## 📋 Prasyarat yang Dibutuhkan

Pastikan kamu sudah menginstal semua perangkat lunak berikut sebelum memulai:

1. **PHP**: Versi 8.2 atau lebih baru (dengan ekstensi PHP yang dibutuhkan Laravel: `mbstring`, `xml`, `bcmath`, `gd`, `pdo`, dll.)
2. **Composer**: Untuk manajemen dependensi PHP
3. **Node.js & npm**: Untuk manajemen dependensi frontend & build tools

---

## 🚀 Langkah 1: Klon Repositori (jika belum)
Jika kamu belum memiliki kode proyek, klon repositori:
```bash
git clone https://github.com/hiabadi/umroh-hajj.git
cd umroh-hajj
```

---

## 📦 Langkah 2: Instal Dependensi Proyek

### Instal Dependensi PHP (Laravel)
Jalankan perintah ini di terminal untuk menginstal semua package Laravel:
```bash
composer install
```

### Instal Dependensi Frontend (npm)
Jalankan perintah ini untuk menginstal package Node.js (React, Tailwind, dll.):
```bash
npm install
```

---

## ⚙️ Langkah 3: Konfigurasi Aplikasi

### Buat file .env
Salin file `.env.example` menjadi `.env`:
```bash
cp .env.example .env
```
*(Atau buat manual dengan menyalin dan menyesuaikan isinya)*

### Generate APP_KEY
Jalankan perintah ini untuk mengisi `APP_KEY` di file `.env`:
```bash
php artisan key:generate
```

---

## ▶️ Langkah 4: Jalankan Server Aplikasi

Anda perlu menjalankan **dua terminal secara bersamaan**:

### Terminal 1: Jalankan Server Laravel (Backend)
Di direktori proyek, jalankan:
```bash
php artisan serve
```
Server Laravel akan berjalan di `http://localhost:8000`.

### Terminal 2: Jalankan Server Vite (Frontend)
Buka terminal baru, tetap di direktori proyek, lalu jalankan:
```bash
npm run dev
```
Ini akan menjalankan Vite untuk compile dan hot-reload frontend!

---

## ✅ Verifikasi Instalasi

Setelah kedua server berjalan:
1. Buka browser favoritmu (Chrome, Firefox, dll.)
2. Kunjungi alamat: **http://localhost:8000**
3. Kamu seharusnya sudah bisa melihat halaman utama aplikasi!

---

## 📚 Catatan Tambahan

### Tentang Database
Proyek ini sudah dikonfigurasi untuk menggunakan **SQLite** secara default (mudah untuk pengembangan lokal). Kamu tidak perlu menginstal database tambahan (MySQL/PostgreSQL) untuk menjalankan aplikasi dasar!

### Menggunakan Supabase
Proyek juga sudah terintegrasi dengan Supabase, konfigurasi sudah ada di file `.env`:
```env
VITE_SUPABASE_URL="https://rmsmmkwuotgartqfkiht.supabase.co"
VITE_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
```

---

Selamat mengembangkan! 🎉
