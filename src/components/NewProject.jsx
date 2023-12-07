import React, { useRef, useState } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();

  const title = useRef();
  const desc = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const name = title.current.value;
    const description = desc.current.value;
    const date = dueDate.current.value;

    if (name.trim() === "" || description.trim() === "" || date.trim() === "") {
      modal.current.open();
      return;
    }

    onAdd({
      name: name,
      description: description,
      date: date,
    });
  };

  return (
    <>
      <Modal ref={modal} buttonCaption="Close">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops... looks like you forgot to enter value.
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid valuefor every input field
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              onClick={onCancel}
              className="text-stone-800 hover:text-stone-950"
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-stone-800 hover:bg-stone-950 text-stone-50 rounded-md"
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input type="text" title="Title" isInput ref={title} />
          <Input title="Description" ref={desc} />
          <Input type="date" title="Due date" isInput ref={dueDate} />
        </div>
      </div>
    </>
  );
};

export default NewProject;
