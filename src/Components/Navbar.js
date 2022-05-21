import React, { Component } from "react";
import { ThemeContext } from "../Context/ThemeContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ color: theme.syntax, background: theme.ui }}>
        <h1>!!Testiranje narucivanja i promjene tema!!</h1>
      </nav>
    );
  }
}

export default Navbar;
