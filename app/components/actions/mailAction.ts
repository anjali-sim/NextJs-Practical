"use server";

import connect from "@/app/mongodb/DBConnect";
import User from "@/app/mongodb/models/user";
// import { showErrorToast, showSuccessToast } from "@/app/utils/toast";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";

export async function mailAction({email}: {email: string}) {
    try{
    await connect();
    const user = await User.findOne({email});

    if (user) {
        const token = nanoid(32);

        var transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASSWORD
            }
          });
        const htmlBody = `Click here to <a href="http://localhost:3000/reset-password?token=${token}">Reset Password</a>`;

      const info = await transport.sendMail({
        from: '"Maddison Foo Koch 👻" <anjalighetia123@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Password Reset Link", // Subject line
        html: htmlBody, // html body
      });

      console.log("Message sent: %s", info.messageId);
   
   user.verifyToken = token;
   await user.save();
    console.log("Password link sent successfully");
    // showSuccessToast("Password reset link sent successfully")
    } else {
        console.log("User does not exist.");
        // showErrorToast("User does not exist");
    }
} catch(error) {
    console.log("Error sending");
}
}