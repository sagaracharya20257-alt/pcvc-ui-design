import Button from "../UI/Button";

export default function WelcomeScreen({ onGetStarted }) {
    return (
        <div className="flex flex-col min-h-screen">

            <div className="flex-1 px-6 pb-6">
                <div className="pt-12 flex items-center space-x-2">
                    <img src="/hdfc-logo.svg" alt="HDFC Life Logo" className="w-[58.58px] h-[38px]" />
                </div>
                <div className="mb-8 mt-14">
                    <h1 className="text-xl text-gray-900 mb-2">
                        Welcome to
                    </h1>
                    <h2
                        className="inline-block text-4xl font-bold leading-[48px] tracking-normal align-middle mb-2 
             bg-gradient-to-r from-[#ED1C24] to-[#005E9E] text-transparent bg-clip-text"
                    >
                        Non-assisted
                    </h2>

                    <p className="text-xl text-gray-900">Pre-conversion verification</p>
                </div>

                <div className="relative mb-8 ">
                    <img
                        src="/photo.svg"
                        alt="Person"
                        className="object-contain w-full relative z-10"
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 bg-blue-100 rounded-2xl z-0"
                        style={{ height: "305px" }}
                    ></div>
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
