"use server";

import connect from "@/app/mongodb/DBConnect";
import User from "@/app/mongodb/models/user";
import { Schema } from "@/app/schema/schema";
import { formatErrors } from "@/app/utils/formatErrors";
import bcrypt from "bcrypt";

const signupAction = async (
  prevState: Record<string, string> | { message: string },
  formData: FormData
) => {
  try {
    await connect();

    // Extract form data
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Validate form data
    const validatedFields = Schema.safeParse({
      username: username,
      email: email,
      password: password,
    });

    if (!validatedFields.success) {
      const errors: Record<string, string[]> =
        validatedFields.error.flatten().fieldErrors;
      // Convert errors object to the desired format {fieldName:<message>}
      const formattedErrors = formatErrors(errors);
      return formattedErrors;
    }

    // Check if the email already exists
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return { success: false, message: "Email already exists"};
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    // Create a new user
    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    // Save the new user to the database
    await newUser.save();
    return {success: true, message: "Signed Up Successfully"};

  } catch (error) {
    return { success: false, message: "Signup error"};
  }
};

export default signupAction;
