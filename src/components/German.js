import React, { useState } from "react";

const MathCalculator = () => {
  const [nMax, setNMax] = useState("");
  const [nMin, setNMin] = useState("");
  const [nd, setNd] = useState("");
  const [result, setResult] = useState("");
  const [description, setDescription] = useState("");

  const calculateResult = () => {
    const x = 1 + (3 * (nMax - nd)) / (nMax - nMin);
    setResult(x.toFixed(2));

    if (x >= 1.0 && x <= 1.5) {
      setDescription("Very good (excellent performance)");
    } else if (x > 1.5 && x <= 2.5) {
      setDescription("Good (performance well above average)");
    } else if (x > 2.5 && x <= 3.5) {
      setDescription("Satisfactory (average performance)");
    } else if (x > 3.5 && x <= 4.0) {
      setDescription(
        "Sufficient (performance meets the standards in spite of deficiencies)"
      );
    } else if (x > 4.0) {
      setDescription(
        "Fail (performance does not meet the standards because of substantial deficiencies)"
      );
    }
  };

  return (
    <div className="h-screen mt-[150px] display-flex justify-content-center align-items-center text-left">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Your gateway to study in Germany
        </h1>

        <div className="p-6 max-w-sm mx-auto">
          <h1 className="text-xl font-bold mb-4">German Calculator</h1>
          <div className="mb-4">
            <label htmlFor="nMax" className="block mb-2">
              Maximum grade at your university:
            </label>
            <input
              className="border p-2 w-full"
              type="number"
              id="nMax"
              value={nMax}
              onChange={(e) => setNMax(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nMin" className="block mb-2">
              Minimum passing grade at your university:
            </label>
            <input
              className="border p-2 w-full"
              type="number"
              id="nMin"
              value={nMin}
              onChange={(e) => setNMin(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="nd" className="block mb-2">
              Your current overall grade at your university:
            </label>
            <input
              className="border p-2 w-full"
              type="number"
              id="nd"
              value={nd}
              onChange={(e) => setNd(e.target.value)}
            />
          </div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded"
            onClick={calculateResult}
          >
            Convert
          </button>
          <p className="mt-4 font-bold">
            Your grade in the German system: {result}
          </p>
        </div>
        <div>
          <div>
            {description ? (
              <div>
                {description === "Very good (excellent performance)" ? (
                  <p className="text-gray-800 font lg:w-4/12 w-11/12 mx-auto bg-green-400 rounded-lg p-2 pl-3 mt-1 lg:mt-4 pr-3 shadow">
                    {description}
                  </p>
                ) : description === "Good (performance well above average)" ? (
                  <p className="text-gray-800 font lg:w-4/12 w-11/12 mx-auto bg-green-400 rounded-lg p-2 pl-3 mt-1 lg:mt-4 pr-3 shadow">
                    {description}
                  </p>
                ) : description === "Satisfactory (average performance)" ? (
                  <p className="text-gray-800 font lg:w-4/12 w-11/12 mx-auto bg-green-400 rounded-lg p-2 pl-3 mt-1 lg:mt-4 pr-3 shadow">
                    {description}
                  </p>
                ) : description ===
                  "Sufficient (performance meets the standards in spite of deficiencies)" ? (
                  <p className="text-gray-800 font lg:w-4/12 w-11/12 mx-auto bg-green-400 rounded-lg p-2 pl-3 mt-1 lg:mt-4 pr-3 shadow">
                    {description}
                  </p>
                ) : (
                  <p className="text-gray-800 font lg:w-4/12 w-11/12 mx-auto bg-red-400 rounded-lg p-2 pl-3 mt-1 lg:mt-4 pr-3 shadow">
                    {description}
                  </p>
                )}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MathCalculator;
