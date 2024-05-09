import { error } from '@hapi/joi/lib/base';
import sequelize, { DataTypes } from '../config/database';
const User = require('../models/user')(sequelize, DataTypes);

//get all users
export const getAllUsers = async () => {
  const data = await User.findAll();
  return data;
};

//create new user
export const newUser = async (body) => {
  console.log(body);
  const existingUser = await User.findOne({
    where: {
      firstname: body.firstName,
    }
  });

  if (existingUser) {
    throw new Error('User already exists');
  }

  const data = await User.create(body);

  return data;
};

//update single user
export const updateUser = async (id, body) => {
  const temp_date = await User.findAll();
  if(temp_date.length+1<id){
    throw new Error('Invlid ID');
  }

  await User.update(body, {
    where: { id: id }
  });
  return body;
};

//delete single user
export const deleteUser = async (id) => {
  await User.destroy({ where: { id: id } });
  return '';
};

//get single user
export const getUser = async (id) => {
  const temp_date = await User.findAll();
  if(temp_date.length+1<id){
    throw new Error('Please ensure that the id enter is valid ID');
  }
  const data = await User.findByPk(id);
  return data;
};
