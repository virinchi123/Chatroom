import React,{useState,useEffect} from 'react';
import classNames from './Chat.module.css';
import queryString from 'query-string';
import io from 'socket.io-client'
import classes from './Chat.module.css';
import InfoBar from '../InfoBar/InfoBar'
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

let socket; 

const Chat = props=>{

    let ENDPOINT='localhost:5000'

    
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    const [message, setMessage] = useState('')
    const [messages, setMessages] = useState([])

    useEffect(()=>{
        const {name,room} = queryString.parse(props.location.search)
        console.log(name)
        console.log(room)
        setName(name)
        setRoom(room)

        socket=io(ENDPOINT)

        socket.emit('join',{name,room},(error)=>{if(error){console.log(error)}})
    }
    ,[ENDPOINT,props.location.search])

    useEffect(()=>{
        socket.on('message',(message)=>{
            console.log(message)
            setMessages([...messages,message])
        })
    },[messages])

    const sendMessage=(event)=>{
        if(message){
            socket.emit('sendMessage',message,()=>{setMessage('')})
        }
    }

    console.log(socket)
    return(
        <div className={classes.outerContainer}>
            <div className={classes.container}>
                <InfoBar room={room}/>
                <Messages messages={messages} name={name} />
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>
            </div>
        </div>
    )
}

export default Chat;