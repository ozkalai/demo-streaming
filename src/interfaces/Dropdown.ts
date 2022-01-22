export interface IDropdownProps {
    optionsList: IOption[],
}

export interface IOption {
    title: string,
    cb: () => void
}