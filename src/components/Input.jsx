import React, { forwardRef } from "react";

const Input = forwardRef(function Input({ title, isInput, ...props }, ref) {
  let classes =
    "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600 ";

  return (
    <p className="gap-1 my-4 flex flex-col">
      <label className="text-stone-500 text-sm font-bold uppercase">
        {title}
      </label>
      {isInput ? (
        <input ref={ref} className={classes} {...props} />
      ) : (
        <textarea ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
