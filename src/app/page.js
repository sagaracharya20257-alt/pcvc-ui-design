"use client";

import AppLayout from "../components/Layout/AppLayout";
import WelcomeScreen from "../components/Welcome/WelcomeScreen";
import DateVerificationModal from "../components/Verification/DateVerificationModal";
import DashboardScreen from "./Dashboard/page";
import useAppFlow from "../hooks/useAppFlow";

export default function Page() {
  const {
    currentScreen,
    showVerificationModal,
    handleGetStarted,
    handleCloseModal,
    handleVerification,
    handleBackToWelcome
  } = useAppFlow();

  const renderCurrentScreen = () => {
    switch (currentScreen) {
      case "welcome":
        return <WelcomeScreen onGetStarted={handleGetStarted} />;
      case "dashboard":
        return <DashboardScreen onBack={handleBackToWelcome} />;
      default:
        return <WelcomeScreen onGetStarted={handleGetStarted} />;
    }
  };

  console.log("Page render - currentScreen:", currentScreen, "showModal:", showVerificationModal);
  
  return (
    <AppLayout>
      {renderCurrentScreen()}

      <DateVerificationModal
        isOpen={showVerificationModal}
        onClose={handleCloseModal}
        onVerify={handleVerification}
      />
    </AppLayout>
  );
}
