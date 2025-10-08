# 🖼️ Image Optimization Guide - Glam Stitch

## 📊 Current Issues

Large images are the **#1 performance bottleneck** in this project:

```
❌ gallery.jpg    - 8.7 MB
❌ poto6.jpg      - 7.0 MB
❌ gambar6.png    - 2.1 MB
❌ gambar5.png    - 2.0 MB
❌ gallery2.jpg   - 1.0 MB
```

**Target:** Reduce to < 200KB per image

---

## 🛠️ Tools Installed

- ✅ `vite-imagetools` - Automatic optimization during build
- ✅ `OptimizedImage.svelte` - Reusable component

---

## 🚀 How to Optimize Images

### Option 1: Using vite-imagetools Query Parameters

**In your Svelte component:**

```typescript
// Before
import myImage from '$lib/assets/image/photo.jpg';

// After - with optimization
import myImage from '$lib/assets/image/photo.jpg?w=1200&format=webp&quality=80';
```

**Query Parameters:**
- `w=1200` - Resize width to 1200px
- `format=webp` - Convert to WebP (smaller size)
- `quality=80` - 80% quality (good balance)
- `h=800` - Resize height
- `fit=cover` - Crop to fit dimensions

**Example:**
```typescript
// Hero images (large)
import heroImage from '$lib/assets/image/hero.jpg?w=1920&format=webp&quality=85';

// Gallery images (medium)
import gallery from '$lib/assets/image/gallery.jpg?w=800&format=webp&quality=80';

// Thumbnails (small)
import thumb from '$lib/assets/image/thumb.jpg?w=400&format=webp&quality=75';
```

### Option 2: Using OptimizedImage Component

```svelte
<script>
  import { OptimizedImage } from '$lib';
  import myPhoto from '$lib/assets/image/photo.jpg';
</script>

<OptimizedImage 
  src={myPhoto} 
  alt="Description"
  loading="lazy"
  class="w-full h-64 object-cover"
/>
```

### Option 3: Responsive Images (Best for hero sections)

```svelte
<script>
  import imgSmall from '$lib/assets/image/hero.jpg?w=640&format=webp';
  import imgMedium from '$lib/assets/image/hero.jpg?w=1280&format=webp';
  import imgLarge from '$lib/assets/image/hero.jpg?w=1920&format=webp';
</script>

<picture>
  <source srcset={imgSmall} media="(max-width: 640px)" />
  <source srcset={imgMedium} media="(max-width: 1280px)" />
  <img src={imgLarge} alt="Hero" class="w-full" loading="eager" />
</picture>
```

---

## 🎯 Optimization Targets

| Image Type | Max Size | Format | Quality |
|------------|----------|--------|---------|
| Hero Images | 1920px | WebP | 85% |
| Gallery Images | 800px | WebP | 80% |
| Product Images | 600px | WebP | 80% |
| Thumbnails | 400px | WebP | 75% |
| Icons/Logos | Original | PNG/SVG | - |

---

## 📝 TODO: Update These Files

### Priority 1 (Largest Images):
- [ ] `src/routes/gallery/+page.svelte` - gallery.jpg (8.7MB)
- [ ] `src/routes/+page.svelte` - poto6.jpg (7MB)
- [ ] `src/routes/pelanggan-kami/+page.svelte`
- [ ] `src/routes/supplier-kami/+page.svelte`

### Priority 2:
- [ ] All product pages (jacket, jersey, polo, tshirt, shirts)
- [ ] About us page
- [ ] Services page

---

## 🧪 Testing

After optimization:

```bash
# Build the project
npm run build

# Check output sizes
ls -lh build/_app/immutable/assets/

# Preview production build
npm run preview
```

**Check in browser:**
1. Network tab - verify smaller file sizes
2. Lighthouse - Performance score should improve
3. PageSpeed Insights - Test real-world performance

---

## 📈 Expected Results

**Before Optimization:**
- Total images: ~25 MB
- First Contentful Paint: 3-5s
- Lighthouse Performance: 50-60

**After Optimization:**
- Total images: ~3-5 MB (80-85% reduction!)
- First Contentful Paint: 1-2s
- Lighthouse Performance: 85-95

---

## 🔗 External Resources

1. **Manual Compression Tools:**
   - [TinyPNG](https://tinypng.com/) - PNG/JPG compression
   - [Squoosh](https://squoosh.app/) - Advanced image optimization
   - [CloudConvert](https://cloudconvert.com/) - Batch conversion

2. **Image CDN (Optional):**
   - Cloudinary (free tier)
   - Cloudflare Images
   - ImageKit

---

## ⚡ Quick Commands

```bash
# Install additional tools (optional)
npm install -D sharp

# Build and check sizes
npm run build && du -sh build/_app/immutable/assets/*

# Deploy optimized version
npm run deploy
```

---

**Remember:** Image optimization is an ongoing process. Always compress images before adding them to the project!

