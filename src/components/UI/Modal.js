import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

export default function Modal({ isOpen, onClose, children, title }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!isOpen || !mounted) return null;

  const modalContent = (
    <div 
      className="fixed inset-0 flex items-end justify-center"
      style={{ 
        zIndex: 99999,
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className="bg-white w-[390px] max-w-[90vw] h-[294px] rounded-t-[20px] flex flex-col relative mx-auto transform transition-all duration-500 ease-out animate-slide-up"
        style={{ 
          maxHeight: '80vh',
          padding: '23px 24px',
          animation: 'slideUp 0.5s ease-out forwards'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 
            className="text-xl font-semibold align-middle"
            style={{
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '28px',
              verticalAlign: 'middle',
              width: '342px',
              height: '28px',
              color: '#1C2633'
            }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="flex items-center justify-center w-8 h-8 p-1.5 gap-1 rounded-md border bg-white hover:bg-gray-50 transition-colors shadow-sm"
            style={{
              border: '1px solid #D2D5DA'
            }}
          >
            <X className="text-gray-500" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );

  // Use React Portal to render modal at document body level
  return createPortal(modalContent, document.body);
}
