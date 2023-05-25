# Chat-Websocket

## Execution
To run this Web-Socket application,you have to be in the correct folder of it ( in that case it is called "practica5") and later you have to put "nodemon app" in your console.

## Chat
This chat is a simple chat made with Web-Socket. It is made with html and javascript with the libraries of express, nodemon and socket.io. Everyone who join in the local way can chat with all of the people who is inside it.

## How it works
### Client
There is an input text where you can put your name and another input with a button near it where you have to put the messages you want to send. You can send it by pulsing "enter" or just clicking in the button. After sending it, the input will be cleared. When you send it, in the code will emit it to the server and after it the server will send again back to him and to the rest of the clients by putting a new line with it. 
### Server
The server is all time listening through the port 3000. When he receive a message through the socket, he will emit it back to the rest of the clients. Another function that the Server has is that when something happens (user connection, user disconnection or user sending a message), it will be written in the text file called log with the hour and date when it happend.
