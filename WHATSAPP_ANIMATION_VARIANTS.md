# 🎨 Variasi Animasi Tombol WhatsApp

File ini berisi berbagai pilihan animasi untuk tombol WhatsApp yang bisa Anda gunakan.

## 🎯 Animasi Saat Ini (Wave Ripple)

**Efek:** Gelombang ripple ganda yang menyebar keluar dari tombol

**Karakteristik:**

- ✨ Entrance: Bounce dari pojok dengan rotasi
- 🌊 Loop: Efek gelombang ripple ganda bergantian
- 💬 Tooltip: Bounce masuk dari kanan

---

## 📚 Variasi Animasi Lainnya

### 1. **Heartbeat Animation** (Detak Jantung)

Tombol terlihat seperti berdetak seperti jantung - cocok untuk menarik perhatian.

```svelte
<!-- Ganti bagian Multi-Ring Wave dengan: -->
<span
	class="absolute inset-0 animate-heartbeat rounded-full bg-[#25D366] opacity-30"
></span>

<!-- Tambahkan di <style>: -->
@keyframes heartbeat {
	0%, 100% {
		transform: scale(1);
	}
	10% {
		transform: scale(1.1);
	}
	20% {
		transform: scale(1);
	}
	30% {
		transform: scale(1.1);
	}
	40% {
		transform: scale(1);
	}
}

.animate-heartbeat {
	animation: heartbeat 2s ease-in-out infinite;
}
```

---

### 2. **Rotating Pulse** (Rotasi + Pulse)

Kombinasi rotasi halus dengan efek pulse.

```svelte
<!-- Ganti bagian Multi-Ring Wave dengan: -->
<span
	class="absolute inset-0 animate-rotate-pulse rounded-full bg-[#25D366] opacity-40"
></span>

<!-- Tambahkan di <style>: -->
@keyframes rotatePulse {
	0% {
		transform: scale(1) rotate(0deg);
		opacity: 0.4;
	}
	50% {
		transform: scale(1.3) rotate(180deg);
		opacity: 0.1;
	}
	100% {
		transform: scale(1) rotate(360deg);
		opacity: 0.4;
	}
}

.animate-rotate-pulse {
	animation: rotatePulse 3s linear infinite;
}
```

---

### 3. **Shake & Glow** (Goyang & Bercahaya)

Tombol bergoyang kecil dan bercahaya untuk menarik perhatian.

```svelte
<!-- Ganti bagian Multi-Ring Wave dengan: -->
<span
	class="absolute -inset-2 animate-glow rounded-full bg-[#25D366] blur-md opacity-50"
></span>

<!-- Ganti animasi button: -->
.whatsapp-button {
	animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55),
	           shake 3s ease-in-out 2s infinite;
}

<!-- Tambahkan di <style>: -->
@keyframes shake {
	0%, 90%, 100% {
		transform: rotate(0deg);
	}
	91%, 93%, 95%, 97%, 99% {
		transform: rotate(-5deg);
	}
	92%, 94%, 96%, 98% {
		transform: rotate(5deg);
	}
}

@keyframes glow {
	0%, 100% {
		opacity: 0.3;
		transform: scale(1);
	}
	50% {
		opacity: 0.6;
		transform: scale(1.2);
	}
}

.animate-glow {
	animation: glow 2s ease-in-out infinite;
}
```

---

### 4. **Floating Bounce** (Mengambang)

Tombol terlihat mengambang naik-turun.

```svelte
<!-- Ganti bagian Multi-Ring Wave dengan: -->
<span
	class="absolute inset-0 animate-ping-slow rounded-full bg-[#25D366] opacity-75"
></span>

<!-- Ganti animasi button: -->
.whatsapp-button {
	animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55),
	           float 3s ease-in-out infinite;
}

<!-- Tambahkan di <style>: -->
@keyframes float {
	0%, 100% {
		transform: translateY(0px);
	}
	50% {
		transform: translateY(-10px);
	}
}

@keyframes pingSlow {
	0% {
		transform: scale(1);
		opacity: 0.75;
	}
	100% {
		transform: scale(2);
		opacity: 0;
	}
}

.animate-ping-slow {
	animation: pingSlow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
}
```

---

### 5. **Neon Glow** (Cahaya Neon)

Efek cahaya neon yang menyala dan meredup.

```svelte
<!-- Ganti bagian Multi-Ring Wave dengan: -->
<span
	class="absolute -inset-1 animate-neon rounded-full bg-[#25D366] blur-sm"
></span>

<!-- Tambahkan di <style>: -->
@keyframes neon {
	0%, 100% {
		opacity: 0.8;
		box-shadow: 0 0 20px rgba(37, 211, 102, 0.8),
		            0 0 40px rgba(37, 211, 102, 0.6),
		            0 0 60px rgba(37, 211, 102, 0.4);
	}
	50% {
		opacity: 1;
		box-shadow: 0 0 30px rgba(37, 211, 102, 1),
		            0 0 60px rgba(37, 211, 102, 0.8),
		            0 0 90px rgba(37, 211, 102, 0.6);
	}
}

.animate-neon {
	animation: neon 2s ease-in-out infinite;
}
```

