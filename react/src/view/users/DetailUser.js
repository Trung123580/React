// hiện dữ liệu người dùng lên web qua lấy URl (API)
// Route parameters

import React from "react";
import { withRouter } from "react-router-dom"; // lấy các tham số trên URl
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;

      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
    }
  }
  handlebackButton = () => {
    this.props.history.push(`/user`); //=> nuct back lại
  };
  render() {
    let { user } = this.state;
    let isEmptyObj = Object.keys(user).length === 0;
    return (
      <>
        <div>Hello {this.props.match.params.id}</div>
        {isEmptyObj === false && (
          <>
            <div>
              User name: {user.first_name} -{user.last_name}{" "}
            </div>
            <div>user email: {user.email}</div>
            <div>
              <img src={user.avatar} />
            </div>
            <div>
              <button type="button" onClick={() => this.handlebackButton()}>
                back
              </button>
            </div>
          </>
        )}
      </>
    );
  }
}
export default withRouter(DetailUser);
