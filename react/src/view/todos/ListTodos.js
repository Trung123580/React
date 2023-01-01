import React from "react";
import Addtodos from "./Addtodos";
import "./demo.scss";
class ListTodos extends React.Component {
  state = {
    ListTodos: [
      { id: "01", title: "doing homework" },
      { id: "02", title: "makin videos" },
      { id: "03", title: "fixing bugs" },
    ],
    editTodo: {},
  };
  AddNewtodo = (todo) => {
    this.setState({
      ListTodos: [...this.state.ListTodos, todo], // chức năng thêm
    });
    // toast.success("Wow so easy!");
  };
  handleDeleteTodo = (todo) => {
    let currentTodo = this.state.ListTodos;
    currentTodo = currentTodo.filter((item) => item.id !== todo.id); // chức năng xóa
    this.setState({
      // filter : là 1 bộ lọc
      ListTodos: currentTodo,
    });
    // alert('delete')
  };
  handleEditTodo = (todo) => {
    let { editTodo, ListTodos } = this.state;
    let isEmptyObj = Object.keys(editTodo).length === 0;
    // save
    if (isEmptyObj === false && editTodo.id === todo.id) {
      let ListTodosCopy = [...ListTodos];

      let objIndex = ListTodosCopy.findIndex((item) => item.id === todo.id);

      ListTodosCopy[objIndex].title = editTodo.title;

      this.setState({
        ListTodos: ListTodosCopy,
        editTodo: {},
      });
      return;
    }

    // Edit
    this.setState({
      editTodo: todo,
    });
  };
  handleonChangeEditTodo = (event) => {
    let editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    this.setState({
      editTodo: editTodoCopy,
    });
  };
  render() {
    let { ListTodos, editTodo } = this.state;
    // let LisiTodos = this.state.LisiTodos;
    let isEmptyObj = Object.keys(editTodo).length === 0;

    return (
      <>
        <p>Hello world with React.js (Vuong Trung)</p>
        <div className="list-todo-container">
          <Addtodos AddNewtodo={this.AddNewtodo} />

          <div className="list-todo-content">
            {ListTodos &&
              ListTodos.length > 0 &&
              ListTodos.map((item, index) => {
                return (
                  <div className="todo-child" key={item.id}>
                    {isEmptyObj === true ? (
                      // điều kiện nếu là true in ra the duoi
                      // nếu là falas in ra dưới dấu :
                      //khi có 1 điều kiện khi dùng &&
                      <span>
                        {index + 1} - {item.title}
                      </span>
                    ) : (
                      <>
                        {editTodo.id === item.id ? (
                          <span>
                            {index + 1} -{" "}
                            <input
                              value={editTodo.title}
                              onChange={(event) =>
                                this.handleonChangeEditTodo(event)
                              }
                            />
                          </span>
                        ) : (
                          <span>
                            {index + 1} - {item.title}
                          </span>
                        )}
                      </>
                    )}
                    <button
                      className="edit"
                      onClick={() => this.handleEditTodo(item)}
                    >
                      {
                        isEmptyObj === false && editTodo.id === item.id
                          ? "save"
                          : "Edit" // đổi chữ Edit thành save khi click
                      }
                      {/* Edit */}
                    </button>

                    <button
                      className="delete"
                      onClick={() => this.handleDeleteTodo(item)}
                    >
                      delete
                    </button>
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default ListTodos;
