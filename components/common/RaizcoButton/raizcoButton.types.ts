import type { IconType } from "~/types/icon.type";

export type RaizcoButtonProps = {
  id?: string;
  text: string;
  class?: string;
  disabled?: boolean;
  prefixIcon?: IconType;
  suffixIcon?: IconType;
  prefixIconColor?: string;
  secondary?: boolean;
};
