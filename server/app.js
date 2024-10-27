const express = require('express');
const { Server } = require('socket.io');
const { createServer } = require('node:http');

// Initiate Express App
const app = express();
const server = createServer(app);

// Initiate Socket.io App
const io = new Server(server);

// Routes
app.get('/', (req, res) => {
  res.send('<h1>Hello world</h1>');
});

io.on('connection', (socket)=>{
    console.log("A User Connected");
})

server.listen(3000, () => {
  console.log('server running at http://localhost:3000');
});