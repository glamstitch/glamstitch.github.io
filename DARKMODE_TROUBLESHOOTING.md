# Dark Mode Troubleshooting Guide

## Masalah: Dark Mode Masih Mengikuti Sistem

Jika dark mode masih mengikuti pengaturan sistem setelah perbaikan, ikuti langkah-langkah berikut:

### 1. Clear Browser Cache
**Chrome/Edge:**
1. Tekan `Ctrl + Shift + Delete`
2. Pilih "Cached images and files"
3. Klik "Clear data"
4. Hard refresh: `Ctrl + Shift + R`

**Firefox:**
1. Tekan `Ctrl + Shift + Delete`
2. Pilih "Cache"
3. Klik "Clear Now"
4. Hard refresh: `Ctrl + F5`

### 2. Clear LocalStorage
Buka Console Browser (`F12` → Console tab) dan jalankan:
```javascript
localStorage.clear();
location.reload();
```

### 3. Force Reset Theme
Buka Console Browser dan jalankan:
```javascript
// Remove dark class
document.documentElement.classList.remove('dark');
document.body.classList.remove('dark');

// Clear localStorage
localStorage.removeItem('theme');
localStorage.setItem('theme', 'light');

// Apply light mode
document.documentElement.style.backgroundColor = '#ffffff';
document.documentElement.style.color = '#111827';
document.body.style.backgroundColor = '#ffffff';
document.body.style.color = '#111827';

console.log('Theme reset to light mode');
```

### 4. Verify Dark Mode is Disabled
Buka Console dan jalankan:
```javascript
// Check if dark class exists
console.log('Has dark class:', document.documentElement.classList.contains('dark'));

// Check localStorage
console.log('Theme in localStorage:', localStorage.getItem('theme'));

// Check computed styles
const bodyStyles = window.getComputedStyle(document.body);
console.log('Body background:', bodyStyles.backgroundColor);
console.log('Body color:', bodyStyles.color);

// Check color-scheme
console.log('Color scheme:', getComputedStyle(document.documentElement).colorScheme);
```

Expected output untuk light mode:
```
Has dark class: false
Theme in localStorage: "light" atau null
Body background: rgb(255, 255, 255)
Body color: rgb(17, 24, 39)
Color scheme: light
```

### 5. Test with System Dark Mode ON
1. **Aktifkan dark mode di Windows:**
   - Settings → Personalization → Colors → "Dark"

2. **Buka website dengan sistem dark mode aktif**
   - Website HARUS tetap light mode (putih)
   - Jika tidak, ada masalah

3. **Klik toggle dark mode di navbar**
   - Website berubah ke dark mode (hitam)
   - Ini adalah dark mode manual, bukan dari sistem

4. **Matikan dark mode di Windows**
   - Website TETAP dark mode (tidak berubah)
   - Ini membuktikan tidak mengikuti sistem

### 6. Rebuild Application
Jika masih bermasalah, rebuild aplikasi:
```bash
# Delete build folder
rm -rf build
rm -rf .svelte-kit

# Clear node_modules cache (optional)
rm -rf node_modules/.vite

# Rebuild
npm run build
```

### 7. Check CSS Override
Buka DevTools → Elements → Pilih `<html>` element:
- Pastikan **TIDAK ada** class `dark` (jika Anda tidak mengaktifkan dark mode)
- Pastikan `color-scheme: light` di computed styles
- Pastikan background berwarna putih `rgb(255, 255, 255)`

### 8. Verify JavaScript Initialization
Buka Console saat page load, pastikan tidak ada error:
```
Theme initialized
✓ No errors
```

### 9. Cross-Browser Testing
Test di berbagai browser untuk memastikan konsistensi:
- ✅ Chrome
- ✅ Firefox
- ✅ Edge
- ✅ Safari (macOS)

### 10. Mobile Testing
Test di mobile browser:
1. Buka website di mobile
2. Aktifkan dark mode di sistem operasi mobile
3. Website HARUS tetap light mode
4. Toggle dark mode via navbar
5. Dark mode aktif (manual)

