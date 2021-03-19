import * as React from 'react'

type ButtonProps = {
    state: boolean
    activeText: string
    passiveText: string
    buttonType: "button" | "submit" | "reset"
    buttonClassActive: string
    buttonClassPassive: string
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const Button = (props: ButtonProps): JSX.Element => {
    return (
        <button className={props.state ? props.buttonClassActive : props.buttonClassPassive} type={props.buttonType} onClick={props.onClick}>
            {props.state ? props.activeText : props.passiveText}
        </button>
    )
}