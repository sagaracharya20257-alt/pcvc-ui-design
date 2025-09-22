import Image from "next/image";
import Card from "../../components/UI/Card";
import Stepper from "../../components/UI/Stepper";
import Button from "../../components/UI/Button";
import Badge from "../../components/UI/Badge";
import Dropdown from "../../components/UI/Dropdown";

export default function DashboardScreen() {
    return (
        <div className="h-full flex flex-col">
            <Card className="bg-white shadow-sm rounded-lg m-4 p-0 h-[141px] relative overflow-hidden">
                <div className="absolute top-[9px] right-[10px] z-10">
                    <Image
                        src="/hdfc-logo.svg"
                        alt="HDFC Life Logo"
                        width={44}
                        height={29}
                        className="object-contain w-11 h-7"
                    />
                </div>

                <div className="flex flex-row h-full">
                    <div className="flex-1 flex flex-col justify-center gap-3 px-4 py-4">
                        <Badge 
                            variant="info" 
                            size="md"
                            className="w-24 h-6"
                        >
                            Non Assisted
                        </Badge>
                        <h2 className="text-sm bg-gradient-to-r from-[#ED1C24] to-[#005E9E] bg-clip-text text-transparent font-bold">
                            Pre Conversion Verification
                        </h2>
                        <p className="text-sm font-normal text-gray-600 max-w-[178px]">
                            Verify your application in minutes
                        </p>
                    </div>

                    <div className="absolute bottom-0 right-0 z-5" style={{ right: '-1px', bottom: '-1px' }}>
                        <Image
                            src="/dashboard.svg"
                            alt="Dashboard Illustration"
                            width={197}
                            height={96}
                            className="object-contain object-right object-bottom"
                            style={{ width: '197px', height: '96px' }}
                        />
                    </div>
                </div>
            </Card>

            <div className="px-4 mb-4">
                <Stepper
                    steps={["Verify Details", "Customer Details", "Policy Details"]}
                    activeStep={0}
                />
            </div>

            <div className="px-4 flex-1">
                <Card className="p-6">
                    <div style={{ height: '24px' }}>
                        <p className="text-md font-semibold text-gray-900">
                            Please check and confirm details
                        </p>
                    </div>
                    
                    <div style={{ height: '23px' }}></div>

                    <div className="border-b border-gray-200" style={{ height: '52px' }}>
                        <div style={{ height: '16px' }}>
                            <p className="text-sm text-gray-600">Application No.</p>
                        </div>
                        <div style={{ height: '36px' }} className="flex items-center">
                            <p className="text-base font-medium text-gray-900">1100026323587</p>
                        </div>
                    </div>
                    
                    <div style={{ height: '23px' }}></div>
                    
                    <div className="border-b border-gray-200" style={{ height: '52px' }}>
                        <div style={{ height: '16px' }}>
                            <p className="text-sm text-gray-600">Mobile No.</p>
                        </div>
                        <div style={{ height: '36px' }} className="flex items-center">
                            <p className="text-base font-medium text-gray-900">+91 8764578235</p>
                        </div>
                    </div>
                    
                    <div style={{ height: '23px' }}></div>
                    
                    <div className="border-b border-gray-200" style={{ height: '52px' }}>
                        <div style={{ height: '16px' }}>
                            <p className="text-sm text-gray-600">Preferred Language</p>
                        </div>
                        <div style={{ height: '36px' }} className="flex items-center">
                            <Dropdown
                                placeholder="Select"
                                triggerClassName="text-base"
                                options={[
                                    { value: "english", label: "English" },
                                    { value: "hindi", label: "Hindi" },
                                    { value: "marathi", label: "Marathi" },
                                    { value: "gujarati", label: "Gujarati" }
                                ]}
                                onChange={(value, label) => {
                                    console.log("Selected:", value, label);
                                }}
                            />
                        </div>
                    </div>
                </Card>
            </div>

            <div className="flex gap-4 px-4 py-[15px]">
                <Button variant="outline" className="flex-1 h-[40px] py-2">
                    Disagree
                </Button>
                <Button variant="primary" className="flex-1 h-[40px] py-2">
                    Agree
                </Button>
            </div>
        </div>
    );
}
