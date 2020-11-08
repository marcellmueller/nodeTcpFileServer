const net = require('net');
const fs = require('fs');
const stdoutClearLine = require('./helpers');

const HOST = '127.0.0.1';
const PORT = 3000;

const server = net.createServer(function () {
  stdoutClearLine();
  process.stdout.write('server connected');
});

server.listen(PORT, () => {
  process.stdout.write(`Server listening on port ${PORT}...`);
});

//detecting and handling the server

server.on('connection', (client) => {
  client.write('Connected to server...');
  stdoutClearLine();
  process.stdout.write('New client connected');
});
