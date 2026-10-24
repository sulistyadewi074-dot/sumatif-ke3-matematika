import { Question, LevelKognitif, Difficulty, QuestionType } from '../types';

export interface KisiKisiItem {
  id: number;
  elemen: string;
  cp: string;
  tp: string;
  indikator: string;
  levelKognitif: LevelKognitif;
  bobotSkor: number;
}

const ELEMEN_DEFAULT = 'Bilangan (Rasio dan Proporsi)';

const CP_DEFAULT =
  'Peserta didik dapat memahami konsep rasio untuk membandingkan dua besaran berupa kuantitas benda dan menentukan pengertian rasio, menyatakan rasio dalam berbagai bentuk notasi, menyederhanakan rasio, serta memecahkan masalah kontekstual yang berkaitan dengan rasio perbandingan benda dalam kehidupan sehari-hari.';

const TP_1 =
  'Memahami pengertian rasio sebagai perbandingan ukuran atau banyaknya dua besaran/kuantitas sejenis melalui pembagian.';
const TP_2 =
  'Menentukan dan menuliskan rasio perbandingan benda konkret ke dalam bentuk notasi a : b dan pecahan sederhana.';
const TP_3 =
  'Menyederhanakan rasio perbandingan benda ke bentuk rasio paling sederhana (ekuivalen/senilai) menggunakan FPB.';
const TP_4 =
  'Menyelesaikan masalah kontekstual perbandingan benda yang berkaitan dengan rasio bagian terhadap bagian dan rasio bagian terhadap keseluruhan.';

