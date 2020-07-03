import React from 'react';
import classes from './Messages.module.css';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

const Messages = props=>{

    let messageCode=null;

    if(props.messages){
        console.log(props)
        messageCode=props.messages.map((el,index)=>{
            return(
                <div key={index}>
                    <Message message={el.text} user={props.name} name={el.user} />
                </div>
            )

        })
    }
    return(
        <ScrollToBottom>
            {messageCode}
        </ScrollToBottom>
    )
}

export default Messages;