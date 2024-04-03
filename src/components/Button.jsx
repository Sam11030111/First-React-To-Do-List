export default function Button({ children, ...props }) {
  return (
    <button
      className="bg-blue-400 text-stone-50 px-4 py-2 text-xs md:text-base rounded-md hover:bg-blue-200 hover:text-stone-800"
      {...props}
    >
      {children}
    </button>
  );
}
