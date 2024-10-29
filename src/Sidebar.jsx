import { ContactInformationForm } from "./ContactInformationForm";
import { EducationForm } from "./EducationForm";

export function Sidebar() {
  return (
    <div className="sidebar">
      <ContactInformationForm></ContactInformationForm>
      <EducationForm></EducationForm>
    </div>
  );
}
