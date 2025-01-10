export {};

declare global {
  interface HTMLElement {
    clickOutsideHandler?: (event: MouseEvent) => void;
  }
}

declare module "*.json" {
  const value: any;
  export default value;
}

