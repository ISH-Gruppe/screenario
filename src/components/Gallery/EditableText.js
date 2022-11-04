import React from "react";
import { ResizableText } from "./ResizableText";
import { EditableTextInput } from "./EditableTextInput";

export function EditableText({
  id,
  x,
  y,
  text,
  width,
  height,
  onResize,
  isEditing,
  isTransforming,
  onToggleEdit,
  onToggleTransform,
  onChange,
  onDragEnd,
}) {
  function handleTextChange(e) {
    onChange(e.currentTarget.value);
  }

  if (isEditing) {
    return (
      <EditableTextInput
        id={id}
        x={x}
        y={y}
        width={width}
        height={height}
        value={text}
        onChange={handleTextChange}
        isEditing={isEditing}
        onToggleEdit={onToggleEdit}
      />
    );
  }
  return (
    <ResizableText
      id={id}
      x={x}
      y={y}
      isSelected={isTransforming}
      onClick={onToggleTransform}
      onDoubleClick={onToggleEdit}
      onResize={onResize}
      text={text}
      width={width}
      onDragEnd={onDragEnd}
    />
  );
}
