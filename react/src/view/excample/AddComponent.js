import React from "react";

class AddComponent extends React.Component {
  state = {
    title: "",
    salary: "",
  };
  handleChangeFirstName = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleChangeLastName = (event) => {
    this.setState({
      salary: event.target.value,
    });
  };
  hendleSubmit = (event) => {
    event.preventDefault(); // để tránh lag lại trang và lấy data
    // console.log(this.state) // dữ liệu data
    // floor là làm tròn số
    this.props.addNewJob({
      //// khi input sẽ đẩy data vào arrJobs
      id: Math.floor(Math.random() * 100), // random số từ 1 > 100
      title: this.state.title,
      salary: this.state.salary,
    });
    // điều kiện
    if (!this.state.title || !this.state.salary) {
      alert("missing required params"); // kiểm tra dữ liệu hợp lệ ko VD : nhập tài khoản ko nhập mk
      return;
    }

    // xóa input
    this.setState({
      // nhấn đăng nhập sẽ clean các dòng input đi
      title: " ", // cho là 1 chuỗi rỗng khi đăng nhập sẽ xóa input di
      salary: " ",
    });
  };

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">Job title:</label>
          <br />
          <input
            type="text"
            value={this.state.title}
            onChange={(event) => this.handleChangeFirstName(event)}
          />
          <br />
          <label htmlFor="lname">Salary:</label>
          <br />
          <input
            type="text"
            value={this.state.salary}
            onChange={(event) => this.handleChangeLastName(event)}
          />
          <br />
          <input type="submit" onClick={(event) => this.hendleSubmit(event)} />
        </form>
        {/* // { <div>
        //   check ChildComponent : {this.props.name} - {this.props.age} -{this.props.address} // cánh 1
        // </div> } */}
      </>
    );
  }
}
export default AddComponent;
