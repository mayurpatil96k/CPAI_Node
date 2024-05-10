import Joi from '@hapi/joi';

export const newEmployeeValidator = (req, res, next) => {
  const schema = Joi.object({
    Name: Joi.string().min(3).required(),
      prfileImage: Joi.string().required(),
      Gender: Joi.string().required(),
      Salary: Joi.string().required(),
      StartDate: Joi.string().isoDate(),
      Notes: Joi.string().required(),
  });
  const { error, value } = schema.validate(req.body);
  if (error) {
    next(error);
  } else {
    req.validatedBody = value;
    next();
  }
};
