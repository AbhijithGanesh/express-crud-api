import { prisma } from '../../prisma/conn';
import { Router, Request, Response } from 'express';
import { User } from '../types/users.';

const IssueRouter: Router = Router();

IssueRouter.get('/:id', (req: Request, res: Response, next) => {
  const data: any = prisma.user.findMany({
    where: {
      id: parseInt(req.params.id, 1)
    }
  });
  res.send(data);
});

IssueRouter.post('/postIssue', (req: Request, res: Response) => {
  const data: User = prisma.user.create(req.body);
  console.log(data);
  res.send('Data has been awaited.');
});

export { IssueRouter };
