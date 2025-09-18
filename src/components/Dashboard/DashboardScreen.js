import Button from "../UI/Button";
import { CheckCircle } from "lucide-react";
export default function DashboardScreen({ onBack }) {
    return (
        <div className="flex flex-col min-h-screen pt-6">
            <div className="flex items-center space-x-2">
                <img src="/hdfc-logo.svg" alt="HDFC Life Logo" className="w-8 h-8" />
            </div>
            <div className="flex-1 px-6 pb-6">
                <Button variant="outline" className="w-full" onClick={onBack}>
                    Back to Welcome
                </Button>
            </div>
        </div>
  );
}
