import { Link } from "react-router-dom";

const variants = {
  primary: "bg-[#2563eb] text-white hover:bg-[#1d4ed8] shadow-sm hover:shadow-md",
  secondary: "bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 shadow-sm",
  ghost: "bg-slate-900 text-white hover:bg-slate-800",
  outline: "border border-slate-300 text-slate-700 hover:bg-slate-50 bg-white",
  subtle: "bg-blue-50 text-blue-700 hover:bg-blue-100 border border-blue-100",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-[15px]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className = "",
  leftIcon,
  rightIcon,
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  const cls = `${base} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {leftIcon}
        {children}
        {rightIcon}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={cls} {...props}>
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }
  return (
    <button className={cls} {...props}>
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
}
