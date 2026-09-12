export default function Badge({ children, variant = "default", className = "" }) {
  const styles = {
    default: "bg-slate-900 text-white",
    blue: "bg-blue-600 text-white",
    softBlue: "bg-blue-50 text-blue-700 border border-blue-200",
    amber: "bg-amber-400 text-slate-900",
    outline: "bg-white border border-slate-200 text-slate-700",
    success: "bg-emerald-50 text-emerald-700 border border-emerald-200",
    warning: "bg-amber-50 text-amber-700 border border-amber-200",
    muted: "bg-slate-100 text-slate-700 border border-slate-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${styles[variant] || styles.default} ${className}`}
    >
      {children}
    </span>
  );
}
