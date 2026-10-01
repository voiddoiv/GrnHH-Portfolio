// client/src/App.tsx
import React, { useState, useEffect } from 'react';
import { usePortfolio } from './hooks/usePortfolio';
import {
  FolderGit2, Mail, ExternalLink,
  ArrowRight, Loader2, AlertCircle, Sun, Moon, Sparkles, Lock,
  GraduationCap, Briefcase, Award, MapPin, Phone, CheckCircle2,
  Terminal, ShieldCheck, Cpu
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';
// logo 
import btnLogo from './assets/logo/btn.png';
import ventourLogo from './assets/logo/ventour.png';
import labtiLogo from './assets/logo/logo-labti.png';
import gundarLogo from './assets/logo/gundar.png';
import boashLogo from './assets/logo/boash.png';

export const App: React.FC = () => {
  const { data, isLoading, error } = usePortfolio();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const getLogo = (name: string) => {
    if (name.includes('PT Bank Tabungan Negara (persero) Tbk')) return btnLogo;
    if (name.includes('Ventour')) return ventourLogo;
    if (name.includes('Laboratorium')) return labtiLogo;
    if (name.includes('Universitas Gunadarma')) return gundarLogo;
    if (name.includes('SMK Taruna Terpadu 1')) return boashLogo;
    return null;
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  if (isLoading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem' }}>
        <Loader2 className="animate-spin" size={40} color="#3b82f6" style={{ animation: 'spin 1s linear infinite' }} />
        <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Memuat data portofolio...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1.5rem', textAlign: 'center' }}>
        <AlertCircle size={48} color="#ef4444" />
        <h2>Gagal Terhubung</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '480px' }}>{error}</p>
      </div>
    );
  }

  // Filter Kategori Proyek
  const categories = ['All', ...Array.from(new Set(data.projects.map(p => p.category)))];
  const filteredProjects = selectedCategory === 'All'
    ? data.projects
    : data.projects.filter(p => p.category === selectedCategory);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* 1. Navbar */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <a href="#" style={{ fontWeight: 800, fontSize: '1.15rem', display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none', color: 'var(--text-primary)' }}>
            <Sparkles size={18} color="#3b82f6" /> {data.name}
          </a>
          <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a href="#about" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Tentang</a>
            <a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Proyek</a>
            <a href="#education" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Pendidikan</a>
            <a href="#experience" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Pengalaman</a>
            <a href="#contact" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: 500 }}>Kontak</a>
            <button onClick={toggleTheme} className="btn btn-outline" style={{ padding: '0.45rem', borderRadius: '50%' }} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
            </button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* 2. Hero Section: Foto Diri + Pengenalan Singkat */}
        <section style={{ padding: '4.5rem 0 3.5rem 0' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>

              {/* Kolom Kiri: Informasi & Headline */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div>
                  <span className="badge">
                    <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                    {data.availabilityStatus}
                  </span>
                </div>

                <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.4rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                  Halo, saya <span style={{ background: 'var(--brand-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{data.name}</span>
                </h1>

                <p style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                  {data.headline}
                </p>

                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {data.summary}
                </p>

                {/* Lokasi & Kontak Cepat */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                  {data.location && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <MapPin size={15} color="#3b82f6" /> {data.location}
                    </span>
                  )}
                  {data.phone && (
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      <Phone size={15} color="#3b82f6" /> {data.phone}
                    </span>
                  )}
                </div>

                {/* Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', paddingTop: '0.5rem' }}>
                  <a href="#projects" className="btn btn-primary">Lihat Proyek <ArrowRight size={16} /></a>
                  <a href="#contact" className="btn btn-outline"><Mail size={16} /> Hubungi Saya</a>
                </div>

                {/* Social Icons */}
                <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem', color: 'var(--text-muted)' }}>
                  {data.contact.github && <a href={data.contact.github} target="_blank" rel="noreferrer" style={{ color: 'inherit' }} title="GitHub"><GithubIcon size={22} /></a>}
                  {data.contact.linkedin && <a href={data.contact.linkedin} target="_blank" rel="noreferrer" style={{ color: 'inherit' }} title="LinkedIn"><LinkedinIcon size={22} /></a>}
                  <a href={`mailto:${data.contact.email}`} style={{ color: 'inherit' }} title="Email"><Mail size={22} /></a>
                </div>
              </div>

              {/* Kolom Kanan: Foto Profil dengan Glowing Frame */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="avatar-frame" style={{ width: '280px', height: '340px' }}>
                  <img
                    src={data.avatarUrl || 'https://github.com/voiddoiv.png'}
                    alt={data.name}
                    onError={(e) => {
                      // Fallback jika avatar tidak dapat dimuat
                      (e.target as HTMLImageElement).src = 'https://github.com/voiddoiv.png';
                    }}
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Tentang Saya (4 Pilar Keahlian Berdasarkan CV) */}
        <section id="about" style={{ padding: '3rem 0', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem' }}>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '0.75rem', backgroundColor: 'rgba(59, 130, 246, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <GraduationCap size={22} color="#3b82f6" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Lulusan Informatika</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Sarjana Teknik Informatika Universitas Gunadarma, lulus dengan predikat memuaskan (IPK 3.84 / 4.00).
                </p>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '0.75rem', backgroundColor: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Cpu size={22} color="#a855f7" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Enterprise RAG & AI</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Membangun modul Knowledge Management System & pipeline RAG dokumen di PT Bank Tabungan Negara (Persero) Tbk.
                </p>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '0.75rem', backgroundColor: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <Terminal size={22} color="#10b981" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Full Stack Versatility</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Pengalaman pengembangan web end-to-end (React, Node.js, PHP/WordPress), mobile Android (Kotlin), dan Computer Vision (YOLOv8).
                </p>
              </div>

              <div className="glass-card" style={{ padding: '1.5rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '0.75rem', backgroundColor: 'rgba(245, 158, 11, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                  <ShieldCheck size={22} color="#f59e0b" />
                </div>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.35rem' }}>Fondasi Jaringan Kuat</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Tersertifikasi resmi BNSP sebagai Junior Computer Network Technician dan sertifikasi Cisco Networking Academy.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 4. Proyek Pilihan (Dinamis dari Supabase) */}
        <section id="projects" style={{ padding: '4.5rem 0' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Proyek Pilihan</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Koleksi proyek open source, riset, serta sistem enterprise skala produksi.
            </p>

            {/* Filter Tabs */}
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`btn ${selectedCategory === cat ? 'btn-primary' : 'btn-outline'}`}
                  style={{ padding: '0.4rem 1rem', fontSize: '0.85rem' }}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Projects Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {filteredProjects.map(proj => (
                <div
                  key={proj.id}
                  className="glass-card"
                  style={{
                    padding: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    {/* Header Card */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <FolderGit2 size={30} color="#3b82f6" />

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        {proj.isPrivate ? (
                          <span
                            className="badge"
                            style={{
                              backgroundColor: 'rgba(234, 179, 8, 0.12)',
                              color: '#fbbf24',
                              border: '1px solid rgba(234, 179, 8, 0.25)',
                              fontSize: '0.75rem',
                              padding: '0.25rem 0.6rem'
                            }}
                          >
                            <Lock size={12} style={{ marginRight: '0.25rem' }} />
                            {proj.companyBadge || 'Enterprise / Confidential'}
                          </span>
                        ) : (
                          <>
                            {proj.githubUrl && (
                              <a href={proj.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} title="Lihat Source Code">
                                <GithubIcon size={18} />
                              </a>
                            )}
                            {proj.demoUrl && (
                              <a href={proj.demoUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--text-muted)' }} title="Buka Live Demo">
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {proj.description}
                    </p>

                    {/* Highlights */}
                    {proj.highlights && proj.highlights.length > 0 && (
                      <div style={{ marginBottom: '1.25rem' }}>
                        <ul style={{ paddingLeft: '1.15rem', color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.55 }}>
                          {proj.highlights.map((h, i) => (
                            <li key={i} style={{ marginBottom: '0.25rem' }}>{h}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '1rem' }}>
                    {proj.tags.map(t => (
                      <span key={t} className="badge" style={{ fontFamily: 'var(--font-code)', fontSize: '0.725rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Riwayat Pendidikan & Sertifikasi (Hover Glow Logo Effect) */}
        <section id="education" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Jenjang Pendidikan & Sertifikasi</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Fondasi akademis di bidang informatika serta sertifikasi kompetensi jaringan dan database.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {data.educations?.map(edu => (
                <div
                  key={edu.institution}
                  className="hover-glow-card"
                  style={{
                    padding: '2rem',
                    // Dynamic CSS Variables for hover glow color
                    ['--card-accent' as any]: edu.accentColor || '#3b82f6',
                    ['--card-glow' as any]: `${edu.accentColor || '#3b82f6'}40`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div>
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>{edu.period}</span>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginTop: '0.25rem' }}>{edu.institution}</h3>
                      <p style={{ fontSize: '1rem', color: edu.accentColor || '#3b82f6', fontWeight: 600 }}>{edu.degree}</p>
                      {edu.gpa && (
                        <span className="badge" style={{ marginTop: '0.5rem', backgroundColor: `${edu.accentColor}18`, color: edu.accentColor }}>
                          IPK: {edu.gpa}
                        </span>
                      )}
                    </div>

                    {/* Logo Badge dengan Gambar */}
                    <div
                      className="logo-badge"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '0.85rem',
                        backgroundColor: '#ffffff', // Background putih agar logo PNG transparan terlihat jelas
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                        overflow: 'hidden'
                      }}
                    >
                      {getLogo(edu.institution) ? (
                        <img
                          src={getLogo(edu.institution)!}
                          alt={edu.institution}
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                      ) : (
                        <span>{edu.logoText || 'EDU'}</span>
                      )}
                    </div>
                  </div>

                  {/* Certifications List */}
                  {edu.certifications && edu.certifications.length > 0 && (
                    <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem', marginTop: '1rem' }}>
                      <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Award size={15} color={edu.accentColor || '#3b82f6'} /> Sertifikasi & Pencapaian:
                      </p>
                      <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.825rem', lineHeight: 1.6 }}>
                        {edu.certifications.map((cert, idx) => (
                          <li key={idx} style={{ marginBottom: '0.35rem' }}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Pengalaman Kerja & Organisasi (Hover Glow Logo Effect) */}
        <section id="experience" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Pengalaman Kerja & Organisasi</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Jejak kontribusi profesional di industri perbankan, IT consultant, akademisi laboratorium, dan sosial.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {data.experiences?.map(exp => (
                <div
                  key={exp.company + exp.role}
                  className="hover-glow-card"
                  style={{
                    padding: '2rem',
                    ['--card-accent' as any]: exp.accentColor || '#3b82f6',
                    ['--card-glow' as any]: `${exp.accentColor || '#3b82f6'}40`,
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Briefcase size={16} color={exp.accentColor || '#3b82f6'} />
                        <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)' }}>{exp.period}</span>
                        {exp.location && <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>• {exp.location}</span>}
                      </div>
                      <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: '0.35rem' }}>{exp.role}</h3>
                      <p style={{ fontSize: '1.05rem', color: exp.accentColor || '#3b82f6', fontWeight: 600 }}>{exp.company}</p>
                    </div>

                    {/* SESUDAH: Menampilkan gambar logo asli dengan efek color reveal */}
                    <div
                      className="logo-badge"
                      style={{
                        width: '56px',
                        height: '56px',
                        borderRadius: '0.85rem',
                        backgroundColor: '#ffffff', // Background putih agar logo PNG transparan terlihat jelas
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '6px',
                        overflow: 'hidden'
                      }}
                    >
                      {getLogo(exp.company) ? (
                        <img
                          src={getLogo(exp.company)!}
                          alt={exp.company}
                          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
                        />
                      ) : (
                        <span>{exp.logoText}</span>
                      )}
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul style={{ paddingLeft: '1.25rem', color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                    {exp.description.map((desc, i) => (
                      <li key={i} style={{ marginBottom: '0.35rem' }}>{desc}</li>
                    ))}
                  </ul>

                  {/* Skills used */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {exp.skillsUsed.map(skill => (
                      <span key={skill} className="badge" style={{ fontSize: '0.75rem', backgroundColor: 'var(--badge-bg)', color: 'var(--badge-text)' }}>
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Keahlian & Teknologi (Skills Matrix) */}
        <section id="skills" style={{ padding: '4.5rem 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Keahlian & Teknologi</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Teknologi, framework, dan peralatan yang biasa saya operasikan dalam memecahkan masalah.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {data.skills.map(skill => (
                <div key={skill.name} className="glass-card" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={16} color="#3b82f6" />
                  <span style={{ fontWeight: 600, fontSize: '0.925rem' }}>{skill.name}</span>
                  <span className="badge" style={{ fontSize: '0.7rem' }}>{skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Hubungi Saya (Contact Section) */}
        <section id="contact" style={{ padding: '5rem 0', borderTop: '1px solid var(--border-color)', backgroundColor: 'rgba(15, 23, 42, 0.3)' }}>
          <div className="container" style={{ textAlign: 'center', maxWidth: '680px' }}>
            <span className="badge" style={{ marginBottom: '1rem' }}>Mari Terhubung</span>
            <h2 style={{ fontSize: '2.4rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '1rem' }}>
              Tertarik Berdiskusi atau Berkolaborasi?
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
              Saya selalu terbuka untuk mendiskusikan peluang kerja, proyek rekayasa perangkat lunak, maupun pertukaran ide teknologi.
            </p>

            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href={`mailto:${data.contact.email}`} className="btn btn-primary" style={{ padding: '0.85rem 1.75rem' }}>
                <Mail size={18} /> Kirim Email ({data.contact.email})
              </a>
              {data.contact.linkedin && (
                <a href={data.contact.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline" style={{ padding: '0.85rem 1.75rem' }}>
                  <LinkedinIcon size={18} /> Terhubung di LinkedIn
                </a>
              )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
              {data.location && <span>📍 {data.location}</span>}
              {data.phone && <span>📞 {data.phone}</span>}
            </div>
          </div>
        </section>
      </main>

      {/* 9. Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2.5rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} {data.name} — Dirancang dengan Arsitektur Full Stack (React 19 + TypeScript + Supabase PostgreSQL).</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
