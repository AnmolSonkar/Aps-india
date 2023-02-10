import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div className="flex text-white justify-center lg:mt-5 mt-52 bg-[#1f1f1f]">
        <div className="py-4  text-sm text-white">
          <p className="text-center">
            Copyright &copy;
            <span> 2022</span>
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
