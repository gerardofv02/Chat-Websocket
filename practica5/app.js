
const fs = require('fs')
const express = require ("express")
const app = express()

const http = require('http')

const server = http.createServer(app)

const {Server} = require("socket.io")
const io = new Server(server)

 //connection with socket to the clients
io.on('connection' , (socket) => {
    
    console.log("Usuario conectado")
    const date = new Date();
    const message = "Usuario conectado / " + date + "\n";
    //sending information to the log telling that the user connected and when he did it
    fs.appendFile('log.txt', message, err => {
        if (err) console.error(err);
        else console.log('Data written to file successfully.');
    });
    
    socket.on('disconnect' , () => {
        //user disconnected
        console.log("usuario desconectado")
        const date = new Date();
        const message = "Usuario desconectado / " + date + "\n";
        //sending information to the log telling that the user disconnected and when he did it
        fs.appendFile('log.txt',message, err => {
            if (err) console.error(err);
            else console.log('Data written to file successfully.');
        });
    })
    
/*
    socket.on('chat', (msg) => {
        console.log("Mensaje : " , msg)
    })
    */
   socket.on('chat' , (name,msg) => {
    //user sending messages
    console.log("Mensaje : " , msg ,"Nombre : " ,name)
    const date = new Date();
    const message = name + " : " + msg;
    io.emit('chat' ,message)
     const messagee = message + " / " + date + "\n";
     //sending information to the log telling the message, the user and the time when the user send the message
    fs.appendFile('log.txt',messagee, err => {
        if (err) console.error(err);
        else console.log('Data written to file successfully.');
    });

    // msg = {msg: msg};
    // addMessage(msg)
   })
})
//going to the file index.html to show the client the chat page
app.get('/', (req,res) => {
    //res.send('<div>App de chat</div>')

    res.sendFile(`${__dirname}/cliente/index.html`)
})
//inizialazing server in port 3000 and route localhost or by local IP to connect by other devices in the same net
server.listen(3000, () => console.log("Server en http://localhost:3000")) 
// async function addMessage(msg) {
//     const result = await main.collection.insertOne(msg);
//     console.log(result);
// }