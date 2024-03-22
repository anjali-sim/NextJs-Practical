"use server";

import { Schema } from "@/app/schema/schema";
import { signIn } from "@/app/auth";
import { formatErrors } from "@/app/utils/formatErrors";
import { AuthError } from "next-auth";
import { redirect } from "next/navigation";

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

  if (!validatedFields.success) {
    const errors: Record<string, string[]> =
      validatedFields.error.flatten().fieldErrors;
    const formattedErrors = formatErrors(errors);
    console.log(formattedErrors);
    return formattedErrors;
  }

  try {
    const res = await signIn("credentials", {
      email: email,
      password: password,
    });
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { message: "Invalid Credentials" };
        default:
          return { message: "Unknown Error Found" };
      }
    }
  }
  redirect("/");
};

export default loginAction;
