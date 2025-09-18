import Button from "../UI/Button";
import { CheckCircle } from "lucide-react";
export default function DashboardScreen({ onBack }) {
    return (
        <div className=" min-h-screen">
            <div className="flex flex-col pt-6">
                <div className="flex items-center space-x-2">
                    <img src="/hdfc-logo.svg" alt="HDFC Life Logo" className="w-8 h-8" />
                </div>
                <div className="flex-1 px-6 pb-6">
                    <Button variant="outline" className="w-full" onClick={onBack}>
                        Back to Welcome
                    </Button>
                </div>
                <div>

                </div>
            </div>
            <div className="flex gap-4 px-4 py-[15px]">
                <Button variant="outline" className="flex-1 h-[40px]" py-2>
                    Disagree
                </Button>
                <Button variant="primary" className="flex-1 h-[40px]" py-2>
                    Agree
                </Button>
            </div>
        </div>
    );
}
