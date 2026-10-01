// client/src/data/fallbackData.ts
import type { Profile } from '../schemas/portfolio';

export const fallbackData: Profile = {
  name: "Geren Haekal Hafizh",
  headline: "Informatics Graduate &  Full Stack Software Engineer",
  summary: "Lulusan Teknik Informatika Universitas Gunadarma dengan minat mendalam pada Full Stack Engineering dan arsitektur AI bertenaga RAG. Berpengalaman membangun aplikasi end-to-end (React, Node.js, PHP/WordPress), aplikasi mobile Android (Kotlin), hingga model Machine Learning (YOLOv8), didukung fondasi jaringan komputer yang kuat.",
  availabilityStatus: "Open for Opportunities",
  location: "Depok, Jawa Barat, Indonesia",
  phone: "+62 812-9120-1974",
  avatarUrl: "https://github.com/voiddoiv.png",
  resumeUrl: "#contact",
  contact: {
    email: "gerenhaekalh@gmail.com",
    github: "https://github.com/voiddoiv",
    linkedin: "https://id.linkedin.com/in/geren-haekal-hafizh",
  },
  skills: [
    { name: "TypeScript", category: "Frontend", level: "Advanced" },
    { name: "React", category: "Frontend", level: "Advanced" },
    { name: "TanStack Router/Query", category: "Frontend", level: "Intermediate" },
    { name: "Node.js", category: "Backend", level: "Intermediate" },
    { name: "Express.js", category: "Backend", level: "Intermediate" },
    { name: "PostgreSQL", category: "Backend", level: "Intermediate" },
    { name: "MySQL", category: "Backend", level: "Intermediate" },
    { name: "PHP & WordPress", category: "Backend", level: "Intermediate" },
    { name: "Python & YOLOv8", category: "AI / Data", level: "Intermediate" },
    { name: "n8n & RAG Pipeline", category: "AI / Data", level: "Intermediate" },
    { name: "Docling & BGE-M3", category: "AI / Data", level: "Intermediate" },
    { name: "Cisco & Mikrotik", category: "Tools & DevOps", level: "Advanced" },
    { name: "Docker", category: "Tools & DevOps", level: "Beginner" },
    { name: "Git", category: "Tools & DevOps", level: "Advanced" },
    { name: "Figma (UI/UX)", category: "Other", level: "Intermediate" }
  ],
  educations: [
    {
      institution: "Universitas Gunadarma",
      degree: "Sarjana Teknik Informatika (S.Kom)",
      period: "Sep 2021 - Sep 2025",
      location: "Depok, Indonesia",
      gpa: "3.84 / 4.00",
      accentColor: "#a855f7",
      logoText: "UG",
      certifications: [
        "Sertifikasi BNSP: Junior Computer Network Technician (2025)",
        "Lembaga Sertifikasi Profesi (LSP): Network Design & Configuration Using Switch Device (2024)",
        "LSP Gunadarma: Local Area Network Design and Configuration (2025)",
        "LePkom: Cisco for Beginner & Intermediate, SQL Server, dan Fundamental DBMS",
        "Pengembangan Aplikasi Rental Mobil Berbasis Android (Android Studio)"
      ]
    },
    {
      institution: "SMK Taruna Terpadu 1",
      degree: "Teknik Komputer dan Jaringan (TKJ)",
      period: "Jul 2018 - Mar 2021",
      location: "Bogor, Indonesia",
      accentColor: "#0ea5e9",
      logoText: "TT1",
      certifications: [
        "Praktek Kerja Industri: PT. Cyberindo Aditama (CBN) Depok",
        "Sertifikasi Bahasa Inggris Standar Kerja TOEIC (TECC)"
      ]
    }
  ],
  experiences: [
    {
      company: "PT Bank Tabungan Negara (persero) Tbk",
      role: "Enterprise Architecture Intern",
      period: "Agu 2026 - Sekarang",
      location: "Jakarta, Indonesia",
      accentColor: "#3b82f6",
      logoText: "BTN",
      description: [
        "Merancang dan mengembangkan modul Knowledge Management System (KMS) berbasis arsitektur RAG (Retrieval-Augmented Generation) untuk kebutuhan korporat.",
        "Mengorkestrasi pipeline ekstraksi dokumen multi-halaman dengan Docling dan pencarian semantik vektor hybrid (BGE-M3 + pgvector).",
        "Menerapkan RBAC (Role-Based Access Control) untuk proteksi hak akses dokumen internal."
      ],
      skillsUsed: ["TypeScript", "React", "n8n", "PostgreSQL", "pgvector", "LiteLLM"]
    },
    {
      company: "PT Ventura Semesta Wisata (Ventour)",
      role: "IT Support & Programmer Project Intern",
      period: "Mei 2026 - Agu 2026",
      location: "Depok, Indonesia",
      accentColor: "#10b981",
      logoText: "VSW",
      description: [
        "Membangun platform Ventour Consultant Academy (LMS) berbasis WordPress, Tutor LMS Pro, dan custom template PHP/CSS.",
        "Mengintegrasikan payment gateway multi-bank Duitku API dan sistem autentikasi SSO internal perusahaan.",
        "Menyusun 7 layout halaman publik yang responsif sesuai corporate design guidelines."
      ],
      skillsUsed: ["PHP", "WordPress", "Custom CSS", "Duitku API", "JavaScript"]
    },
    {
      company: "Laboratorium Informatika Universitas Gunadarma",
      role: "Instructor & Laboratory Assistant",
      period: "Sep 2025 - Sekarang",
      location: "Depok, Indonesia",
      accentColor: "#f59e0b",
      logoText: "LAB",
      description: [
        "Memandu dan mengajar ratusan mahasiswa dalam praktikum pemrograman, basis data, dan rekayasa perangkat lunak.",
        "Mengembangkan dan mengevaluasi modul praktikum berbasis teknologi modern."
      ],
      skillsUsed: ["Teaching", "Database Management", "Algorithm & Data Structures"]
    },
    {
      company: "Karang Taruna Pengasinan",
      role: "Anggota Aktif & Koordinator Acara",
      period: "Agu 2021 - Agu 2025",
      location: "Depok, Indonesia",
      accentColor: "#64748b",
      logoText: "KT",
      description: [
        "Mengorganisir perayaan HUT Kemerdekaan RI tingkat wilayah selama 4 tahun berturut-turut.",
        "Mengkoordinir kegiatan bazar UMKM warga dan bakti sosial kepemudaan."
      ],
      skillsUsed: ["Team Leadership", "Event Planning", "Community Relations"]
    }
  ],
  projects: [
    {
      id: "LMS-Ventour",
      title: "Ventour Consultant Academy - LMS",
      description: "Membangun platform LMS untuk pelatihan konsultan di atas WordPress dan Tutor LMS Pro, dengan antarmuka yang dirancang menggunakan custom HTML dan modern CSS.",
      category: "Web App",
      tags: ["WordPress", "PHP", "HTML", "CSS", "Tutor LMS Pro", "Duitku API"],
      featured: true,
      isPrivate: true,
      companyBadge: "Enterprise / Confidential",
      highlights: [
        "Mengintegrasikan autentikasi login terpusat dengan sistem internal perusahaan.",
        "Mengintegrasikan pembayaran otomatis melalui payment gateway Duitku multi-bank.",
        "Merancang design system 7 layout halaman publik dengan template kustom.",
        "Menyesuaikan tampilan dashboard instruktur dan template lesson teroptimasi."
      ]
    },
    {
      id: "kms-rag-pipeline",
      title: "Enterprise Knowledge Base & Dual-Stream RAG Engine",
      description: "Modul Knowledge Management System (KMS) & mesin RAG untuk pengolahan dokumen regulasi dan kepatuhan berskala enterprise. Mengintegrasikan arsitektur full-stack dengan ekosistem AI internal perusahaan, serta mengorkestrasi pipeline ingestion dokumen kompleks dan query reasoning bertenaga n8n.",
      category: "AI / ML",
      tags: ["TypeScript", "React", "n8n", "PostgreSQL", "pgvector", "LiteLLM", "Docling", "BGE-M3"],
      featured: true,
      isPrivate: true,
      companyBadge: "Enterprise / Confidential",
      highlights: [
        "Merancang orkestrasi n8n untuk batch ingestion ribuan halaman dokumen PDF menggunakan Docling async parser & fallback layout extraction.",
        "Mengimplementasikan pencarian semantik vektor (BGE-M3 + pgvector) berbasis dual-stream (Sumber Resmi Regulasi vs Penunjang AI).",
        "Membangun prompt reasoning pipeline dengan HyDE (Hypothetical Document Embeddings) dan Reciprocal Rank Fusion (RRF).",
        "Integrasi antarmuka full-stack frontend & backend KMS ke ekosistem AI internal perusahaan berbasis Role-Based Access Control (RBAC)."
      ]
    },
    {
      id: "mini-dashboard-ai",
      title: "Mini Dashboard AI",
      description: "Proyek arsitektur fullstack enterprise untuk mereplikasi sistem modern berstandar industri dengan end-to-end type safety dan server-side rendering performa tinggi.",
      category: "Web App",
      tags: ["Turborepo", "TanStack Start", "TanStack Router", "TanStack Query", "tRPC v11", "Drizzle ORM", "PostgreSQL", "Nitro", "Vite"],
      featured: true,
      isPrivate: false,
      githubUrl: "https://github.com/voiddoiv/mini-dashboard",
      highlights: [
        "Monorepo terisolasi menggunakan Turborepo & pnpm Workspaces.",
        "Fullstack SSR bertenaga TanStack Start dengan Nitro Engine.",
        "Type-safe routing berbasis file & pathless layouts menggunakan TanStack Router.",
        "End-to-End Type-safe API layer dengan tRPC v11 & Zod, dihubungkan ke Drizzle ORM."
      ]
    },
    {
      id: "sawiku-segmentation",
      title: "Sawiku Segmentation",
      description: "Segmentasi dan deteksi hama pada tanaman sawi hijau berbasis deep learning YOLOv8, diintegrasikan ke antarmuka web interaktif menggunakan Flask dan tunneling ngrok.",
      category: "AI / ML",
      tags: ["Python", "YOLOv8", "Flask", "Computer Vision", "ngrok"],
      featured: true,
      isPrivate: false,
      githubUrl: "https://github.com/voiddoiv/sawiku-segmentation",
    },
    {
      id: "lirik-id",
      title: "LirikID - Music & Lyrics Player",
      description: "Aplikasi media player Android untuk lagu-lagu wajib nasional Indonesia, dilengkapi sinkronisasi teks lirik dan integrasi Firebase sebagai backend data.",
      category: "Mobile",
      tags: ["Kotlin", "Android SDK", "Firebase", "ExoPlayer"],
      featured: true,
      isPrivate: false,
      githubUrl: "https://github.com/voiddoiv/LirikID",
    },
    {
      id: "decoupled-portfolio",
      title: "Decoupled Full Stack Portfolio",
      description: "Arsitektur portofolio modern yang memisahkan REST API (Express + TypeScript + Zod) dengan Client UI responsif (React + Vite).",
      category: "Web App",
      tags: ["React", "Express", "TypeScript", "Zod", "Vite"],
      featured: true,
      isPrivate: false,
      githubUrl: "https://github.com/voiddoiv/portfolio",
    }
  ]
};
