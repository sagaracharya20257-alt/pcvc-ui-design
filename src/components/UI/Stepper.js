export default function Stepper({ steps, activeStep }) {
  return (
    <div className="flex items-center justify-between border border-yellow-400 rounded-lg px-4 py-2 bg-white">
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        return (
          <div key={index} className="flex items-center">
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border-2 ${
                isActive ? "border-red-500 text-red-500" : "border-gray-400 text-gray-400"
              }`}
            >
              {isActive ? "●" : "○"}
            </div>
            <span
              className={`ml-2 text-sm font-medium ${
                isActive ? "text-red-500" : "text-gray-500"
              }`}
            >
              {step}
            </span>
            {index < steps.length - 1 && (
              <div className="mx-2 w-8 h-px bg-gray-300"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}
