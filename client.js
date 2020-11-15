const net = require('net');
const fs = require('fs');
const socket = net.connect(3000);

const stdoutClearLine = require('./helpers');
const conn = net.createConnection({
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3000, // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

//accepting data from server
conn.on('data', (data) => {
  stdoutClearLine();
  console.log(data);
});

fs.createReadStream('server/lighthouse.pdf').pipe(socket);

socket.on('data', (chunk) => {
  console.log(chunk.toString());
});

socket.on('end', () => {});

stdoutClearLine();
process.stdout.write('Attempting to connect to server...');
