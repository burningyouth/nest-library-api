import * as Joi from 'joi';
import { LoginDto, RegistrationDto } from '../interfaces/auth';

export const loginSchema = Joi.object<LoginDto>({
  email: Joi.string().email().required(),
  password: Joi.string().required()
});

export const registerSchema = Joi.object<RegistrationDto>({
  name: Joi.string(),
  email: Joi.string().email(),
  password: Joi.string().required()
});
