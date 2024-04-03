import { useRef } from "react";

import Input from "./Input";

export default function NewProject({ onAdd, onCancel }) {
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  function handleSave() {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      console.log("Something missing.");
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  }

  return (
    <>
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end items-center gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-sky-950 hover:text-red-500"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="bg-blue-800 px-6 py-2 text-slate-50 rounded-md hover:bg-blue-500"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="title" type="text" />
          <Input ref={description} label="description" textarea type="text" />
          <Input ref={dueDate} label="due date" type="date" />
        </div>
      </div>
    </>
  );
}
