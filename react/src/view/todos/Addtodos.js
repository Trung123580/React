import React from "react";
class Addtodos extends React.Component {
  state = {
    title: "",
  };
  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleOnclick = () => {
    if (!this.state.title) {
      alert("nhập sai");
      return; // khi vào hàm if này return sẽ thoát ra khỏi hàm này
    }
    let todo = {
      id: Math.floor(Math.random() * 100),
      title: this.state.title,
    };
    this.props.AddNewtodo(todo);
    this.setState({
      title: "", // khi input sẽ xóa các input đi
    });
  };
  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="next"
          value={title}
          onChange={(event) => this.handleOnChangeTitle(event)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleOnclick()}
        >
          Add
        </button>
      </div>
    );
  }
}
export default Addtodos;
