import { useState } from "react";

export function ContactInformationForm() {
  const [contactInformation, setContactInformation] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });
  
  const updateName = (e) => {
    setContactInformation(previousState => {
      return {...previousState, name: e}
    })
  }

    const updateEmail = (e) => {
      setContactInformation((previousState) => {
        return { ...previousState, email: e };
      });
    };

    const updatePhone = (e) => {
      setContactInformation((previousState) => {
        return { ...previousState, phoneNumber: e };
      });
    };
  
    const updateAddress = (e) => {
      setContactInformation((previousState) => {
        return { ...previousState, address: e };
      });
    };
  
  
  console.log(contactInformation)

  return (
    <form className="contact-information-form">
      <div className="sidebar-container">
        <h1 className="header">Contact Information</h1>
        <label htmlFor="name-form">Full Name</label>
        <input
          value={contactInformation.name}
          onChange={(e) => updateName(e.target.value)}
          type="text"
          id="name-form"
        ></input>
        <label htmlFor="email-form">Email</label>
        <input
          value={contactInformation.email}
          onChange={(e) => updateEmail(e.target.value)}
          type="text"
          id="email-form"
        ></input>
        <label htmlFor="phone-number-form">Phone Number</label>
        <input
          value={contactInformation.phoneNumber}
          onChange={(e) => updatePhone(e.target.value)}
          type="text"
          id="phone-number-form"
        ></input>
        <label htmlFor="address-form">Address</label>
        <input
          value={contactInformation.address}
          onChange={(e) => updateAddress(e.target.value)}
          type="text"
          id="address-form"
        ></input>
      </div>
    </form>
  );
}
