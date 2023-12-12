declare module "*.jpg";
declare module "*.jpeg";
declare module "*.png";
declare module "*.mp3";

declare module "*.scss" {
  const content: {[className: string]: string};
  export = content;
}
