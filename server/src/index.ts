// server/src/index.ts
import express, { Request, Response } from 'express';
import cors from 'cors';
import { portfolioDb } from './db/data.js';
import { ProjectSchema } from './schemas/portfolio.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Memperbolehkan request dari frontend di port mana saja
app.use(express.json()); // Membaca body request berformat JSON

// 1. Health Check Endpoint
app.get('/api/health', (_req: Request, res: Response) => {
    res.status(200).json({ status: 'ok', timestamp: new Date().toISOString() });
});

// 2. GET: Mengambil Seluruh Data Portofolio
app.get('/api/portfolio', (_req: Request, res: Response) => {
    res.status(200).json(portfolioDb);
});

// 3. GET: Mengambil Daftar Proyek Saja
app.get('/api/projects', (_req: Request, res: Response) => {
    res.status(200).json(portfolioDb.projects);
});

// 4. POST: Menambah Proyek Baru Secara Dinamis
app.post('/api/projects', (req: Request, res: Response) => {
    try {
        // Validasi data yang dikirim client menggunakan Zod
        const validatedProject = ProjectSchema.parse({
            ...req.body,
            id: req.body.id || `proj-${Date.now()}` // Generate ID otomatis jika tidak ada
        });

        // Masukkan ke database
        portfolioDb.projects.push(validatedProject);

        // Kembalikan response 201 (Created)
        res.status(201).json({
            message: 'Proyek berhasil ditambahkan!',
            data: validatedProject
        });
    } catch (error: any) {
        // Tangkap jika input tidak sesuai skema (Bad Request 400)
        res.status(400).json({
            error: 'Data proyek tidak valid',
            details: error.errors || error.message
        });
    }
});

// Jalankan Server
app.listen(PORT, () => {
    console.log(`🚀 Server Backend berjalan di http://localhost:${PORT}`);
    console.log(`📡 Cek endpoint: http://localhost:${PORT}/api/portfolio`);
});
