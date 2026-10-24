import { Question } from '../types';

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: PILIHAN GANDA (10 BUTIR SOAL: NO. 1 - 10)
  // Setiap butir bernilai skor 1 (Total skor PG = 10)
  // =========================================================================
  {
    id: 1,
    type: 'pg',
    topic: 'Pengertian Dasar Rasio - Membandingkan Dua Besaran',
    difficulty: 'Mudah',
    text: 'Perhatikan gambar perbandingan buah di atas piring berikut!\n\nDi atas sebuah piring terdapat 3 buah apel merah dan 5 buah jeruk manis.\n\nBerdasarkan konsep matematika pada materi rasio, pengertian dari rasio adalah...',
    imageSvg: `<svg viewBox="0 0 420 180" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="180" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Piring Buah -->
      <ellipse cx="210" cy="115" rx="190" ry="50" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
      <ellipse cx="210" cy="112" rx="170" ry="40" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Apel Merah (3 Buah) -->
      <g id="apel-group">
        <!-- Apel 1 -->
        <circle cx="100" cy="100" r="22" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
        <path d="M100,78 Q103,70 106,66" stroke="#15803d" stroke-width="3" fill="none" stroke-linecap="round"/>
        <ellipse cx="108" cy="70" rx="6" ry="3" fill="#22c55e"/>
        <!-- Apel 2 -->
        <circle cx="140" cy="108" r="22" fill="#ef4444" stroke="#b91c1c" stroke-width="1.5"/>
        <path d="M140,86 Q143,78 146,74" stroke="#15803d" stroke-width="3" fill="none" stroke-linecap="round"/>
        <!-- Apel 3 -->
        <circle cx="120" cy="120" r="20" fill="#dc2626" stroke="#991b1b" stroke-width="1.5"/>
      </g>
      <!-- Jeruk Manis (5 Buah) -->
      <g id="jeruk-group">
        <!-- Jeruk 1 -->
        <circle cx="250" cy="100" r="21" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
        <circle cx="250" cy="80" r="2" fill="#15803d"/>
        <!-- Jeruk 2 -->
        <circle cx="290" cy="98" r="21" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
        <!-- Jeruk 3 -->
        <circle cx="330" cy="105" r="21" fill="#f97316" stroke="#c2410c" stroke-width="1.5"/>
        <!-- Jeruk 4 -->
        <circle cx="270" cy="122" r="20" fill="#ea580c" stroke="#9a3412" stroke-width="1.5"/>
        <!-- Jeruk 5 -->
        <circle cx="310" cy="124" r="20" fill="#ea580c" stroke="#9a3412" stroke-width="1.5"/>
      </g>
      <!-- Label Informasi Visual -->
      <rect x="50" y="16" width="140" height="28" rx="6" fill="#fee2e2" stroke="#fca5a5" stroke-width="1"/>
      <text x="120" y="35" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">3 Apel Merah</text>
      <rect x="230" y="16" width="140" height="28" rx="6" fill="#ffedd5" stroke="#fed7aa" stroke-width="1"/>
      <text x="300" y="35" font-size="12" font-weight="bold" fill="#9a3412" text-anchor="middle">5 Jeruk Manis</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Perbandingan ukuran atau banyaknya nilai dari dua besaran atau kuantitas sejenis dengan cara pembagian' },
      { id: 'B', text: 'Jumlah total dari seluruh benda yang dihitung dan dijumlahkan secara berurutan' },
      { id: 'C', text: 'Selisih nilai pengurangan antara benda yang paling banyak dengan benda yang paling sedikit' },
      { id: 'D', text: 'Hasil perkalian antara dua kelompok benda yang berbeda jenis dan satuannya' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pengertian rasio dalam matematika adalah perbandingan ukuran atau banyaknya nilai dari dua besaran atau kuantitas sejenis yang dinyatakan dalam bentuk pembagian (misalnya a : b atau a/b).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Membandingkan Benda Konkret - Menentukan Notasi Rasio',
    difficulty: 'Mudah',
    text: 'Di atas meja belajar Beni terdapat 6 batang pensil tulis dan 8 spidol warna.\n\nRasio banyaknya pensil tulis terhadap banyaknya spidol warna di atas meja Beni adalah...',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Kotak Pensil -->
      <rect x="30" y="25" width="160" height="110" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="110" y="50" font-size="12" font-weight="bold" fill="#1e40af" text-anchor="middle">Pensil Tulis</text>
      <g fill="#3b82f6">
        <rect x="45" y="65" width="12" height="55" rx="2"/>
        <rect x="65" y="65" width="12" height="55" rx="2"/>
        <rect x="85" y="65" width="12" height="55" rx="2"/>
        <rect x="105" y="65" width="12" height="55" rx="2"/>
        <rect x="125" y="65" width="12" height="55" rx="2"/>
        <rect x="145" y="65" width="12" height="55" rx="2"/>
      </g>
      <text x="110" y="130" font-size="11" font-weight="bold" fill="#2563eb" text-anchor="middle">6 Batang</text>
      <!-- Simbol Titik Dua (Banding) -->
      <circle cx="210" cy="70" r="5" fill="#475569"/>
      <circle cx="210" cy="90" r="5" fill="#475569"/>
      <!-- Kotak Spidol -->
      <rect x="230" y="25" width="160" height="110" rx="8" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/>
      <text x="310" y="50" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Spidol Warna</text>
      <g fill="#16a34a">
        <rect x="242" y="65" width="10" height="55" rx="2"/>
        <rect x="257" y="65" width="10" height="55" rx="2"/>
        <rect x="272" y="65" width="10" height="55" rx="2"/>
        <rect x="287" y="65" width="10" height="55" rx="2"/>
        <rect x="302" y="65" width="10" height="55" rx="2"/>
        <rect x="317" y="65" width="10" height="55" rx="2"/>
        <rect x="332" y="65" width="10" height="55" rx="2"/>
        <rect x="347" y="65" width="10" height="55" rx="2"/>
      </g>
      <text x="310" y="130" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">8 Batang</text>
    </svg>`,
    options: [
      { id: 'A', text: '6 : 8 atau disederhanakan menjadi 3 : 4' },
      { id: 'B', text: '8 : 6 atau disederhanakan menjadi 4 : 3' },
      { id: 'C', text: '6 : 14 atau disederhanakan menjadi 3 : 7' },
      { id: 'D', text: '8 : 14 atau disederhanakan menjadi 4 : 7' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rasio pensil terhadap spidol dituliskan sesuai urutan: banyak pensil : banyak spidol = 6 : 8. Jika kedua bilangan dibagi 2 (FPB dari 6 dan 8), bentuk paling sederhananya adalah 3 : 4.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Urutan dalam Rasio - Pentingnya Urutan Perbandingan',
    difficulty: 'Sedang',
    text: 'Dalam sebuah toples kelereng, terdapat 15 butir kelereng biru dan 20 butir kelereng kuning. Rasio banyaknya kelereng biru terhadap kelereng kuning adalah 3 : 4.\n\nJika ditanyakan rasio banyaknya kelereng kuning terhadap banyaknya kelereng biru, perbandingannya adalah...',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Bagan Urutan Rasio -->
      <rect x="30" y="20" width="170" height="120" rx="8" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1"/>
      <text x="115" y="42" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Biru : Kuning</text>
      <text x="115" y="80" font-size="24" font-weight="bold" fill="#2563eb" text-anchor="middle">3 : 4</text>
      <text x="115" y="115" font-size="10" fill="#64748b" text-anchor="middle">15 butir : 20 butir</text>

      <path d="M210,80 L230,80" stroke="#0f172a" stroke-width="2" marker-end="url(#arrow)"/>

      <rect x="235" y="20" width="155" height="120" rx="8" fill="#fefce8" stroke="#fef08a" stroke-width="1"/>
      <text x="312" y="42" font-size="11" font-weight="bold" fill="#854d0e" text-anchor="middle">Kuning : Biru</text>
      <text x="312" y="80" font-size="24" font-weight="bold" fill="#ca8a04" text-anchor="middle">? : ?</text>
      <text x="312" y="115" font-size="10" fill="#64748b" text-anchor="middle">20 butir : 15 butir</text>
    </svg>`,
    options: [
      { id: 'A', text: '4 : 3' },
      { id: 'B', text: '3 : 4' },
      { id: 'C', text: '3 : 7' },
      { id: 'D', text: '4 : 7' },
    ],
    correctAnswer: 'A',
    explanation:
      'Urutan dalam rasio sangat penting. Jika rasio kelereng biru terhadap kuning adalah 3 : 4, maka rasio kelereng kuning terhadap biru dibalik urutannya menjadi 4 : 3 (20 : 15 = 4 : 3).',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Menyederhanakan Rasio Benda dengan FPB',
    difficulty: 'Sedang',
    text: 'Perpustakaan SD Negeri 3 Loloan Timur memiliki 16 buku cerita fiksi dan 24 buku ensiklopedia sains di rak membaca.\n\nBentuk paling sederhana dari rasio banyaknya buku fiksi terhadap buku ensiklopedia sains adalah...',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="210" y="32" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Penyederhanaan Rasio Menggunakan FPB</text>
      <!-- Langkah 1: 16 : 24 -->
      <rect x="50" y="55" width="120" height="70" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="110" y="85" font-size="18" font-weight="bold" fill="#1e293b" text-anchor="middle">16 : 24</text>
      <text x="110" y="105" font-size="9.5" fill="#64748b" text-anchor="middle">Buku Fiksi : Sains</text>

      <!-- Panah Bagi FPB (8) -->
      <path d="M185,90 L235,90" stroke="#2563eb" stroke-width="2.5" stroke-dasharray="4" marker-end="url(#arrow)"/>
      <text x="210" y="80" font-size="10" font-weight="bold" fill="#2563eb" text-anchor="middle">÷ 8 (FPB)</text>

      <!-- Langkah 2: Bentuk Sederhana -->
      <rect x="250" y="55" width="120" height="70" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="310" y="85" font-size="20" font-weight="bold" fill="#1d4ed8" text-anchor="middle">2 : 3</text>
      <text x="310" y="105" font-size="9.5" font-weight="semibold" fill="#3b82f6" text-anchor="middle">Paling Sederhana</text>
    </svg>`,
    options: [
      { id: 'A', text: '2 : 3' },
      { id: 'B', text: '3 : 2' },
      { id: 'C', text: '4 : 6' },
      { id: 'D', text: '1 : 2' },
    ],
    correctAnswer: 'A',
    explanation:
      'FPB dari 16 dan 24 adalah 8. Dengan membagi kedua angka dengan 8: 16 ÷ 8 = 2 dan 24 ÷ 8 = 3. Jadi bentuk paling sederhananya adalah 2 : 3.',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Rasio Bagian terhadap Keseluruhan (Part to Whole)',
    difficulty: 'Sedang',
    text: 'Di kelas VI SD Negeri 3 Loloan Timur terdapat 14 siswa laki-laki dan 16 siswa perempuan. Total seluruh siswa di kelas tersebut adalah 30 orang.\n\nRasio banyaknya siswa perempuan terhadap TOTAL SELURUH SISWA di kelas VI dalam bentuk paling sederhana adalah...',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Diagram Keseluruhan Siswa -->
      <rect x="40" y="25" width="340" height="40" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="40" y="25" width="158" height="40" rx="8" fill="#93c5fd"/>
      <text x="119" y="50" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">Laki-laki: 14</text>
      <rect x="198" y="25" width="182" height="40" rx="8" fill="#f472b6"/>
      <text x="289" y="50" font-size="11" font-weight="bold" fill="#831843" text-anchor="middle">Perempuan: 16</text>
      <text x="210" y="90" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Total Seluruh Siswa = 14 + 16 = 30 Siswa</text>

      <!-- Kotak Pertanyaan -->
      <rect x="70" y="105" width="280" height="35" rx="6" fill="#fdf2f8" stroke="#fbcfe8" stroke-width="1"/>
      <text x="210" y="127" font-size="11" font-weight="bold" fill="#be185d" text-anchor="middle">Perempuan (16) : Seluruh Siswa (30) = ?</text>
    </svg>`,
    options: [
      { id: 'A', text: '8 : 15' },
      { id: 'B', text: '7 : 15' },
      { id: 'C', text: '7 : 8' },
      { id: 'D', text: '8 : 7' },
    ],
    correctAnswer: 'A',
    explanation:
      'Rasio siswa perempuan terhadap total siswa = 16 : 30. Keduanya dibagi 2 (FPB dari 16 dan 30 = 2), sehingga bentuk paling sederhananya adalah 8 : 15.',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Menentukan Kuantitas Benda Berdasarkan Rasio',
    difficulty: 'Sedang',
    text: 'Rasio banyaknya buah mangga terhadap buah jeruk di dalam keranjang adalah 2 : 5. Jika jumlah buah mangga di keranjang tersebut ada 10 buah, berapa banyakkah buah jeruk di dalam keranjang itu?',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="210" y="30" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Model Blok / Diagram Batang Rasio (2 : 5)</text>
      <!-- Mangga (2 kotak = 10 buah, 1 kotak = 5) -->
      <text x="60" y="68" font-size="11" font-weight="bold" fill="#15803d">Mangga:</text>
      <rect x="120" y="52" width="45" height="26" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
      <text x="142" y="69" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">5</text>
      <rect x="165" y="52" width="45" height="26" fill="#86efac" stroke="#16a34a" stroke-width="1.5"/>
      <text x="187" y="69" font-size="10" font-weight="bold" fill="#14532d" text-anchor="middle">5</text>
      <text x="240" y="68" font-size="11" font-weight="bold" fill="#166534">Total = 10 buah</text>

      <!-- Jeruk (5 kotak = ? buah) -->
      <text x="60" y="118" font-size="11" font-weight="bold" fill="#c2410c">Jeruk:</text>
      <rect x="120" y="102" width="45" height="26" fill="#fed7aa" stroke="#f97316" stroke-width="1.5"/>
      <text x="142" y="119" font-size="10" font-weight="bold" fill="#7c2d12" text-anchor="middle">5</text>
      <rect x="165" y="102" width="45" height="26" fill="#fed7aa" stroke="#f97316" stroke-width="1.5"/>
      <text x="187" y="119" font-size="10" font-weight="bold" fill="#7c2d12" text-anchor="middle">5</text>
      <rect x="210" y="102" width="45" height="26" fill="#fed7aa" stroke="#f97316" stroke-width="1.5"/>
      <text x="232" y="119" font-size="10" font-weight="bold" fill="#7c2d12" text-anchor="middle">5</text>
      <rect x="255" y="102" width="45" height="26" fill="#fed7aa" stroke="#f97316" stroke-width="1.5"/>
      <text x="277" y="119" font-size="10" font-weight="bold" fill="#7c2d12" text-anchor="middle">5</text>
      <rect x="300" y="102" width="45" height="26" fill="#fed7aa" stroke="#f97316" stroke-width="1.5"/>
      <text x="322" y="119" font-size="10" font-weight="bold" fill="#7c2d12" text-anchor="middle">5</text>
      <text x="365" y="118" font-size="11" font-weight="bold" fill="#ea580c">Total = ?</text>
    </svg>`,
    options: [
      { id: 'A', text: '25 buah' },
      { id: 'B', text: '20 buah' },
      { id: 'C', text: '15 buah' },
      { id: 'D', text: '30 buah' },
    ],
    correctAnswer: 'A',
    explanation:
      'Nilai 1 bagian = 10 ÷ 2 = 5 buah. Karena jeruk mewakili 5 bagian, maka banyak jeruk = 5 × 5 = 25 buah.',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Rasio Ekuivalen (Senilai)',
    difficulty: 'Sedang',
    text: 'Ibu membuat minuman sirup dengan rasio takaran 3 sendok sirup untuk setiap 5 cangkir air (rasio 3 : 5).\n\nRasio di bawah ini yang bernilai ekuivalen (senilai) dengan takaran sirup Ibu adalah...',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="35" y="25" width="160" height="110" rx="8" fill="#fdf2f8" stroke="#f472b6" stroke-width="1.5"/>
      <text x="115" y="55" font-size="12" font-weight="bold" fill="#9d174d" text-anchor="middle">Takaran Awal</text>
      <text x="115" y="90" font-size="26" font-weight="bold" fill="#db2777" text-anchor="middle">3 : 5</text>
      <text x="115" y="115" font-size="10" fill="#9d174d" text-anchor="middle">3 Sirup : 5 Air</text>

      <path d="M210,80 L230,80" stroke="#64748b" stroke-width="2"/>
      <text x="220" y="72" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">=</text>

      <rect x="240" y="25" width="150" height="110" rx="8" fill="#f0fdf4" stroke="#86efac" stroke-width="1.5"/>
      <text x="315" y="55" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Rasio Ekuivalen</text>
      <text x="315" y="90" font-size="26" font-weight="bold" fill="#16a34a" text-anchor="middle">9 : 15</text>
      <text x="315" y="115" font-size="10" fill="#15803d" text-anchor="middle">(3 × 3) : (5 × 3)</text>
    </svg>`,
    options: [
      { id: 'A', text: '9 : 15' },
      { id: 'B', text: '6 : 8' },
      { id: 'C', text: '12 : 25' },
      { id: 'D', text: '15 : 20' },
    ],
    correctAnswer: 'A',
    explanation:
      'Dua rasio disebut ekuivalen jika pembilang dan penyebut dikalikan dengan bilangan yang sama. Jika 3 : 5 kedua bilangannya dikali 3, maka diperoleh (3 × 3) : (5 × 3) = 9 : 15.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Syarat Satuan Sejenis dalam Membandingkan Dua Besaran',
    difficulty: 'Sukar',
    text: 'Siti memiliki pita merah sepanjang 50 cm dan pita putih sepanjang 1,5 meter. Siti ingin membandingkan panjang kedua pita tersebut dalam bentuk rasio paling sederhana.\n\nLangkah pertama yang benar sebelum menuliskan perbandingan rasio adalah...',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="210" y="28" font-size="12" font-weight="bold" fill="#0f172a" text-anchor="middle">Perbandingan Besaran Panjang dengan Satuan Berbeda</text>
      <!-- Pita Merah: 50 cm -->
      <rect x="50" y="48" width="100" height="22" rx="4" fill="#ef4444"/>
      <text x="160" y="64" font-size="11" font-weight="bold" fill="#b91c1c">Pita Merah: 50 cm</text>
      <!-- Pita Putih: 1,5 meter = 150 cm -->
      <rect x="50" y="85" width="300" height="22" rx="4" fill="#e2e8f0" stroke="#94a3b8" stroke-width="1.5"/>
      <text x="200" y="100" font-size="11" font-weight="bold" fill="#475569" text-anchor="middle">Pita Putih: 1,5 meter (= 150 cm)</text>
      <!-- Keterangan Konversi -->
      <rect x="90" y="122" width="240" height="26" rx="6" fill="#fef9c3" stroke="#fde047" stroke-width="1"/>
      <text x="210" y="139" font-size="10.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Satuan harus disamakan terlebih dahulu!</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Menyamakan satuan panjang kedua pita terlebih dahulu (misal mengubah 1,5 m menjadi 150 cm)' },
      { id: 'B', text: 'Langsung membandingkan angka 50 terhadap 1,5 sehingga rasionya menjadi 50 : 1,5' },
      { id: 'C', text: 'Mengurangkan 50 cm dengan 1,5 meter tanpa mengubah satuannya' },
      { id: 'D', text: 'Menjumlahkan kedua angka 50 + 1,5 = 51,5' },
    ],
    correctAnswer: 'A',
    explanation:
      'Syarat mutlak dalam membandingkan dua besaran menggunakan rasio adalah satuannya harus sejenis. Ubah 1,5 meter menjadi 150 cm terlebih dahulu, sehingga rasionya 50 cm : 150 cm = 1 : 3.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Menafsirkan Model Diagram Blok / Pita (Tape Diagram)',
    difficulty: 'Sukar',
    text: 'Diagram blok di bawah ini menunjukkan rasio banyak ayam terhadap banyak bebek milik Kakek. Rasio ayam terhadap bebek adalah 3 : 5. Jika total seluruh ayam dan bebek adalah 40 ekor, berapakah banyak bebek milik Kakek?',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Ayam (3 blok) -->
      <text x="50" y="55" font-size="11" font-weight="bold" fill="#b45309">Ayam (3):</text>
      <g fill="#fde68a" stroke="#d97706" stroke-width="1.5">
        <rect x="120" y="38" width="40" height="26" rx="3"/>
        <rect x="160" y="38" width="40" height="26" rx="3"/>
        <rect x="200" y="38" width="40" height="26" rx="3"/>
      </g>
      <!-- Bebek (5 blok) -->
      <text x="50" y="95" font-size="11" font-weight="bold" fill="#0369a1">Bebek (5):</text>
      <g fill="#bae6fd" stroke="#0284c7" stroke-width="1.5">
        <rect x="120" y="78" width="40" height="26" rx="3"/>
        <rect x="160" y="78" width="40" height="26" rx="3"/>
        <rect x="200" y="78" width="40" height="26" rx="3"/>
        <rect x="240" y="78" width="40" height="26" rx="3"/>
        <rect x="280" y="78" width="40" height="26" rx="3"/>
      </g>
      <!-- Total Keterangan -->
      <line x1="330" y1="38" x2="330" y2="104" stroke="#475569" stroke-width="2"/>
      <text x="340" y="74" font-size="11" font-weight="bold" fill="#0f172a">Total = 40 ekor</text>
      <text x="210" y="140" font-size="10.5" fill="#64748b" text-anchor="middle">Total blok = 3 + 5 = 8 blok sama besar</text>
    </svg>`,
    options: [
      { id: 'A', text: '25 ekor' },
      { id: 'B', text: '15 ekor' },
      { id: 'C', text: '20 ekor' },
      { id: 'D', text: '30 ekor' },
    ],
    correctAnswer: 'A',
    explanation:
      'Total bagian pada rasio = 3 + 5 = 8 bagian. Nilai 1 bagian = 40 ÷ 8 = 5 ekor. Maka banyak bebek (5 bagian) = 5 × 5 = 25 ekor (sedangkan ayam = 3 × 5 = 15 ekor).',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Membandingkan Rasio Harga Satuan (Unit Rate)',
    difficulty: 'Sukar',
    text: 'Toko A menjual paket pensil dengan rasio: 4 batang pensil seharga Rp10.000.\nToko B menjual paket pensil dengan rasio: 6 batang pensil seharga Rp12.000.\n\nBerdasarkan perhitungan rasio harga per batang pensil (harga satuan), pernyataan manakah yang paling benar?',
    imageSvg: `<svg viewBox="0 0 420 160" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="160" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <!-- Toko A -->
      <rect x="30" y="25" width="165" height="110" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="30" y="25" width="165" height="28" rx="8" fill="#dbeafe"/>
      <text x="112" y="44" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Toko A (Paket 4 Pensil)</text>
      <text x="112" y="75" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Rp10.000 / 4 batang</text>
      <text x="112" y="100" font-size="12" font-weight="bold" fill="#2563eb" text-anchor="middle">= Rp2.500 / batang</text>

      <!-- Toko B -->
      <rect x="225" y="25" width="165" height="110" rx="8" fill="#ffffff" stroke="#94a3b8" stroke-width="1.5"/>
      <rect x="225" y="25" width="165" height="28" rx="8" fill="#dcfce7"/>
      <text x="307" y="44" font-size="11" font-weight="bold" fill="#166534" text-anchor="middle">Toko B (Paket 6 Pensil)</text>
      <text x="307" y="75" font-size="13" font-weight="bold" fill="#0f172a" text-anchor="middle">Rp12.000 / 6 batang</text>
      <text x="307" y="100" font-size="12" font-weight="bold" fill="#16a34a" text-anchor="middle">= Rp2.000 / batang</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Toko B menjual pensil lebih murah karena harga satuannya adalah Rp2.000 per batang' },
      { id: 'B', text: 'Toko A menjual pensil lebih murah karena total harga paketnya hanya Rp10.000' },
      { id: 'C', text: 'Kedua toko menjual pensil dengan harga satuan yang sama yaitu Rp2.500' },
      { id: 'D', text: 'Toko A menjual setiap batang pensil seharga Rp2.000' },
    ],
    correctAnswer: 'A',
    explanation:
      'Harga per pensil di Toko A = Rp10.000 ÷ 4 = Rp2.500 per batang. Harga per pensil di Toko B = Rp12.000 ÷ 6 = Rp2.000 per batang. Jadi harga di Toko B lebih murah per batangnya.',
  },

  // =========================================================================
  // BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR SOAL: NO. 11 - 15)
  // Menjawab lebih dari satu pilihan yang benar (Total skor PGK = 5)
  // =========================================================================
  {
    id: 11,
    type: 'pgk',
    topic: 'Karakteristik dan Konsep Rasio',
    difficulty: 'Sedang',
    text: 'Pilihlah SEMUA pernyataan di bawah ini yang BENAR mengenai konsep rasio dalam matematika! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Rasio digunakan untuk membandingkan dua besaran atau kuantitas yang memiliki satuan sejenis' },
      { id: 'B', text: 'Rasio dapat dituliskan dalam bentuk notasi titik dua (a : b) atau dalam bentuk pecahan (a/b)' },
      { id: 'C', text: 'Urutan penulisan besaran dalam rasio boleh ditukar sembarangan tanpa mengubah makna perbandingan' },
      { id: 'D', text: 'Rasio dapat disederhanakan dengan cara membagi kedua bilangan dengan faktor persekutuan terbesar (FPB)' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'Pernyataan A, B, dan D benar. Pernyataan C salah karena urutan penulisan sangat menentukan arti rasio (misal rasio pensil : buku berbeda arti dengan buku : pensil).',
  },
  {
    id: 12,
    type: 'pgk',
    topic: 'Menganalisis Koleksi Benda dalam Wadah',
    difficulty: 'Sedang',
    text: 'Di dalam sebuah keranjang terdapat 8 buah apel merah, 12 buah jeruk manis, dan 4 buah mangga (Total buah = 24 buah).\n\nPilihlah SEMUA pernyataan rasio perbandingan buah yang bernilai BENAR! (Jawaban benar lebih dari satu)',
    imageSvg: `<svg viewBox="0 0 420 150" class="w-full max-w-md h-auto mx-auto" xmlns="http://www.w3.org/2000/svg">
      <rect width="420" height="150" fill="#f8fafc" rx="12" stroke="#cbd5e1" stroke-width="1.5"/>
      <rect x="25" y="30" width="115" height="90" rx="8" fill="#fee2e2" stroke="#f87171" stroke-width="1.5"/>
      <text x="82" y="65" font-size="12" font-weight="bold" fill="#991b1b" text-anchor="middle">Apel Merah</text>
      <text x="82" y="95" font-size="20" font-weight="bold" fill="#ef4444" text-anchor="middle">8 Buah</text>

      <rect x="152" y="30" width="115" height="90" rx="8" fill="#ffedd5" stroke="#fb923c" stroke-width="1.5"/>
      <text x="209" y="65" font-size="12" font-weight="bold" fill="#9a3412" text-anchor="middle">Jeruk Manis</text>
      <text x="209" y="95" font-size="20" font-weight="bold" fill="#f97316" text-anchor="middle">12 Buah</text>

      <rect x="280" y="30" width="115" height="90" rx="8" fill="#dcfce7" stroke="#4ade80" stroke-width="1.5"/>
      <text x="337" y="65" font-size="12" font-weight="bold" fill="#166534" text-anchor="middle">Mangga</text>
      <text x="337" y="95" font-size="20" font-weight="bold" fill="#22c55e" text-anchor="middle">4 Buah</text>
    </svg>`,
    options: [
      { id: 'A', text: 'Rasio banyak apel merah terhadap banyak jeruk manis adalah 2 : 3' },
      { id: 'B', text: 'Rasio banyak mangga terhadap banyak apel merah adalah 1 : 2' },
      { id: 'C', text: 'Rasio banyak jeruk manis terhadap total seluruh buah adalah 1 : 2' },
      { id: 'D', text: 'Rasio banyak mangga terhadap total seluruh buah adalah 1 : 4' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'A benar: 8 : 12 = 2 : 3. B benar: 4 : 8 = 1 : 2. C benar: 12 : 24 = 1 : 2. D salah: 4 : 24 = 1 : 6 (bukan 1 : 4).',
  },
  {
    id: 13,
    type: 'pgk',
    topic: 'Pasangan Rasio yang Ekuivalen (Senilai)',
    difficulty: 'Sedang',
    text: 'Diberikan rasio dasar perbandingan 3 : 5.\n\nManakah di antara rasio-rasio berikut yang ekuivalen (senilai) dengan rasio 3 : 5? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: '6 : 10' },
      { id: 'B', text: '9 : 15' },
      { id: 'C', text: '12 : 20' },
      { id: 'D', text: '15 : 30' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'A: 3×2 : 5×2 = 6:10 (Senilai). B: 3×3 : 5×3 = 9:15 (Senilai). C: 3×4 : 5×4 = 12:20 (Senilai). D: 15:30 = 1:2 (Tidak senilai dengan 3:5).',
  },
  {
    id: 14,
    type: 'pgk',
    topic: 'Perbandingan Part-to-Part dan Part-to-Whole',
    difficulty: 'Sedang',
    text: 'Dika mengumpulkan 10 butir kelereng merah dan 15 butir kelereng hijau. Jumlah total kelereng yang dimiliki Dika adalah 25 butir.\n\nPilihlah SEMUA pernyataan yang bernilai BENAR! (Jawaban benar lebih dari satu)',
    options: [
      { id: 'A', text: 'Rasio kelereng merah terhadap kelereng hijau adalah 2 : 3' },
      { id: 'B', text: 'Rasio kelereng hijau terhadap kelereng merah adalah 3 : 2' },
      { id: 'C', text: 'Rasio kelereng merah terhadap seluruh kelereng Dika adalah 2 : 5' },
      { id: 'D', text: 'Rasio kelereng hijau terhadap seluruh kelereng Dika adalah 3 : 4' },
    ],
    correctAnswer: ['A', 'B', 'C'],
    explanation:
      'A benar: 10 : 15 = 2 : 3. B benar: 15 : 10 = 3 : 2. C benar: 10 : 25 = 2 : 5. D salah: 15 : 25 = 3 : 5 (bukan 3 : 4).',
  },
  {
    id: 15,
    type: 'pgk',
    topic: 'Situasi Kontekstual yang Memiliki Rasio Tetap',
    difficulty: 'Sukar',
    text: 'Dalam kehidupan sehari-hari, beberapa hubungan benda atau besaran memiliki perbandingan rasio tetap (senilai).\n\nManakah dari situasi di bawah ini yang merupakan contoh penerapan rasio tetap? (Pilihlah semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Resep adonan kue: setiap 500 gram tepung terigu selalu membutuhkan 2 butir telur' },
      { id: 'B', text: 'Laju kendaraan sepeda motor konstan yang menempuh jarak 40 km setiap 1 jam perjalanan' },
      { id: 'C', text: 'Perbandingan umur seorang anak dan ayahnya yang bertambah satu tahun setiap tahunnya' },
      { id: 'D', text: 'Pembagian alat gambar di mana setiap 3 siswa sekolah mendapatkan 1 kotak krayon bersama' },
    ],
    correctAnswer: ['A', 'B', 'D'],
    explanation:
      'A, B, dan D memiliki rasio tetap (senilai) yang konstan melalui perkalian. Sementara C bukan rasio tetap karena selisih umur tetap tetapi rasionya selalu berubah setiap tahun.',
  },

  // =========================================================================
  // BAGIAN III: PGK KATEGORI BENAR/SALAH (5 BUTIR SOAL: NO. 16 - 20)
  // Menilai kebenaran setiap pernyataan (Total skor = 5)
  // =========================================================================
  {
    id: 16,
    type: 'pgk_kategori',
    topic: 'Konsep Dasar Notasi dan Syarat Rasio',
    difficulty: 'Sedang',
    text: 'Tentukan apakah setiap pernyataan mengenai konsep dasar rasio berikut BENAR atau SALAH!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Rasio membandingkan dua besaran dengan cara membagi salah satu nilai besaran dengan nilai besaran lainnya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Notasi rasio 4 : 5 memiliki makna yang sama persis dengan notasi 5 : 4 dalam membandingkan dua benda yang sama.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Rasio dapat disajikan dalam bentuk pecahan a/b dengan syarat bilangan penyebut b tidak sama dengan nol.',
        correctAnswer: true,
      },
      {
        id: 's4',
        text: 'Dua besaran yang dibandingkan dalam rasio wajib memiliki satuan yang sejenis atau dapat dikonversi ke satuan yang sama.',
        correctAnswer: true,
      },
    ],
    explanation:
      'Pernyataan 1 Benar (prinsip rasio). Pernyataan 2 Salah (urutan rasio tidak boleh dibalik). Pernyataan 3 Benar (bentuk pecahan a/b). Pernyataan 4 Benar (satuan harus sejenis).',
  },
  {
    id: 17,
    type: 'pgk_kategori',
    topic: 'Perbandingan Alat Tulis di Meja Guru',
    difficulty: 'Sedang',
    text: 'Di meja guru terdapat 15 spidol hitam, 10 spidol merah, dan 5 spidol biru (Total = 30 spidol).\n\nTentukan kebenaran dari setiap pernyataan perbandingan berikut (BENAR atau SALAH)!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Rasio banyaknya spidol hitam terhadap spidol merah adalah 3 : 2.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rasio banyaknya spidol biru terhadap spidol hitam adalah 1 : 3.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Rasio banyaknya spidol merah terhadap seluruh spidol di atas meja adalah 1 : 4.',
        correctAnswer: false,
      },
      {
        id: 's4',
        text: 'Rasio banyaknya spidol biru terhadap seluruh spidol di atas meja adalah 1 : 6.',
        correctAnswer: true,
      },
    ],
    explanation:
      's1 Benar: 15 : 10 = 3 : 2. s2 Benar: 5 : 15 = 1 : 3. s3 Salah: 10 : 30 = 1 : 3 (bukan 1 : 4). s4 Benar: 5 : 30 = 1 : 6.',
  },
  {
    id: 18,
    type: 'pgk_kategori',
    topic: 'Penyederhanaan Rasio Benda',
    difficulty: 'Sedang',
    text: 'Tentukan apakah penyederhanaan rasio benda berikut SESUAI atau TIDAK SESUAI dengan aturan matematika!',
    categoryType: 'sesuai_tidak',
    statements: [
      {
        id: 's1',
        text: 'Perbandingan 18 buku tulis terhadap 27 pensil disederhanakan menjadi 2 : 3.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's2',
        text: 'Perbandingan 20 butir kelereng merah terhadap 25 butir kelereng biru disederhanakan menjadi 5 : 4.',
        correctAnswer: false,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's3',
        text: 'Perbandingan 35 lembar kertas HVS terhadap 49 lembar kertas origami disederhanakan menjadi 5 : 7.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's4',
        text: 'Perbandingan 14 bola kasti terhadap 21 bola tenis disederhanakan menjadi 2 : 3.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
    ],
    explanation:
      's1 Sesuai (dibagi 9). s2 Tidak Sesuai (20 : 25 seharusnya 4 : 5, bukan 5 : 4). s3 Sesuai (dibagi 7). s4 Sesuai (dibagi 7).',
  },
  {
    id: 19,
    type: 'pgk_kategori',
    topic: 'Rasio Peserta Ekstrakurikuler Olahraga',
    difficulty: 'Sedang',
    text: 'Ekstrakurikuler bulu tangkis diikuti 12 siswa putra dan 8 siswa putri. Ekstrakurikuler renang diikuti 15 siswa putra dan 10 siswa putri.\n\nTentukan kebenaran setiap pernyataan berikut (BENAR atau SALAH)!',
    categoryType: 'benar_salah',
    statements: [
      {
        id: 's1',
        text: 'Rasio siswa putra terhadap siswa putri pada ekstrakurikuler bulu tangkis adalah 3 : 2.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Rasio siswa putra terhadap siswa putri pada ekstrakurikuler renang adalah 3 : 2.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Perbandingan siswa putra dan putri pada bulu tangkis ekuivalen (senilai) dengan perbandingan pada renang.',
        correctAnswer: true,
      },
      {
        id: 's4',
        text: 'Rasio siswa putri bulu tangkis terhadap total seluruh peserta bulu tangkis adalah 2 : 3.',
        correctAnswer: false,
      },
    ],
    explanation:
      's1 Benar: 12 : 8 = 3 : 2. s2 Benar: 15 : 10 = 3 : 2. s3 Benar: keduanya bernilai 3 : 2. s4 Salah: 8 : 20 = 2 : 5 (bukan 2 : 3).',
  },
  {
    id: 20,
    type: 'pgk_kategori',
    topic: 'Rasio Resep Minuman Tradisional',
    difficulty: 'Sukar',
    text: 'Resep membuat Es Daluman khas Bali menggunakan rasio 3 sendok santan kental untuk setiap 2 gelas air kelapa muda (3 : 2).\n\nTentukan apakah pernyataan takaran berikut SESUAI atau TIDAK SESUAI!',
    categoryType: 'sesuai_tidak',
    statements: [
      {
        id: 's1',
        text: 'Jika menggunakan 6 sendok santan kental, maka air kelapa muda yang diperlukan adalah 4 gelas.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's2',
        text: 'Jika menggunakan 6 gelas air kelapa muda, maka santan kental yang diperlukan adalah 9 sendok.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's3',
        text: 'Rasio 3 : 2 menunjukkan bahwa takaran santan kental lebih sedikit daripada air kelapa muda.',
        correctAnswer: false,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
      {
        id: 's4',
        text: 'Jika dibuat dengan 12 sendok santan kental dan 8 gelas air kelapa, rasionya senilai dengan resep semula.',
        correctAnswer: true,
        trueLabel: 'Sesuai',
        falseLabel: 'Tidak Sesuai',
      },
    ],
    explanation:
      's1 Sesuai (rasio dikali 2). s2 Sesuai (rasio dikali 3). s3 Tidak Sesuai (3 sendok lebih banyak dari 2 gelas). s4 Sesuai (12 : 8 = 3 : 2).',
  },

  // =========================================================================
  // BAGIAN IV: MENJODOHKAN (5 BUTIR SOAL: NO. 21 - 25)
  // Pasangkan premis di kiri dengan jawaban benar di kanan (Total skor = 5)
  // =========================================================================
  {
    id: 21,
    type: 'menjodohkan',
    topic: 'Penyederhanaan Rasio Alat Kesenian',
    difficulty: 'Sedang',
    text: 'Pasangkan perbandingan kuantitas perlengkapan di ruang seni berikut dengan bentuk rasio paling sederhananya!',
    matchingPairs: [
      { id: 'm1', premise: '10 kuas lukis terhadap 15 palet cat', match: '2 : 3' },
      { id: 'm2', premise: '12 gunting kertas terhadap 16 botol lem', match: '3 : 4' },
      { id: 'm3', premise: '18 kertas gambar terhadap 6 penggaris kayu', match: '3 : 1' },
      { id: 'm4', premise: '4 kotak cat air terhadap 12 wadah air', match: '1 : 3' },
    ],
    explanation:
      '10:15 = 2:3 (bagi 5). 12:16 = 3:4 (bagi 4). 18:6 = 3:1 (bagi 6). 4:12 = 1:3 (bagi 4).',
  },
  {
    id: 22,
    type: 'menjodohkan',
    topic: 'Situasi Perbandingan ke Notasi Rasio',
    difficulty: 'Mudah',
    text: 'Pasangkan situasi perbandingan sehari-hari berikut dengan notasi matematika rasio yang tepat!',
    matchingPairs: [
      { id: 'm1', premise: 'Ada 4 bola basket untuk setiap 7 bola voli', match: '4 : 7' },
      { id: 'm2', premise: 'Terdapat 9 permen jeruk dan 5 permen stroberi', match: '9 : 5' },
      { id: 'm3', premise: 'Setiap 1 orang guru membimbing 8 orang siswa', match: '1 : 8' },
      { id: 'm4', premise: 'Ada 5 bendera merah putih untuk setiap 2 tiang di gerbang', match: '5 : 2' },
    ],
    explanation:
      'Urutan penulisan rasio mengikuti subjek yang disebutkan terlebih dahulu terhadap subjek berikutnya.',
  },
  {
    id: 23,
    type: 'menjodohkan',
    topic: 'Rasio Dasar dengan Rasio Senilai',
    difficulty: 'Sedang',
    text: 'Pasangkan rasio dasar berikut dengan rasio ekuivalen (senilai) yang tepat!',
    matchingPairs: [
      { id: 'm1', premise: 'Rasio dasar 1 : 3', match: '4 : 12' },
      { id: 'm2', premise: 'Rasio dasar 2 : 5', match: '6 : 15' },
      { id: 'm3', premise: 'Rasio dasar 3 : 7', match: '9 : 21' },
      { id: 'm4', premise: 'Rasio dasar 5 : 6', match: '20 : 24' },
    ],
    explanation:
      '1:3 senilai dengan 4:12 (×4). 2:5 senilai dengan 6:15 (×3). 3:7 senilai dengan 9:21 (×3). 5:6 senilai dengan 20:24 (×4).',
  },
  {
    id: 24,
    type: 'menjodohkan',
    topic: 'Rasio Bagian dan Keseluruhan pada Kelompok Belajar',
    difficulty: 'Sedang',
    text: 'Sebuah kelompok belajar terdiri dari 8 siswa laki-laki dan 12 siswa perempuan (Total = 20 siswa). Pasangkan perbandingan berikut ke bentuk sederhananya!',
    matchingPairs: [
      { id: 'm1', premise: 'Rasio siswa laki-laki terhadap siswa perempuan', match: '2 : 3' },
      { id: 'm2', premise: 'Rasio siswa perempuan terhadap siswa laki-laki', match: '3 : 2' },
      { id: 'm3', premise: 'Rasio siswa laki-laki terhadap seluruh siswa kelompok', match: '2 : 5' },
      { id: 'm4', premise: 'Rasio siswa perempuan terhadap seluruh siswa kelompok', match: '3 : 5' },
    ],
    explanation:
      '8:12 = 2:3. 12:8 = 3:2. 8:20 = 2:5. 12:20 = 3:5.',
  },
  {
    id: 25,
    type: 'menjodohkan',
    topic: 'Istilah dan Definisi Konsep Rasio',
    difficulty: 'Mudah',
    text: 'Pasangkan istilah konsep dalam materi rasio berikut dengan definisinya yang tepat!',
    matchingPairs: [
      { id: 'm1', premise: 'Rasio (Perbandingan)', match: 'Membandingkan dua besaran sejenis melalui pembagian' },
      { id: 'm2', premise: 'Rasio Ekuivalen', match: 'Dua rasio berbeda bilangan yang memiliki perbandingan sama' },
      { id: 'm3', premise: 'Bentuk Sederhana Rasio', match: 'Bentuk terkecil setelah kedua bilangan dibagi FPB' },
      { id: 'm4', premise: 'Satuan Sejenis', match: 'Besaran yang memiliki jenis dan dimensi ukuran yang setara' },
    ],
    explanation:
      'Definisi konsep rasio, ekuivalen, bentuk sederhana, dan syarat satuan sejenis.',
  },

  // =========================================================================
  // BAGIAN V: ISIAN SINGKAT (5 BUTIR SOAL: NO. 26 - 30)
  // Mengetikkan jawaban singkat tepat (Total skor = 5)
  // =========================================================================
  {
    id: 26,
    type: 'isian',
    topic: 'Menuliskan Bentuk Sederhana Rasio Bunga',
    difficulty: 'Mudah',
    text: 'Di dalam sebuah vas bunga di meja kelas terdapat 8 tangkai bunga mawar dan 12 tangkai bunga melati.\n\nBentuk paling sederhana dari rasio banyaknya bunga mawar terhadap bunga melati adalah ... (Tulis dalam format a : b)',
    acceptedAnswers: ['2 : 3', '2:3', '2 banding 3', '2/3'],
    correctAnswer: '2 : 3',
    explanation:
      'Rasio bunga mawar terhadap melati = 8 : 12. FPB dari 8 dan 12 adalah 4. Maka 8 ÷ 4 = 2 dan 12 ÷ 4 = 3. Bentuk paling sederhananya adalah 2 : 3.',
  },
  {
    id: 27,
    type: 'isian',
    topic: 'Menghitung Kuantitas Siswa Perempuan',
    difficulty: 'Sedang',
    text: 'Rasio banyaknya siswa laki-laki dan siswa perempuan di kelas VI adalah 3 : 4. Jika jumlah siswa laki-laki ada 12 orang, maka jumlah siswa perempuan di kelas tersebut adalah ... orang.',
    acceptedAnswers: ['16', '16 orang', 'enam belas'],
    correctAnswer: '16',
    explanation:
      'Nilai 1 bagian = 12 ÷ 3 = 4 siswa. Jumlah siswa perempuan mewakili 4 bagian, sehingga banyaknya siswa perempuan = 4 × 4 = 16 orang.',
  },
  {
    id: 28,
    type: 'isian',
    topic: 'Pengertian Istilah Rasio',
    difficulty: 'Mudah',
    text: 'Hubungan atau perbandingan ukuran dan banyaknya nilai dari dua besaran atau kuantitas sejenis yang dinyatakan dalam bentuk pembagian disebut ...',
    acceptedAnswers: ['rasio', 'perbandingan', 'proporsi'],
    correctAnswer: 'rasio',
    explanation:
      'Istilah matematika untuk perbandingan dua besaran atau kuantitas sejenis dengan cara pembagian adalah rasio (atau perbandingan).',
  },
  {
    id: 29,
    type: 'isian',
    topic: 'Rasio Bagian terhadap Seluruh Pulpen',
    difficulty: 'Sedang',
    text: 'Di atas meja guru terdapat 6 pulpen biru dan 18 pulpen hitam.\n\nBentuk paling sederhana dari rasio banyaknya pulpen biru terhadap TOTAL SELURUH pulpen di atas meja adalah ... (Tulis dalam format a : b)',
    acceptedAnswers: ['1 : 4', '1:4', '1 banding 4', '1/4'],
    correctAnswer: '1 : 4',
    explanation:
      'Total seluruh pulpen = 6 + 18 = 24 pulpen. Rasio pulpen biru terhadap seluruh pulpen = 6 : 24. Kedua bilangan dibagi 6 (FPB), menghasilkan 1 : 4.',
  },
  {
    id: 30,
    type: 'isian',
    topic: 'Menyederhanakan Rasio Panen Buah',
    difficulty: 'Sedang',
    text: 'Paman memanen 15 buah mangga dan 25 buah alpukat dari kebunnya.\n\nBentuk rasio paling sederhana antara banyaknya buah mangga terhadap buah alpukat adalah ... (Tulis dalam format a : b)',
    acceptedAnswers: ['3 : 5', '3:5', '3 banding 5', '3/5'],
    correctAnswer: '3 : 5',
    explanation:
      'Rasio mangga terhadap alpukat = 15 : 25. Keduanya dibagi 5 (FPB dari 15 dan 25), sehingga diperoleh bentuk paling sederhana 3 : 5.',
  },

  // =========================================================================
  // BAGIAN VI: URAIAN / ESAI (5 BUTIR SOAL: NO. 31 - 35)
  // Menuliskan uraian langkah dan pemahaman (Masing-masing bernilai skor 2, Total = 10)
  // =========================================================================
  {
    id: 31,
    type: 'uraian',
    topic: 'Definisi Rasio dan Contoh Konkret di Kelas',
    difficulty: 'Sedang',
    text: 'Jelaskan dengan bahasamu sendiri apa yang dimaksud dengan rasio dalam matematika! Berikan satu contoh konkret membandingkan dua jenis benda yang ada di dalam ruang kelasmu serta tuliskan notasi rasionya!',
    keyPoints: [
      'rasio adalah perbandingan',
      'dua besaran sejenis',
      'pembagian',
      'contoh benda di kelas',
      'notasi a:b',
    ],
    rubric:
      'Skor 2: Menjelaskan pengertian rasio dengan tepat (membandingkan dua besaran sejenis melalui pembagian) serta memberikan contoh konkret benda di kelas beserta notasi rasionya (misal: 10 meja dan 20 kursi rasionya 1 : 2). Skor 1: Hanya menjelaskan pengertian atau hanya memberikan contoh.',
    explanation:
      'Rasio adalah perbandingan ukuran atau banyaknya nilai dari dua besaran/kuantitas sejenis yang dinyatakan dengan pembagian. Contoh di kelas: Terdapat 10 meja dan 20 kursi, maka rasio meja terhadap kursi adalah 10 : 20 atau disederhanakan menjadi 1 : 2.',
  },
  {
    id: 32,
    type: 'uraian',
    topic: 'Penyederhanaan Rasio Pita Menggunakan FPB',
    difficulty: 'Sedang',
    text: 'Siti memiliki 12 lembar pita merah dan 18 lembar pita kuning.\na. Tuliskan rasio banyaknya pita merah terhadap pita kuning!\nb. Jelaskan langkah-langkahmu menyederhanakan rasio tersebut ke bentuk paling sederhana menggunakan FPB!',
    keyPoints: [
      '12 : 18',
      'fpb',
      'faktor persekutuan terbesar',
      'dibagi 6',
      '2 : 3',
    ],
    rubric:
      'Skor 2: Menuliskan notasi awal 12 : 18, menyebutkan FPB dari 12 dan 18 adalah 6, membagi kedua bilangan dengan 6, dan menyimpulkan bentuk sederhana adalah 2 : 3. Skor 1: Menyebutkan hasil 2 : 3 tanpa menjelaskan langkah FPB.',
    explanation:
      'a. Rasio pita merah terhadap pita kuning adalah 12 : 18.\nb. Langkah penyederhanaan: Cari FPB dari 12 dan 18. Faktor 12 = 1,2,3,4,6,12 dan faktor 18 = 1,2,3,6,9,18. FPB keduanya adalah 6. Bagi kedua angka dengan 6: 12 ÷ 6 = 2 dan 18 ÷ 6 = 3. Jadi bentuk paling sederhananya adalah 2 : 3.',
  },
  {
    id: 33,
    type: 'uraian',
    topic: 'Rasio Part-to-Part vs Part-to-Whole pada Alat Tulis',
    difficulty: 'Sukar',
    text: 'Di dalam kotak peralatan sekolah terdapat 8 pensil, 12 pulpen, dan 4 penghapus (Total ada 24 alat tulis).\na. Tentukan bentuk paling sederhana dari rasio pensil terhadap pulpen!\nb. Tentukan bentuk paling sederhana dari rasio pulpen terhadap TOTAL SELURUH alat tulis!\nc. Jelaskan perbedaan makna antara rasio bagian-ke-bagian (part-to-part) dan rasio bagian-ke-keseluruhan (part-to-whole) berdasarkan contoh soal ini!',
    keyPoints: [
      '2 : 3',
      '1 : 2',
      'part-to-part',
      'part-to-whole',
      'membandingkan antar kelompok',
      'membandingkan terhadap total',
    ],
    rubric:
      'Skor 2: Menjawab perhitungan a) 8:12 = 2:3 dan b) 12:24 = 1:2 secara tepat, serta menjelaskan perbedaan bahwa part-to-part membandingkan antarkelompok benda sedangkan part-to-whole membandingkan satu kelompok terhadap total populasi. Skor 1: Hanya menghitung tanpa memberikan penjelasan makna konsep.',
    explanation:
      'a. Rasio pensil : pulpen = 8 : 12 = 2 : 3 (dibagi 4).\nb. Rasio pulpen : total alat tulis = 12 : 24 = 1 : 2 (dibagi 12).\nc. Perbedaannya: Rasio bagian-ke-bagian (part-to-part) membandingkan satu kelompok benda dengan kelompok benda lainnya (pensil terhadap pulpen), sedangkan rasio bagian-ke-keseluruhan (part-to-whole) membandingkan salah satu kelompok benda terhadap jumlah total seluruh benda dalam wadah.',
  },
  {
    id: 34,
    type: 'uraian',
    topic: 'Membuktikan Keekuivalenan Dua Rasio',
    difficulty: 'Sukar',
    text: 'Budi menyatakan bahwa rasio 4 : 6 adalah senilai (ekuivalen) dengan rasio 10 : 15.\nApakah pernyataan Budi benar? Buktikan jawabanmu dengan cara menyederhanakan kedua rasio tersebut atau membuktikannya menggunakan pecahan senilai!',
    keyPoints: [
      'benar',
      'senilai',
      'ekuivalen',
      '4:6 disederhanakan 2:3',
      '10:15 disederhanakan 2:3',
    ],
    rubric:
      'Skor 2: Menyatakan bahwa pernyataan Budi BENAR, dan membuktikan dengan cara menyederhanakan 4 : 6 = 2 : 3 (bagi 2) dan 10 : 15 = 2 : 3 (bagi 5), sehingga kedua rasio bernilai sama (ekuivalen). Skor 1: Menyatakan benar namun pembuktian kurang lengkap.',
    explanation:
      'Pernyataan Budi BENAR. Pembuktian:\n1. Sederhanakan rasio pertama: 4 : 6 kedua angka dibagi 2 menghasilkan 2 : 3.\n2. Sederhanakan rasio kedua: 10 : 15 kedua angka dibagi 5 menghasilkan 2 : 3.\nKarena kedua rasio setelah disederhanakan sama-sama bernilai 2 : 3, maka terbukti bahwa 4 : 6 ekuivalen (senilai) dengan 10 : 15.',
  },
  {
    id: 35,
    type: 'uraian',
    topic: 'Penyelesaian Masalah Rasio Kontekstual (Resep Minuman)',
    difficulty: 'Sukar',
    text: 'Ibu ingin membuat minuman sirup manis untuk perayaan keluarga. Berdasarkan resep standar, setiap 2 gelas air membutuhkan 5 sendok makan sirup kental.\nJika Ibu menggunakan 8 gelas air:\na. Berapa sendok makan sirup kental yang dibutuhkan Ibu?\nb. Tuliskan langkah penyelesaianmu secara runtut menggunakan faktor pengali atau tabel rasio!',
    keyPoints: [
      '20 sendok',
      'faktor pengali 4',
      '8 bagi 2 sama dengan 4',
      '5 dikali 4 sama dengan 20',
      'tabel rasio',
    ],
    rubric:
      'Skor 2: Menghitung dengan tepat bahwa faktor pengali adalah 8 ÷ 2 = 4, mengalikan 5 × 4 = 20 sendok makan sirup kental, serta menuliskan langkah perhitungan secara sistematis. Skor 1: Hanya menyebutkan angka 20 tanpa runtutan langkah.',
    explanation:
      'a. Ibu membutuhkan 20 sendok makan sirup kental.\nb. Langkah penyelesaian:\n- Rasio awal air : sirup = 2 gelas : 5 sendok.\n- Tentukan faktor pengali: 8 gelas air ÷ 2 gelas air = 4 (air bertambah 4 kali lipat).\n- Kalikan sirup dengan faktor pengali yang sama: 5 sendok × 4 = 20 sendok makan sirup kental.',
  },
];
