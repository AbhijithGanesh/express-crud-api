import { Router, Request, Response } from 'express';

const IssueRouter: Router = Router();

IssueRouter.get('/welcome', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export { IssueRouter };
