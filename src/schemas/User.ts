import Joi from "joi";

export const signUp = Joi.object({
    name: Joi.string().required(),
    cpf: Joi.string().min(11).max(11).required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    confirmPassword: Joi.ref("password")
  });

export const login = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
  });

export default {
    signUp,
    login
};