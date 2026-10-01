// client/src/hooks/usePortfolio.ts
import { useState, useEffect } from 'react';
import { type Profile, ProfileSchema } from '../schemas/portfolio';
import { fallbackData } from '../data/fallbackData';
import { supabase } from '../services/supabase';

export const usePortfolio = () => {
  const [data, setData] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchFromSupabase = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // 1. Ambil data Profile, Skills, dan Projects secara paralel dari PostgreSQL
        const [profileRes, skillsRes, projectsRes] = await Promise.all([
          supabase.from('profile').select('*').single(),
          supabase.from('skills').select('*').order('id', { ascending: true }),
          supabase.from('projects').select('*').order('created_at', { ascending: false }),
        ]);

        if (profileRes.error) throw profileRes.error;
        if (skillsRes.error) throw skillsRes.error;
        if (projectsRes.error) throw projectsRes.error;

        const p = profileRes.data;

        // 2. Susun data mentah dari tabel database ke bentuk Profile schema kita
        const assembledData = {
          name: p.name || fallbackData.name,
          headline: p.headline || fallbackData.headline,
          summary: p.summary || fallbackData.summary,
          availabilityStatus: p.availability_status || fallbackData.availabilityStatus,
          avatarUrl: p.avatar_url || fallbackData.avatarUrl,
          location: fallbackData.location,
          phone: fallbackData.phone,
          resumeUrl: fallbackData.resumeUrl,
          contact: {
            email: p.email || fallbackData.contact.email,
            github: p.github || fallbackData.contact.github,
            linkedin: p.linkedin || fallbackData.contact.linkedin,
          },
          skills: skillsRes.data && skillsRes.data.length > 0 
            ? skillsRes.data.map(s => ({
                name: s.name,
                category: s.category,
                level: s.level,
              }))
            : fallbackData.skills,
          experiences: fallbackData.experiences,
          educations: fallbackData.educations,
          projects: projectsRes.data.map(proj => ({
            id: proj.id,
            title: proj.title,
            description: proj.description,
            category: proj.category,
            tags: proj.tags || [],
            featured: proj.featured || false,
            isPrivate: proj.is_private || false,
            companyBadge: proj.company_badge || undefined,
            githubUrl: proj.github_url || '',
            demoUrl: proj.demo_url || '',
            highlights: proj.highlights || [],
          })),
        };

        // 3. Validasi dengan Zod (Garansi Type-Safe)
        const validated = ProfileSchema.parse(assembledData);

        if (isMounted) setData(validated);
      } catch (err: any) {
        console.warn('Gagal memuat dari Supabase, beralih ke Fallback Data:', err.message);
        if (isMounted) setData(fallbackData);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    };

    fetchFromSupabase();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, isLoading, error };
};
