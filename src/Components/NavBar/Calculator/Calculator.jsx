import React, { useState } from 'react'
import { Slider, Typography } from '@material-ui/core'
import classes from './Calculator.module.css'



let Calculator = (props) => {

    let valueSum;

    let min = props.timeFrom[0]
    let max = props.timeFrom[1]

    let [count, setCount] = useState(min)

    let incrementTime = () => {
        setCount(count + 1)
    }
    let decrementTime = () => {
        setCount(count - 1)
    }
    return (
        <div className={classes.calc}>
            <h2>Кредитный калькулятор</h2>
            <Typography id="discrete-slider-small-steps" > </Typography>
            <Slider min={0} max={1000000} step={100000} valueLabelDisplay="auto" marks
                getAriaValueText={valueSum}
            />
            <div>
                <p>Срок:</p>
                <div><button onClick={() => decrementTime()}>-</button> &nbsp;
                    {count}
                    &nbsp;
                    <button onClick={() => incrementTime()}>+</button> 
                </div>
            </div >
            <p>Сумма займа:</p> {valueSum}
            <div className={classes.blocks}>
                <button>Рассчитать</button>
            </div>
            <div className={classes.blocks}>
                <p>Ежемесячно:</p>
            </div>
            <div className={classes.blocks}>
                <p>Переплата:</p>
            </div>
            <div className={classes.blocks}>
                <p>Сумма выплат:</p>
            </div>
        </div>
    )
}


export default Calculator