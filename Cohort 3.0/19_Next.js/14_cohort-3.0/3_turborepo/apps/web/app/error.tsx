'use client';

import { useRouter } from "next/navigation";

export default function ErrorComp({ error, reset }: { error: Error; reset: () => void }) {
    const router = useRouter();
    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
            color: '#1e293b',
            fontFamily: 'Inter, sans-serif',
            padding: 24
        }}>
            <div style={{
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 4px 24px rgba(30,41,59,0.08)',
                padding: '40px 32px',
                maxWidth: 400,
                textAlign: 'center',
            }}>
                <svg width="48" height="48" fill="none" viewBox="0 0 24 24" style={{ marginBottom: 16 }}>
                    <circle cx="12" cy="12" r="12" fill="#fee2e2" />
                    <path d="M12 8v4" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
                    <circle cx="12" cy="16" r="1" fill="#ef4444" />
                </svg>
                <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Oops! Something went wrong</h2>
                <p style={{ color: '#64748b', marginBottom: 24 }}>{error.message}</p>
                <button
                    onClick={() => router.push("/")}
                    style={{
                        background: 'linear-gradient(90deg, #6366f1 0%, #3b82f6 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: 8,
                        padding: '10px 24px',
                        fontWeight: 600,
                        fontSize: 16,
                        cursor: 'pointer',
                        boxShadow: '0 2px 8px rgba(59,130,246,0.08)'
                    }}
                >
                    Try Again
                </button>
            </div>
        </div>
    );
}