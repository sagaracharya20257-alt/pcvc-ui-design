import Button from "../UI/Button";
export default function WelcomeScreen({ onGetStarted }) {
    return (
        <div className="flex flex-col min-h-screen">

            <div className="flex-1 px-6 pb-6">
                <div className="pt-12 flex items-center space-x-2">
                    <img src="/hdfc-logo.svg" alt="HDFC Life Logo" className="w-[58.58px] h-[38px]" />
                </div>
                <div className="mb-8 mt-14">
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome to
                    </h1>
                    <h2 className="text-4xl font-bold bg-gradient-to-r from-[#ED1C24] to-[#005E9E] text-transparent bg-clip-text leading-[48px] tracking-normal items-center mb-2">
                        Non-assisted
                    </h2>
                    <p className="text-gray-600">Pre-conversion verification</p>
                </div>

                <div className="bg-blue-100 rounded-2xl p-8 mb-8 flex items-center justify-center">
                </div>

                <p className="text-gray-600 text-center mb-8">
                    Review applicant details and confirm.
                </p>

                <Button
                    variant="outline"
                    className="w-full"
                    onClick={onGetStarted}
                >
                    Get Started
                </Button>
            </div>
        </div>
    );
}
