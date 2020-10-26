import React, { useState } from 'react'
import { Slider, Typography } from '@material-ui/core'
import classes from './Calculator.module.css'
import AddCircleIcon from '@material-ui/icons/AddCircle';


let Calculator = (props) => {

    //data from props
    let min = props.timeFrom[0]
    let max = props.timeFrom[1]

    let minPercent = props.percent[0]
    let maxPercent = props.percent[1]

    //state
    let [count, setCount] = useState(min)
    let [value, setValue] = useState(0)
    let [percent, setPercent] = useState(minPercent)
    let [monthBasePayment, setMonthBasePayment] = useState(0)
    let [overpayment, setOverpayment] = useState(0)
    let [total, setTotal] = useState(0)

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
    let interestRate = percent / 100 / monthInYear;

    let calculate = () => {

        let monthCount = count * monthInYear;
        let coefficient = (interestRate * Math.pow((1 + interestRate), monthCount)) / (Math.pow((1 + interestRate), monthCount) - 1)
        //formulas
        monthBasePayment = coefficient * value;
        overpayment = (monthBasePayment * monthCount) - value;
        total = value + overpayment
        //setState
        setMonthBasePayment(monthBasePayment)
        setOverpayment(overpayment)
        setTotal(total)
    }
    //modification of numbers
    let valueToShow = Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let monthBasePaymentToShow = Math.round(monthBasePayment).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let overpaymentToShow = Math.round(overpayment).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let totalToShow = Math.round(total).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
        <div className={classes.calc}>
            <h2>Кредитный калькулятор</h2>
            <Typography id="discrete-slider-small-steps" > </Typography>
            <div className={classes.calc_slider}><p>Выберите сумму:</p>
                <Slider min={0} max={1000000} step={100000}
                    marks getAriaValueText={valuetext} defaultValue={0} aria-labelledby="discrete-slider-small-steps"
                /></div>
            <div>
                <div className={classes.calc_conditions}>
                    <div>
                        <p>Сумма займа (KZT):</p> <p>{valueToShow}</p>
                    </div>
                    <br></br>
                    <p>Срок (лет):</p>

                    <button onClick={() => decrementTime()} className={classes.calc_btn}>-</button> &nbsp;
                    {count}
                    &nbsp;
                    &nbsp;
                    <button onClick={() => incrementTime()} className={classes.calc_btn}>+</button> &nbsp;
                </div>
                <div className={classes.calc_conditions}>
                    <p>Процент (%):</p>
                    <button onClick={() => decrementPercent()} className={classes.calc_btn}>-</button> &nbsp;
                    {percent}
                    &nbsp;
                       &nbsp;
                    <button onClick={() => incrementPercent()} className={classes.calc_btn}>+</button>
                </div>
            </div >

            <div className={classes.calc_btn__block}>
                <button onClick={() => calculate()} className={classes.calc_btn__total}>Рассчитать</button>
            </div>
            <div className={classes.resultBlock}>
                <div className={classes.blocks}>
                    <p>Ежемесячно:</p> <p><b>{monthBasePaymentToShow}</b></p>
                </div>
                <div className={classes.blocks}>
                    <p>Переплата:</p> <p><b>{overpaymentToShow}</b></p>
                </div>
                <div className={classes.blocks}>
                    <p>Общая сумма выплат:</p> <p><b>{totalToShow}</b></p>
                </div>
            </div>
        </div>
    )
}


export default Calculator