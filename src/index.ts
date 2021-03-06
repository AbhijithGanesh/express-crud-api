import express, { Express, Request, Response, urlencoded, json } from 'express';
import { IssueRouter } from './routes/issues';
import cors from 'cors';
import path from 'path';

const app: Express = express();
const port: number = 3000;

app.use(
  cors({
    origin: `localhost:${port}`
  })
);

app.use(json());
app.use(urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`The CORS enabled server is sucessfully running in port ${port}`);
});

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/issues', IssueRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the Issues API');
});

app.get('/:name/', (req: Request, res: Response) => {
  console.log(req.params);
  res.send('Hello World');
});
