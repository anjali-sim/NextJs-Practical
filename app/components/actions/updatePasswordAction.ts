"use server";

import connect from "@/app/mongodb/DBConnect";
import User from "@/app/mongodb/models/user";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";

interface Props {
  newPassword: string;
  token: string;
}

export default async function updatePasswordAction({
  newPassword,
  token,
}: Props) {
  await connect();

  const saltRounds = 10;
  const salt = await bcrypt.genSalt(saltRounds);
  const passwordHashed = await bcrypt.hash(newPassword, salt);

  await User.findOneAndUpdate(
    { verifyToken: token },
    { password: passwordHashed }
  );
  return redirect("/login");
}