## Common Issues

### Issue 1: Navbar Masih Gelap
**Solution:**
```javascript
// Force navbar to light mode
document.querySelectorAll('nav').forEach(nav => {
    nav.style.colorScheme = 'light';
});
```

### Issue 2: Sections Masih Gelap
**Solution:**
```javascript
// Force all sections to light mode
document.querySelectorAll('section').forEach(section => {
    section.style.colorScheme = 'light';
});
```

### Issue 3: Text Color Tidak Berubah
**Solution:** Check bahwa Tailwind classes menggunakan format `dark:` prefix:
```html
<!-- ✅ Correct -->
<p class="text-gray-900 dark:text-white">Text</p>

<!-- ❌ Wrong -->
<p class="text-gray-900">Text</p>
```

### Issue 4: Flash of Wrong Theme
Jika ada flash saat page load:
1. Check script di `app.html` berjalan dengan benar
2. Pastikan tidak ada CSS yang override initial styles
3. Verify `color-scheme` di meta tag

## Verification Checklist

Setelah semua perbaikan, verify dengan checklist ini:

- [ ] Website default ke light mode (tidak ada dark class)
- [ ] Sistem dark mode ON → website tetap light
- [ ] Klik toggle → website berubah dark
- [ ] Refresh → pilihan tersimpan
- [ ] Sistem dark mode OFF → website dark tetap dark (tidak berubah)
- [ ] Klik toggle lagi → website light lagi
- [ ] Navbar tidak gelap saat light mode
- [ ] Sections tidak gelap saat light mode
- [ ] Text readable di kedua mode
- [ ] No console errors
- [ ] Smooth transitions

## Technical Details

### CSS Force Override
File `src/app.css` sekarang memiliki media query yang force override:

```css
@media (prefers-color-scheme: dark) {
    :root:not(.dark) {
        color-scheme: light !important;
        background-color: #ffffff !important;
        color: #111827 !important;
    }
}
```

Ini memastikan bahwa **bahkan ketika sistem dalam dark mode**, website tetap light **kecuali** class `.dark` ada.

### JavaScript Initialization
File `src/app.html` memiliki inline script yang:
1. TIDAK mengecek system preference
2. HANYA membaca dari localStorage
3. Default ke light mode

```javascript
const savedTheme = localStorage.getItem('theme');
const isDark = savedTheme === 'dark'; // HANYA dari localStorage
```

### Theme Utilities
File `src/lib/utils/theme.ts`:
- `getInitialTheme()` - TIDAK mengecek sistem, hanya localStorage
- `toggleTheme()` - Toggle manual
- `applyTheme()` - Apply tanpa side effects

## Still Having Issues?

Jika setelah semua langkah masih bermasalah:

1. **Full Reset:**
```bash
# Stop dev server
# Delete everything
rm -rf build .svelte-kit node_modules/.vite

# Clear browser completely
# - Clear all cache
# - Clear all site data
# - Close all tabs

# Restart
npm install
npm run dev
```

2. **Manual Inspection:**
- Buka DevTools
- Go to Elements tab
- Check `<html>` element
- Verify no `dark` class when in light mode
- Check `color-scheme` property

3. **Console Debug:**
```javascript
// Run this in console
setInterval(() => {
    console.log({
        hasDarkClass: document.documentElement.classList.contains('dark'),
        savedTheme: localStorage.getItem('theme'),
        colorScheme: getComputedStyle(document.documentElement).colorScheme,
        bgColor: getComputedStyle(document.body).backgroundColor
    });
}, 1000);
```

This will log theme status every second to help debug.

## Contact for Support

Jika masih ada masalah setelah troubleshooting:
1. Check console untuk error messages
2. Verify build berhasil tanpa error
3. Test di incognito/private window
4. Try different browser

---

**Last Updated:** October 8, 2025  
**Status:** Comprehensive Force Override Applied

