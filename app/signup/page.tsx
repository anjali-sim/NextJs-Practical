import SignupForm from "@/app/components/signupForm";
import { auth } from "../auth";
import { redirect } from "next/navigation";

export default async function SignupPage() {
    // const session = await auth();

    // console.log(session);

    // if(session) {
    //     redirect("/login");
    // }
    return (
        <div>
            <SignupForm />
        </div>
    )
}