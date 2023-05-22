
// const main =  require('./cliente/functions')
// const main = new main.main()
// main().catch(console.error);
const express = require ("express")
const app = express()

const http = require('http')

const server = http.createServer(app)

const {Server} = require("socket.io")
const io = new Server(server)

 
io.on('connection' , (socket) => {
    
    console.log("Usuario conectado")
    
    socket.on('disconnect' , () => {
        console.log("usuario desconectado")
    })
    
/*
    socket.on('chat', (msg) => {
        console.log("Mensaje : " , msg)
    })
    */
   socket.on('chat' , (name,msg) => {
    console.log("Mensaje : " , msg ,"Nombre : " ,name)
    const message = name + " : " + msg;

    io.emit('chat' ,message)
    // msg = {msg: msg};
    // addMessage(msg)
   })
})

app.get('/', (req,res) => {
    //res.send('<div>App de chat</div>')

    res.sendFile(`${__dirname}/cliente/index.html`)
})

server.listen(3000, () => console.log("Server en http://localhost:3000")) 
// async function addMessage(msg) {
//     const result = await main.collection.insertOne(msg);
//     console.log(result);
// }