import React from 'react'
import {Slider, Typography} from '@material-ui/core'
import {classes} from './Calculator.module.css'


let Calculator =(props)=>{

    
    return (
        <div className={classes.calc}>
        <h2>Кредитный калькулятор</h2>
        <Typography id="discrete-slider-small-steps" > </Typography>
       <Slider min={0} max={1000000} step={100000} valueLabelDisplay="auto"  marks 
    //    getAriaValueText={}
       />
        <p>Срок:</p> 
        <p>Сумма займа:</p>

        <button>Рассчитать</button>
        <p>Ежемесячно:</p>
        <p>Переплата:</p>
        <p>Сумма выплат:</p>
        </div>
    )
}

export default Calculator