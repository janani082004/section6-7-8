// components/ProjectList.jsx
export default function ProjectList({ projects }) {
  return (
    <ul className="list-disc pl-5">
      {projects.map((proj, index) => (
        <li key={index}>{proj}</li>
      ))}
    </ul>
  );
}
