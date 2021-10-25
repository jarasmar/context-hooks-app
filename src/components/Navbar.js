import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class Navbar extends Component {
  render() {
    return (
      //Add a Consumer to Look up the component tree to the provider for this context and give have access to the data
      <ThemeContext.Consumer>
        {(context) => {
          // Extract context data into constants
          const { isLightTheme, light, dark } = context;
          const theme = isLightTheme ? light : dark;
          <nav style={{ background: theme.ui, color: theme.syntax }}>
            <h1>Context App</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Navbar;
