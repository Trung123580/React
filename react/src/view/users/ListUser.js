import React from "react";
import axios from "axios";
import "./demo.scss";
import { withRouter } from "react-router-dom"; // chuyển trang

class ListUser extends React.Component {
  state = {
    ListUser: [],
  };
  async componentDidMount() {
    //     axios.get("https://reqres.in/api/users?page=2").then((res) => {// cánh1
    //       console.log("check res", res.data.data); // khi muốn lấy mỗi data.data
    //     });
    //   }
    let res = await axios.get("https://reqres.in/api/users?page=1"); // cánh 2 hay dùng tránh bất đồng bộ
    this.setState({
      ListUser: res && res.data && res.data.data ? res.data.data : [], //=> lấy dữ liệu data qua API
    });
    // khi muốn lấy mỗi data.data
  }
  handleViewDetaiLuser = (user) => {
    this.props.history.push(`/user/${user.id}`);
  };
  render() {
    let { ListUser } = this.state; //**  rễ dính bài test khi xin việc **//
    return (
      <>
        <div className="List-user-container">
          <div className="title">Fet all List user</div>
          <div className="List-user-container">
            {ListUser &&
              ListUser.length > 0 &&
              ListUser.map((item, index) => {
                return (
                  <div
                    className="child"
                    key={item.id}
                    onClick={() => this.handleViewDetaiLuser(item)}
                  >
                    {index + 1} - {item.first_name} {item.last_name}
                  </div>
                );
              })}
          </div>
        </div>
      </>
    );
  }
}
export default withRouter(ListUser);
