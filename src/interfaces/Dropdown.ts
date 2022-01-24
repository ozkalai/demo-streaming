export interface IDropdownProps {
  optionsList: IOption[];
  onChange: (value: string) => void;
  selected: string;
}

export interface IOption {
  label: string;
  value: string;
}
