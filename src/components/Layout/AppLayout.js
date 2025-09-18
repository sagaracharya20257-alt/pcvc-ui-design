export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-md mx-auto bg-white min-h-screen shadow-lg">
        {children}
      </div>
    </div>
  );
}
