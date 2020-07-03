const express = require('express');
const http = require('http');
const socketio=require('socket.io');
const router = require('./router');
const { addUser, removeUser, getUser, getUsersInRoom } =require('./users')

const PORT = process.env.PORT||5000;
const app =express();

app.use(router)

const server= http.createServer(app)
const io=socketio(server)

io.on('connection',socket=>{
    console.log('Connected to client!')
    console.log(socket.id)
    socket.on('join',({name,room},callback)=>{
        console.log(name,room)
        console.log('hi')

        const {error,user}=addUser({id:socket.id,name:name,room:room})
        console.log(user)

        if(error){
            callback({error:'error'})
        }

        socket.emit('message',{user:'admin',text:`Hi ${user.name}! Welcome to the Room ${user.room}`})
        socket.broadcast.to(user.room).emit('message',{user:'admin',text:`User ${user.name} has joined!`})

        socket.join(user.room)

        callback()
    })

    socket.on('sendMessage', (message,callback)=>{
        const user = getUser(socket.id)
        console.log(message)

        io.to(user.room).emit('message', {user:user.name,text:message})

        callback()
    })

    socket.on('disconnect',(message,callback)=>{
        /*const user = removeUser(socket.id);
        console.log(`${user} has left`)
        if (user) {
            io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
        }*/
        console.log('user has left')
    })
})

server.listen(PORT,()=>console.log('Server is running on '))