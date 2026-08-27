# hai.filiate — Landing Page: Design & Implementation Spec

**Untuk:** Claude Code
**Tujuan file ini:** spesifikasi lengkap dan siap-eksekusi untuk membangun landing page statis "VEO AI Affiliate Mastery", dari nol sampai siap deploy di VPS.
**Metodologi:** kerangka Dieter Rams (`design-is`, verdict = **NEW**) untuk keputusan desain + kerangka `system-design` untuk arsitektur & deployment.

---

## 0. Scope Lock

| | |
|---|---|
| **Apa yang dibangun** | Satu landing page statis (single scroll), brand **hai.filiate** |
| **Produk yang dijual** | "VEO AI Affiliate Mastery" — ebook 60+ prompt Veo AI/Google Flow, Rp49.000, dijual via Lynk.id |
| **User utama** | Affiliate marketer TikTok Shop/Shopee Indonesia, awam AI, sensitif harga, buka link dari bio TikTok/IG/YouTube Shorts (in-app browser, mayoritas mobile) |
| **Tugas utama halaman** | User paham value proposition dalam <15 detik scroll, lalu klik CTA → checkout di Lynk.id |
| **Domain** | `haifiliate.shop` (sudah dimiliki) |
| **Hosting** | VPS "Reina" (Vultr, `45.76.189.54`, Ubuntu 26.04) — server yang sama dengan rencana Hermes Agent, tapi landing page berjalan independen (Nginx, bukan bagian dari bot Telegram) |
| **Stack** | HTML + CSS + vanilla JS statis. **Tanpa framework, tanpa build step.** |

**Non-goals (jangan dikerjakan sekarang):**
- Checkout/keranjang di landing page — semua transaksi tetap 100% di Lynk.id
- Login/akun user
- CMS atau backend apa pun
- A/B testing infrastruktur
- Multi-halaman/blog — ini satu halaman scroll saja

**Referensi:** screenshot halaman produk Lynk.id (2 gambar), logo `hai.filiate` (varian hitam & putih).

---

## 1. Guardrail Kejujuran (wajib, non-negotiable)

Sesuai prinsip bisnis hai.filiate yang sudah ditetapkan — **tidak ada false scarcity, tidak ada social proof palsu**:

- ❌ Jangan buat countdown timer palsu, counter "X orang beli hari ini", atau testimoni fiktif.
- ❌ Jangan pakai superlative kosong ("terbaik", "revolusioner", "dijamin viral") tanpa didukung fakta produk.
- ✅ Semua angka (harga, jumlah prompt, jumlah halaman, jumlah kredit gratis) **harus identik 1:1** dengan listing Lynk.id: **Rp49.000 · 60+ prompt · 33 halaman · 7 bab · 5 kredit bot gratis**.
- ✅ Setiap CTA menjelaskan persis apa yang terjadi setelah diklik ("Beli Sekarang — ke Lynk.id", bukan "Klik Di Sini").
- ✅ Jelaskan dengan jujur bahwa produk berupa **teks prompt**, bukan video jadi — dan hasil akhir bergantung pada platform Veo AI/Google Flow (pihak ketiga, bukan afiliasi resmi Google).
- ✅ Karena belum ada testimoni publik terverifikasi: jangan tampilkan section testimoni. Ganti dengan transparansi cara kerja + bukti isi produk (chapter list, contoh struktur prompt) sebagai pengganti "social proof".

---

## 2. Informasi Arsitektur — Urutan Section

1. **Hero**
2. **Masalah** (kenapa video affiliate kebanyakan gagal convert)
3. **Isi Produk** (7 bab, 60+ prompt)
4. **Bonus Stack** (bot Telegram, kredit gratis, SOP, prompt thumbnail)
5. **Cocok Untuk Siapa** (checklist faceless creator)
6. **Cara Kerja** (3 langkah: beli → kode via WA → klaim di bot)
7. **Harga & CTA Utama**
8. **FAQ**
9. **Footer** (kontak WA admin, sosial media, disclaimer pihak ketiga)

---

## 3. Copy — Siap Pakai (Bahasa Indonesia)

> Claude Code: gunakan copy ini apa adanya sebagai starting point. Boleh dirapikan micro-copy (label tombol dsb) selama makna & angka tidak berubah.

