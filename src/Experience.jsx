import { useState } from "react";

export function ExperienceForm() {
  const [experienceInformation, setExperienceInformation] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const updateCompany = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, company: e };
    });
  };

  const updatePosition = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, position: e };
    });
  };

  const updateStartDate = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, startDate: e };
    });
  };

  const updateEndDate = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, endDate: e };
    });
  };

  const updateLocation = (e) => {
    setExperienceInformation((previousState) => {
      return { ...previousState, location: e };
    });
  };

    const updateDescription = (e) => {
      setExperienceInformation((previousState) => {
        return { ...previousState, description: e };
      });
    };

  console.log(experienceInformation);

  return (
    <>
      <form className="contact-information-form">
        <div className="sidebar-container">
          <h1 className="header">Work Experience</h1>
          <label htmlFor="school-form">Company</label>
          <input
            value={experienceInformation.company}
            onChange={(e) => updateCompany(e.target.value)}
            type="text"
            id="school-form"
          ></input>
          <label htmlFor="degree-form">Position</label>
          <input
            value={experienceInformation.position}
            onChange={(e) => updatePosition(e.target.value)}
            type="text"
            id="degree-form"
          ></input>
          <label htmlFor="start-date-form">Start Date</label>
          <input
            value={experienceInformation.startDate}
            onChange={(e) => updateStartDate(e.target.value)}
            type="text"
            id="start-date-form"
          ></input>
          <label htmlFor="end-date-form">End Date</label>
          <input
            value={experienceInformation.endDate}
            onChange={(e) => updateEndDate(e.target.value)}
            type="text"
            id="end-date-form"
          ></input>
          <label htmlFor="location-form">Location</label>
          <input
            value={experienceInformation.location}
            onChange={(e) => updateLocation(e.target.value)}
            type="text"
            id="location-form"
          ></input>
          <label htmlFor="description-form">Description</label>
          <input
            value={experienceInformation.description}
            onChange={(e) => updateDescription(e.target.value)}
            type="text"
            id="location-form"
          ></input>
        </div>
      </form>
    </>
  );
}
