export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-[390px] h-[844px] bg-gradient-to-b from-white to-white shadow-lg">
        {children}
      </div>
    </div>
  );
}
