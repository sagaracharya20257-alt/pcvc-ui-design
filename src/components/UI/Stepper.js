export default function Stepper({ steps, activeStep }) {
  return (
    <div 
      className="flex items-center bg-white rounded-lg overflow-hidden p-0"
      style={{
        width: '475px',
        height: '60px'
      }}
    >
      {steps.map((step, index) => {
        const isActive = index === activeStep;
        const isCompleted = index < activeStep;
        
        return (
          <div key={index} className="flex items-center">
            <div
              className="rounded-full flex-shrink-0 border-3 border-solid bg-white"
              style={{
                width: '25px',
                height: '25px',
                borderColor: isActive 
                  ? '#ED1C24' 
                  : isCompleted
                  ? '#22C55E'
                  : '#A4B6DA'
              }}
            />        
            <div
              className={`ml-2 text-xs font-medium leading-tight flex flex-col justify-center ${
                isActive
                  ? "text-red-500"
                  : isCompleted
                  ? "text-green-600"
                  : "text-gray-600"
              }`}
              style={{
                fontWeight: 500,
                fontSize: '12px',
                lineHeight: '16px',
                minWidth: '45px',
                height: '40px'
              }}
            >
              {step.split(' ').map((word, wordIndex) => (
                <div key={wordIndex}>{word}</div>
              ))}
            </div>
            {index < steps.length - 1 && (
              <div 
                className={`mx-2 ${
                  isCompleted ? "bg-green-500" : "bg-gray-300"
                }`}
                style={{
                  width: '16.7px',
                  height: '1px',
                  borderColor: isCompleted ? '#22C55E' : '#000000'
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
