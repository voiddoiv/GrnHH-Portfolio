// client/src/App.tsx
import React, { useState, useEffect } from 'react';
import { usePortfolio } from './hooks/usePortfolio';
import {
  FolderGit2, Mail, ExternalLink,
  ArrowRight, Loader2, AlertCircle, Sun, Moon, Sparkles, Lock
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './components/Icons';


const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api/portfolio';

export const App: React.FC = () => {
  const { data, isLoading, error } = usePortfolio();
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
        <p style={{ color: 'var(--text-muted)', fontWeight: 500 }}>Menghubungkan ke Backend API (port 5000)...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', padding: '1.5rem', textAlign: 'center' }}>
        <AlertCircle size={48} color="#ef4444" />
        <h2>Gagal Terhubung ke Backend</h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '480px' }}>{error}</p>
        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Pastikan server backend di terminal pertama masih berjalan (`npm run dev` di folder server).</p>
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
      {/* Navbar */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, backdropFilter: 'blur(16px)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontWeight: 800, fontSize: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Sparkles size={20} color="#3b82f6" /> {data.name}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <a href="#projects" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500 }}>Proyek</a>
            <a href="#skills" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500 }}>Keahlian</a>
            <a href="#experience" style={{ textDecoration: 'none', color: 'var(--text-muted)', fontSize: '0.925rem', fontWeight: 500 }}>Pengalaman</a>
            <button onClick={toggleTheme} className="btn btn-outline" style={{ padding: '0.5rem', borderRadius: '50%' }} aria-label="Toggle Theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {/* Hero Section */}
        <section style={{ padding: '5rem 0 3.5rem 0' }}>
          <div className="container">
            <div style={{ maxWidth: '720px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <span className="badge">
                  <span style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }} />
                  {data.availabilityStatus}
                </span>
              </div>
              <h1 style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.15 }}>
                Halo, saya <span style={{ background: 'var(--brand-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{data.name}</span>
              </h1>
              <p style={{ fontSize: '1.25rem', fontWeight: 600, color: 'var(--text-primary)' }}>{data.headline}</p>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>{data.summary}</p>

              <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
                <a href="#projects" className="btn btn-primary">Lihat Proyek <ArrowRight size={16} /></a>
                <a href={`mailto:${data.contact.email}`} className="btn btn-outline"><Mail size={16} /> Kontak Saya</a>
              </div>

              <div style={{ display: 'flex', gap: '1.25rem', paddingTop: '1rem', color: 'var(--text-muted)' }}>
                {data.contact.github && <a href={data.contact.github} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><GithubIcon size={22} /></a>}
                {data.contact.linkedin && <a href={data.contact.linkedin} target="_blank" rel="noreferrer" style={{ color: 'inherit' }}><LinkedinIcon size={22} /></a>}
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ padding: '4rem 0' }}>
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
                    {/* Header Card: Icon & Action / Enterprise Badge */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <FolderGit2 size={30} color="#3b82f6" />

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                        {/* Jika proyek bersifat Enterprise / Private */}
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
                            title="Source code bersifat internal institusi (Private Repo)"
                          >
                            <Lock size={12} style={{ marginRight: '0.25rem' }} />
                            {proj.companyBadge || 'Enterprise / Private'}
                          </span>
                        ) : (
                          <>
                            {proj.githubUrl && (
                              <a
                                href={proj.githubUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center' }}
                                title="Lihat Source Code"
                              >
                                <GithubIcon size={18} />
                              </a>
                            )}
                            {proj.demoUrl && (
                              <a
                                href={proj.demoUrl}
                                target="_blank"
                                rel="noreferrer"
                                style={{ color: 'var(--text-muted)', display: 'inline-flex', alignItems: 'center' }}
                                title="Buka Live Demo"
                              >
                                <ExternalLink size={18} />
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </div>

                    {/* Judul & Deskripsi */}
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>
                      {proj.title}
                    </h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1rem' }}>
                      {proj.description}
                    </p>

                    {/* Poin Teknis / Highlights Arsitektur (jika ada) */}
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

                  {/* Tech Stack Tags */}
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


        {/* Skills Section */}
        <section id="skills" style={{ padding: '4rem 0', borderTop: '1px solid var(--border-color)' }}>
          <div className="container">
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '0.5rem' }}>Keahlian & Teknologi</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Teknologi yang biasa saya gunakan dalam membangun sistem.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {data.skills.map(skill => (
                <div key={skill.name} className="glass-card" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <span style={{ fontWeight: 600 }}>{skill.name}</span>
                  <span className="badge" style={{ fontSize: '0.7rem' }}>{skill.category}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid var(--border-color)', padding: '2.5rem 0', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
        <div className="container">
          <p>© {new Date().getFullYear()} {data.name} — Dibangun dengan Arsitektur Full Stack (React + Express + Zod + Vite).</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
