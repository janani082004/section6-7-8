import React, { useState, createContext } from "react";

export const EmployeeContext = React.createContext();
export default function CourseProvider({ children }) {

  const [employ, setEmploy] = useState("Context Link with State")
  return (
    <>
      <EmployeeContext.Provider value={{ employ, setEmploy }}>
        {children}
      </EmployeeContext.Provider>
    </>
  )
}