import { SerialPort } from "serialport";

const port = new SerialPort({path:"\\.\\CNCA0",
baudRate:9600});

port.write("adam");
console.log("first");