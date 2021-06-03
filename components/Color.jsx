import React, { forwardRef, useContext } from "react";
import { BoardColorsContext } from "../components/BoardColorsProvider";
const Color = forwardRef(
  ({ className = "mb-5 rounded", color, hasClick = true, style }, ref) => {
    const check = {
      background: "red",
      ...style
    };
    console.log("Style", check);
    const { colors, setColors } = useContext(BoardColorsContext);
    const addColor = (color) => {
      if (colors.includes(color)) {
        console.log("Color already in Palette!");
      } else {
        setColors([...colors, color]);
      }
      console.log("colors", colors, "color", color);
    };
    return (
      <div
        key={color}
        onClick={() => (hasClick ? addColor(color) : null)}
        ref={ref}
        className={"w-12 lg:w-16 h-12 lg:h-16 " + className}
        style={{ background: color, ...style }}
      />
    );
  }
);

export default Color;
