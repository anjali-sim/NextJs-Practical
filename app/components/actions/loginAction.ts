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

  // try {
  // await connect();

  // const user = await User.findOne({ email: email });
  // if (!user) {
  //   // User not found
  //   throw new AuthError("User not found");
  // }

  // if (user.password !== password) {
  //   // Incorrect password
  //   throw new AuthError("Incorrect password");
  // }

  // Login successful, sign in the user
  // await signIn("credentials", {
  //   email: email,
  //   password: password,
  //   // Redirect to home page after successful login
  //   redirectTo: "/",
  // });
  // } catch (error) {
  //   // Handle authentication errors
  //   if (error instanceof AuthError) {
  //     // Convert AuthError to the desired format
  //     return { error: error.message };
  //   }
  //   console.error("Login action error:", error);
  //   return { error: "An error occurred during login" };
  // }
};

export default loginAction;
