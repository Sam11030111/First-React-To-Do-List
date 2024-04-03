import Tasks from "./Tasks";

export default function SelectedProject({
  project,
  onAddTask,
  onDeleteTask,
  onDeleteProject,
  tasks,
}) {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-blue-700">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-sky-400">{project.title}</h1>
          <button
            onClick={onDeleteProject}
            className="bg-blue-700 px-4 py-2 rounded-md text-slate-50 hover:bg-red-400"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-500">{project.dueDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAdd={onAddTask} onClear={onDeleteTask} tasks={tasks} />
    </div>
  );
}
