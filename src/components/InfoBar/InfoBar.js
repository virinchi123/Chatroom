import React from 'react';
import classes from './Infobar.module.css';
import {Link} from 'react-router-dom';

const InfoBar=props=>{

    return(
        <div className={classes.infoBar}>
            <div className={classes.leftInnerContainer}>
                <h3>Room: {props.room}</h3>
            </div>
            <div className={classes.rightInnerContainer}>
                <Link to='/' exact>close</Link>
            </div>
        </div>
    )
}

export default InfoBar;