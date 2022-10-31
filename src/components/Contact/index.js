import React from "react";
import {
  ContactContainer,
  ContactContent,
  ContactH1,
  ContactH2,

  ContactSpace2,
} from "./ContactElements";

function ContactForm() {
  return (
    <ContactContainer>
      <ContactContent>
        <ContactH1>Contact</ContactH1>
      </ContactContent>
      <ContactContent>
        <ContactSpace2></ContactSpace2>
        <ContactH2>Github: s-orug</ContactH2>
        <ContactH2>LinkedIn: Sai Durga Rithvik Oruganti</ContactH2>
        <ContactH2>Email: sdroruganti@gmail.com</ContactH2>
        <ContactH2>Phone: +1 (803)508-5164</ContactH2>
      </ContactContent>
    </ContactContainer>
  );
}

export default ContactForm;
