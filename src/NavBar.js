import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <NavLink exact to="/" activeClassName="active item" className="item">
          <h3 className="ui header">Home</h3>
        </NavLink>
      </div>
    );
  }
}
