"use server";

import connect from "@/app/mongodb/DBConnect";
import User from "@/app/mongodb/models/user";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";

export async function mailAction({ email }: { email: string }) {
  try {
    await connect();
    const user = await User.findOne({ email });

    if (user) {
      const token = nanoid(32);

      var transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASSWORD,
        },
      });
      const htmlBody = `Click here to <a href="http://localhost:3000/reset-password?token=${token}">Reset Password</a>`;

      const info = await transport.sendMail({
        from: "<anjalighetia123@gmail.com>",
        to: email,
        subject: "Password Reset Link",
        html: htmlBody,
      });

      console.log("Message sent: %s", info.messageId);

      user.verifyToken = token;
      await user.save();
      return {
        success: true,
        message: "Password reset link sent successfully",
      };
    } else {
      return { success: false, message: "User does not exist" };
    }
  } catch (error) {
    return { success: false, message: "Error sending the email" };
  }
}
