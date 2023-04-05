import Joi from "joi";

export const add = Joi.object({
    name: Joi.string().min(3).required(),
    synopsis: Joi.string().max(255).required(),
    pricePerDay: Joi.number().required(),
    date: Joi.string().min(10).max(10).required(),
    image: Joi.string().required()
  });

export default {
    add,
};