"use client";

import { useState } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function DateVerificationModal({ isOpen, onClose, onVerify }) {
  const [dateOfBirth, setDateOfBirth] = useState("");

  const handleDateChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    
    if (value.length >= 2) {
      value = value.substring(0, 2) + "/" + value.substring(2);
    }
    if (value.length >= 5) {
      value = value.substring(0, 5) + "/" + value.substring(5, 9);
    }
    
    setDateOfBirth(value);
  };

  const handleProceed = () => {
    if (dateOfBirth.length === 10) {
      onVerify(dateOfBirth);
      setDateOfBirth("");
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Yourself">
      <div className="space-y-4">
        <p className="text-gray-600 text-sm">
          Please Enter Date of Birth to Proceed Further
        </p>
        
        <Input
          label="Date of Birth"
          placeholder="DD/MM/YYYY"
          value={dateOfBirth}
          onChange={handleDateChange}
          maxLength="10"
        />
        
        <Button
          variant="primary"
          className="w-full"
          onClick={handleProceed}
          disabled={dateOfBirth.length !== 10}
        >
          Proceed
        </Button>
      </div>
    </Modal>
  );
}
