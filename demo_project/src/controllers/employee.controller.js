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

export const updateEmployee = async (req,res,next) =>{
  try{
    const data = await EmployeeService.updateEmp(req.params.id, req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Employee updated successfully'
    });
  }
  catch(error){
    next(error);
  }
}
export const getAllEmp = async (req,res,next)=>{
  try{
    const data = await EmployeeService.getallemp();
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'All Employee fetched successfully'
    })
  }catch(error){
    next(error);
  }
}

export const getbyid = async(req,res,next)=>{
  try{
    const data = await EmployeeService.getempbyid(req.params.id);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Data fetched Successfully'
    })
  }catch(error){
    next(error)
  }
}

export const deleteUser = async (res,req,next)=>{
  try{
    const data = await EmployeeService.deleteEmp(req.params.id);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Employee deleted successfully'
    })
  }catch(error){
    next(error);
  }
}