import React from "react";
import { View, ViewStyle } from "react-native";

type GridSquareProps = {
  type?: "square" | "circle"; // forma dos pontos
  color?: string;
  rows: number;
  cols: number;
  pointSize?: number;
  spacing?: number;
  style?: ViewStyle;
};

function GridSquare({
  type = "square",
  color = "#6CBD45",
  rows,
  cols,
  pointSize = 20,
  spacing = 5,
  style = {},
}: GridSquareProps) {
  const grid = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push(
        <View
          key={`${i}-${j}`}
          style={{
            width: pointSize,
            height: pointSize,
            backgroundColor: color,
            margin: spacing / 2,
            borderRadius: type === "circle" ? pointSize / 2 : 0,
          }}
        />
      );
    }
    grid.push(
      <View key={i} style={{ flexDirection: "row" }}>
        {row}
      </View>
    );
  }

  return <View>{grid}</View>;
}

export default GridSquare;