---

### 6. **Wiggle** (Bergoyang Terus)

Tombol bergoyang pelan seperti memanggil perhatian.

```svelte
<!-- Ganti bagian Multi-Ring Wave dengan: -->
<span
	class="absolute inset-0 animate-pulse-soft rounded-full bg-[#25D366] opacity-30"
></span>

<!-- Ganti animasi button: -->
.whatsapp-button {
	animation: bounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55),
	           wiggle 1s ease-in-out infinite;
}

<!-- Tambahkan di <style>: -->
@keyframes wiggle {
	0%, 100% {
		transform: rotate(-3deg);
	}
	50% {
		transform: rotate(3deg);
	}
}

@keyframes pulseSoft {
	0%, 100% {
		transform: scale(1);
		opacity: 0.3;
	}
	50% {
		transform: scale(1.1);
		opacity: 0.5;
	}
}

.animate-pulse-soft {
	animation: pulseSoft 2s ease-in-out infinite;
}
```

---

### 7. **Rainbow Ring** (Cincin Pelangi) - Premium

Efek cincin dengan gradien warna.

```svelte
<!-- Ganti bagian Multi-Ring Wave dengan: -->
<span
	class="absolute inset-0 animate-rainbow rounded-full border-4 border-transparent"
	style="background: linear-gradient(white, white) padding-box,
	       linear-gradient(45deg, #25D366, #128C7E, #075E54) border-box;"
></span>

<!-- Tambahkan di <style>: -->
@keyframes rainbow {
	0% {
		transform: scale(1) rotate(0deg);
		opacity: 0.8;
	}
	50% {
		transform: scale(1.4) rotate(180deg);
		opacity: 0.3;
	}
	100% {
		transform: scale(1.8) rotate(360deg);
		opacity: 0;
	}
}

.animate-rainbow {
	animation: rainbow 3s linear infinite;
}
```

---

### 8. **Minimal Fade** (Simpel & Elegan)

Animasi minimalis tanpa berlebihan - cocok untuk website professional.

```svelte
<!-- Ganti bagian Multi-Ring Wave dengan: -->
<!-- (Kosongkan, tidak ada animasi loop) -->

<!-- Ganti animasi button: -->
.whatsapp-button {
	animation: fadeInUp 0.5s ease-out;
	transition: all 0.3s ease;
}

<!-- Tambahkan di <style>: -->
@keyframes fadeInUp {
	from {
		opacity: 0;
		transform: translateY(30px);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Hover effect minimal */
.whatsapp-button:hover {
	transform: translateY(-5px);
	box-shadow: 0 20px 60px rgba(37, 211, 102, 0.4);
}
```

---

## 🔧 Cara Mengganti Animasi

1. **Buka file:** `src/lib/components/WhatsAppButton.svelte`
2. **Cari bagian:** `<!-- Multi-Ring Wave Animation -->`
3. **Ganti** dengan kode animasi pilihan Anda dari atas
4. **Tambahkan** keyframes di bagian `<style>`
5. **Save** dan refresh browser

## 💡 Tips Memilih Animasi

| Tipe Website               | Animasi Rekomendasi                    |
| -------------------------- | -------------------------------------- |
| **Corporate/Professional** | Minimal Fade, Wave Ripple              |
| **E-commerce/Retail**      | Heartbeat, Shake & Glow                |
| **Creative/Fun**           | Rainbow Ring, Rotating Pulse           |
| **Service Business**       | Floating Bounce, Wave Ripple (default) |
| **Minimalist**             | Minimal Fade, Neon Glow                |
| **Youth/Trendy**           | Wiggle, Shake & Glow                   |

## 🎨 Kustomisasi Lebih Lanjut

### Mengubah Kecepatan Animasi

```css
/* Lebih cepat (1 detik) */
animation: wave 1s ease-out infinite;

/* Lebih lambat (4 detik) */
animation: wave 4s ease-out infinite;
```

### Mengubah Ukuran Efek

```css
/* Efek lebih besar */
transform: scale(2.5);

/* Efek lebih kecil */
transform: scale(1.3);
```

### Menghilangkan Animasi Loop

```svelte
<!-- Hapus atau comment bagian span animasi -->
<!-- <span class="..."></span> -->
```

---

## 🐛 Troubleshooting

**Animasi tidak muncul:**

- Clear cache browser (Ctrl + F5)
- Pastikan kode CSS sudah benar
- Periksa console browser untuk error

**Animasi terlalu cepat/lambat:**

- Sesuaikan nilai duration (contoh: `2s` → `3s`)

**Animasi mengganggu:**

- Kurangi opacity: `opacity-75` → `opacity-30`
- Perlambat animasi: `2s` → `4s`
- Gunakan Minimal Fade untuk efek subtle

---

**Selamat bereksperimen dengan animasi! 🎉**
