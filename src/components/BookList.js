import React, { Component } from "react";

class BookList extends Component {
  render() {
    return (
      <div className="book-list">
        <ul>
          <li>The lord of the rings</li>
          <li>Harry Potter</li>
          <li>The neverending story</li>
        </ul>
      </div>
    );
  }
}

export default BookList;
