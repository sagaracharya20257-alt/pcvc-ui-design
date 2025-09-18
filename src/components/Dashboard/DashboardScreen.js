import Button from "../UI/Button";
import { CheckCircle } from "lucide-react";
export default function DashboardScreen({ onBack }) {
    return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center space-x-2">
        <img src="/hdfc-logo.svg" alt="HDFC Life Logo" className="w-8 h-8" />
      </div>

      <div className="flex-1 p-6">
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Verification Successful!
          </h2>
          <p className="text-gray-600">
            You can now proceed with your application.
          </p>
        </div>

        <div className="space-y-4">
          <Button variant="primary" className="w-full">
            Continue Application
          </Button>
          <Button variant="outline" className="w-full" onClick={onBack}>
            Back to Welcome
          </Button>
        </div>
      </div>
    </div >
  );
}
