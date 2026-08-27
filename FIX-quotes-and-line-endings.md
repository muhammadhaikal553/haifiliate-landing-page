# Perbaikan Kecil: Smart Quotes & Line Ending

## 1. Ganti smart quotes → straight quotes di blok prompt yang bisa disalin

**File:** `skrip-gratis.html`, di dalam `<pre class="prompt-block" id="promptText">...</pre>`

Cari dan ganti semua karakter berikut **hanya di dalam blok `<pre id="promptText">`**
(jangan diubah di bagian lain halaman yang memang sengaja pakai smart quotes untuk
copy editorial biasa, seperti `&ldquo;/&rdquo;` di luar blok prompt):

| Cari (smart quote) | Ganti dengan (straight quote) |
|---|---|
| `"` (U+201C, left double quote) | `"` (U+0022, straight double quote) |
| `"` (U+201D, right double quote) | `"` (U+0022, straight double quote) |

Alasan: teks di blok ini akan di-copy-paste user langsung ke Claude/AI chat sebagai
prompt instruksi. Prompt aslinya (dari dokumen sumber) pakai tanda kutip lurus biasa
`" "`, bukan kutip miring. Supaya hasil salin identik 100% dengan versi asli, tanda
kutip di dalam `<pre>` ini harus dikembalikan ke bentuk lurus.

Setelah diubah, verifikasi dengan:
```bash
grep -c '[""]' skrip-gratis.html
```
Hasilnya harus **0** kalau sudah bersih semua (atau kalau ada `"`/`"` di bagian lain
halaman yang memang bukan blok prompt, itu masih boleh — cukup pastikan yang di
dalam `<pre id="promptText">` sudah 0).

---

## 2. Normalisasi line ending ke LF (hilangkan CRLF)

**File yang perlu diperbaiki:** `index.html`, `skrip-gratis.html`, `style.css`, `main.js`
(dan file lain di repo yang masih campuran CRLF/LF).

Jalankan salah satu cara ini di root folder project:

**Cara A — pakai `dos2unix` (kalau tersedia):**
```bash
dos2unix index.html skrip-gratis.html css/style.css js/main.js
```

**Cara B — kalau `dos2unix` tidak ada, pakai `sed`:**
```bash
sed -i 's/\r$//' index.html skrip-gratis.html css/style.css js/main.js
```

**Cegah supaya tidak terulang lagi ke depannya** — tambahkan file `.gitattributes`
di root repo:
```
* text=auto eol=lf
```
Ini akan memaksa Git menyimpan semua file teks dengan LF secara konsisten, apa pun
OS yang dipakai untuk commit (Windows sering otomatis pakai CRLF kalau tidak diatur).

Verifikasi setelah selesai:
```bash
file index.html skrip-gratis.html css/style.css js/main.js
```
Semua harus muncul sebagai `"UTF-8 Unicode text"` polos — **tanpa** embel-embel
`"with CRLF line terminators"` atau `"with CRLF, LF line terminators"`.

---

## 3. Setelah selesai
- Commit kedua perbaikan ini dalam satu commit terpisah (misal: `fix: straight quotes di prompt block + normalisasi line ending ke LF`)
- Push ke repo
