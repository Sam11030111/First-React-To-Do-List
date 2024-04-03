import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onClear }) {
  return (
    <section>
      <h2>Tasks</h2>
      <NewTask onAddTask={onAdd} />
      {tasks.length === 0 && (
        <p className="my-8 text-stone-500">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="bg-slate-200 p-4 mt-8 rounded-md">
          {tasks.map((task) => (
            <li
              key={task.id}
              className="flex justify-between items-center border-blue-800 border-b mb-4 py-2"
            >
              <span>{task.text}</span>
              <button
                onClick={() => onClear(task.id)}
                className="hover:text-red-500"
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
