import * as React from 'react'
import { useState } from 'react'
import { Button } from "./Button";
import tiger from '../assets/tiger.png'
import meat from '../assets/meat.svg'

export const Timer = (): JSX.Element => {
    const [isTigerMoving, setIsTigerMoving] = useState(false)

    return (
        <section className={'stage'}>
            <Button
                state={isTigerMoving}
                activeText={'Reset'}
                passiveText={'Start'}
                buttonType={'button'}
                buttonClassActive={'button active'}
                buttonClassPassive={'button'}
                onClick={startAnimation}
            />
            <img id={'meat'} className={'meat'} src={meat} alt={'meat'} />
            <img id={'tiger'} className={!isTigerMoving ? 'tiger' : 'tiger animation'} src={tiger} alt={'tiger'} />
        </section>
    )

    function startAnimation(): void {
        setIsTigerMoving(!isTigerMoving)
    }
}