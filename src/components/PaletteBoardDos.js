import * as React from "react";
import { useRef, useContext } from "react";
import { motion } from "framer-motion";
import Color from "./Color";
import { BoardColorsContext } from "../components/BoardColorsProvider";

const MotionColor = motion(Color);

export const Example = () => {
  const constraintsRef = useRef(null);

  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef} />
      <motion.div drag dragConstraints={constraintsRef} />
    </>
  );
};

export default function PaletteBoard({ colors }) {
  const constraintsRef = useRef(null);
  // const { colors } = useContext(BoardColorsContext);
  return (
    <>
      <motion.div className="drag-area" ref={constraintsRef}>
        {colors.map((color, index) => {
          console.log("colors  inside", colors);
          const left = `${index * 150}px`;
          console.log("Index", index, "left", left);
          return (
            <MotionColor
              hasClick={false}
              key={color + index}
              style={{ top: 0, left: left }}
              className="drag-item"
              color={color}
              drag
              dragConstraints={constraintsRef}
            />
          );
        })}
      </motion.div>
    </>
  );
}
