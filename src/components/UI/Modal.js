import { X } from "lucide-react";

export default function Modal({ isOpen, onClose, children, title }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end justify-center z-50">
      <div
        className="
          bg-white 
          w-[390px] 
          h-[294px] 
          rounded-t-[20px] 
          p-[23px_24px] 
          flex flex-col
          relative
          mb-4
        "
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
