import { useState } from "react";

export function ContactInformationForm() {
  const [contactInformation, setContactInformation] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  return (
    <form className="contact-information-form">
      <div className="sidebar-container">
        <label htmlFor="name-form">Full Name</label>
        <input
          value={contactInformation.name}
          onChange={(e) => setContactInformation(e.target.value)}
          type="text"
          id="name-form"
        ></input>
        <label htmlFor="email-form">Email</label>
        <input
          value={contactInformation.email}
          onChange={(e) => setContactInformation(e.target.value)}
          type="text"
          id="email-form"
        ></input>
        <label htmlFor="phone-number-form">Phone Number</label>
        <input
          value={contactInformation.phoneNumber}
          onChange={(e) => setContactInformation(e.target.value)}
          type="text"
          id="phone-number-form"
        ></input>
        <label htmlFor="address-form">Address</label>
        <input
          value={contactInformation.address}
          onChange={(e) => setContactInformation(e.target.value)}
          type="text"
          id="address-form"
        ></input>
      </div>
    </form>
  );
}
