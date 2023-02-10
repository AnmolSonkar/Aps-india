import React, { useState } from "react";

function App() {
  const [degreeStatus, setDegreeStatus] = useState("");
  const [gpa, setGpa] = useState("");
  const [aps, setAps] = useState("");

  const handleDegreeStatusChange = (e) => {
    setDegreeStatus(e.target.value);
  };

  const handleGpaChange = (e) => {
    setGpa(e.target.value);
  };

  const handleApsChange = (e) => {
    setAps(e.target.value);
  };

  let process;
  let intake;
  let condition1, condition2, condition3;
  if (
    degreeStatus === "COMPLETED" &&
    gpa === "<2.0" &&
    aps === "Required for application"
  ) {
    process = "Start APS Application";
    intake = "Feb";
  } else if (
    degreeStatus === "COMPLETED" &&
    gpa === "<2.0" &&
    aps === "Required for visa"
  ) {
    process = "Start APS Application";
    intake = "Feb";
  } else if (
    degreeStatus === "COMPLETED" &&
    gpa === "<2.5" &&
    aps === "Required for visa"
  ) {
    process =
      "Take the student consent before you start APS or wait for the offer letter";
    intake = "March-May";
  } else if (
    degreeStatus === "COMPLETED" &&
    gpa === "<2.5" &&
    aps === "Required for application"
  ) {
    process = "Start APS Application";
    intake = "Feb";
  } else if (
    degreeStatus === "In process (7th sem complete)" &&
    gpa === "<2.0 or >2.0" &&
    aps === "Required for application"
  ) {
    process = "Start APS on meeting all conditions";
    intake = "Feb-May";
  } else if (
    degreeStatus === "In process (7th sem complete)" &&
    gpa === "<2.0 or >2.0" &&
    aps === "Required for visa"
  ) {
    process =
      "Wait for the offer letter or final semester marksheet + provisional certificate ";
    intake = "Feb - May";
    condition1 = [
      "Condition 1: We won't submit an APS application for pursuing students by the deadline in April because APS is taking almost 4 months to make a decision",
    ];
    condition2 = [
      "Condition 2: Start the application if the student will get the final semester marksheet by the month of May.",
    ];
    condition3 = [
      "Condition 3: Universities are accepting pursuing applicants.",
    ];
  }
  return (
    <div className="h-screen mt-[150px] display-flex justify-content-center align-items-center text-left">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-10 text-center">
          Your gateway to study in Germany
        </h1>
        <h1 className="text-xl font-bold mb-5 text-left">
          Student Information
        </h1>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="degreeStatus"
            >
              Degree Status
            </label>

            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="degreeStatus"
              value={degreeStatus}
              onChange={handleDegreeStatusChange}
            >
              <option value="">Select</option>
              <option value="COMPLETED">Completed</option>
              <option value="In process (7th sem complete)">
                In process (7th sem complete)
              </option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="gpa"
            >
              GPA
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="gpa"
              value={gpa}
              onChange={handleGpaChange}
            >
              <option value="">Select</option>
              <option value="<2.0">&lt; 2.0</option>
              <option value="<2.5">&lt; 2.5</option>
              <option value="<2.0 or >2.0">&lt; 2.0 or &gt; 2.0</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="aps"
            >
              APS
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="aps"
              value={aps}
              onChange={handleApsChange}
            >
              <option value="">Select</option>
              <option value="Required for application">
                Required for application
              </option>
              <option value="Required for visa">Required for visa</option>
            </select>
          </div>
        </form>
      </div>
      {process && intake ? (
        <div className="result mt-10 w-[97%] mx-auto pl-3">
          <div className="mb-4 ">
            <p className="text-gray-700 font-medium mb-2">Process :</p>
            <p className="text-gray-600 font bg-green-400 rounded-lg p-2 pl-3 pr-3 shadow">
              {process}
            </p>
          </div>
          <div className="mb-4">
            <p className="text-gray-700 font-medium mb-2">Targeted month :</p>
            <p className="text-gray-600">
              <p className="text-green "></p>
              <p className="text-gray-600 font bg-green-400 rounded-lg p-2 pl-3 pr-3 shadow">
                {intake}
              </p>
              <div className="mt-3">
                <p>{condition1}</p>
                <p>{condition2}</p>
                <p>{condition3}</p>
              </div>
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
