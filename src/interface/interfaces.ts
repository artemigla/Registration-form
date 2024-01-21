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

export type IFormValue = {
    firstName: string,
    lastName: string,
    email: string,
    phone: number,
    password: string,
    confirmPassword: string,
}