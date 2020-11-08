const net = require('net');
const fs = require('fs');

const HOST = '127.0.0.1';
const PORT = 3000;
const server = net.createServer(function () {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write('server connected');
});

server.listen(3000, () => {
  process.stdout.write('Server listening on port 3000!');
});

//detecting and handling the server

server.on('connection', (client) => {
  client.write('Connected to server...');
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write('New client connected!');
});
