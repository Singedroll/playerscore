import { useState } from "react";
const messege = ["learn react", "apply jobs", "invest your new income"];
const StepPage = () => {
  const [step, setStep] = useState(0);
  const [isHideSteps, setIsHideSteps] = useState(true);

  const incrementStep = () => {
    if (step < 3) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handlePrevStep = () => {
    if (step > 0) {
      setStep((prevStep) => prevStep - 1);
    }
  };
  const toggleSteps = () => {
    setIsHideSteps(!isHideSteps);
  };
  return (
    <div className="w-[500px] mx-auto border border-solid">
      <div
        onClick={toggleSteps}
        className="flex items-center justify-center w-10 h-10 bg-blue-200 rounded-full"
      >
        X
      </div>
      {isHideSteps && (
        <div>
          <div className="flex justify-between mb-10">
            <div
              className="flex items-center justify-center w-10 h-10 text-white rounded-full"
              style={{ backgroundColor: step >= 1 ? "purple" : "gray" }}
            >
              1
            </div>
            <div
              className="flex items-center justify-center w-10 h-10 text-white rounded-full"
              style={{ backgroundColor: step >= 2 ? "purple" : "gray" }}
            >
              2
            </div>
            <div
              className="flex items-center justify-center w-10 h-10 text-white rounded-full"
              style={{ backgroundColor: step >= 3 ? "purple" : "gray" }}
            >
              3
            </div>
          </div>

          <p className="mb-10 text-center">{messege[step - 1]}</p>
          <div className="flex gap-2">
            <button onClick={handlePrevStep}>prev</button>
            <button onClick={incrementStep}>next</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default StepPage;
