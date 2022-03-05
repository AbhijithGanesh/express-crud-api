import express, { Request, Response } from "express";
import { IssueRouter } from "./routes/issues";
import path from "path";

const app: any = express();
const port: number = 3000;

app.listen(port, () => {
  console.log(`The server is sucessfully running in port ${port}`);
});

app.use("/static", express.static(path.join(__dirname, "public")));
app.use("/issues", IssueRouter);

app.get("/:name/", (req: Request, res: Response) => {
  console.log(req.params);
  res.send("Hello World");
});
