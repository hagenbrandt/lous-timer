import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button } from "./Button";
import { Clock } from './Clock'
import {TimeInput} from "./TimeInput";
import tiger from '../assets/tiger.png'
import meat from '../assets/meat.svg'

export const Timer = (): JSX.Element => {
    const [isTigerMoving, setIsTigerMoving] = useState(false)
    const [time, setTime] = useState(30)
    const [seconds, setSeconds] = useState(time * 60)

    useEffect(() => {
        setSeconds(time * 60)
    },[time])

    useEffect(() => {
        if (isTigerMoving) {
            time > 0 && setTimeout(() => setSeconds(seconds - 1), 1000)
        }
    }, [isTigerMoving, seconds])

    return (
        <section className={'stage'}>
            <Clock state={isTigerMoving} seconds={seconds}/>
            <TimeInput state={isTigerMoving} value={`00:${time}`} onChange={(event: React.ChangeEvent<HTMLInputElement>) => getTime(event.currentTarget.value)}/>
            <Button
                state={isTigerMoving}
                activeText={'Reset'}
                passiveText={'Start'}
                buttonType={'button'}
                buttonClassActive={'button active'}
                buttonClassPassive={'button'}
                onClick={handleClick}
            />
            <img id={'meat'} className={'meat'} src={meat} alt={'meat'} />
            <img id={'tiger'} className={!isTigerMoving ? 'tiger' : 'tiger animation'} src={tiger} alt={'tiger'} />
        </section>
    )

    function handleClick(): void {
        if ((time * 60) !== seconds) {
            setSeconds(time * 60)
        }
        startAnimation()
    }

    function startAnimation(): void {
        setIsTigerMoving(!isTigerMoving)
    }

    function getTime(element: string) {
        console.log(element.length)
        if (element) {
            const t = new Date(Number(element.split(':').slice(-1)) * 60 * 1000)
            return setTime(t.getUTCMinutes())
        }
        return null
    }
}