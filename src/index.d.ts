declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.mp3";
declare module "*.mp4" {
  const src: string;
  export default src;
}
