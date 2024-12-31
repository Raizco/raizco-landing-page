export {};

declare global {
  interface HTMLElement {
    clickOutsideHandler?: (event: MouseEvent) => void;
  }
}