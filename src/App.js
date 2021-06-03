import React from "react";
import Main from "./Main";
import { DndContext } from "@dnd-kit/core";
import { BoardColorsProvider } from "./components/BoardColorsProvider";
// import { Provider } from "react-redux";
// import store from "./store";

// const store = createStore(rootReducer)

export default function App() {
  return (
    // <Provider store={store}>
    <BoardColorsProvider>
      <DndContext>
        <Main />
      </DndContext>
    </BoardColorsProvider>
    // </Provider>
  );
}
