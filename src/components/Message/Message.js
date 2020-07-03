import React from 'react';
import classes from './Message.module.css'

const Message = props =>{

    let isSentByCurrentUser = false;

    const trimmedName = props.name.trim().toLowerCase();

    if(props.user===trimmedName){
        isSentByCurrentUser=true;
    }

    console.log(props)
    return(
        isSentByCurrentUser?(
            <div className={[classes.messageContainer,classes.justifyEnd].join(' ')}>
                <p className={[classes.sentText, classes.pr10].join(' ')}>{trimmedName}</p>
                <div className={[classes.messageBox, classes.backgroundBlue].join(' ')}>
                    <p className={[classes.messageText, classes.colorWhite].join(' ')}>{props.message}</p>
                </div>
            </div>
        )
        :(
            <div className={[classes.messageContainer, classes.justifyStart].join(' ')}>
                <div className={[classes.messageBox,classes.backgroundLight].join(' ')}>
                    <p className={[classes.messageText,classes.colorDark].join(' ')}>{props.message}</p>
                </div>
                <p className={[classes.sentText,classes.pl10].join('')}>{trimmedName}</p>
            </div>
        )
    )
}

export default Message;