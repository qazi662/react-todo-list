import React from "react";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = ({ items, handleDelete, handleEdit, handleClearList }) => {
  return (
    <ul className="list-group my-5">
      <h3 className="text-capitalize text-center">todo list</h3>
      {items.map((item) => {
        return (
          <TodoItem
            key={item.id}
            title={item.title}
            handleDelete={() => handleDelete(item.id)}
            handleEdit={() => handleEdit(item.id)}
          />
        );
      })}
      <button
        className="btn btn-danger btn-block text-uppercase mt-5"
        onClick={handleClearList}
        disabled={items.length > 0 ? false : true}
      >
        Clear List
      </button>
    </ul>
  );
};

export default TodoList;
