import React from "react";

const TodoInput = ({ handleChange, item, handleSubmit, editItem }) => {
  return (
    <div className="card card-body my-3">
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <div className="input-group-prepend">
            <div
              className={
                editItem
                  ? "input-group-text bg-success text-white"
                  : "input-group-text bg-primary text-white"
              }
            >
              <i className="fas fa-book" />
            </div>
          </div>
          <input
            type="text"
            value={item}
            className="form-control text-capitalize"
            placeholder="Add Todo Item"
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className={
            editItem
              ? "btn btn-block btn-success mt-3"
              : "btn btn-block btn-primary mt-3"
          }
          disabled={item ? false : true}
        >
          {editItem ? "Edit Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
