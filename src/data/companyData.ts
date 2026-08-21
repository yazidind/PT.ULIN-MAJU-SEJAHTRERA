export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  description: string;
  subtext: string;
  features: string[];
}

export interface ValueItem {
  letter: string;
  title: string;
  description: string;
}

export interface AdvantageItem {
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  position: string;
  role: string;
  level: number;
  image?: string;
}

export interface LegalityDoc {
  title: string;
  number: string;
  issuer: string;
  image?: string; // Path gambar/scan perizinan di folder public/images/legality/
}

export interface GalleryItem {
  title: string;
  category: string;
  desc: string;
  image?: string; // Path foto di folder public/images/gallery/
}

export const companyData = {
  name: "PT. ULIN MAJU SEJAHTERA",
  shortName: "Ulin Maju Sejahtera",
  tagline: "Perusahaan Penyedia Jasa Tenaga Kerja",
  subTagline: "Mitra Terpercaya Penyedia & Pengelola Tenaga Kerja Profesional di Indonesia",
  logoUrl: "/images/logo.png", // Letakkan logo di public/images/logo.png (Opsional, jika kosong akan pakai ikon default)
  yearEstablished: "2021",
  experienceYears: "10+",
  trainedWorkersCount: "1.000+",
  supportHours: "24/7",

  // Detail Legalitas & Kontak
  npwp: "85.280.707.2-721.000",
  nib: "9120011091269",
  email: "nsamidj@yahoo.co.id",
  website: "www.ptulinmajusejahtera.com",
  whatsappNumbers: [
    { display: "0812-5154-2229", raw: "6281251542229" },
    { display: "0813-5135-3535", raw: "6281351353535" }
  ],
  phoneNumbers: ["08-1782-0007", "0813-5135-3535"],
  addressMain: "Jl. Jend Sudirman Komp. Ruko Balikpapan Permai RT 16 No. 6C Balikpapan",
  addressOffice: "Jl. Pupuk Raya RT 14 No. 6C Kel. Damai Kota Balikpapan Kalimantan Timur",

  // Navigation Links
  navLinks: [
    { name: "Beranda", href: "#hero" },
    { name: "Pendahuluan", href: "#pendahuluan" },
    { name: "Profil", href: "#profil" },
    { name: "Visi & Misi", href: "#visimisi" },
    { name: "Nilai Perusahaan", href: "#nilai" },
    { name: "Layanan Jasa", href: "#layanan" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Organisasi", href: "#organisasi" },
    { name: "Legalitas", href: "#legalitas" },
    { name: "Galeri", href: "#galeri" },
    { name: "Kontak", href: "#kontak" },
  ],

  // Pendahuluan Section
  pendahuluan: {
    heading: "Pendahuluan",
    title: "Menjawab Kebutuhan Sumber Daya Manusia Berkualitas",
    text1: "Memperhatikan tingkat kebutuhan perusahaan akan sumber daya manusia, yang merupakan suatu kebutuhan yang sangat mutlak. Untuk menjawab tantangan tersebut PT. ULIN MAJU SEJAHTERA berupaya untuk mengedepankan pelayanan yang terbaik agar para pengguna jasa dapat merasakan manfaat dan keuntungan yang maksimal.",
    text2: "Dengan dukungan tenaga kerja yang terlatih, berdedikasi, penuh tanggung jawab dan profesional, ditambah dengan sistem kerja yang telah disusun berdasarkan kondisi yang ada di lingkungan kerja pengguna jasa. Kami sangat memahami dan siap memenuhi kebutuhan akan pelayanan kepada siapapun, baik untuk kebutuhan pribadi, badan usaha negeri dan swasta dan perusahaan di manapun sesuai kebutuhan dan batas kemampuan kami.",
    pillarsIntro: "Para Profesional yang tergabung dalam PT. ULIN MAJU SEJAHTERA dibangun dan dibesarkan dari pengalaman untuk membuat lebih baik pengelolaan Jasa Outsourcing dengan:",
    pillars: [
      {
        title: "Pengelolaan Yang Profesional dan Berkualitas",
        desc: "Sistem manajemen SDM modern yang menjamin kualitas kerja dan integritas tenaga kerja."
      },
      {
        title: "Perencanaan dan Pengembangan yang Lebih Baik dan Efisien",
        desc: "Strategi penempatan kerja yang terstruktur untuk mengoptimalkan efisiensi operasional Klien."
      },
      {
        title: "Struktur Biaya Operasional yang Kompetitif",
        desc: "Solusi outsourcing hemat biaya tanpa mengorbankan kualitas dan kesejahteraan tenaga kerja."
      }
    ]
  },

  // Profil Perusahaan Section
  profil: {
    heading: "Profil Perusahaan",
    title: "Tentang PT. Ulin Maju Sejahtera",
    aboutUsText: "PT. Ulin Maju Sejahtera merupakan perusahaan penyedia tenaga kerja di Indonesia. Kami menghadirkan para Sumber Daya Manusia (SDM) terlatih yang siap ditempatkan dalam segala bidang usaha. Meliputi tenaga kerja driver, jasa keamanan, jasa kebersihan, operator/customer service, dll.",
    managementText: "Kami memahami bahwa proses manajemen SDM seringkali memakan waktu dan perhatian yang cukup tinggi. Melalui para tenaga kerja terampil, tanggap, dan berkualitas, kami berkomitmen dalam memberikan efisiensi serta produktivitas pada perusahaan Anda agar lebih fokus dalam proses pelayanan dan pengembangan usaha. Sedangkan untuk manajemen SDM, kami akan membantu Anda dalam pengadaan tenaga kerja yang berkualitas dan berintegritas.",
    commitmentTitle: "Komitmen Kami",
    commitmentText: "Sampai saat ini kami telah bekerjasama dengan berbagai perusahaan ternama di Indonesia. Menandakan bahwa kami selalu memberikan pelayanan terbaik dan memuaskan. Jadilah satu dari sekian banyak perusahaan mitra kami. Konsultasikan segala kebutuhan tenaga kerja Anda bersama kami. Hubungi kontak kami yang tertera untuk informasi lebih lanjut."
  },

  // Visi, Misi, Fokus, Integritas
  visionMission: {
    visi: {
      title: "VISI",
      description: "Menjadi Perusahaan penyedia dan pengelola Sumber Daya Manusia yang profesional, terpercaya, terpilih, dan terpandang."
    },
    misi: {
      title: "MISI",
      description: "Memberikan nilai tambah lebih bagi pemegang saham, pengguna jasa, karyawan dan masyarakat serta mendukung terbukanya lapangan pekerjaan baru. Melalui sumber daya manusia yang profesional, kami senantiasa membangun kemitraan terbaik untuk kita semua."
    },
    fokus: {
      title: "FOKUS",
      description: "Menggunakan seluruh kompetensi perusahaan secara optimal, untuk meningkatkan nilai tambah perusahaan."
    },
    integritas: {
      title: "INTEGRITAS",
      description: "Mampu mewujudkan seluruh komitmen ke dalam tindakan nyata."
    }
  },

  // Nilai-Nilai Perusahaan (RESPECT)
  companyValues: {
    title: "Nilai - Nilai Perusahaan",
    slogan: "RESPECT - We Make People Our Priority",
    governanceText: "Good Governance of Conduct",
    items: [
      {
        letter: "R",
        title: "Responsible",
        description: "Senantiasa memberikan pelayanan secara berkesinambungan dan bertanggung jawab terhadap karyawan yang kami pekerjakan kepada Klien baik material maupun Moril untuk memberikan kepuasan terhadap klien melalui pola kemitraan."
      },
      {
        letter: "E",
        title: "Enthusiasm",
        description: "Memberikan pelayanan dan bekerja dengan penuh antusias tanpa membedakan golongan, suku bangsa dan agama."
      },
      {
        letter: "S",
        title: "Share",
        description: "Selalu memberikan informasi yang terkini sehingga \"Commitment to Excellent\" (Pelayanan Prima) akan selalu tercapai."
      },
      {
        letter: "P",
        title: "Principle",
        description: "Menjunjung tinggi nilai kejujuran, disiplin dan tanggung jawab pada setiap pekerjaan yang dipercayakan."
      },
      {
        letter: "E",
        title: "Excellent",
        description: "Melakukan yang terbaik di segala bidang pelayanan jasa. Melaksanakan pelayanan dengan sikap profesional."
      },
      {
        letter: "C",
        title: "Commitment",
        description: "Pekerjaan akan selalu dilaksanakan dengan penuh komitmen yang berprinsip kepada pelayanan prima."
      },
      {
        letter: "T",
        title: "Trust",
        description: "Menjunjung nilai kepercayaan yang telah diberikan oleh mitra kerja. Menerapkan prinsip transparansi dan loyalitas."
      }
    ]
  },

  // Jasa & Layanan Perusahaan
  services: {
    heading: "Jasa & Layanan Perusahaan",
    introText: "Kami menghadirkan para Sumber Daya Manusia (SDM) berkualitas yang siap ditempatkan untuk berbagai jenis usaha. Seluruh SDM kami telah menjalankan serangkaian pelatihan yang sesuai dengan bidang keahlian dan SOP yang berlaku. Para tenaga kerja telah terlatih baik secara skill, fisik, maupun mental. Memiliki tanggung jawab dan integritas yang tinggi, siap bekerja secara tim maupun individu, serta sangat tanggap dan inovatif.",
    trustText: "Kami percaya bahwa tenaga kerja yang profesional adalah kunci keberhasilan suatu perusahaan. Oleh karena itu, kami selalu memperhatikan setiap tenaga kerja kami agar mampu beradaptasi dengan berbagai lingkungan pekerjaan secara profesional.",
    items: [
      {
        id: "driver",
        title: "01. Jasa Driver",
        category: "Transportasi",
        iconName: "Car",
        description: "Driver profesional yang telah terlatih, berpengalaman dalam mengendarai mobil di berbagai medan perjalanan. Driver telah memiliki SIM (Surat Izin Mengemudi) sesuai dengan jenis kendaraan yang Anda kehendaki.",
        subtext: "Driver kami siap menjadi teman perjalanan Anda dan memastikan setiap perjalanan yang aman dan nyaman setiap saat.",
        features: [
          "Memiliki SIM A / B / B1 / B2 Resmi",
          "Terlatih mengemudi defensive driving",
          "Paham rute & kondisi medan jalan",
          "Sopan, tepat waktu, & profesional"
        ]
      },
      {
        id: "security",
        title: "02. Tenaga Keamanan",
        category: "Pengamanan",
        iconName: "ShieldCheck",
        description: "Tenaga keamanan profesional yang mampu menangani kondisi yang aman dalam berbagai bidang baik perkantoran, perindustrian, pergudangan, perhotelan, sekolah, perumahan, dll. Mampu memberikan keamanan untuk orang dan aset.",
        subtext: "Telah terlatih dan lolos seleksi, wawancara, serta telah mengikuti beragam training dan workshop yang dibutuhkan. Sopan dalam sikap dan tegas dalam tindakan.",
        features: [
          "Sertifikasi Gada Pratama & Gada Utama POLRI",
          "Lolos seleksi fisik, mental, & administrasi",
          "Pengamanan fisik & pemantauan aset",
          "Tanggap darurat & penanganan konflik"
        ]
      },
      {
        id: "cleaning",
        title: "03. Jasa Cleaning",
        category: "Kebersihan",
        iconName: "Sparkles",
        description: "Kami menyediakan jasa kebersihan untuk berbagai kebutuhan, dari tenaga cleaning service, general cleaning, hingga spesialis cleaning seperti poles lantai, cuci karpet, cuci toilet, cuci sofa, dsb.",
        subtext: "Jasa cleaning kami mencakup berbagai lokasi dari perumahan, perkantoran, perhotelan, rumah sakit, dll. Tim terlatih dalam membersihkan ruangan (indoor dan outdoor) dari berbagai sampah, bakteri, dan hal lain yang mengganggu.",
        features: [
          "General Cleaning & Daily Maintenance",
          "Poles lantai, cuci karpet, & sofa",
          "Pembersihan area indoor & outdoor",
          "Penggunaan bahan & standar sanitasi aman"
        ]
      },
      {
        id: "operator",
        title: "04. Jasa Operator",
        category: "Operasional & Industri",
        iconName: "Headphones",
        description: "Jasa operator untuk berbagai kebutuhan dari customer service, operator produksi, hingga operator alat berat.",
        subtext: "Tenaga operator telah terlatih sesuai dengan bidangnya, memiliki tanggung jawab yang tinggi, selalu mengutamakan keamanan dan kenyamanan, serta siap bekerja di bawah tekanan.",
        features: [
          "Operator Customer Service & Call Center",
          "Operator Produksi Pabrik / Industri",
          "Operator Alat Berat & Kendaraan Khusus",
          "Kedisiplinan & standar keselamatan (K3)"
        ]
      },
      {
        id: "helper",
        title: "05. Jasa Helper",
        category: "Support & Usaha",
        iconName: "UserCheck",
        description: "Kami juga menyediakan kebutuhan Anda akan jasa helper baik dalam lingkup rumah tangga, perkantoran, industri, dan bidang lain yang membutuhkan.",
        subtext: "Jasa helper kami mampu menunjang kinerja dan aktivitas Anda, sehingga lebih produktif, efisien, dan maksimal.",
        features: [
          "Helper Perkantoran & Logistik",
          "Helper Industri & Pergudangan",
          "Helper Rumah Tangga & Asisten Usaha",
          "Kerja cepat, sigap, & jujur"
        ]
      }
    ]
  },

  // Keunggulan Kami
  advantages: [
    {
      title: "LEGAL & BERSERTIFIKAT",
      description: "Perusahaan kami telah memiliki izin resmi, legal di mata hukum dan negara dengan dokumen perizinan Kemenkumham, SIUP, NIB, & Izin POLRI lengkap.",
      iconName: "Award"
    },
    {
      title: "BERPENGALAMAN",
      description: "Berpengalaman lebih dari 10 tahun sebagai penyedia tenaga kerja terpercaya yang melayani berbagai perusahaan besar di Indonesia.",
      iconName: "Clock"
    },
    {
      title: "TENAGA KERJA TERLATIH",
      description: "Lebih dari 1.000 tenaga kerja terlatih, sigap, fisik dan mental prima yang siap ditempatkan di perusahaan Anda.",
      iconName: "Users"
    },
    {
      title: "PELAYANAN PRIMA",
      description: "Siap memberikan pelayanan terbaik dan support system 24 Jam demi kelancaran operasional usaha Anda.",
      iconName: "Headset"
    }
  ],

  // Struktur Organisasi
  organization: {
    heading: "Struktur Organisasi",
    subtitle: "PT. Ulin Maju Sejahtera dipimpin oleh jajaran manajemen profesional dan berpengalaman.",
    members: [
      {
        name: "NURSAM",
        position: "Direktur Utama",
        role: "Chief Executive Officer",
        level: 1
      },
      {
        name: "HENDRA WAHYUDI",
        position: "Direktur",
        role: "Director",
        level: 2
      },
      {
        name: "DARSIN",
        position: "Direktur",
        role: "Director",
        level: 2
      },
      {
        name: "ROMI RAWARDY",
        position: "Komisaris",
        role: "Commissioner",
        level: 3
      }
    ]
  },

  // Legalitas Perusahaan (Tambahkan opsi field 'image' untuk file scan perizinan di folder public/images/legality/)
  legality: {
    heading: "Lampiran Legalitas & Perizinan",
    subtitle: "PT. Ulin Maju Sejahtera telah mengantongi izin resmi dan legalitas hukum lengkap dari instansi pemerintah dan Kepolisian Republik Indonesia.",
    docs: [
      {
        title: "Akta Notaris Pendirian PT",
        number: "No. 02, Tanggal 05 Juni 2018",
        issuer: "Notaris Andreas Gunawan, S.H., M.Kn",
        image: "/images/legality/akta.jpg"
      },
      {
        title: "Pengesahan Kemenkumham RI",
        number: "AHU-0029320.AH.01.01.Tahun 2018",
        issuer: "Menteri Hukum dan HAM Republik Indonesia",
        image: "/images/legality/kemenkumham.jpg"
      },
      {
        title: "Surat Izin Usaha Perdagangan (SIUP)",
        number: "0375/17-05/DPMPT/SIUP/PM/2018",
        issuer: "Dinas Penanaman Modal & Perizinan Terpadu Balikpapan",
        image: "/images/legality/siup.jpg"
      },
      {
        title: "Nomor Induk Berusaha (NIB)",
        number: "NIB: 9120011091269",
        issuer: "Pemerintah Republik Indonesia (OSS RBA)",
        image: "/images/legality/nib.jpg"
      },
      {
        title: "Nomor Pokok Wajib Pajak (NPWP)",
        number: "85.280.707.2-721.000",
        issuer: "KPP Pratama Balikpapan",
        image: "/images/legality/npwp.jpg"
      },
      {
        title: "Sertifikat BPJS Ketenagakerjaan",
        number: "No. 18000000492802",
        issuer: "BPJS Ketenagakerjaan Republik Indonesia",
        image: "/images/legality/bpjs.jpg"
      },
      {
        title: "Sertifikat Anggota ABUJAPI",
        number: "No. 02688/29-08-2019",
        issuer: "Asosiasi Badan Usaha Jasa Pengamanan Indonesia",
        image: "/images/legality/abujapi.jpg"
      }
    ]
  },

  // Galeri Dokumentasi (Tambahkan opsi field 'image' untuk file foto kegiatan di folder public/images/gallery/)
  gallery: {
    heading: "Galeri & Dokumentasi",
    subtitle: "Dokumentasi kegiatan pelatihan, upacara pembukaan Gada Utama, dan penempatan kerja PT. Ulin Maju Sejahtera.",
    items: [
      {
        title: "Pelatihan & Upacara Pembukaan Gada Utama",
        category: "Pelatihan",
        desc: "Academy of Security Excellence - Graha Anabatic Tangerang",
        image: "/images/gallery/pelatihan-1.jpg"
      },
      {
        title: "Apel Siaga & Penyiapan Satuan Keamanan",
        category: "Kegiatan",
        desc: "Briefing dan pengecekan kedisiplinan rutin anggota security",
        image: "/images/gallery/pelatihan-2.jpg"
      },
      {
        title: "Sertifikasi Gada Utama Korbinmas POLRI",
        category: "Sertifikasi",
        desc: "Penyerahan ijazah & kualifikasi pengamanan tingkat utama",
        image: "/images/gallery/sertifikasi.jpg"
      },
      {
        title: "Penempatan Tim Security & Cleaning di Lapangan",
        category: "Penempatan",
        desc: "Kunjungan & pengawasan kinerja di area kerja Klien",
        image: "/images/gallery/penempatan.jpg"
      },
      {
        title: "Konferensi Industri Jasa Pengamanan (KIPNAS)",
        category: "Acara Resmi",
        desc: "Keikutsertaan pimpinan dalam konferensi nasional pengamanan",
        image: "/images/gallery/kipnas.jpg"
      },
      {
        title: "Koordinasi Manajemen & Silaturahmi Mitra",
        category: "Manajemen",
        desc: "Pertemuan rutin bersama instansi pemerintah & jajaran Polda Kaltim",
        image: "/images/gallery/koordinasi.jpg"
      }
    ]
  },

  // Penutup
  penutup: {
    heading: "Penutup",
    text1: "Dengan menjalin kerja sama, kami menjamin kepada para pengguna jasa akan terhindar dari masalah ketenagakerjaan yang kerap kali terjadi dan juga selanjutnya didapatkan yaitu hasil guna dan daya guna baik dilihat dari segi ekonomi maupun bisnis yang saling menguntungkan dan dari segi sosial dapat memberikan peluang bagi para pencari kerja dalam mendapatkan nilai tambah bagi diri sendiri dan keluarga.",
    text2: "Sekilas profil perusahaan kami yang mungkin dapat memberikan solusi bagi calon rekan/pengguna jasa kami didalam mengatasi berbagai hal yang sering kali menjadi permasalahan ketenagakerjaan diperusahaan maupun mengenai permasalahan yang berkaitan dengan tenaga outsourcing.",
    closingMessage: "Demikian sekilas tentang kami dan atas kepercayaannya, perhatian serta kerjasama yang akan dilaksanakan bersama PT. ULIN MAJU SEJAHTERA kami ucapkan terima kasih."
  }
};