export const KISI_KISI_MAP: Record<number, KisiKisiItem> = {
  // --- BAGIAN I: PILIHAN GANDA (10 BUTIR: NO. 1 - 10) ---
  1: {
    id: 1,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan stimulus visual dua jenis buah dalam satu wadah, peserta didik dapat mengidentifikasi pengertian rasio sebagai perbandingan dua besaran atau kuantitas sejenis dengan tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    id: 2,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan ilustrasi dua jenis alat tulis (pensil dan spidol), peserta didik dapat menentukan rasio perbandingan jumlah kedua benda tersebut dalam bentuk notasi perbandingan sederhana.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    id: 3,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan perbandingan dua warna kelereng dalam toples, peserta didik dapat menelaah pentingnya urutan suku dalam menyatakan rasio perbandingan benda.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    id: 4,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan data jumlah dua jenis buku di perpustakaan sekolah, peserta didik dapat menyederhanakan rasio perbandingan benda ke bentuk paling sederhana menggunakan FPB.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  5: {
    id: 5,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan data jumlah siswa laki-laki dan perempuan di kelas, peserta didik dapat menentukan rasio bagian terhadap keseluruhan (part-to-whole) dalam bentuk paling sederhana.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    id: 6,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan rasio perbandingan dua jenis buah dan banyaknya salah satu buah, peserta didik dapat menghitung kuantitas buah lainnya menggunakan konsep faktor pengali rasio.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    id: 7,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan takaran resep sirup manis, peserta didik dapat mengidentifikasi pasangan rasio yang ekuivalen (senilai) dengan rasio dasar yang diberikan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  8: {
    id: 8,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan dua pita dengan satuan panjang berbeda (meter dan sentimeter), peserta didik dapat menganalisis syarat kesamaan satuan sejenis sebelum membandingkan besaran.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  9: {
    id: 9,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan stimulus diagram blok / pita (tape diagram) perbandingan hewan ternak, peserta didik dapat memecahkan masalah kuantitas salah satu hewan berdasarkan total populasi.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  10: {
    id: 10,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan perbandingan harga paket alat tulis pada dua toko berbeda, peserta didik dapat mengevaluasi nilai satuan harga per benda untuk menentukan pilihan paket paling hemat.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN II: PILIHAN GANDA KOMPLEKS (5 BUTIR: NO. 11 - 15) ---
  11: {
    id: 11,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan beberapa pernyataan terkait hakikat dan konsep rasio, peserta didik dapat memilih semua pernyataan yang benar mengenai definisi dan sifat perbandingan rasio.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  12: {
    id: 12,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan stimulus gambar keranjang berisi tiga jenis buah, peserta didik dapat memilih beberapa pernyataan rasio perbandingan buah yang bernilai benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  13: {
    id: 13,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan suatu rasio dasar pecahan/perbandingan, peserta didik dapat memilih rasio-rasio yang bernilai ekuivalen (senilai) dari pilihan yang tersedia.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    id: 14,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan data kelereng dua warna, peserta didik dapat memilih pernyataan perbandingan antarkelompok (part-to-part) dan perbandingan terhadap total (part-to-whole) yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    id: 15,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan berbagai peristiwa kontekstual dalam kehidupan sehari-hari, peserta didik dapat memilih peristiwa yang merepresentasikan hubungan perbandingan rasio tetap/konstan.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN III: PGK KATEGORI BENAR/SALAH (5 BUTIR: NO. 16 - 20) ---
  16: {
    id: 16,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan tabel pernyataan konseptual tentang notasi, penyederhanaan, dan satuan pada rasio, peserta didik dapat menilai kebenaran tiap pernyataan (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  17: {
    id: 17,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan tabel pernyataan perbandingan alat tulis tiga warna di meja guru, peserta didik dapat memvalidasi kebenaran rasio tiap warna spidol (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  18: {
    id: 18,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan tabel hasil penyederhanaan perbandingan kuantitas benda sekolah, peserta didik dapat menentukan kesesuaian bentuk sederhana rasio (Sesuai/Tidak Sesuai).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    id: 19,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan tabel perbandingan anggota dua ekstrakurikuler olahraga putra dan putri, peserta didik dapat menilai kebenaran rasio dan ekuivalensinya (Benar/Salah).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    id: 20,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan tabel pernyataan kontekstual takaran resep minuman tradisional Es Daluman, peserta didik dapat memvalidasi proporsi takaran bahan (Sesuai/Tidak Sesuai).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },

  // --- BAGIAN IV: MENJODOHKAN (5 BUTIR: NO. 21 - 25) ---
  21: {
    id: 21,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan premis perbandingan kuantitas alat seni rupa, peserta didik dapat menjodohkan ke bentuk perbandingan rasio paling sederhananya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  22: {
    id: 22,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_2,
    indikator:
      'Disajikan premis kalimat perbandingan benda kontekstual, peserta didik dapat menjodohkannya dengan notasi matematika rasio (a : b) yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    id: 23,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan premis rasio dasar, peserta didik dapat menjodohkannya dengan pasangan rasio ekuivalen (senilai) yang tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    id: 24,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan data anggota kelompok belajar siswa laki-laki dan perempuan, peserta didik dapat menjodohkan perbandingan bagian dan perbandingan keseluruhan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    id: 25,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Disajikan istilah-istilah pokok dalam konsep rasio dan perbandingan, peserta didik dapat menjodohkan tiap istilah dengan definisinya yang tepat.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },

  // --- BAGIAN V: ISIAN SINGKAT (5 BUTIR: NO. 26 - 30) ---
  26: {
    id: 26,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan banyaknya bunga mawar dan melati di vas bunga, peserta didik dapat menuliskan bentuk rasio paling sederhana dari kedua bunga tersebut.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    id: 27,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan rasio siswa laki-laki terhadap perempuan dan kuantitas siswa laki-laki, peserta didik dapat menghitung dan menuliskan kuantitas siswa perempuan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    id: 28,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat melengkapi kalimat definisi istilah perbandingan ukuran/nilai dari dua besaran sejenis melalui pembagian.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  29: {
    id: 29,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan jumlah pulpen biru dan pulpen hitam, peserta didik dapat menuliskan bentuk paling sederhana rasio pulpen biru terhadap TOTAL SELURUH pulpen.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  30: {
    id: 30,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan data hasil panen buah mangga dan alpukat Paman, peserta didik dapat menuliskan bentuk rasio perbandingan paling sederhana.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },

  // --- BAGIAN VI: URAIAN / ESAI (5 BUTIR: NO. 31 - 35) ---
  31: {
    id: 31,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_1,
    indikator:
      'Peserta didik dapat menguraikan pengertian rasio dalam matematika menggunakan bahasa sendiri serta menyajikan satu contoh konkret perbandingan benda di kelas dan notasinya.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  32: {
    id: 32,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan data panjang/jumlah pita dua warna, peserta didik dapat menuliskan notasi rasionya dan memaparkan langkah-langkah penyederhanaannya menggunakan FPB secara runtut.',
    levelKognitif: 'L2',
    bobotSkor: 2,
  },
  33: {
    id: 33,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan data tiga jenis alat tulis dalam kotak, peserta didik dapat menghitung rasio part-to-part, rasio part-to-whole, serta menjelaskan perbedaan konsep kedua perbandingan tersebut.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  34: {
    id: 34,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_3,
    indikator:
      'Disajikan klaim kesetaraan dua rasio berbeda angka, peserta didik dapat menguji kebenaran klaim tersebut dan membuktikan keekuivalenannya secara sistematis.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
  35: {
    id: 35,
    elemen: ELEMEN_DEFAULT,
    cp: CP_DEFAULT,
    tp: TP_4,
    indikator:
      'Disajikan masalah kontekstual resep sirup manis, peserta didik dapat memecahkan kuantitas bahan yang diperlukan untuk takaran tertentu menggunakan konsep perbandingan senilai/tabel rasio.',
    levelKognitif: 'L3',
    bobotSkor: 2,
  },
};

/**
 * Memperkaya objek soal dengan metadata kisi-kisi Kurikulum Merdeka
 */
export function enrichQuestion(question: Question): Question {
  const item = KISI_KISI_MAP[question.id];
  if (!item) {
    return {
      ...question,
      elemen: question.elemen || ELEMEN_DEFAULT,
      cp: question.cp || CP_DEFAULT,
      tp: question.tp || TP_1,
      indikator: question.indikator || `Indikator soal nomor ${question.id}`,
      levelKognitif: question.levelKognitif || 'L2',
      bobotSkor: question.bobotSkor || (question.type === 'uraian' ? 2 : 1),
    };
  }

  return {
    ...question,
    elemen: question.elemen || item.elemen,
    cp: question.cp || item.cp,
    tp: question.tp || item.tp,
    indikator: question.indikator || item.indikator,
    levelKognitif: question.levelKognitif || item.levelKognitif,
    bobotSkor: question.bobotSkor || item.bobotSkor,
  };
}

export interface KisiKisiSummaryStats {
  totalSoal: number;
  totalSkor: number;
  elemenCounts: Record<string, number>;
  levelCounts: {
    L1: { count: number; percent: number; label: string };
    L2: { count: number; percent: number; label: string };
    L3: { count: number; percent: number; label: string };
  };
  difficultyCounts: {
    Mudah: { count: number; percent: number };
    Sedang: { count: number; percent: number };
    Sukar: { count: number; percent: number };
  };
  typeCounts: Record<QuestionType, number>;
}

/**
 * Menghitung rekapitulasi statistik kisi-kisi secara otomatis
 */
export function calculateKisiKisiStats(questions: Question[]): KisiKisiSummaryStats {
  const total = questions.length || 1;
  let totalScore = 0;

  const elemenCounts: Record<string, number> = {};
  const levelRaw = { L1: 0, L2: 0, L3: 0 };
  const diffRaw = { Mudah: 0, Sedang: 0, Sukar: 0 };
  const typeCounts: Record<QuestionType, number> = {
    pg: 0,
    pgk: 0,
    pgk_kategori: 0,
    menjodohkan: 0,
    isian: 0,
    uraian: 0,
  };

  questions.forEach((q) => {
    const enriched = enrichQuestion(q);
    const score = enriched.bobotSkor || (q.type === 'uraian' ? 2 : 1);
    totalScore += score;

    const el = enriched.elemen || ELEMEN_DEFAULT;
    elemenCounts[el] = (elemenCounts[el] || 0) + 1;

    const lvl =
      enriched.levelKognitif ||
      (enriched.difficulty === 'Mudah' ? 'L1' : enriched.difficulty === 'Sedang' ? 'L2' : 'L3');
    if (lvl in levelRaw) {
      levelRaw[lvl as keyof typeof levelRaw] += 1;
    }

    const diff = enriched.difficulty || 'Sedang';
    if (diff in diffRaw) {
      diffRaw[diff as keyof typeof diffRaw] += 1;
    }

    if (q.type in typeCounts) {
      typeCounts[q.type as keyof typeof typeCounts] += 1;
    }
  });

  return {
    totalSoal: questions.length,
    totalSkor: totalScore,
    elemenCounts,
    levelCounts: {
      L1: {
        count: levelRaw.L1,
        percent: Math.round((levelRaw.L1 / total) * 100),
        label: 'L1 - Pemahaman & Pengetahuan',
      },
      L2: {
        count: levelRaw.L2,
        percent: Math.round((levelRaw.L2 / total) * 100),
        label: 'L2 - Aplikasi & Penerapan',
      },
      L3: {
        count: levelRaw.L3,
        percent: Math.round((levelRaw.L3 / total) * 100),
        label: 'L3 - Penalaran & Analisis HOTS',
      },
    },
    difficultyCounts: {
      Mudah: { count: diffRaw.Mudah, percent: Math.round((diffRaw.Mudah / total) * 100) },
      Sedang: { count: diffRaw.Sedang, percent: Math.round((diffRaw.Sedang / total) * 100) },
      Sukar: { count: diffRaw.Sukar, percent: Math.round((diffRaw.Sukar / total) * 100) },
    },
    typeCounts,
  };
}
