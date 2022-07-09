import { PrismaClient } from '@prisma/client';
import { json } from 'express';
import { Router, Request, Response } from 'express';

const prisma = new PrismaClient();
const IssueRouter: Router = Router();
IssueRouter.use(json());

IssueRouter.get('/:id', (req: Request, res: Response, next) => {
  const data: any = prisma.issue.findMany({
    where: {
      id: parseInt(req.params.id, 1)
    }
  });
  res.send(data);
});

IssueRouter.post('/postIssue', async (req: Request, res: Response) => {
  const result = await prisma.Test.create(req.body);
  res.send('Data has been awaited.');
});

IssueRouter.post(`/postIssue`, async (req: Request, res: Response) => {
  const result = await prisma.test.create({
    data: {
      name: req.body.name
    }
  });
  res.json(result);
});

export { IssueRouter };
