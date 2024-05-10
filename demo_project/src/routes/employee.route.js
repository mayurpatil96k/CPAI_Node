import express from 'express';
import userAuth from '../middlewares/auth.middleware';
import * as employeeController from "../controllers/employee.controller";
const route = express.Router();

route.post('/', userAuth, employeeController.addEmployee);