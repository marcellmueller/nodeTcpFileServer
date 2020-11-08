const net = require('net');
const fs = require('fs');
const conn = net.createConnection({
  host: 'localhost', // change to IP address of computer or ngrok host if tunneling
  port: 3000, // or change to the ngrok port if tunneling
});

conn.setEncoding('utf8'); // interpret data as text

//accepting data from server
conn.on('data', (data) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(data);
});

process.stdout.write('Attempting to connect to server...');
