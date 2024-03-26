/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
  });

  return (
    <ContactContext.Provider value={{ details, setDetails }}>
      {children}
    </ContactContext.Provider>
  );
};

export default ContactProvider;
