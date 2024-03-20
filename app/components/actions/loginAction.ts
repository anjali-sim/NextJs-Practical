"use server";

import { Schema } from "@/app/schema/schema";
import { signIn } from "@/app/auth";
import { formatErrors } from "@/app/utils/formatErrors";

const loginAction = async (
  prevState: Record<string, string> | { message: string },
  formData: FormData
) => {
  console.log(formData);

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const validatedFields = Schema.safeParse({
    email: email,
    password: password,
  });

  await signIn("credentials", {
    email: email,
    password: password,
    // Redirect to home page after successful login
    redirectTo: "/",
  });

  if (!validatedFields.success) {
    const errors: Record<string, string[]> =
      validatedFields.error.flatten().fieldErrors;
    // Convert errors object to the desired format {fieldName:<message>}
    const formattedErrors = formatErrors(errors);

    return formattedErrors;
  }
};

export default loginAction;
