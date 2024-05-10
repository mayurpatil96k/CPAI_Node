import express from 'express';
import * as employeeController from '../controllers/employee.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { newEmployeeValidator } from '../validators/employee.validator';

const router = express.Router();

    router.post('', userAuth,newEmployeeValidator, employeeController.addEmployee);
    router.put('/:id', employeeController.updateEmployee);
    router.get('', employeeController.getAllEmp);
    router.get('/:id', employeeController.getbyid);
    router.delete('/:id',employeeController.deleteUser)

export default router;
