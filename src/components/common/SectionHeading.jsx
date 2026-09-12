export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
  light = false,
}) {
  const alignCls = align === "center" ? "text-center mx-auto" : align === "right" ? "text-right ml-auto" : "text-left";
  return (
    <div className={`max-w-3xl ${alignCls} ${light ? "text-white" : ""}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold tracking-widest uppercase mb-4 ${light ? "bg-white/10 border-white/20 text-blue-100" : "bg-blue-50 border-blue-200 text-blue-700"}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-cyan-300" : "bg-blue-600"}`} />
          {eyebrow}
        </div>
      )}
      <h2 className={`font-display text-[28px] md:text-[36px] font-extrabold leading-[1.1] tracking-tight ${light ? "text-white" : "text-slate-900"}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-[15px] leading-relaxed ${light ? "text-slate-200" : "text-slate-600"}`}>{description}</p>
      )}
      {action && <div className={`mt-6 ${align === "center" ? "flex justify-center" : ""}`}>{action}</div>}
    </div>
  );
}
