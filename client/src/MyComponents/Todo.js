import React from "react";

export default function Todo(props) {
  const { id, name } = props.item;
  return (
    <>
      <div className="card">
        <span>{id}</span>
        <div className="card-body">{name}</div>
        <button
          className="far fa-edit add-btn"
          title="Edit Item"
          onClick={() => props.editItem(id)}
        >
          edit
        </button>
        <button
          className="far fa-trash-alt add-btn"
          title="Delete Item"
          onClick={() => props.deleteItem(id)}
        >
          delete
        </button>
      </div>
    </>
  );
}
