import React, { useState } from "react";

function Apseligibility() {
  const [highestqualification, sethighestqualification] = useState("");
  const [percentage12th, setPercentage12th] = useState("");
  const [appearedForExams, setappearedForExams] = useState("");
  const [semester, setsemester] = useState("");
  const [course, setcourse] = useState("");

  const handlehighestqualificationChange = (e) => {
    sethighestqualification(e.target.value);
  };

  const handlePercentage12thChange = (e) => {
    setPercentage12th(e.target.value);
  };

  const handleappearedForExamsChange = (e) => {
    setappearedForExams(e.target.value);
  };

  const handlesemester = (e) => {
    setsemester(e.target.value);
  };

  const handlecourse = (e) => {
    setcourse(e.target.value);
  };

  let result = "";

  if (highestqualification === "12") {
    if (percentage12th === "Less than 50%") {
      result = "You do not qualify for admission in German universities.";
    } else if (percentage12th === "More than 50%") {
      if (appearedForExams === "JEE Mains") {
        result =
          "You are eligible for a direct subject-restricted admission in a bachelor's programme related to your previous field of studies.";
      } else if (appearedForExams === "CUET") {
        result =
          "You are eligible for subject-restricted admission to a preparatory course (Studienkolleg).";
      } else if (appearedForExams === "NO") {
        result =
          "You are eligible for subject-restricted admission to a preparatory course (Studienkolleg)";
      }
    }
  } else if (highestqualification === "13") {
    result = "You do not qualify for admission in German universities.";
  } else if (semester === "n2") {
    result =
      "You are eligible for subject-restricted admission to a preparatory course (Studienkolleg)";
  } else if (semester === "m2") {
    if (highestqualification === "EUG") {
      if (percentage12th === "Less than 50%") {
        result = "You do not qualify for admission in German universities.";
      } else if (percentage12th === "More than 50%") {
        result =
          "You are eligible for a direct subject-restricted admission in a bachelor's programme related to your previous field of studies.";
      }
    }
  } else if (highestqualification === "3UG") {
    if (course === "normal") {
      result =
        "You are eligible for a direct subject-restricted admission in a bachelor's programme related to your previous field of studies.";
    } else if (course === "hons") {
      result =
        "You are eligible for direct subject-restricted admission in bachelors or masters programme at the discretion of German universities.";
    }
  } else if (highestqualification === "UG4" || highestqualification === "PG2") {
    result =
      "You qualify for direct general admission for academic studies in any masters programme.";
  } else {
    result = "";
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
              htmlFor="highestAcademicQualification"
            >
              Your highest academic qualification
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              id="highestAcademicQualification"
              value={highestqualification}
              onChange={handlehighestqualificationChange}
            >
              <option value="">Select</option>
              <option value="12">10 + 2 (Senior Secondary Certificate)</option>
              <option value="13">
                10 + 3 (Secondary certificate + 3 years technical diploma)
              </option>
              <option value="EUG">
                Enrolled in any Bachelor’s Programme at a recognised Indian
                university
              </option>

              <option value="3UG">Completed 3-year Bachelor Programme</option>

              <option value="UG4">
                Completed 4 years or more Bachelors Programme
              </option>
              <option value="PG2">2 years or more Masters Programme</option>
            </select>
          </div>

          {highestqualification === "12" || highestqualification === "EUG" ? (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="percentage12th"
              >
                Your percentage in 12th class
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="percentage12th"
                value={percentage12th}
                onChange={handlePercentage12thChange}
              >
                <option value="">Select</option>
                <option value="Less than 50%">Less than 50%</option>
                <option value="More than 50%">More than 50%</option>
              </select>
            </div>
          ) : null}

          {highestqualification === "12" &&
          percentage12th === "More than 50%" ? (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="percentage12th"
              >
                Did you appear for any pre-university entrance exams?
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="percentage12th"
                value={appearedForExams}
                onChange={handleappearedForExamsChange}
              >
                <option value="">Select</option>
                <option value="JEE Mains">JEE Main and Advanced</option>
                <option value="CUET">
                  CUET or any other Pre-University Exam
                </option>
                <option value="NO">
                  No, I did not appear for any entrance exams
                </option>
              </select>
            </div>
          ) : null}

          {highestqualification === "EUG" ? (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="percentage12th"
              >
                Number of semesters completed
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="semester"
                value={semester}
                onChange={handlesemester}
              >
                <option value="">Select</option>
                <option value="m2">
                  Completed minimum of two semesters (one year of bachelor
                  studies)
                </option>
                <option value="n2">
                  Completed less than two semesters (less than 1 year)
                </option>
              </select>
            </div>
          ) : null}

          {highestqualification === "3UG" ? (
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="percentage12th"
              >
                Course pursued
              </label>
              <select
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="semester"
                value={course}
                onChange={handlecourse}
              >
                <option value="">Select</option>
                <option value="normal">I pursued a General/Pass course </option>
                <option value="hons">
                  I pursued an Honours/Subject-specific course{" "}
                </option>
              </select>
            </div>
          ) : null}
        </form>
      </div>

      <div>
        {result ? (
          <div className="result mt-10 w-[97%] mx-auto pl-3">
            <div className="mb-4 ">
              <p className="text-gray-700 font-medium mb-2">Result :</p>
              {result ===
              "You do not qualify for admission in German universities." ? (
                <p className="text-gray-800 font bg-red-400 rounded-lg p-2 pl-3 pr-3 shadow">
                  {result}
                </p>
              ) : (
                <p className="text-gray-800 font bg-green-400 rounded-lg p-2 pl-3 pr-3 shadow">
                  {result}
                </p>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Apseligibility;
