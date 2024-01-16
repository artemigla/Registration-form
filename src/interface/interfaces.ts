export interface IInputs {
    type: string,
    value?: string,
    onInput?: () => void,
    className?: string
}

export interface IButton {
    label: string,
    onClick: () => void
}