### 3.1 Hero
- Eyebrow: `hai.filiate`
- Headline: **"Ngeprompt Ngasal, Video AI-nya Ikut Ngasal."**
- Subhead: "60+ prompt Veo AI siap pakai, disusun khusus buat affiliate TikTok Shop & Shopee yang capek syuting atau nggak pede tampil di kamera."
- Trust line (fakta, bukan klaim): `33 halaman · 7 bab · 60+ prompt siap pakai`
- CTA primer: **"Beli Sekarang — Rp49.000"** → `http://lynk.id/haifiliate/m1kyrylv39jz/checkout`
- CTA sekunder (text link, scroll down): "Lihat isinya dulu ↓"

### 3.2 Masalah
- Headline: "Kenapa Video Affiliate Kamu Nggak 'Nendang'?"
- Body: "Prompt asal → hasil AI generik → orang scroll lewat. Bedanya video yang bikin orang berhenti scroll cuma satu: spesifik. Angle kamera, pencahayaan, gerakan — semua harus jelas dari awal, bukan ditebak-tebak sama AI-nya."

### 3.3 Isi Produk (7 bab)
Headline: "60+ Prompt, Siap Copy-Paste ke Veo AI/Google Flow"
Daftar bab (masing-masing 1 baris keterangan):
1. **Review & Unboxing Produk** — buka box, tunjukkan detail produk
2. **Video Ads Affiliate** — hook + offer + CTA dalam satu klip
3. **Konten Edukasi & Tutorial** — cara pakai produk, tips singkat
4. **Testimoni & Social Proof** — gaya visual testimoni yang meyakinkan
5. **Konten Pendek TikTok/Reels/Shorts** — format cepat, ritme tinggi
6. **Promosi Flash Sale & Event** — urgency yang jujur, bukan gimmick
7. **Niche Spesial** — Fashion, Hijab, Ibu & Anak

Catatan jujur (tampilkan kecil, bukan disembunyikan): "Produk ini berupa kumpulan teks prompt, bukan video jadi. Hasil akhir tergantung Veo AI/Google Flow saat prompt digenerate."

### 3.4 Bonus Stack
Headline: "Bukan Cuma Ebook"
- 🤖 **Akses Bot Telegram** — generator prompt custom sesuai produk kamu sendiri, dapat **5 kredit gratis**
- 🖼️ **Prompt Thumbnail** — biar cover video juga niat
- 📋 **SOP Produksi Konten** — step-by-step dari prompt sampai upload

### 3.5 Cocok Untuk Siapa
Headline: "Ini Buat Kamu Kalau..."
- Nggak pede tampil di kamera (faceless creator)
- Capek cari b-roll berkualitas buat konten edukasi
- Mau hemat biaya beli produk sample & sewa studio
- Mau scale konten tanpa ribet syuting & edit berjam-jam

### 3.6 Cara Kerja
Headline: "3 Langkah, Langsung Jalan"
1. **Checkout di Lynk.id** — bayar Rp49.000
2. **Kode akses dikirim ke WhatsApp kamu** — manual oleh admin, estimasi 1–6 jam (jam operasional 05.00–11.00 & 15.00–20.00 WIB)
3. **Klaim kode di bot Telegram** — mulai pakai 60+ prompt + generate prompt custom sendiri

### 3.7 Harga & CTA Utama
- Reframe harga (fakta, bukan hype): "Rp49.000 itu kurang dari sekali beli 1 produk sampel buat 1 video doang. Di sini kamu dapat 60+ prompt buat puluhan video — nggak perlu beli produk fisik sama sekali."
- Ringkasan isi (checklist singkat, ulangi angka yang sama seperti hero)
- CTA: **"Beli Sekarang — Rp49.000"** → link checkout Lynk.id

