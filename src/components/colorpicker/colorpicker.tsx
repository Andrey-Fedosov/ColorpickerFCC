import React, { useEffect, useState } from "react";

//#456856
//rgb(255, 26, 99)

export function Colorpicker() {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#ffffff");

  function randomColorUtility(range: number) {
    return Math.floor(Math.random() * range);
  }

  function generateHex() {
    const hexArray = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hexArray[randomColorUtility(hexArray.length)];
    }
    setColor(hexColor);
  }

  function generateRGB() {
    let resultRgb = [];
    for (let i = 0; i < 3; i++) {
      resultRgb.push(randomColorUtility(256));
    }
    setColor(`rgb(${resultRgb.join(",")})`);
  }

  useEffect(() => {
    colorType === "hex" ? generateHex() : generateRGB();
  }, [colorType]);

  return (
    <div style={{ width: "100vw", height: "100vh", backgroundColor: color }}>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "20px" }}
      >
        <button onClick={() => setColorType("hex")}>
          Generate Random HEX Color
        </button>
        <button onClick={() => setColorType("rgb")}>
          Generate Random RGB Color
        </button>
        <button
          onClick={() => {
            colorType === "hex" ? generateHex() : generateRGB();
          }}
        >
          Generate Random Color
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "#000000",
          alignSelf: "center",
          fontSize: "50px",
          fontWeight: "bold",
        }}
      >
        <h3>{colorType === "hex" ? "HEX" : "RGB color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
