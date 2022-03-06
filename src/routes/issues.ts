import { prisma } from '../../prisma/conn';
import { Router, Request, Response } from 'express';
import { User } from '../types/users.';

const IssueRouter: Router = Router();

IssueRouter.get('/:id', (req: Request, res: Response, next) => {
  const data: any = prisma.user.findMany({
    where: {
<<<<<<< HEAD
      id: parseInt(req.params.id)
=======
      id: parseInt(req.params.id, 1)
>>>>>>> f8c24506b9dcd8ccc7d46210b9dabc55db15a7a1
    }
  });
  res.send(data);
});

IssueRouter.post('/postIssue', (req: Request, res: Response) => {
<<<<<<< HEAD
  const data: any = prisma.user.create(req.body);
=======
  const data: User = prisma.user.create(req.body);
>>>>>>> f8c24506b9dcd8ccc7d46210b9dabc55db15a7a1
  console.log(data);
  res.send('Data has been awaited.');
});

export { IssueRouter };
