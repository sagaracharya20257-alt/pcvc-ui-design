export default function Input({ 
  label, 
  placeholder, 
  value, 
  onChange, 
  type = "text",
  required = false,
  className = "",
  style = {},
  disabled = false
}) {
return (
    <div className="mb-4">
        {label && (
            <label className="block text-sm font-medium text-gray-700 mb-2">
                {label}
            </label>
        )}
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            className={`w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${className}`}
            style={style}
            disabled={disabled}
            readOnly
        />
    </div>
);
}
