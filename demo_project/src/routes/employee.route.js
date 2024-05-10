import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newEmployeeValidator } from '../validators/employee.validator';

const router = express.Router();

    router.post('', userAuth,newEmployeeValidator, employeeController.addEmployee);
    router.put('/:id', employeeController.updateEmployee);

export default router;
