import Button from "./Button";

export default function ProjectsSidebar({
  onStartAddProject,
  onSelectProject,
  projects,
}) {
  return (
    <aside className="w-1/3 bg-blue-800 text-stone-50 md:w-72 py-16 px-8 rounded-r-xl">
      <h2 className="md:text-xl font-bold uppercase mb-8">Your Projects</h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="text-center mt-8">
        {projects.map((project) => (
          <li key={project.id}>
            <button
              onClick={() => onSelectProject(project.id)}
              className="w-full px-2 py-1 rounded-md my-1 text-slate-50 hover:bg-blue-950"
            >
              {project.title}
            </button>
          </li>
        ))}
        <li></li>
      </ul>
    </aside>
  );
}
