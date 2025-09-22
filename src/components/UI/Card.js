export default function Card({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-sm border ${className}`}
      style={{ borderColor: '#C9D3E9' }}
    >
      {children}
    </div>
  );
}
