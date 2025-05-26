// import { useState } from "react";
// import NewProject from "./components/NewProject";
// import ProjectList from "./components/ProjectList";


import PropsDrilling from "./components/PropsDrilling";
import Context from "./components/Context";
import { useEffect } from "react";
import Quiz from "./components/Quiz";

export default function App() {

  useEffect(() => {
    document.title = "Side effect"
  }, [])

  // const [projects, setProjects] = useState([]);

  // function handleAddProject(title) {
  //   setProjects((prev) => [...prev, title]);
  // }

  // const [employ, setEmploy] = useState("Context Link with State")
  return (
    <div >
      {/* <div className="bg-gray-800 text-white w-1/4 h-screen p-4">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
      </div>
      <main className="p-4 w-full">
        <NewProject onAddProject={handleAddProject} />
        <ProjectList projects={projects} />
      </main> */}
      <PropsDrilling />
      {/* <EmployeeContext.Provider value={{ course: "React JS - Context API" }}> */}
      {/* <EmployeeContext.Provider value={{ employ, setEmploy }}>
        <Context />
      </EmployeeContext.Provider> */}
      <Context />
      <Quiz />

    </div>
  );
}
