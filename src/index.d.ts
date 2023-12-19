declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";

declare module "*.mp3" {
  const src: string;
  export default src;
}

declare module "*.mp4" {
  const src: string;
  export default src;
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