### 3.8 FAQ
- **Isinya video jadi atau teks prompt?** Teks prompt bahasa Inggris, siap kamu paste ke Veo AI/Google Flow. Bukan video jadi.
- **Kode bot dikirim kapan?** Manual ke WhatsApp yang kamu daftarkan saat checkout, estimasi 1–6 jam mengikuti jam operasional admin.
- **Saya pemula banget, bisa?** Bisa — tinggal copy prompt, paste ke Veo AI, sesuaikan sedikit, generate. Ada panduan cara pakai di dalam ebook.
- **Wajib beli produk fisik dulu?** Tidak. Itu justru poin utamanya — kamu bisa bikin konten tanpa produk sampel.
- **Kredit di bot itu apa?** Bot Telegram bisa generate prompt custom sesuai brief kamu sendiri lewat Claude AI. Kamu dapat 5 kredit gratis saat klaim kode, bisa top-up kalau habis.
- **Bisa refund kalau nggak cocok?** Karena ini produk digital yang langsung bisa diakses, kami tidak menyediakan refund tunai. Tapi kalau ada kendala teknis (kode error, generate gagal), kami bantu selesaikan atau ganti kredit — chat admin lewat WhatsApp di footer.

### 3.9 Footer
- Brand + tagline pendek
- Kontak: WhatsApp admin (pakai nomor `ADMIN_WHATSAPP` yang sama dengan bot: `6285732712374`)
- Sosial media: `@haifiliate`
- Disclaimer kecil: "Veo AI dan Google Flow adalah produk milik Google. hai.filiate bukan afiliasi resmi Google dan tidak berasosiasi dengannya."

---

## 4. Wireframe (mobile-first, breakpoint utama 360–430px)

```
┌─────────────────────────┐
│  [eyebrow] hai.filiate   │
│                          │
│   NGEPROMPT NGASAL,      │
│   VIDEO AI-NYA IKUT      │
│   NGASAL.                │  ← headline besar, display font
│                          │
│  60+ prompt Veo AI...    │  ← subhead
│                          │
│  33 hal · 7 bab · 60+    │  ← trust line, kecil, gold hairline atas-bawah
│                          │
│  [ Beli Sekarang — 49rb ]│  ← CTA solid gold, full-width mobile
│    Lihat isinya dulu ↓   │  ← text link
└─────────────────────────┘
   │ (gold vertical rule — signature device, muncul di tiap eyebrow section)
┌─────────────────────────┐
│ — MASALAH                │
│ Kenapa Video Affiliate   │
│ Kamu Nggak 'Nendang'?    │
│ [body copy]              │
└─────────────────────────┘
┌─────────────────────────┐
│ — ISI PRODUK              │
│ 60+ Prompt, Siap Pakai    │
│ [1] Review & Unboxing     │  ← list bernomor, nomor = data asli (bab produk)
│ [2] Video Ads Affiliate   │
│ ... (7 items)             │
│ ⚠ catatan produk teks     │  ← kecil, honest disclaimer
└─────────────────────────┘
┌─────────────────────────┐
│ — BONUS                   │
│ [card] Bot Telegram       │
│ [card] Prompt Thumbnail   │
│ [card] SOP Produksi       │
└─────────────────────────┘
┌─────────────────────────┐
│ — COCOK UNTUK              │
│ ✓ Nggak pede di kamera     │
│ ✓ Capek cari b-roll        │
│ ✓ Mau hemat budget         │
│ ✓ Mau scale konten         │
└─────────────────────────┘
┌─────────────────────────┐
│ — CARA KERJA                │
│ (1) Checkout                │
│ (2) Kode via WA             │
│ (3) Klaim di bot             │
└─────────────────────────┘
┌─────────────────────────┐
│ — HARGA                    │
│ Rp49.000                   │
│ [reframe copy]              │
│ [ Beli Sekarang — 49rb ]   │  ← CTA kedua, sama persis
└─────────────────────────┘
┌─────────────────────────┐
│ — FAQ (accordion)          │
│ > Isinya video atau teks?  │
│ > Kode dikirim kapan?      │
│ ...                        │
└─────────────────────────┘
┌─────────────────────────┐
│ hai.filiate                │
│ WA admin · @haifiliate     │
│ disclaimer kecil           │
└─────────────────────────┘
```

Desktop (≥1024px): konten tetap satu kolom terpusat, max-width ~720px untuk teks (readability), section bonus & "cocok untuk" boleh jadi grid 2–3 kolom. Jangan paksa layout multi-kolom di hero — hero tetap fokus tunggal.

---

## 5. Design Token System

**Warna** (5 warna, diambil langsung dari file logo — bukan tebakan):

