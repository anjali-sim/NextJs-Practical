"use server";

import { loginSchema } from "@/app/Schema/loginSchema";

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
