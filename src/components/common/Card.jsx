export default function Card({ children, className = "", hover = false, padding = "p-6", ...props }) {
  return (
    <div
      className={`bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden ${hover ? "hover:shadow-lg hover:-translate-y-1 transition-all duration-300" : ""} ${padding} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function ImageCard({ image, title, subtitle, meta, children, to, onClick, className = "" }) {
  const Wrapper = to ? "a" : onClick ? "button" : "div";
  return (
    <Wrapper
      href={to}
      onClick={onClick}
      className={`group bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-left flex flex-col ${className}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img src={image} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
        {meta && <div className="absolute left-3 top-3 flex gap-2">{meta}</div>}
      </div>
      <div className="p-5 flex flex-col flex-1">
        {subtitle && <p className="text-xs font-semibold tracking-widest uppercase text-blue-600 mb-1">{subtitle}</p>}
        <h3 className="font-display font-bold text-slate-900 leading-tight line-clamp-2">{title}</h3>
        {children && <div className="mt-2 text-sm text-slate-600 line-clamp-2 flex-1">{children}</div>}
      </div>
    </Wrapper>
  );
}