| Token | Hex | Sumber | Pemakaian |
|---|---|---|---|
| `--ink` | `#0B0B0C` | turunan dari hitam logo, sedikit di-lift dari `#000000` murni supaya tidak flat/mati saat jadi background luas | Background utama |
| `--void` | `#000000` | pixel hitam pekat logo, exact match | Card/section divider, area kontras tinggi |
| `--gold` | `#FFD700` | pixel kuning logo, exact match | CTA, aksen headline, hairline rule (elemen signature) |
| `--gold-deep` | `#C9A227` | turunan lebih gelap dari gold | Hover/active state CTA |
| `--ivory` | `#F4F1E8` | warm white (bukan `#FFFFFF` murni) | Body text di atas background gelap |
| `--smoke` | `#8C8A85` | abu netral | Caption, teks sekunder, disclaimer kecil |

**Tipografi** (3 peran):
- **Display** (headline): geometric grotesque yang berkarakter — mis. *Clash Display* atau *General Sans* (bold/semibold). Alasan: menggemakan geometri lingkaran huruf "a"/"o" di wordmark `hai.filiate`, terasa modern-Indonesia-creator-brand, bukan default AI-cliché (bukan serif cream-terracotta, bukan broadsheet).
- **Body**: *Plus Jakarta Sans* atau *Inter* — regular/medium, dukungan diakritik Indonesia baik, sangat terbaca di layar kecil in-app browser.
- **Utility/kode**: *JetBrains Mono*, dipakai khusus untuk elemen bernuansa "kode" (mis. contoh format kode klaim `VEO-X7K9P2` kalau disebut, atau label teknis kecil) — detail kecil yang menghubungkan brand dengan produk teknis (bot & kode klaim).

Skala tipe (px, mobile): eyebrow 13 / body 16–17 / H2 28–32 / H1 hero 38–44 (via `clamp()` responsif ke 56 di desktop).

**Spacing scale:** 4 / 8 / 16 / 24 / 40 / 64 / 96px — dipakai konsisten, jangan angka acak.

**Elemen Signature (satu risiko estetik yang disengaja):**
Garis vertikal emas tipis (`--gold`) — diambil literal dari batang huruf "T" pada wordmark `hai.filiate` — dipakai sebagai penanda di depan setiap eyebrow label section ("— MASALAH", "— ISI PRODUK", dst). Ini bukan dekorasi acak: elemen ini *adalah* bagian dari logo, dipakai ulang secara struktural sebagai "penanda babak", menggemakan metafora clapperboard/slate film — relevan karena produk ini soal membuat video. Satu-satunya elemen dekoratif berulang di halaman; semua elemen lain flat, tanpa shadow berlebih, tanpa gradient dekoratif.

**Motion:** minimal. Satu momen animasi yang diorkestrasi di hero saat load (garis emas "turun" seperti clapperboard, ~400ms, easing standar), lalu fade+slide-up halus (200ms) saat tiap section masuk viewport. **Wajib** hormati `prefers-reduced-motion: reduce` (matikan semua animasi, tampilkan langsung).

