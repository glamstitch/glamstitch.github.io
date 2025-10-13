# Panduan Tombol WhatsApp

## 🎯 Fitur yang Ditambahkan

Tombol WhatsApp floating telah ditambahkan di pojok kanan bawah setiap halaman website. Tombol ini memungkinkan pengunjung untuk langsung menghubungi Anda melalui WhatsApp.

## ✨ Fitur Tombol WhatsApp

1. **Posisi Fixed** - Selalu terlihat di pojok kanan bawah, bahkan saat scroll
2. **Animasi Menarik** - Efek wave ripple ganda yang elegan
   - Entrance: Bounce dengan rotasi dari pojok
   - Loop: Gelombang ripple bergantian
   - Tooltip: Bounce masuk dari kanan
3. **Tooltip** - Menampilkan pesan "Chat dengan kami" saat di-hover
4. **Responsive** - Menyesuaikan ukuran di mobile dan desktop
5. **Dark Mode** - Otomatis menyesuaikan dengan tema gelap/terang
6. **Accessibility** - Dilengkapi dengan label dan focus state

## 🔧 Cara Mengubah Nomor WhatsApp

Buka file `src/lib/components/WhatsAppButton.svelte` dan ubah nomor WhatsApp pada baris 3:

```typescript
const whatsappNumber = '6281234567890'; // Ganti dengan nomor Anda
```

**Format Nomor:**

- Gunakan kode negara (Indonesia: 62)
- Hilangkan tanda + dan 0 di awal
- Contoh: 0812-3456-7890 → 6281234567890

## 💬 Cara Mengubah Pesan Default

Ubah pesan default pada baris 4 di file yang sama:

```typescript
const defaultMessage = 'Halo, saya tertarik dengan produk Glam Stitch!';
```

## 🎨 Kustomisasi Tampilan

### Mengubah Posisi

Edit class di file `WhatsAppButton.svelte` baris 13:

```svelte
<!-- Pojok kanan bawah (default) -->
class="... bottom-6 right-6 ..."

<!-- Pojok kiri bawah -->
class="... bottom-6 left-6 ..."

<!-- Posisi lebih tinggi -->
class="... bottom-20 right-6 ..."
```

### Mengubah Ukuran

Ubah nilai `h-14 w-14` dan `lg:h-16 lg:w-16` untuk ukuran berbeda:

```svelte
<!-- Lebih kecil -->
h-12 w-12 lg:h-14 lg:w-14

<!-- Lebih besar -->
h-16 w-16 lg:h-20 lg:w-20
```

### Mengubah Warna

Warna WhatsApp default adalah `#25D366`. Untuk mengubahnya, cari dan ganti di file:

```svelte
bg-[#25D366] <!-- Warna background -->
```

## 📱 Pengujian

Setelah mengubah nomor WhatsApp, pastikan untuk:

1. **Build ulang project:**

   ```bash
   npm run build
   ```

2. **Test di development:**

   ```bash
   npm run dev
   ```

3. **Klik tombol WhatsApp** - Harus membuka chat WhatsApp dengan nomor yang benar

## 🚀 Deploy

Setelah kustomisasi selesai:

1. Build project:

   ```bash
   npm run build
   ```

2. Commit perubahan:
   ```bash
   git add .
   git commit -m "feat: add WhatsApp floating button"
   git push
   ```

## 📋 File yang Ditambahkan/Diubah

1. **File Baru:**
   - `src/lib/components/WhatsAppButton.svelte` - Komponen tombol WhatsApp

2. **File Diubah:**
   - `src/routes/+layout.svelte` - Menambahkan WhatsAppButton ke layout

## 🎨 Mengganti Animasi

Tidak suka dengan animasi saat ini? Ada **8 variasi animasi** yang bisa Anda pilih!

Lihat file: **`WHATSAPP_ANIMATION_VARIANTS.md`** untuk pilihan animasi:

- 🌊 Wave Ripple (default - saat ini)
- ❤️ Heartbeat (detak jantung)
- 🔄 Rotating Pulse (rotasi + pulse)
- 🔔 Shake & Glow (goyang & cahaya)
- 🎈 Floating Bounce (mengambang)
- 💡 Neon Glow (cahaya neon)
- 🎵 Wiggle (bergoyang)
- 🌈 Rainbow Ring (cincin pelangi)
- 📋 Minimal Fade (simpel & elegan)

## 💡 Tips

- **Multiple Numbers**: Jika ingin nomor berbeda per halaman, tambahkan prop `whatsappNumber` ke komponen
- **Custom Messages**: Bisa ditambahkan prop untuk pesan custom per halaman
- **Analytics**: Tambahkan event tracking untuk monitor klik tombol WhatsApp
- **Business Hours**: Bisa ditambahkan logic untuk show/hide berdasarkan jam operasional
- **Pilih Animasi**: Sesuaikan dengan karakter brand Anda (lihat `WHATSAPP_ANIMATION_VARIANTS.md`)

## 🐛 Troubleshooting

### Tombol Tidak Muncul

- Pastikan file `WhatsAppButton.svelte` sudah dibuat
- Cek import di `+layout.svelte` sudah benar
- Clear cache browser dengan Ctrl+F5

### Link WhatsApp Tidak Berfungsi

- Periksa format nomor sudah benar (62xxx tanpa + atau 0 di awal)
- Test di browser yang berbeda
- Pastikan WhatsApp terinstall di perangkat

### Posisi Tombol Tertutup Elemen Lain

- Tingkatkan z-index di class: `z-40` → `z-50` atau lebih tinggi
- Periksa elemen lain yang mungkin memiliki z-index lebih tinggi

## 📞 Contoh Nomor Format

```typescript
// ❌ SALAH
const whatsappNumber = '+62 812-3456-7890';
const whatsappNumber = '0812-3456-7890';
const whatsappNumber = '+6281234567890';

// ✅ BENAR
const whatsappNumber = '6281234567890';
```

---

**Selamat! Fitur WhatsApp sudah siap digunakan!** 🎉
