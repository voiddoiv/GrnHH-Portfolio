// server/src/schemas/portfolio.ts
import { z } from 'zod';

export const SkillSchema = z.object({
    name: z.string().min(1, "Nama skill wajib diisi"),
    category: z.enum(['Frontend', 'Backend', 'AI / Data', 'Tools & DevOps', 'Other']),
    level: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Intermediate'),
});

export const ProjectSchema = z.object({
    id: z.string(),
    title: z.string().min(3, "Judul proyek minimal 3 karakter"),
    description: z.string().min(10, "Deskripsi minimal 10 karakter"),
    category: z.enum(['Web App', 'AI / ML', 'Mobile', 'Open Source', 'Tooling']),
    tags: z.array(z.string()).min(1, "Minimal 1 tag teknologi"),
    featured: z.boolean().default(false),
    githubUrl: z.string().url("URL GitHub harus valid").optional(),
    demoUrl: z.string().url("URL Demo harus valid").optional(),
    isPrivate: z.boolean().optional().default(false),
    companyBadge: z.string().optional(),
    highlights: z.array(z.string()).optional(),
});

export const ExperienceSchema = z.object({
    company: z.string().min(1),
    role: z.string().min(1),
    period: z.string(),
    location: z.string().optional(),
    description: z.array(z.string()),
    skillsUsed: z.array(z.string()),
});

export const ProfileSchema = z.object({
    name: z.string().min(1),
    headline: z.string(),
    summary: z.string(),
    availabilityStatus: z.string().default('Available for hire'),
    avatarUrl: z.string().url().optional(),
    resumeUrl: z.string().optional(),
    contact: z.object({
        email: z.string().email("Format email tidak valid"),
        github: z.string().url().optional(),
        linkedin: z.string().url().optional(),
    }),
    skills: z.array(SkillSchema),
    experiences: z.array(ExperienceSchema),
    projects: z.array(ProjectSchema),
});

// Type definitions otomatis
export type Profile = z.infer<typeof ProfileSchema>;
export type Project = z.infer<typeof ProjectSchema>;
