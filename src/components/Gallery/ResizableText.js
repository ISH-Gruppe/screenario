import React, { useRef, useEffect } from "react";
import { Text, Transformer } from "react-konva";

const RETURN_KEY = 13;
const ESCAPE_KEY = 27;
const BACKSPACE_KEY = 8;

export function ResizableText({
  id,
  x,
  y,
  text,
  isSelected,
  width,
  onResize,
  onClick,
  onDoubleClick,
  onDragEnd,
  onDeselect,
}) {
  const textRef = useRef(null);
  const transformerRef = useRef(null);

  useEffect(() => {
    if (isSelected && transformerRef.current !== null) {
      transformerRef.current.nodes([textRef.current]);
      transformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  function handleResize() {
    if (textRef.current !== null) {
      const textNode = textRef.current;
      const newWidth = textNode.width() * textNode.scaleX();
      const newHeight = textNode.height() * textNode.scaleY();
      textNode.setAttrs({
        width: newWidth,
        scaleX: 1,
      });
      onResize(newWidth, newHeight);
    }
  }

  const transformer = isSelected ? (
    <Transformer
      ref={transformerRef}
      rotateEnabled={true}
      flipEnabled={false}
      enabledAnchors={[]}
      boundBoxFunc={(oldBox, newBox) => {
        newBox.width = Math.max(30, newBox.width);
        return newBox;
      }}
    />
  ) : null;

  return (
    <>
      <Text
        className="konva-text"
        x={x}
        y={y}
        ref={textRef}
        text={text}
        fill="white"
        stroke="black"
        fillAfterStrokeEnabled
        fontFamily="sans-serif"
        fontSize={20}
        perfectDrawEnabled={false}
        onTransform={handleResize}
        onClick={onClick}
        onTap={onClick}
        onDblClick={onDoubleClick}
        onDblTap={onDoubleClick}
        width={width}
        draggable={true}
        onDragEnd={onDragEnd}
        tabIndex={0}
      />
      {transformer}
    </>
  );
}
