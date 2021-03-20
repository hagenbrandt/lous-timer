import * as React from "react";
import { useState, useEffect } from "react";

type ClockProps = {
    state: boolean;
}

export const Clock = (props: ClockProps) => {
    const [seconds, setSeconds] = useState(1800)

    useEffect(() => {
        console.log(props.state)
        if (props.state) {
            seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000)
        }
    }, [props.state ,seconds])

    return (
        <div>
            {seconds / Math.floor(60)}
        </div>
    )
}