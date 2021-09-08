import React from "react";

export default function Todo(props) {
  const { id, name } = props.item;
  return (
    <>
      <span>{id}</span>
      <span>{name}</span>
    </>
  );
}
