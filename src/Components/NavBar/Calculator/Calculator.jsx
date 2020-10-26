import React, { useState } from 'react'
import { Slider, Typography } from '@material-ui/core'
import classes from './Calculator.module.css'



let Calculator = (props) => {


    let min = props.timeFrom[0]
    let max = props.timeFrom[1]

    let minPercent = props.percent[0]
    let maxPercent = props.percent[1]

    let [count, setCount] = useState(min)
    let [value, setValue] = useState(0)
    let [percent, setPercent] = useState(minPercent)
    let [monthBasePayment, setMonthBasePayment] =  useState(0)

    let incrementTime = () => {
        if (count != max) {
            setCount(count + 1)
        }
    }
    let decrementTime = () => {
        if (count != min) {
            setCount(count - 1)
        }
    }
    let valuetext = (value) => {
        setValue(value)
    }
    let incrementPercent = () => {
        if (percent != maxPercent) {
            setPercent(percent + 1)
        }
    }
    let decrementPercent = () => {
        if (percent != minPercent) {
            setPercent(percent - 1)
        }
    }
    let monthInYear = 12;
    let interestRate = percent/100/monthInYear;
  
    let calculate = () =>{    
        
        let monthCount = count*monthInYear;
        let coefficient = (interestRate*Math.pow((1+interestRate),monthCount))/(Math.pow((1+interestRate),monthCount)-1) 
         monthBasePayment =  coefficient * valu
         setMonthBasePayment(monthBasePayment)

    }
    let valueToShow = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className={classes.calc}>
            <h2>Кредитный калькулятор</h2>
            <br></br>
            <Typography id="discrete-slider-small-steps" > </Typography>
            <div className={classes.calc_slider}><p>Выберите сумму:</p>
                <Slider min={0} max={1000000} step={100000} valueLabelDisplay="auto" marks
                    getAriaValueText={valuetext} defaultValue={0}
                /></div>
            <div>
                <div className={classes.calc_conditions}>
                    <p>Срок (лет):</p>
                    <button onClick={() => decrementTime()}>-</button> &nbsp;
                    {count}
                    &nbsp;
                    <button onClick={() => incrementTime()}>+</button> &nbsp; 
                    
                </div>
                <div className={classes.calc_conditions}>
                    <p>Процент:</p>
                    <button onClick={() => decrementPercent()}>-</button> &nbsp;
                    {percent}
                    &nbsp;
                    <button onClick={() => incrementPercent()}>+</button>
                </div>
            </div >
            <p>Сумма займа:</p> {valueToShow}
            <div className={classes.blocks}>
                <button onClick={() => calculate()}>Рассчитать</button>
            </div>
            <div className={classes.blocks}>
                <p>Ежемесячно:</p> {Math.round(monthBasePayment)}
            </div>
            <div className={classes.blocks}>
                <p>Переплата:</p>
            </div>
            <div className={classes.blocks}>
                <p>Общая сумма выплат:</p>
            </div>
        </div>
    )
}


export default Calculator