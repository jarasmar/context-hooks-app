import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const BookList = () => {
  // Using context from a hook for functional components (cleaner than a Consumer)
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        <li style={{ background: theme.ui }}>The lord of the rings</li>
        <li style={{ background: theme.ui }}>Harry Potter</li>
        <li style={{ background: theme.ui }}>The neverending story</li>
      </ul>
    </div>
  );
};

export default BookList;
