import * as React from 'react'
import styled from "styled-components";

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
        <ButtonStyled className={props.state ? props.buttonClassActive : props.buttonClassPassive} type={props.buttonType} onClick={props.onClick}>
            {props.state ? props.activeText : props.passiveText}
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    border: none;
    background: rgb(255,69,0);
    color: white;
    font-family: 'IBM Plex Sans', sans-serif;
    font-size: 16px;
    letter-spacing: .175rem;
    padding: 20px 40px;
    border-radius: 20px;
    
    &:hover {
        cursor: pointer;
        background: rgb(220,20,60)
    }
    
    &:active {
        background: rgb(220,20,60)
    }
    
    &:focus {
        outline: none;
    }
    
    &.active {
        background: rgb(220,20,60);
        
        &:hover {
            background: rgb(255,69,0);
        }
        
        &:active {
            background: rgb(255,69,0);
        }
    }
    
    @media (min-width: 768px) {
        top: 30%;
    }
`