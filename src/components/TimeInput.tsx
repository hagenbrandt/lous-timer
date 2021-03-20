import * as React from "react";
import styled from "styled-components";

type TimeInputProps = {
    state: boolean
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export const TimeInput = (props: TimeInputProps): JSX.Element | null => {
    if (!props.state) {
        return (
            <>
                <label htmlFor='timeInput' />
                <InputStyled id='timeInput' type="time" value={props.value} min="00:00" max="00:59" onChange={props.onChange}/>
            </>
        )
    }
    return null
}

const InputStyled = styled.input<TimeInputProps>`
  position: absolute;
  display: block;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background: papayawhip;
  border: none;
  color: rgba(80, 5, 94, .6);
  font-family: 'IBM Plex Sans', sans-serif;
  letter-spacing: .1rem;
  border-bottom: 1px solid rgb(255,69,0);
  padding: 16px 20px;
  
  &:focus {
    outline: none;
  }
`