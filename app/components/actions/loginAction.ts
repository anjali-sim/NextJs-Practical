"use server";

import { z } from "zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, { message: "Username is required" })
    .min(6, { message: "Username must be at least 6 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" })
    .regex(/^[A-Za-z0-9]+$/, {
      message: "Username can only contain letters and numbers",
    }),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .min(8, { message: "Password must be at least 8 characters long" })
    .max(16, { message: "Password must be at most 16 characters long" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~`!@#$%^&*()+=_\-\{\}\[\]\|:;”’?/<>,.]).{8,16}$/,
      {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one digit, one special character, and must be between 8 and 16 characters long",
      }
    ),
});

const loginAction = async (
  prevState: Record<string, string> | { message: string },
  formData: FormData
) => {
  console.log(formData);

  const validatedFields = loginSchema.safeParse({
    username: formData.get("username"),
    password: formData.get("password"),
  });

  const formatErrors = (errors: Record<string, string[]>) => {
    const formattedErrors: Record<string, string> = {};
    for (const key in errors) {
      if (Object.prototype.hasOwnProperty.call(errors, key)) {
        formattedErrors[key] = errors[key][0];
      }
    }
    return formattedErrors;
  };

  if (!validatedFields.success) {
    const errors: Record<string, string[]> =
      validatedFields.error.flatten().fieldErrors;
    // Convert errors object to the desired format {fieldName:<message>}
    const formattedErrors = formatErrors(errors);

    return formattedErrors;
  }
};

export default loginAction;
