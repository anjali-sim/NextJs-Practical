import LoginForm from "@/app/components/loginForm";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export default async function LoginPage() {
    const session = await auth();

    console.log(session)
    if (session) {
      redirect("/");
    }
  return (
    <div>
      <LoginForm />
    </div>
  );
}
