export default function Button({ 
  children, 
  variant = "primary", 
  size = "medium", 
  onClick, 
  disabled = false,
  className = "" 
}) {
  const baseClasses = "font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "w-[342px] h-[40px] flex items-center justify-center bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
    outline: "w-[320px] h-[40px] flex items-center justify-center bg-white border border-[#ED1C24] text-[#ED1C24] rounded-lg px-4 py-1.5 focus:ring-[#ED1C24]",
    secondary: "w-[320px] h-[40px] flex items-center justify-center bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-500"
  };
  
  const sizes = {
    small: "px-3 py-2 text-sm",
    medium: "px-4 py-3 text-base",
    large: "px-6 py-4 text-lg"
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  return (
    <button
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