**Kontras & aksesibilitas:**
- `--gold` (#FFD700) di atas `--ink` (#0B0B0C) → kontras tinggi, aman untuk elemen besar (headline, ikon), TAPI jangan dipakai untuk body text panjang.
- Body text pakai `--ivory` di atas `--ink` (rasio kontras tinggi, aman AA).
- Tombol CTA: teks `--ink` (hitam/near-black) di atas background `--gold` — kontras maksimal, bukan gold-on-gold.
- Semua interactive element (tombol, link FAQ accordion) wajib visible focus ring (gold, 2px, offset) untuk navigasi keyboard.

---

## 6. States Checklist (wajib diimplementasi meski halaman statis)

- [ ] **Hover** — CTA berubah ke `--gold-deep`, cursor pointer, transisi 150ms
- [ ] **Focus** — outline gold terlihat jelas di semua elemen interaktif (keyboard nav)
- [ ] **Active/pressed** — CTA sedikit scale-down (98%) saat ditekan di mobile
- [ ] **FAQ accordion** — collapsed by default, expand/collapse dengan animasi tinggi halus, ikon chevron berotasi
- [ ] **Image loading** — semua `<img>` pakai `loading="lazy"` kecuali hero image (eager), dan `width`/`height` eksplisit untuk cegah layout shift
- [ ] **Broken image fallback** — `alt` text deskriptif untuk semua gambar (termasuk logo, mockup ebook)
- [ ] **Slow connection** — font pakai `font-display: swap`, hero tetap terbaca sebelum web font selesai load

---

## 7. Arsitektur Teknis & Deployment

### 7.1 Struktur file
```
haifiliate-landing/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js          (scroll-reveal, FAQ accordion, tanpa dependency)
├── assets/
│   ├── logo-black.png   (sudah ada — hai_filiate_black_.png)
│   ├── logo-white.png   (sudah ada — hai_filiate_white_.png)
│   ├── ebook-mockup.jpg (screenshot mockup ebook, untuk hero/OG image)
│   └── fonts/           (self-hosted woff2, subset Latin)
├── favicon.ico
└── robots.txt
```

### 7.2 Deployment ke VPS Reina
1. **Firewall:** saat ini `ufw` cuma allow port 22. Tambahkan:
   ```
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   ```
2. **Install Nginx** (jika belum ada di server ini — cek dulu, jangan asumsi konflik dengan rencana Hermes Agent).
3. **DNS:** arahkan A record `haifiliate.shop` (dan `www.haifiliate.shop`) ke `45.76.189.54` dari panel domain.
4. **Nginx server block** — serve static file dari `/var/www/haifiliate-landing/`, redirect `www` → root domain (atau sebaliknya, konsisten satu arah).
5. **HTTPS:** `certbot --nginx -d haifiliate.shop -d www.haifiliate.shop` (Let's Encrypt, auto-renew via cron/systemd timer bawaan certbot).
6. **Deploy method:** karena tidak ada build step, cukup `scp`/`rsync` folder ke `/var/www/haifiliate-landing/` atau `git pull` dari repo private + symlink — pilih yang paling gampang diulang Haikal sendiri nanti (rekomendasi: simple deploy script `deploy.sh` yang di-`scp` sekali, dijalankan dari lokal).

### 7.3 Performance budget
- Total page weight (termasuk gambar) **< 700KB**
- Gambar: format **WebP**, kompres, `srcset` untuk mockup ebook (mobile vs desktop resolution)
- JS murni vanilla, total **< 15KB** minified
- Target Lighthouse mobile: **Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95**

### 7.4 SEO & meta dasar
- `<title>`: "hai.filiate — VEO AI Affiliate Mastery: 60+ Prompt Video AI Siap Pakai"
- Meta description: ringkas value prop + harga, jujur (bukan clickbait)
- OG image: mockup ebook (dari screenshot yang sudah ada, di-crop rapi 1200×630)
- `robots.txt` + `sitemap.xml` sederhana (1 halaman)
- Canonical URL ke `https://haifiliate.shop`

### 7.5 Slot Analytics/Pixel (default OFF)
Sediakan satu baris config di awal `main.js` atau `index.html`, contoh:
```js
// Analytics config — isi ID kalau mulai pasang iklan berbayar.
const ANALYTICS = {
  metaPixelId: null,   // isi kalau mau aktifkan Meta Pixel
  tiktokPixelId: null, // isi kalau mau aktifkan TikTok Pixel
};
```
Skrip pixel hanya di-inject kalau ID-nya terisi (bukan `null`). Ini artinya sekarang halaman **tanpa** tracking pihak ketiga sama sekali (lebih ringan, lebih privat) sampai Haikal siap pasang iklan berbayar.

---

## 8. Acceptance Checklist (sebelum dianggap selesai)

- [ ] Kedua CTA utama mengarah ke `http://lynk.id/haifiliate/m1kyrylv39jz/checkout`
- [ ] Semua angka (harga, jumlah prompt, halaman, bab, kredit) sama persis dengan listing Lynk.id
- [ ] Tidak ada testimoni/social proof yang tidak bisa dibuktikan
- [ ] Responsive teruji di 360px, 768px, 1440px
- [ ] Kontras warna lolos WCAG AA untuk semua body text
- [ ] `prefers-reduced-motion` dihormati
- [ ] HTTPS aktif dan valid (tidak ada mixed-content warning)
- [ ] Lighthouse mobile ≥ 90 di semua kategori utama
- [ ] Favicon, OG image, meta description terisi benar
- [ ] Link WhatsApp admin & Instagram/TikTok di footer aktif dan benar
