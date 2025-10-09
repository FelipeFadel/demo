import React from "react";
import { View } from "react-native";

type FormatProps = {
  type?: "square" | "circle"; // forma usada
  size?: number;
  color?: string;
  borderWidth?: number;
};

function Format({
  type = "square",
  size = 120,
  color = "#6CBD45",
  borderWidth = 2,
}: FormatProps) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderColor: color,
        borderWidth,
        borderRadius: type === "circle" ? size / 2 : 0,
        position: "absolute",
      }}
    />
  );
}

export default Format;
