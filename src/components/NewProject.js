// components/NewProject.jsx
import { useState } from "react";

export default function NewProject({ onAddProject }) {
  const [projectName, setProjectName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!projectName.trim()) return;
    onAddProject(projectName);
    setProjectName("");
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        className="border px-2 py-1 mr-2"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
        placeholder="Enter project name"
      />
      <button className="bg-blue-600 text-white px-3 py-1 rounded">
        Add
      </button>
    </form>
  );
}
