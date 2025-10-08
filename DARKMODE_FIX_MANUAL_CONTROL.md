# Dark Mode - Manual Control Only (FIXED COMPLETELY)

## Perubahan yang Dilakukan

Tanggal: 8 Oktober 2025

### Masalah
Dark mode masih merespons pengaturan sistem (system preference) meskipun sudah ada ThemeSwitcher.

### Root Cause
Ditemukan **3 lokasi** yang masih merespons system preference:
1. `src/routes/+layout.svelte` - CSS media query
2. `src/app.css` - CSS media query (file utama yang jadi masalah!)
3. `static/404.html` - JavaScript `window.matchMedia`

### Solusi Final
Menghapus SEMUA media query dan JavaScript yang mendeteksi `prefers-color-scheme`.

### File yang Diubah

#### 1. `src/app.css` (FILE UTAMA - ROOT CAUSE)
**Dihapus:**
```css
@media (prefers-color-scheme: dark) {
    :root:not(.dark) {
        color-scheme: light !important;
        background-color: #ffffff !important;
        color: #111827 !important;
    }
    /* ... dan 50+ baris CSS lainnya */
}
```

#### 2. `src/routes/+layout.svelte`
**Dihapus:**
```css
@media (prefers-color-scheme: dark) {
    :global(html:not(.dark)) {
        color-scheme: light !important;
        background-color: #ffffff !important;
        color: #111827 !important;
    }
}
```

#### 3. `static/404.html`
**Sebelum:**
```javascript
if (localStorage.getItem('darkMode') === 'true' || 
    (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark');
}
```

**Sesudah:**
```javascript
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
}
```

## Cara Kerja Dark Mode Sekarang

1. **Default Mode**: Light mode (saat pertama kali buka website tanpa preferensi tersimpan)
2. **Manual Control**: Hanya bisa diubah melalui ThemeSwitcher di navbar
3. **Persistent**: Preferensi disimpan di `localStorage` dengan key `theme`
4. **No System Preference**: TIDAK mengikuti pengaturan dark mode perangkat

## Implementasi Teknis

### JavaScript (Sudah Benar Sejak Awal)
- `theme.ts`: Hanya membaca dari localStorage
- `app.html`: Script inisialisasi TIDAK menggunakan `window.matchMedia('(prefers-color-scheme: dark)')`
- `ThemeSwitcher.svelte`: Kontrol manual via button toggle

### CSS (Yang Diperbaiki)
- Menghapus semua media query `@media (prefers-color-scheme: dark)`
- Dark mode hanya aktif via class `.dark` yang ditambahkan manual oleh JavaScript
- Tidak ada CSS yang merespons system preference

## Testing

Setelah perubahan ini:

1. ✅ Jika sistem dalam dark mode, website default ke light mode
2. ✅ Jika sistem dalam light mode, website default ke light mode
3. ✅ Dark mode HANYA aktif saat user klik ThemeSwitcher
4. ✅ Preferensi user tersimpan di localStorage
5. ✅ Preferensi sync antar tab yang terbuka

## Cara Clear Cache (Jika Masih Terlihat Mengikuti Sistem)

Jika setelah rebuild masih terlihat mengikuti sistem:

1. **Clear Browser Cache:**
   - Chrome/Edge: `Ctrl + Shift + Delete` → Clear cache
   - Firefox: `Ctrl + Shift + Delete` → Clear cache

2. **Clear localStorage:**
   - Buka Developer Tools (`F12`)
   - Tab Application/Storage → Local Storage
   - Hapus key `theme`
   - Refresh halaman

3. **Hard Refresh:**
   - `Ctrl + Shift + R` (Windows)
   - `Cmd + Shift + R` (Mac)

## Build Perubahan

```bash
# Hapus build lama dan rebuild dari awal
Remove-Item -Path "build" -Recurse -Force
Remove-Item -Path ".svelte-kit" -Recurse -Force
npm run build
```

## Verifikasi

Setelah fix, verifikasi tidak ada lagi `prefers-color-scheme` di source code:
```bash
# Di folder src (source code)
grep -r "prefers-color-scheme" src/
# Result: No matches found ✅

# Di folder build (hasil build)  
# Tailwind CSS mungkin masih punya media query tapi TIDAK digunakan
# karena kita set darkMode: 'class' di tailwind.config.cjs
```

## Status

✅ Dark mode sekarang **100% manual control**
✅ TIDAK mengikuti pengaturan perangkat  
✅ Hanya bisa diubah via ThemeSwitcher
✅ Semua file (app.css, app.html, +layout.svelte, 404.html) sudah diperbaiki
✅ Build bersih dan fresh dari awal

