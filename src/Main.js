import chroma from "chroma-js";
import Color from "./components/Color";
import ColorMods from "./components/ColorMods";
import Description from "./components/ColorsDescription";
import PaletteBoardDos from "./components/PaletteBoardDos";
import PaletteBoard from "./components/PaletteBoard";
import { BoardColorsContext } from "./components/BoardColorsProvider";
import { useState, useContext } from "react";

import ColorPicker from "./ColorPicker";

import { ChromePicker } from "react-color";
import "./styles.scss";

export default function App() {
  const { colors, setColors } = useContext(BoardColorsContext);

  const [mainColor, setMainColor] = useState({ hex: "#E9ADAD" });
  const [mainDarkMod, setMainDarkMod] = useState(5);
  const [mainLightMod, setMainLightMod] = useState(5);
  const main = chroma(mainColor.hex);
  const mainLight = chroma(main).set("lab.l", 100);
  const mainDark = chroma(main).set("lab.l", 14);
  const mainScale = chroma
    .scale([mainLight, main, mainDark])
    .mode("lch")
    .colors(5);

  const [compDarkLightness, setCompDarkLightness] = useState(14);
  const [compLightLightness, setCompLightLightness] = useState(100);
  const [compDarkMod, setCompDarkMod] = useState(0);
  const [compLightMod, setCompLightMod] = useState(0);
  const complement = chroma(mainColor.hex).set("hsl.h", "-180");
  const complementLight = chroma(complement).set(
    "lab.l",
    compLightLightness + compLightMod
  );
  const complementDark = chroma(complement).set(
    "lab.l",
    compDarkLightness + compDarkMod
  );
  const complementScale = chroma
    .scale([complementLight, complementDark])
    .mode("lch")
    .colors(4);

  const [leftDarkLightness, setLeftDarkLightness] = useState(14);
  const [leftLightLightness, setLeftLightLightness] = useState(100);
  const [leftDarkMod, setLeftDarkMod] = useState(0);
  const [leftLightMod, setLeftLightMod] = useState(0);
  const left = chroma(mainColor.hex).set("hsl.h", "-30");
  const leftLight = chroma(left).set(
    "lab.l",
    leftLightLightness + leftLightMod
  );
  const leftDark = chroma(left).set("lab.l", leftDarkLightness + leftDarkMod);
  const leftScale = chroma.scale([leftLight, leftDark]).mode("lch").colors(4);

  const [rightDarkLightness, setRightDarkLightness] = useState(14);
  const [rightLightLightness, setRightLightLightness] = useState(100);
  const [rightDarkMod, setRightDarkMod] = useState(0);
  const [rightLightMod, setRightLightMod] = useState(0);
  const right = chroma(mainColor.hex).set("hsl.h", "+30");
  const rightLight = chroma(right).set(
    "lab.l",
    rightLightLightness + rightLightMod
  );
  const rightDark = chroma(right).set(
    "lab.l",
    rightDarkLightness + rightDarkMod
  );
  const rightScale = chroma
    .scale([rightLight, rightDark])
    .mode("lch")
    .colors(4);

  const [neutralDarkLightness, setNeutralDarkLightness] = useState(20);
  const [neutralLightLightness, setNeutralLightLightness] = useState(98);
  const [neutralDarkMod, setNeutralDarkMod] = useState(0);
  const [neutralLightMod, setNeutralLightMod] = useState(0);
  const neutral = chroma.mix(main, complement, 0.36, "lrgb");
  const neutralLight = chroma(neutral).set(
    "lab.l",
    neutralLightLightness + neutralLightMod
  );
  const neutralDark = chroma(neutral).set(
    "lab.l",
    neutralDarkLightness + neutralDarkMod
  );
  const neutralScale = chroma
    .scale([neutralLight, neutralDark])
    .mode("lch")
    .colors(4);

  // chroma.mix('red', 'blue', 0.5, 'lrgb');

  return (
    <>
      <header className="bg-gray-100 p-3 text-center">
        <h1 className="text-4xl mb-2" style={{ "font-family": "Mandali" }}>
          My Wedding Colors
        </h1>
        <h2 className="mt-0 mb-0 text-lg">Create A Printable Color Scheme</h2>
      </header>

      <div className="App container py-5 mx-auto">
        <h2>Main Color</h2>

        <section>
          <div className="flex justify-center lg:mb-5">
            {/* <div
              className="bs-4 mb-5 rounded"
              style={{
                background: mainColor.hex,
                width: "100px",
                height: "100px"
              }}
            /> */}
            <Color
              color={mainColor.hex}
              className="rounded"
              style={{
                height: "200px",
                width: "200px"
              }}
            />
          </div>
          <div className="grid grid-cols-12 rounded p-5 items-center">
            <div className="col-span-12 lg:col-span-5 flex flex-col items-center">
              <div className="flex flex-col space-x-3 mx-3">
                <h3 className="p-0 mt-7 lg:mt-0 mb-3">Choose Main Color</h3>
                <ChromePicker
                  className=""
                  color={mainColor}
                  onChange={(color) => setMainColor(color)}
                />
              </div>
            </div>
            <Description className="border border-gray-200 order-first lg:order-last">
              <div>
                Everything is based around the main color. This is not to say
                that the complementary color is not as important, or does not
                stand out as much. When put together, the main color and the
                complementary color will create intense contrast, if they are
                saturated or bright colors. When put with{" "}
                <a href="#analogous">analogous colors</a>, the main color will
                create a lower and softer contrast and a sense of harmony.
              </div>
            </Description>
          </div>
        </section>

        <h2 id="analogous">Analogous Colors</h2>
        <section className="mb-7">
          <div className="flex justify-center space-x-6 lg:mb-5">
            <Color className="bs-4 rounded-lg" color={left.hex()} />
            <Color className="bs-4 rounded-lg" color={right.hex()} />
          </div>
          <div className="grid grid-cols-12 rounded p-5">
            <Description className="border border-gray-200 order-last lg:order-first">
              When used with the main color, analogous colors create mild or
              soft contrast. The effect can be described as smooth, peaceful, or
              harmonious. A great strategy for analogous colors is to take a
              lighter or darker tone, compared to your main color, so that the
              main color stands out but is still nicely accentuated by the
              analogous colors.
            </Description>
            {/* <span className="col-span-2 bg-gray-100 md:rounded-r-full"></span> */}
            <div className="col-span-12 lg:col-span-5 flex flex-col items-center p-11">
              <div className="flex items-center space-x-3 mx-3 mb-5">
                <div className="flex flex-col justify-center">
                  <ColorMods
                    lightness={leftLightLightness}
                    limit={20}
                    mod={leftLightMod}
                    setMod={setLeftLightMod}
                    increment={1}
                  />
                </div>
                {leftScale.map((color) => (
                  <Color className="bs-2 rounded-3xl" color={color} />
                ))}
                <div className="flex flex-col justify-center">
                  <ColorMods
                    lightness={leftDarkLightness}
                    limit={20}
                    mod={leftDarkMod}
                    setMod={setLeftDarkMod}
                    increment={1}
                  />
                </div>
              </div>

              <div className="flex space-x-3 mx-3 mb-5">
                <div className="flex flex-col justify-center">
                  <ColorMods
                    lightness={rightDarkLightness}
                    limit={20}
                    mod={rightDarkMod}
                    setMod={setRightDarkMod}
                    increment={1}
                  />
                </div>
                {rightScale.map((color) => (
                  <Color className="bs-2 rounded-3xl" color={color} />
                ))}
                <div className="flex flex-col justify-center">
                  <ColorMods
                    lightness={rightDarkLightness}
                    limit={20}
                    mod={rightDarkMod}
                    setMod={setRightDarkMod}
                    increment={1}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <h2>Complementary Color</h2>
        <section>
          <div className="flex justify-center lg:mb-5">
            <Color className="bs-4" color={complement.hex()} />
          </div>
          <div className="grid grid-cols-12 rounded p-5">
            <div className="col-span-12 lg:col-span-5 flex flex-col items-center p-11">
              <div className="flex space-x-3 mx-3 items-center">
                <div className="flex flex-col justify-center">
                  {/* <div>
                    {compLightMod} {compLightLightness}
                  </div> */}
                  <ColorMods
                    lightness={compLightLightness}
                    limit={20}
                    mod={compLightMod}
                    setMod={setCompLightMod}
                    increment={1}
                  />
                </div>
                {complementScale.map((color) => (
                  <Color className="rounded-3xl" color={color} />
                ))}
                <div className="flex flex-col justify-center">
                  {/* <div className="text-sm">{compDarkMod}</div> */}
                  <ColorMods
                    lightness={compDarkLightness}
                    limit={20}
                    mod={compDarkMod}
                    setMod={setCompDarkMod}
                    increment={1}
                  />
                </div>
              </div>
            </div>
            <Description className="border border-gray-200 order-last lg:order-last">
              These are for when you want two distinct things to stand out. Put
              this near the main color and they will make each other brighter
              and more saturated. If the colors are very saturated, the effect
              can be intense. Desaturate one item to place the emphasis on the
              other.{" "}
            </Description>
          </div>
        </section>

        <h2>Neutrals</h2>
        <section>
          <div className="flex justify-center lg:mb-5">
            <Color className="bs-4" color={neutral.hex()} />
          </div>
          <div className="grid grid-cols-12 rounded p-5">
            <div className="col-span-12 lg:col-span-5 flex flex-col items-center p-11">
              <div className="flex items-center space-x-3 mx-3">
                <div className="flex flex-col justify-center">
                  <ColorMods
                    lightness={neutralLightLightness}
                    limit={20}
                    mod={neutralLightMod}
                    setMod={setNeutralLightMod}
                    increment={1}
                  />
                </div>
                {neutralScale.map((color) => (
                  <Color key={color} className="rounded-3xl" color={color} />
                ))}
                <div className="flex flex-col justify-center">
                  <ColorMods
                    lightness={neutralDarkLightness}
                    limit={20}
                    mod={neutralDarkMod}
                    setMod={setNeutralDarkMod}
                    increment={1}
                  />
                </div>
              </div>
            </div>
            <Description className="border border-gray-200 order-last lg:order-last">
              Neutrals are for everything that you want to fade into the
              background, but still mesh with your other colors. In order to
              make your more saturated colors stand out, you need to surround
              them with neutrals.
            </Description>
          </div>
          <h3>Palette Board</h3>
          <PaletteBoard colors={colors} updateColors={setColors} />
          {/* <div className="drag-container border-2 rounded-3xl"> */}
          {/* <PaletteBoardDos colors={colors} /> */}
          {/* </div> */}
        </section>

        <h2>General Tips</h2>
        <section>
          <ul>
            <li>ratios, like 60-30-10 or w/e</li>
          </ul>
        </section>
      </div>
    </>
  );
}
