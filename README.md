# 🚀 Decoupled Full Stack Portfolio

Arsitektur website portofolio modern yang memisahkan **REST API Backend** dan **Interactive Client Frontend** dengan validasi data *End-to-End Type Safety* menggunakan Zod & TypeScript.

## 🛠️ Tech Stack & Arsitektur

### 1. Frontend Client (`/client`)
- **Framework**: React 19 + TypeScript + Vite
- **Data Validation**: Zod Schema (Runtime validation)
- **Styling**: Modern Native CSS (Dark/Light Mode, Glassmorphism, CSS Variables)
- **Icons**: Lucide Icons & Custom SVG

### 2. Backend REST API (`/server`)
- **Runtime & Framework**: Node.js + Express + TypeScript (`tsx`)
- **Middleware**: CORS & Express JSON parser
- **Data Modeling**: In-Memory / Decoupled Data Store dengan skema validasi Zod

---

## ⚡ Cara Menjalankan Secara Lokal

### 1. Jalankan Backend Server (Port 5000)
```bash
cd server
npm install
npm run dev
```

### 2. Jalankan Frontend Client (Port 5173)
```bash
cd client
npm install
npm run dev
```
Dibuat oleh Geren Haekal Hafizh

