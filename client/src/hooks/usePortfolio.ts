// client/src/hooks/usePortfolio.ts
import { useState, useEffect } from 'react';
import { type Profile, ProfileSchema } from '../schemas/portfolio';
import { fallbackData } from '../data/fallbackData'; // Data cadangan jika backend offline

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

                // Beri batas waktu (timeout 3 detik) agar tidak menunggu terlalu lama jika API mati
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 3000);

                const res = await fetch(apiUrl, { signal: controller.signal });
                clearTimeout(timeoutId);

                if (!res.ok) throw new Error(`HTTP ${res.status}`);
                const json = await res.json();
                const parsed = ProfileSchema.parse(json);

                if (isMounted) setData(parsed);
            } catch (err: any) {
                if (isMounted) {
                    console.warn("Backend offline / unreachable, beralih ke Fallback Data:", err.message);
                    // JIKA BACKEND GAGAL (di HP), PAKAI DATA CADANGAN:
                    setData(fallbackData);
                }
            } finally {
                if (isMounted) setIsLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, [apiUrl]);

    return { data, isLoading, error };
};
