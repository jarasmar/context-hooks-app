import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  // Look up the component tree to the provider for this context, to have access to the data
  static contextType = ThemeContext;
  render() {
    // Extract context data into constants
    const { isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Context App</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
