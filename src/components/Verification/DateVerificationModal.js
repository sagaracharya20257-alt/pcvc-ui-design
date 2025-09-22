"use client";

import Modal from "../UI/Modal";
import Input from "../UI/Input";
import Button from "../UI/Button";

export default function DateVerificationModal({ isOpen, onClose, onVerify }) {
  const handleProceed = () => {
    // Directly trigger verification without checking input
    onVerify();
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Verify Yourself">
      <div className="space-y-4">
        <p className="text-gray-600 text-md">
          Please Enter Date of Birth to Proceed Further
        </p>

        {/* Static input, disabled */}
        <Input
          label="Date of Birth"
          placeholder="DD/MM/YYYY"
          value="DD/MM/YYYY"
          disabled
          className="text-gray-400"
          style={{ borderColor: '#C9D3E9', borderRadius: '8px' }}
        />

        <Button
          variant="primary"
          className="w-full"
          onClick={handleProceed}
        >
          Proceed
        </Button>
      </div>
    </Modal>
  );
}
