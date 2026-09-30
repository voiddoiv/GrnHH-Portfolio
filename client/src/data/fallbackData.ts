// client/src/data/fallbackData.ts
import type { Profile } from '../schemas/portfolio';

export const fallbackData: Profile = {
  name: "Geren Haekal Hafizh",
  headline: "Aspiring Full Stack Software Engineer",
  summary: "Mempelajari software engineering dari arsitektur backend, REST API, hingga frontend interaktif modern berbasis TypeScript.",
  availabilityStatus: "Open for Opportunities",
  contact: {
    email: "gerenhaekalh@gmail.com",
    github: "https://github.com/voiddoiv",
    linkedin: "https://id.linkedin.com/in/geren-haekal-hafizh",
  },
  skills: [
    { name: "TypeScript", category: "Frontend", level: "Intermediate" },
    { name: "Node.js", category: "Backend", level: "Intermediate" },
    { name: "Express.js", category: "Backend", level: "Intermediate" },
    { name: "React", category: "Frontend", level: "Intermediate" },
    { name: "PostgreSQL", category: "Backend", level: "Beginner" },
    { name: "Git", category: "Tools & DevOps", level: "Intermediate" },
    { name: "Docker", category: "Tools & DevOps", level: "Beginner" },
  ],
  experiences: [
    {
      company: "Proyek Mandiri",
      role: "Full Stack Engineer Trainee",
      period: "2026 - Sekarang",
      location: "Indonesia",
      description: [
        "Membangun arsitektur Decoupled REST API menggunakan Express dan React.",
        "Menerapkan validasi data end-to-end menggunakan Zod schema."
      ],
      skillsUsed: ["TypeScript", "Express", "React", "Zod"],
    }
  ],
  projects: [
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
