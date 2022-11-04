import React from "react";
import { Stage, Layer, Text, Image, Line, Transformer } from "react-konva";
import useImage from "use-image"; // Konva-specific image hook

export default function UserImage({
  imageProps,
  isSelected,
  onSelect,
  onChange,
  isDraggable,
  maxWidth,
  maxHeight,
}) {
  const imageRef = React.useRef();
  const imgTransformerRef = React.useRef();
  const [image, status] = useImage(imageProps.url);

  setImageSize();

  React.useEffect(() => {
    if (isSelected) {
      // we need to attach transformer manually
      imgTransformerRef.current.nodes([imageRef.current]);
      imgTransformerRef.current.getLayer().batchDraw();
    }
  }, [isSelected]);

  function setImageSize() {
    if (status == "loaded") {
      const ratio = image.width / image.height;
      if (ratio > 1) {
        image.height = maxHeight;
        image.width = maxHeight * ratio;
      } else {
        image.width = maxWidth;
        image.height = maxWidth / ratio;
      }
    }
  }

  return (
    <React.Fragment>
      <Image
        image={image}
        onClick={onSelect}
        onTap={onSelect}
        {...imageProps}
        ref={imageRef}
        draggable={isDraggable}
        onDragEnd={(e) => {
          onChange({
            ...imageProps,
            x: e.target.x(),
            y: e.target.y(),
          });
        }}
        onTransformEnd={(e) => {
          // Transformer is changing scale of the node and not its width or height
          // but in the store we have only width and height
          // to match the data better we will reset scale on transform end
          const node = imageRef.current;
          const scaleX = node.scaleX();
          const scaleY = node.scaleY();

          // we will reset it back
          node.scaleX(1);
          node.scaleY(1);

          onChange({
            ...imageProps,
            x: node.x(),
            y: node.y(),
            // set minimal value
            width: Math.max(5, node.width() * scaleX),
            height: Math.max(node.height() * scaleY),
          });
        }}
      />
      {isSelected && (
        <Transformer
          ref={imgTransformerRef}
          boundBoxFunc={(oldBox, newBox) => {
            // limit resize
            if (newBox.width < 5 || newBox.height < 5) {
              return oldBox;
            }
            return newBox;
          }}
        />
      )}
    </React.Fragment>
  );
}
