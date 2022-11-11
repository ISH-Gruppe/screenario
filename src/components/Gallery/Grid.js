import React from "react";

import { Text, Line } from "react-konva";

export default function createGrid({
  horizontalLineAmount,
  verticalLineAmount,
  stageSize,
}) {
  if (horizontalLineAmount + verticalLineAmount) {
    horizontalLineAmount += 1;
    verticalLineAmount += 1;
  }

  const horizontalLineGap = stageSize.height / horizontalLineAmount;
  const verticalLineGap = stageSize.width / verticalLineAmount;

  const grid = [];

  const alphabet = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

  const horizontalTextPadding = verticalLineGap / 2 - 5;
  const verticalTextPadding = horizontalLineGap / 2.1;

  for (let i = 1; i < horizontalLineAmount; i++) {
    grid.push(
      <Line
        stroke="red"
        x={0}
        y={horizontalLineGap * i}
        points={[0, 0, stageSize.width, 0]}
      />
    );
  }
  for (let i = 1; i < verticalLineAmount; i++) {
    grid.push(
      <Line
        stroke="red"
        x={verticalLineGap * i}
        y={0}
        points={[0, 0, 0, stageSize.height]}
      />
    );
  }

  // Letters
  for (let i = 0; i < verticalLineAmount; i++) {
    grid.push(
      <Text
        x={verticalLineGap * i + horizontalTextPadding}
        y={20}
        text={alphabet[i]}
        fontStyle="bold"
        fill="white"
        stroke="black"
        strokeWidth={5}
        fillAfterStrokeEnabled
        fontFamily="sans-serif"
        fontSize={20}
        perfectDrawEnabled={false}
      />
    );
  }

  // Numbers
  for (let i = 1; i <= horizontalLineAmount; i++) {
    grid.push(
      <Text
        x={15}
        y={horizontalLineGap * i - verticalTextPadding}
        text={i}
        fontStyle="bold"
        fill="white"
        stroke="black"
        strokeWidth={5}
        fillAfterStrokeEnabled
        fontFamily="sans-serif"
        fontSize={20}
        perfectDrawEnabled={false}
      />
    );
  }

  return grid;
}
