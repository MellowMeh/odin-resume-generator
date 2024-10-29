import { ContactInformationForm } from "./ContactInformationForm";
import { EducationForm } from "./EducationForm";
import { ExperienceForm } from "./Experience";

export function Sidebar() {
  return (
    <div className="sidebar">
      <ContactInformationForm></ContactInformationForm>
      <EducationForm></EducationForm>
      <ExperienceForm></ExperienceForm>
    </div>
  );
}
