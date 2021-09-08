import React, { useEffect, useState } from "react";
import Todo from "./Todo";

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
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }

    let list = localStorage.getItem("lists");
    console.log("List after addition :", list);
  };

  //to add data to the local storage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);

  return (
    <>
      <div>
        <input
          type="text"
          value={inputData}
          placeholder="Add item.."
          onChange={(e) => setInputData(e.target.value)}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <div>
        {items.map((item) => {
          return (
            <>
              <Todo item={item} />
              <br />
            </>
          );
        })}
      </div>
    </>
  );
}
