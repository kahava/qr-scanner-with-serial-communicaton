import  express  from "express";
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

const port = 1212;

app.get('/home', (req, res)=>{
res.json({name:"adam", age:12});
});

app.post("/home", (req, res)=>{
    console.log(req.body);
})



app.listen(port, ()=>{
    console.log(`the app connected at port: ${port}`);
})