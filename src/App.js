import { useState } from "react";
import NewProject from "./components/NewProject";
import ProjectList from "./components/ProjectList";

export default function App() {
  const [projects, setProjects] = useState([]);

  function handleAddProject(title) {
    setProjects((prev) => [...prev, title]);
  }

  return (
    <div className="flex">
      <div className="bg-gray-800 text-white w-1/4 h-screen p-4">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
      </div>
      <main className="p-4 w-full">
        <NewProject onAddProject={handleAddProject} />
        <ProjectList projects={projects} />
      </main>
    </div>
  );
}
