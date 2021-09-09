import React, { useEffect, useState } from "react";
import Todo from "./Todo";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "../App.css";

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
        id: new Date().toISOString(),
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
    <div className="App">
      <div className="HeaderInput">
        <h2>Todo List</h2>
        <input
          type="text"
          value={inputData}
          placeholder="Add item.."
          onChange={(e) => setInputData(e.target.value)}
        />{" "}
        {toogleSubmit ? (
          <Button variant="primary" size="sm" onClick={addItem}>
            Add Item
          </Button>
        ) : (
          <Button variant="primary" size="sm" onClick={addItem}>
            Update Item
          </Button>
        )}
      </div>
      <Card bg="info" text="white" style={{ width: "18rem" }} className="mb-2">
        <ListGroup variant="flush">
          {items.map((item) => {
            return (
              <ListGroup.Item>
                <Todo item={item} editItem={editItem} deleteItem={deleteItem} />
                <br />
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </Card>
    </div>
  );
}
