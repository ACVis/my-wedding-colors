import React, { useState } from "react";
import { useDroppable } from "@dnd-kit/core";
import Plus from "./Plus";
import Minus from "./Minus";
// import { remove } from "lodash-es";
import move from "../utilities/move";
import chroma from "chroma-js";

// function Droppable(props) {
//   const { isOver, setNodeRef } = useDroppable({
//     id: "droppable"
//   });
//   const style = {
//     color: isOver ? "green" : undefined
//   };

//   return (
//     <div ref={setNodeRef} style={style}>
//       {props.children}
//     </div>
//   );
// }

function Pcolor({ color, colors, updateColors }) {
  const [size, setSize] = useState(1);
  const width = size * 80;
  const lightness = chroma(color).get("lab.l");
  const textcolor =
    lightness < 50
      ? chroma.hsl(210, 0, 0.9).hex()
      : chroma.hsl(210, 0, 0.2).hex();

  function upSize() {
    setSize(Math.min(size + 1, 38));
    console.log(size);
  }
  function downSize() {
    setSize(Math.max(size - 1, 1));
    console.log(size);
  }
  function moveLeft() {
    // console.log("Before", colors);
    const index = colors.findIndex((el) => el === color);
    // console.log("Color", color, "index", index);
    const newArr = move(colors, index, index - 1);
    // console.log("After", newArr);
    updateColors([...newArr]);
  }
  function moveRight() {
    // console.log("Before", colors);
    const index = colors.findIndex((el) => el === color);
    // console.log("Color", color, "index", index);
    const newArr = move(colors, index, index + 1);
    // console.log("After", newArr);
    updateColors([...newArr]);
  }
  function removeColor() {
    const index = colors.findIndex((el) => el === color);
    colors.splice(index, 1);
    updateColors([...colors]);
  }
  return (
    <div
      key={color + "pboard1"}
      // onClick={() => (hasClick ? addColor(color) : null)}
      // ref={ref}
      className="rounded p-1 h-24 lg:h-28"
      style={{
        background: color,
        width: `${width}px`
      }}
    >
      <div className="flex opacity-0 hover:opacity-100 transition duration-500 ease-in-out">
        <div onClick={() => downSize()} style={{ color: textcolor }}>
          <Minus />
        </div>
        <div onClick={() => upSize()} className="" style={{ color: textcolor }}>
          <Plus />
        </div>
        <div
          className="ml-auto"
          onClick={removeColor}
          style={{ color: textcolor }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </div>
      </div>
      <div
        className="flex opacity-0 hover:opacity-100 transition duration-500 ease-in-out"
        style={{ color: textcolor }}
      >
        <div onClick={() => moveLeft()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
        </div>
        <div onClick={() => moveRight()} className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div style={{ color: textcolor }}>{color}</div>
    </div>
  );
}

export default function PaletteBoard({ colors, updateColors }) {
  return (
    <div className="border rounded flex">
      {colors.map((color) => {
        return (
          <Pcolor color={color} colors={colors} updateColors={updateColors} />
        );
      })}
    </div>
  );
}
