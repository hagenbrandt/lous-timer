import * as React from "react";
import styled from "styled-components";

type ClockProps = {
    state: boolean
    seconds: number
}

export const Clock = (props: ClockProps): JSX.Element | null => {
    const time = new Date(props.seconds * 1000)
    const minutes = time.getUTCMinutes()
    const seconds = time.getUTCSeconds()

    if (props.state) {
        return (
            <ClockStyled>
                {minutes}:{seconds === 0 ? '00' : seconds}
            </ClockStyled>
        )
    }
    return null
}

const ClockStyled = styled.div`
  position: absolute;
  top: 10%;
  right: 10%;
  color: rgba(80, 5, 94, .6);
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 40px;
  letter-spacing: .175rem;
  font-weight: 600;
`