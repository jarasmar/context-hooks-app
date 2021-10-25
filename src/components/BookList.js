import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = this.context;
          const theme = isLightTheme ? light : dark;
          <div
            className="book-list"
            style={{ color: theme.syntax, background: theme.bg }}
          >
            <ul>
              <li style={{ background: theme.ui }}>The lord of the rings</li>
              <li style={{ background: theme.ui }}>Harry Potter</li>
              <li style={{ background: theme.ui }}>The neverending story</li>
            </ul>
          </div>;
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default BookList;
