import type { IconType } from "~/types/icon.type";

export type RaizcoInputFormatter = {
  currency: Record<string, any>;
  thousands: Record<string, any>;
}

export type RaizcoInputProps = {
  id?: string;
  label?: string;
  type?: string;
  placeholder?: string;
  class?: string;
  modelValue?: string;
  icon?: IconType;
  iconColor?: string;
  disabled?: boolean;
};
