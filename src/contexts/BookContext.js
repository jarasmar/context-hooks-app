import React, { createContext, useState } from "react";

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] = useState([
    { title: "La sombra del viento", id: 1 },
    { title: "La historia interminable", id: 2 },
    { title: "Momo", id: 3 },
    { title: "El senor de los anillos", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
