import React, { useEffect, useState } from "react";
import "./ColorConverter.css";
import { hexToRgb } from "../utils";

const BASE_STATE = { message: "", color: "#fff" };

export const ColorConverter = () => {
  const [hexColor, setHexColor] = useState("");
  const [output, setOutput] = useState(BASE_STATE);

  useEffect(() => {
    if (hexColor.length === 7 && /^#[0-9A-Fa-f]{6}$/.test(hexColor)) {
      const rgb = hexToRgb(hexColor);
      setOutput({ message: rgb, color: hexColor });
    } else if (
      hexColor.length > 7 ||
      (hexColor.length === 7 && !/^#[0-9A-Fa-f]{6}$/.test(hexColor))
    ) {
      setOutput({ message: "Error!", color: "red" });
    } else {
      setOutput(BASE_STATE);
    }
  }, [hexColor]);

  return (
    <div className="container" style={{ backgroundColor: output.color }}>
      <h2>Color Converter</h2>
      <form className="color-converter-form">
        <input
          id="color"
          name="color"
          className="color-converter-input"
          onChange={(e) => setHexColor(e.target.value)}
          value={hexColor}
          placeholder="#121212"
        />
        <label className="color-converter-label" htmlFor="color">
          {output.message}
        </label>
      </form>
    </div>
  );
};