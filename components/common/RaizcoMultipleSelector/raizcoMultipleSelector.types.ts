export type RaizcoMultipleSelectorOption = {
  value: string;
  label: string;
};

export type RaizcoMultipleSelectorProps = {
  id?: string;
  options: RaizcoMultipleSelectorOption[];
  modelValue?: RaizcoMultipleSelectorOption[];
  disabled?: boolean;
};
