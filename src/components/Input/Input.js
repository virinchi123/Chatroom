import React from 'react';
import classes from './Input.module.css'

const Input = props=>{

    return (
        <div className={classes.form}>
            <input
            className={classes.input}
            type="text"
            placeholder='type a message'
            value={props.message}
            onChange={(event)=>props.setMessage(event.target.value)}
            onKeyPress={event=>event.key==='Enter'?props.sendMessage(event):null}/>
            <button className={classes.sendButton} onClick={event=>props.sendMessage(event)}>Send</button>
        </div>
    )
}

export default Input;