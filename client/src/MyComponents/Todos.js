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
  const [toogleSubmit, setToggleSubmit] = useState(true);

  const [isEditItem, setIsEditItem] = useState(null);

  const addItem = () => {
    if (!inputData) {
      alert("Please insert some data!!");
    } else if (inputData && !toogleSubmit) {
      setItems(
        items.map((item) => {
          if (item.id === isEditItem) {
            return { ...item, name: inputData };
          }
          return item;
        })
      );

      setToggleSubmit(true);
      setInputData("");
      setIsEditItem(null);
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

  const editItem = (id) => {
    let listItem = items.find((item) => item.id === id);
    console.log("Item for edit", listItem);

    setToggleSubmit(false);
    setInputData(listItem.name);

    setIsEditItem(id);
  };
  const deleteItem = (id) => {
    let updatedList = items.filter((item) => item.id !== id);

    setItems(updatedList);
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
        {toogleSubmit ? (
          <button onClick={addItem}>Add Item</button>
        ) : (
          <button onClick={addItem}>Update Item</button>
        )}
      </div>
      <div>
        {items.map((item) => {
          return (
            <>
              <Todo item={item} editItem={editItem} deleteItem={deleteItem} />
              <br />
            </>
          );
        })}
      </div>
    </>
  );
}
