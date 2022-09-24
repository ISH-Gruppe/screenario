import React from "react";
import { Text } from "react-konva";
import { Html } from "react-konva-utils";

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;

function getStyle(width, height) {
  const isFirefox = navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
  const baseStyle = {
    width: `${width}px`,
    height: `${height}px`,
    border: "none",
    padding: "0px",
    margin: "0px",
    background: "none",
    outline: "none",
    resize: "none",
    colour: "black",
    fontSize: "16px",
    fontFamily: "sans-serif",
  };
  if (isFirefox) {
    return baseStyle;
  }
  return {
    ...baseStyle,
    margintop: "-4px",
  };
}

export function EditableTextbox({
  x,
  y,
  isEditing,
  onToggleEdit,
  onChange,
  text,
  width,
  height,
}) {
  function handleEscapeKeys(e) {
    if ((e.keyCode === RETURN_KEY && !e.shiftKey) || e.keyCode === ESCAPE_KEY) {
      onToggleEdit(e);
    }
  }

  function handleTextChange(e) {
    onChange(e.currentTarget.value);
  }

  if (isEditing) {
    const style = getStyle(width, height);
    return (
      <Html groupProps={{ x, y }} divProps={{ style: { opacity: 1 } }}>
        <textarea value={value} onChange={onChange} style={style} />
      </Html>
    );
  }
  return <Text x={x} y={y} width={width} text={text} />;
}
