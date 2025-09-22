"use client";

import { useState } from "react";

export default function useAppFlow() {
  const [currentScreen, setCurrentScreen] = useState("welcome");
  const [showVerificationModal, setShowVerificationModal] = useState(false);

  const handleGetStarted = () => {
    console.log("handleGetStarted called - showing modal");
    setShowVerificationModal(true);
  };

  const handleCloseModal = () => {
    setShowVerificationModal(false);
  };

  const handleVerification = (dateOfBirth) => {
    console.log("Date of Birth submitted:", dateOfBirth);
    setShowVerificationModal(false);
    setCurrentScreen("dashboard");
  };

  const handleBackToWelcome = () => {
    setCurrentScreen("welcome");
  };

  return {
    currentScreen,
    showVerificationModal,
    handleGetStarted,
    handleCloseModal,
    handleVerification,
    handleBackToWelcome,
  };
}
