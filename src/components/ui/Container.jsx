export default function Container({ children, className = "", as: Component = "div", ...props }) {
  return (
    <Component
      className={`max-w-[1160px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 w-full ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
