import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="flex justify-center lg:mt-5 mt-52 bg-gray-100 shadow-md">
        <div className="py-4  text-sm text-[#666666]">
          <p className="p-3 pl-4" >*Disclaimer: Taking the quiz does not guarantee admission to any academic programme. It only guides the candidate to the appropriate eligibility criteria as it applies to them. Admission to all academic programmes will be at the sole discretion of the German universities.</p>
          <p className="text-center mt-5">
            Copyright &copy;
            <span> 2023</span>
          </p>
          <p className="text-center">
            Designed & Developed By
            <a
              className="underline ml-1"
              href="https://www.linkedin.com/in/anmol-sonkar"
            >
              Anmol Sonkar
            </a>
          </p>
        </div>
      </div>
    );
  }
}
