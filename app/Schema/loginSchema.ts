import { z } from "zod";

import {
  PASSWORD_MAXIMUM_VALIDATION_MESSAGE,
  PASSWORD_MINIMUM_VALIDATION_MESSAGE,
  PASSWORD_REQUIRED_VALIDATION_MESSAGE,
  PASSWORD_SPECIAL_VALIDATION_MESSAGE,
  USERNAME_MAXIMUM_VALIDATION_MESSAGE,
  USERNAME_MINIMUM_VALIDATION_MESSAGE,
  USERNAME_REQUIRED_VALIDATION_MESSAGE,
  USERNAME_SPECIAL_VALIDATION_MESSAGE,
} from "../constants/validationMessages";

export const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: USERNAME_REQUIRED_VALIDATION_MESSAGE })
    .min(6, { message: USERNAME_MINIMUM_VALIDATION_MESSAGE })
    .max(20, { message: USERNAME_MAXIMUM_VALIDATION_MESSAGE })
    .regex(/^[A-Za-z0-9]+$/, {
      message: USERNAME_SPECIAL_VALIDATION_MESSAGE,
    }),
  password: z
    .string()
    .min(1, { message: PASSWORD_REQUIRED_VALIDATION_MESSAGE })
    .min(8, { message: PASSWORD_MINIMUM_VALIDATION_MESSAGE })
    .max(16, { message: PASSWORD_MAXIMUM_VALIDATION_MESSAGE })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()+=_\-\{\}\[\]\|:;”’?/<>,.]).{8,16}$/,
      {
        message: PASSWORD_SPECIAL_VALIDATION_MESSAGE,
      }
    ),
    
});
