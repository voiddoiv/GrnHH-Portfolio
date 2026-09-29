// client/src/hooks/usePortfolio.ts
import { useState, useEffect } from 'react';
import { type Profile, ProfileSchema } from '../schemas/portfolio';

export const usePortfolio = (apiUrl: string) => {
    const [data, setData] = useState<Profile | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                setIsLoading(true);
                setError(null);

                const res = await fetch(apiUrl);
                if (!res.ok) {
                    throw new Error(`Server merespon dengan status ${res.status}`);
                }

                const json = await res.json();

                // Validasi runtime dengan Zod
                const parsed = ProfileSchema.parse(json);

                if (isMounted) {
                    setData(parsed);
                }
            } catch (err: any) {
                if (isMounted) {
                    console.error("Gagal memuat portofolio:", err);
                    setError(err.message || 'Terjadi kesalahan saat memuat data dari server');
                }
            } finally {
                if (isMounted) {
                    setIsLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [apiUrl]);

    return { data, isLoading, error };
};
