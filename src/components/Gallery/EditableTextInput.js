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
    padding: "0px",
    margin: "0px",
    background: "none",
    outline: "none",
    resize: "none",
    border: "none",
    overflow: "visible",
    color: "black",
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

export function EditableTextInput({
  x,
  y,
  isEditing,
  onToggleEdit,
  onChange,
  text,
  width,
  height,
  value,
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
    console.log("isEditing");
    const style = getStyle(120, 40);
    return (
      <Html groupProps={{ x, y }} divProps={{ style: { opacity: 1 } }}>
        <textarea
          class="editable-textbox"
          value={value}
          onChange={onChange}
          style={style}
        />
      </Html>
    );
  }
  return <Text x={x} y={y} width={width} text={text} />;
}
