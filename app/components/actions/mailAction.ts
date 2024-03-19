"use server";

import connect from "@/app/mongodb/DBConnect";
import User from "@/app/mongodb/models/user";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";

export async function mailAction({email}) {
    await connect();
    const result = await User.findOne({email});

    if (result) {
        const token = nanoid(32);

        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASSWORD
            }
          });

          const htmlBody = `Click here to <a href="http://localhost:3000/reset-password/${token}">Reset Password</a>`;

      const info = await transport.sendMail({
        from: '"Maddison Foo Koch 👻" <anjalighetia123@gmail.com>', // sender address
        to: "anjalighetia123@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: htmlBody, // html body
      });

      console.log("Message sent: %s", info.messageId);

    //   save token in DB
      await User.findOneAndUpdate({email:email}, {verifyToken: token});
    } else {
        console.log("User does not exist.");
    }
}