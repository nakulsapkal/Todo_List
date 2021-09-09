import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export default function Todo(props) {
  const { id, name } = props.item;
  return (
    <>
      <Card bg="info" text="white" style={{ width: "18rem" }}>
        <Card.Header>{id}</Card.Header>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Button
            variant="primary"
            size="sm"
            onClick={() => props.editItem(id)}
          >
            edit
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => props.deleteItem(id)}
          >
            delete
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
