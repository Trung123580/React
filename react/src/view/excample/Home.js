import React from "react";
// import { withRouter } from "react-router"; // lấy dữ liệu data
import Color from "../HOC/color"; //=> đổi màu components (HOC.js)

import logo from "../../assets/images/wlop-46se.jpg"; // => inpost hình ảnh (tải hình ảnh lên web)

class Home extends React.Component {
  // componentDidMount() {
  //   setTimeout(() => {
  //     this.props.history.push("/todo"); // chuyển đến trang todos
  //   }, 3000);
  // }

  render() {
    console.log("check props", this.props);
    return (
      <>
        <div>hello world from home </div>
        <div>
          <img className="logo" src={logo} />
        </div>
        {/* // logo thay cho hình ảnh đã import ở trên  */}
      </>
    );
  }
}
// export default withRouter(Home);
export default Color(Home);
