import * as React from 'react'
import { useState } from 'react'
import tiger from '../assets/tiger.png'
import meat from '../assets/meat.svg'

export const Timer = (): JSX.Element => {
    const [isTigerMoving, setIsTigerMoving] = useState(false)

    return (
        <section className={'stage'}>
            <button type={'button'} className={'button'} onClick={() => setIsTigerMoving(!isTigerMoving)}>Start</button>
            <img id={'meat'} className={'meat'} src={meat} alt={'meat'} />
            <img id={'tiger'} className={!isTigerMoving ? 'tiger' : 'tiger animation'} src={tiger} alt={'tiger'} />
        </section>
    )

    // function startAnimation(): void {
    //     setIsTigerMoving(!isTigerMoving)
    // }
}