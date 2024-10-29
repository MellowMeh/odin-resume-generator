import { useState } from "react";

export function EducationForm() {
  const [educationInformation, setEducationInformation] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  const updateSchool = (e) => {
    setEducationInformation((previousState) => {
      return { ...previousState, school: e };
    });
  };

    const updateDegree = (e) => {
      setEducationInformation((previousState) => {
        return { ...previousState, degree: e };
      });
    };
  
    const updateStartDate = (e) => {
      setEducationInformation((previousState) => {
        return { ...previousState, startDate: e };
      });
    };
  
    const updateEndDate = (e) => {
      setEducationInformation((previousState) => {
        return { ...previousState, endDate: e };
      });
    };
  
    const updateLocation = (e) => {
      setEducationInformation((previousState) => {
        return { ...previousState, location: e };
      });
    };

  console.log(educationInformation);

  return (
    <>
      <form className="contact-information-form">
        <div className="sidebar-container">
          <h1 className="header">Education</h1>
          <label htmlFor="school-form">School</label>
          <input
            value={educationInformation.school}
            onChange={(e) => updateSchool(e.target.value)}
            type="text"
            id="school-form"
          ></input>
          <label htmlFor="degree-form">Degree</label>
          <input
            value={educationInformation.degree}
            onChange={(e) => updateDegree(e.target.value)}
            type="text"
            id="degree-form"
          ></input>
          <label htmlFor="start-date-form">Start Date</label>
          <input
            value={educationInformation.startDate}
            onChange={(e) => updateStartDate(e.target.value)}
            type="text"
            id="start-date-form"
          ></input>
          <label htmlFor="end-date-form">End Date</label>
          <input
            value={educationInformation.endDate}
            onChange={(e) => updateEndDate(e.target.value)}
            type="text"
            id="end-date-form"
          ></input>
          <label htmlFor="location-form">Location</label>
          <input
            value={educationInformation.location}
            onChange={(e) => updateLocation(e.target.value)}
            type="text"
            id="location-form"
          ></input>
        </div>
      </form>
    </>
  );
}
