export type RaizcoSelectOption = {
  id?: any;
  value: string;
  label: string;
};

export type RaizcoSelectProps = {
  id?: string;
  tabindex?: number;
  options: RaizcoSelectOption[];
  class?: string;
  modelValue?: RaizcoSelectOption | RaizcoSelectOption[];
  placeholder?: string;
  multiple?: boolean;
  disabled?: boolean;
};
