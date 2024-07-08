import { Hono } from 'hono';
import * as Branches from './Location-Branches.controller';

export const BranchesRouter = new Hono();

BranchesRouter.get('/',  Branches.getAllBranches);
BranchesRouter.get('/:id', Branches.getBranchById);
BranchesRouter.post('/', Branches.createBranch);
BranchesRouter.put('/:id', Branches.updateBranch);
BranchesRouter.delete('/:id', Branches.deleteBranch);