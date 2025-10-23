# OWL - Digital Identity Platform

OWL adalah platform identitas digital modern yang memungkinkan pengguna untuk memverifikasi identitas sekali dan menggunakannya di mana saja. Dibangun dengan Next.js 15, TypeScript, dan teknologi web modern.

## 🚀 Fitur

- **FaultyTerminal Background**: Background interaktif dengan efek terminal glitch yang responsif terhadap mouse
- **Crosshair Effect**: Efek crosshair yang mengikuti mouse dengan animasi smooth
- **StarBorder Button**: Button dengan efek bintang animasi yang menarik
- **Magnet Effect**: Efek magnet yang menarik elemen ke arah mouse
- **SplitText Animation**: Animasi teks yang smooth dengan berbagai efek (fade, slide, rotation)
- **Modern Landing Page**: Desain landing page yang clean dan profesional
- **Responsive Design**: Tampilan yang optimal di berbagai ukuran layar
- **Digital Identity Solution**: Platform untuk verifikasi identitas yang aman dan mudah

## 🛠️ Teknologi yang Digunakan

- **Next.js 15** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Komponen UI modern
- **GSAP** - Animasi JavaScript
- **OGL** - WebGL library untuk 3D graphics
- **ReactBits** - Komponen FaultyTerminal, Crosshair, StarBorder, Magnet, dan SplitText
- **Three.js** - WebGL library untuk efek visual

## 📦 Instalasi

1. Clone repository ini
2. Install dependencies:
   ```bash
   npm install
   ```

3. Jalankan development server:
   ```bash
   npm run dev
   ```

4. Buka [http://localhost:3000](http://localhost:3000) di browser

## 🎨 Komponen

### FaultyTerminal Component
Background interaktif dengan efek terminal glitch yang responsif terhadap mouse:
- `scale`: Skala efek terminal (default: 1.5)
- `gridMul`: Multiplier grid untuk pola (default: [2, 1])
- `digitSize`: Ukuran digit dalam grid (default: 1.2)
- `timeScale`: Kecepatan animasi (default: 1)
- `mouseReact`: Responsivitas terhadap mouse (default: true)
- `mouseStrength`: Kekuatan interaksi mouse (default: 1.0 - maksimal)
- `glitchAmount`: Intensitas efek glitch (default: 1)
- `scanlineIntensity`: Intensitas scanline (default: 1)
- `tint`: Warna tint untuk efek terminal (default: "#006680" - teal blue)

### Crosshair Component
Efek crosshair yang mengikuti mouse dengan animasi smooth:
- `containerRef`: Ref ke container (default: null - menggunakan window)
- `color`: Warna crosshair (default: "white")
- `zIndex`: Z-index untuk layering (default: 10000)

### StarBorder Component
Button dengan efek bintang animasi yang menarik:
- `as`: Element yang digunakan (default: "button")
- `className`: Class CSS tambahan
- `color`: Warna efek bintang (default: "white")
- `speed`: Kecepatan animasi (default: "6s")
- `thickness`: Ketebalan border (default: 1)

### Magnet Component
Efek magnet yang menarik elemen ke arah mouse:
- `padding`: Jarak deteksi mouse (default: 100)
- `disabled`: Nonaktifkan efek magnet (default: false)
- `magnetStrength`: Kekuatan magnet (default: 2)
- `activeTransition`: Transisi saat aktif (default: "transform 0.3s ease-out")
- `inactiveTransition`: Transisi saat tidak aktif (default: "transform 0.5s ease-in-out")

### SplitText Component
Animasi teks dengan konfigurasi:
- `text`: Teks yang akan dianimasi
- `splitType`: Jenis split ('chars', 'words', 'lines')
- `delay`: Delay antar animasi dalam ms (default: 100)
- `duration`: Durasi animasi dalam detik (default: 0.6)
- `ease`: Jenis easing (default: 'power3.out')
- `from`: State awal animasi
- `to`: State akhir animasi

## 🎯 Penggunaan

```tsx
import FaultyTerminal from '@/components/FaultyTerminal';
import Crosshair from '@/components/Crosshair';
import StarBorder from '@/components/StarBorder';
import Magnet from '@/components/Magnet';
import SplitText from '@/components/SplitText';
import { useRef } from 'react';

export default function Home() {
  const heroRef = useRef<HTMLElement>(null);

  return (
    <div className="relative min-h-screen">
      {/* Background FaultyTerminal */}
      <div className="absolute inset-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={1}
          mouseReact={true}
          mouseStrength={1.0}
          tint="#006680"
        />
      </div>

      {/* Content dengan SplitText */}
      <div className="relative z-10">
        <SplitText
          text="Your Digital Identity"
          splitType="words"
          delay={150}
          from={{ opacity: 0, y: 100 }}
          to={{ opacity: 1, y: 0 }}
        />
      </div>

      {/* Button dengan StarBorder dan Magnet */}
      <Magnet padding={50} disabled={false} magnetStrength={50}>
        <StarBorder
          as="button"
          color="#006680"
          speed="5s"
        >
          Connect Now
        </StarBorder>
      </Magnet>

      {/* Crosshair Effect */}
      <Crosshair containerRef={heroRef} color="#006680" />
    </div>
  );
}
```

## 📱 Responsive

Proyek ini menggunakan Tailwind CSS untuk responsive design:
- Mobile-first approach
- Breakpoints: sm, md, lg, xl, 2xl
- Grid system yang responsif
- Typography yang scalable

## 🎨 Styling

- **Background**: Hitam dengan efek FaultyTerminal interaktif
- **Typography**: Font Poppins dengan hierarki yang jelas
- **Cards**: Dark theme dengan shadow dan rounded corners
- **Colors**: Black theme dengan blue accent colors
- **Navigation**: Sticky header dengan backdrop blur

## 📄 Lisensi

MIT License - bebas digunakan untuk proyek pribadi maupun komersial.

## 🤝 Kontribusi

Kontribusi sangat diterima! Silakan buat pull request atau issue untuk perbaikan dan fitur baru.

---

Dibuat dengan ❤️ menggunakan Next.js dan ReactBits