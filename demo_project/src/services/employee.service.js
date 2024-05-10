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