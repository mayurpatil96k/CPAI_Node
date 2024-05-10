import { error } from '@hapi/joi/lib/base';
import sequelize, { DataTypes } from '../config/database';
import dotenv from 'dotenv';
dotenv.config();

const Employee = require('../models/employee')(sequelize, DataTypes);
export const newEmployee = async (body)=>{
    const existingUser = await Employee.findOne({
        where: {
          Name: body.Name
        }
      });
    
      if (existingUser) {
        throw new Error('Employee already exists');
      }
    const data = await Employee.create(body);
    return data;
}

export const updateEmp = async (id,body)=>{
  await Employee.update(body,{
    where: { id: id }});
  return body;
}

export const deleteEmp = async (id)=>{
  await Employee.destroy({where:{id:id}});
  return 'Employee deleted';
}

export const getempbyid = async (id)=>{
  const data = await Employee.findByPk(id);
  return data;
}

export const getallemp = async ()=>{
  const data = Employee.findAll();
  return data;
}