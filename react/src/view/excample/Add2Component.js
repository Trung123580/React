import React from "react";
class Add2Component extends React.Component {
  state = {
    facebook: "Facebook",
    name: "",
  };

  handleOnChangeName = (event) => {
    this.setState({
      // setState (render) 1 lần mỗi lần input
      name: event.target.value,
      // facebook : 'FB:TrungVuong' đổi tên khi render()
    });
  };

  handleClickButton = () => {
    alert("wecomto webook");
    // prompt('wecomto webook')
  };
  render() {
    return (
      <>
        <div className="frist">
          <input
            value={this.state.name}
            type="text"
            onChange={(event) => this.handleOnChangeName(event)}
          />
          hello my name 'Trung'{this.state.name}
          {/* {this.state => this gọi đến hàm state this.state.name lấy value : name} */}
        </div>
        <div className="second">Hello my component {this.state.facebook}</div>
        <div className="onClick">
          <button onClick={() => this.handleClickButton()}>Click My</button>
        </div>
      </>
    );
  }
}
export default Add2Component;
