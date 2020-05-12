import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput/TodoInput";
import TodoList from "./components/TodoList/TodoList";

class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    this.setState({
      item: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.item,
    };
    const updatedItems = [...this.state.items, newItem];
    this.setState({
      items: updatedItems,
      item: "",
      id: uuidv4(),
      editItem: false,
    });
  };

  handleDelete = (id) => {
    const filteredList = this.state.items.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      items: filteredList,
    });
  };

  handleEdit = (id) => {
    const filteredList = this.state.items.filter((item) => {
      return item.id !== id;
    });
    const sortedList = this.state.items.find((item) => {
      return item.id === id;
    });
    this.setState({
      items: filteredList,
      item: sortedList.title,
      id: id,
      editItem: true,
    });
  };

  handleClearList = () => {
    this.setState({
      items: [],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">todo input</h3>

            <TodoInput
              handleChange={this.handleChange}
              item={this.state.item}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />

            <TodoList
              items={this.state.items}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
              handleClearList={this.handleClearList}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
