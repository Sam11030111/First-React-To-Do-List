import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, textarea, ...props }, ref) {
  const classes =
    "w-full p-1 rounded-sm border-b-2 border-sky-500 bg-slate-200 text-slate-500 focus:outline-none focus:border-sky-700";

  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm uppercase font-bold text-sky-950">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className={classes} {...props}></textarea>
      ) : (
        <input ref={ref} className={classes} {...props}></input>
      )}
    </p>
  );
});

export default Input;
