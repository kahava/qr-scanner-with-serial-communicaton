import  express  from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { SerialPort } from 'serialport';
import { ReadlineParser } from '@serialport/parser-readline';

const app = express();

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());
app.use(cors());

const port = 1212;


// CONNECTION TO SERIAL PORT start
const parser = new ReadlineParser({ delimiter: '\r\n' });

try{
    const proteusPort = new SerialPort({ path: 'COM5',
    baudRate: 9600,
    dataBits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false
});

proteusPort.pipe(parser);
}

catch(err){
    console.log("Please configure virtual serial port correct");
}
// CONNECTION TO SERIAL PORT end


// accepting data from the scanning camera
app.post("/home", (req, res)=>{
   const {paid} = req.body;
   try {
    console.log("paid juice type:",paid);

    //sending data to serial port
    proteusPort.write(paid);

   } catch (error) {

    console.log("Please configure correct virtual port in your simulation. It seems the port does not receive sent data")
   }
})



app.listen(port, ()=>{
    console.log(`Grace juice server connected at port: ${port}`);
})