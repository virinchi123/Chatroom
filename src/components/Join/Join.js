import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import classes from './Join.module.css'

const Join = props =>{

    const [name,setName]=useState('')
    const [room, setRoom] = useState('')

    return(
        <div className={classes.joinOuterContainer}>
            <div className={classes.joinInnerContainer}>
                <h1 className={classes.heading}>Join</h1>
                <input placeholder="Name" className={classes.joinInput} type="text" onChange={(event)=>setName(event.target.value)}/>
                <input placeholder="Room" className={[classes.joinInput,classes.mt20].join(' ')} type="text" onChange={(event)=>setRoom(event.target.value)} />
            </div>
            <Link to={`/chat?name=${name}&room=${room}`}>
                <button type="button" className={[classes.button,classes.mt20].join(' ')}>Sign In</button>
            </Link>
        </div>
    )
}

export default Join;