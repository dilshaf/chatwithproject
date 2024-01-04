import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import router from './routes/authRoutes.js'
import Postrouter from './routes/postRoutes.js'
import ChatRoute from './routes/chatRoutes.js'
import MessageRoutes from './routes/messageRoutes.js'

// import router from './routes/postRoutes.js'
import {dirname,join} from 'path'
import {fileURLToPath} from 'url'
import path from 'path'
import http from 'http';
import { Server } from 'socket.io';
import { v4 as uuidV4 } from 'uuid';



const __filename=fileURLToPath(import.meta.url)
const __dirname=dirname(__filename)

const app=express()
const server = http.createServer(app);
const io = new Server(server);
dotenv.config()

//MIDDLEWARES
app.use(cors())
app.use(express.json());
app.use(cors())
app.use(morgan("common"))
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set('view engine', 'ejs') // Tell Express we are using EJS
app.use(express.static('public'))

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/api/admin',router)
app.use('/api/posts',Postrouter)
app.use("/api/chats",ChatRoute)
app.use('/api/message',MessageRoutes)
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });



app.get('/', (req, res) => {
    res.redirect(`/${uuidV4()}`)
})
// If they join a specific room, then render that room
app.get('/:room', (req, res) => {
    res.render('room', {roomId: req.params.room})
})
// When someone connects to the server
io.on('connection', socket => {
    // When someone attempts to join the room
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)  // Join the room
        socket.broadcast.emit('user-connected', userId) // Tell everyone else in the room that we joined
        
        // Communicate the disconnection
        socket.on('disconnect', () => {
            socket.broadcast.emit('user-disconnected', userId)
        })
    })
})







//MONGODB CONNECT
const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected");
    } catch (error) {
        console.log(error.message);
        
    }
}



//PORT CONNECT
app.listen(process.env.PORT,()=>{
    connect()
    console.log(`Port is connected ${process.env.PORT}`);
})


