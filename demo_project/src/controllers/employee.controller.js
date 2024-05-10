import HttpStatus from 'http-status-codes';
import * as EmployeeService from '../services/employee.service';

export const addEmployee = async (req, res, next) =>{
    try {
        const data = await EmployeeService.newEmployee(req.body);
        res.status(HttpStatus.CREATED).json({
          code: HttpStatus.CREATED,
          data: data,
          message: 'Employee Added successfully'
        });
      } catch (error) {
        if (error.message === 'User already exists') {
          res.status(HttpStatus.CONFLICT).json({
            code: HttpStatus.CONFLICT,
            data: [],
            message: 'Employee with same name already exists'
          });
        }
        next(error);
      }
};