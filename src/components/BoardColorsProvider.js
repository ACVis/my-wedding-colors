import { useState, createContext } from "react";

export const BoardColorsContext = createContext([]);

export const BoardColorsProvider = ({ children }) => {
  // potentially code to create "value"
  // const playlist = [];
  const [colors, setColors] = useState([]);

  return (
    <BoardColorsContext.Provider value={{ colors, setColors }}>
      {children}
    </BoardColorsContext.Provider>
  );
};
