import { FC } from "react";

import {Section, HomeSection} from "./nav-sections.style"
interface Section {
  id: string;
  content: React.ReactNode;
}

const sections = [
  { id: "home", label: "Home", bgColor: "" },
  { id: "about", label: "About", bgColor: "var(--navColor2)" },
  { id: "skills", label: "Skills", bgColor: "var(--navColor3)" },
  { id: "projects", label: "Projects", bgColor: "var(--navColor4)" },
  { id: "contact", label: "Contact", bgColor: "var(--navColor5)" },
];

const Sections: FC = () => (
  <>
    {sections.map((section) =>
      section.id === "home" ? (
        <HomeSection key={section.id} id={section.id} bgColor="">
          <a href="https://jacinto.design" target="_blank" rel="noreferrer">
            Jacinto Design
          </a>
        </HomeSection>
      ) : (
        <Section key={section.id} id={section.id} bgColor={section.bgColor}>
          <h1>{section.label}</h1>
        </Section>
      )
    )}
  </>
);

export default Sections;
