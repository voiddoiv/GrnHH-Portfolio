// client/src/schemas/portfolio.ts
import { z } from 'zod';

export const SkillSchema = z.object({
  name: z.string(),
  category: z.enum(['Frontend', 'Backend', 'AI / Data', 'Tools & DevOps', 'Other']),
  level: z.enum(['Beginner', 'Intermediate', 'Advanced']).default('Intermediate'),
});

export const ProjectSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  category: z.enum(['Web App', 'AI / ML', 'Mobile', 'Open Source', 'Tooling']),
  tags: z.array(z.string()),
  featured: z.boolean().default(false),
  githubUrl: z.string().url().optional().or(z.literal('')),
  demoUrl: z.string().url().optional().or(z.literal('')),
  isPrivate: z.boolean().optional().default(false),
  companyBadge: z.string().optional(),
  highlights: z.array(z.string()).optional(),
});

export const ExperienceSchema = z.object({
  company: z.string(),
  role: z.string(),
  period: z.string(),
  location: z.string().optional(),
  description: z.array(z.string()),
  skillsUsed: z.array(z.string()),
  logoText: z.string().optional(),
  accentColor: z.string().optional(),
});

export const EducationSchema = z.object({
  institution: z.string(),
  degree: z.string(),
  period: z.string(),
  location: z.string().optional(),
  gpa: z.string().optional(),
  certifications: z.array(z.string()).optional(),
  logoText: z.string().optional(),
  accentColor: z.string().optional(),
});

export const ProfileSchema = z.object({
  name: z.string(),
  headline: z.string(),
  summary: z.string(),
  availabilityStatus: z.string(),
  avatarUrl: z.string().optional(),
  resumeUrl: z.string().optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  contact: z.object({
    email: z.string().email(),
    github: z.string().url().optional(),
    linkedin: z.string().url().optional(),
  }),
  skills: z.array(SkillSchema),
  experiences: z.array(ExperienceSchema),
  educations: z.array(EducationSchema).optional().default([]),
  projects: z.array(ProjectSchema),
});

export type Profile = z.infer<typeof ProfileSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Skill = z.infer<typeof SkillSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
