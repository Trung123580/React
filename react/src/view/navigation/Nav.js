import React from "react";
import "./Nav.scss";
import { Link, NavLink } from "react-router-dom";
class Nav extends React.Component {
  render() {
    return (
      <>
        <div className="topnav">
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
          <NavLink to="/todo" activeClassName="active">
            Todos
          </NavLink>
          <NavLink to="/about" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/user" activeClassName="active">
            Users
          </NavLink>
          {/* => cánh chuyển tab sáng màu */}

          {/* <Link to="/">Home</Link>
          <Link to="/todo">Todos</Link>
          <Link to="/about">About</Link> */}
          {/* => tránh lag lại trang web khi chuyển tab bằng thẻ Link*/}

          {/* <a className="active" href="/home">
            Home
          </a>        // lag lại trang 
          <a href="/todo">Todos</a>
          <a href="/about">About</a> */}
        </div>
      </>
    );
  }
}
export default Nav;
