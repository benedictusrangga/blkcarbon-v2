import { useLocation } from 'wouter';

export default function NotFound() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-[#080808] text-white flex flex-col items-center justify-center gap-6 px-6">
      <p style={{ fontSize: '9px', letterSpacing: '0.35em' }} className="text-[#a3e635]/60 uppercase">
        404
      </p>
      <h1 className="text-4xl md:text-6xl font-display font-bold uppercase tracking-tight leading-[0.95] text-center">
        Page Not Found
      </h1>
      <p className="text-white/40 text-sm max-w-xs text-center leading-relaxed">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => navigate('/')}
        className="mt-2 inline-flex items-center gap-2 bg-white text-black px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] hover:bg-white/90 transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
}
