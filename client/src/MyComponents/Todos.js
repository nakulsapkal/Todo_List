import React, { useState } from "react";

const getLocalItems = () => {
  let list = localStorage.getItem("lists");
  console.log("List Is :", list);

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

export default function Todos() {
  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItems());

  const addItem = () => {
    if (!inputData) {
      alert("Please insert some data!!");
    } else {
      const allInputData = {
        id: new new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputData}
        placeholder="Add item.."
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={addItem}>Add Item</button>
    </div>
  );
}
