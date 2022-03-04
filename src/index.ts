import express, {Request, Response} from "express";

const app: any = express();
const port: number = 3000;


app.listen(port, () => {
  console.log(`The server is sucessfully running in port ${port}`);
});



app.get("/", (req: Request, res:  Response) => {
    res.send("Hello World")

})