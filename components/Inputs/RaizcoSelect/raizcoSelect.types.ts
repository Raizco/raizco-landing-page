export type RaizcoSelectOption = {
  value: string;
  label: string;
};

export type RaizcoSelectProps = {
  id?: string;
  tabindex?: number;
  options: RaizcoSelectOption[];
  default?: string;
};
