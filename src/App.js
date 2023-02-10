import React, { useState } from "react";
import Aps from "./components/Aps";
import Apseligibility from "./components/Apseligibility";

const App = () => {
  const [component, setComponent] = useState("aps");

  return (
    <div className="mx-auto mt-10 mb-10 bg-gray-100 ">
      <div className="flex justify-between">
        <button
          onClick={() => setComponent("aps")}
          className="bg-primary text-black  underline py-3 font-bold px-5 rounded-lg hover:bg-primary-dark"
        >
          APS Process
        </button>
        <button
          onClick={() => setComponent("apseligibility")}
          className="bg-secondary font-bold underline text-black py-3 px-5 rounded-lg hover:bg-secondary-dark"
        >
          APS Eligibility Check
        </button>
      </div>

      {component === "aps" && <Aps />}
      {component === "apseligibility" && <Apseligibility />}
    </div>
  );
};

export default App;
