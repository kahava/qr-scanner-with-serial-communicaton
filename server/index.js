// import { SerialPort } from 'serialport';
// import { ReadlineParser } from '@serialport/parser-readline'
// import http from "http";
// import fs from "fs";

// const index = fs.readFileSync( 'index.html');

// const parser = new ReadlineParser({ delimiter: '\r\n' });


// const port = new SerialPort({ path: 'COM3',
//     baudRate: 9600,
//     dataBits: 8,
//     parity: 'none',
//     stopBits: 1,
//     flowControl: false
// });

// port.pipe(parser);

// const app = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(index);
// });


// const io = new Server(app);

// io.on('connection', function(socket) {
    
//     socket.on('lights',function(data){
        
//         console.log( data );
//         port.write( data.status );
    
//     });
    
// });

// app.listen(1212);





