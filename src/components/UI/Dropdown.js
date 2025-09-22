"use client";

import { useState, useEffect, useRef } from "react";

export default function Dropdown({ 
  label, 
  options = [], 
  value, 
  onChange, 
  placeholder = "Select",
  className = "",
  triggerClassName = "",
  dropdownClassName = "",
  optionClassName = "",
  labelClassName = "",
  showChevron = true,
  disabled = false,
  customTrigger,
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(value || "");
  const dropdownRef = useRef(null);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Update selected value when value prop changes
  useEffect(() => {
    setSelectedValue(value || "");
  }, [value]);

  const handleSelect = (optionValue, optionLabel) => {
    setSelectedValue(optionValue);
    setIsOpen(false);
    if (onChange) {
      onChange(optionValue, optionLabel);
    }
  };

  const selectedOption = options.find(option => option.value === selectedValue);
  const displayText = selectedOption ? selectedOption.label : placeholder;

  const defaultTriggerClasses = "w-full p-3 text-left bg-transparent cursor-pointer focus:outline-none flex items-center justify-between";
  const defaultDropdownClasses = "absolute top-full left-0 right-0 mt-1 bg-white border rounded-lg shadow-lg z-50 max-h-60 overflow-y-auto";
  const defaultOptionClasses = "w-full px-3 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none first:rounded-t-lg last:rounded-b-lg";

  return (
    <div ref={dropdownRef} className={`relative ${className}`} {...props}>
      {label && (
        <label className={`block text-sm text-gray-600 mb-3 ${labelClassName}`}>
          {label}
        </label>
      )}
      
      <div className="relative">
        {customTrigger ? (
          <div onClick={() => !disabled && setIsOpen(!isOpen)}>
            {customTrigger({ isOpen, selectedValue, displayText, disabled })}
          </div>
        ) : (
          <div
            className={`${defaultTriggerClasses} ${triggerClassName} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={() => !disabled && setIsOpen(!isOpen)}
          >
            <span className={selectedValue ? "text-gray-900" : "text-gray-400"}>
              {displayText}
            </span>
            {showChevron && (
              <svg 
                className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            )}
          </div>
        )}

        {isOpen && !disabled && (
          <div className={`${defaultDropdownClasses} ${dropdownClassName}`}
               style={{ borderColor: '#C9D3E9' }}>
            {options.map((option, index) => (
              <div
                key={option.value || index}
                className={`${defaultOptionClasses} ${optionClassName} ${selectedValue === option.value ? 'bg-blue-50' : ''}`}
                onClick={() => handleSelect(option.value, option.label)}
              >
                <span className="text-gray-900">{option.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
