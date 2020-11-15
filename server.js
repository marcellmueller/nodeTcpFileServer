const net = require('net');
const fs = require('fs');
const stdoutClearLine = require('./helpers');

const PORT = 3000;
let file = 'lighthouseTest.pdf';

const server = net.createServer({ allowHalfOpen: true }, function () {
  stdoutClearLine();
  process.stdout.write('server connected');
});

server.listen(PORT, () => {
  process.stdout.write(`Server listening on port ${PORT}...`);
});

server.on('connection', (client) => {
  client.write('Connected to server, receiving file...\n');

  stdoutClearLine();
  process.stdout.write('New client connected');
});

server.on('connection', (socket) => {
  const writeStream = fs.createWriteStream(file);

  socket.on('data', (chunk) => {
    writeStream.write(chunk);
  });

  socket.on('end', () => {
    writeStream.end();
    socket.end('File Written To Disk');
  });
});
