declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.mp3" {
  const src: string;
  export default src;
}
