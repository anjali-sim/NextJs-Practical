"use client";

import { signIn } from "next-auth/react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import {useRouter} from "next/navigation";

// import { auth } from "@/app/auth";

interface Props {
    title: string;
}


export default function SocialSignInOptions({title}: Props) {

    const router = useRouter();

  const handleSignInGoogle = async () => {
    await signIn("google");
    router.push("/");
  } 
  const handleSignInGitHub = async () => {
    await signIn("github");
    router.push("/");
  } 

  return (
    <div className="flex justify-between p-6">
      <div className="flex-1 mr-1.5">
        <button
          className="w-full font-bold hover:bg-white hover:text-black border border-white transition duration-300 inline-flex items-center justify-center rounded-md text-md disabled:opacity-50 bg-black text-white h-10 px-4 py-2"
          onClick={handleSignInGoogle}
        >
          {title} with  
          <FaGoogle className="ml-2" />
        </button>
      </div>

      <div className="flex-1 mr-1.5">
        <button
          className="w-full font-bold hover:bg-white hover:text-black border border-white transition duration-300 inline-flex items-center justify-center rounded-md text-md disabled:opacity-50 bg-black text-white h-10 px-4 py-2"
          onClick={handleSignInGitHub}
        >
          {title} with 
          <FaGithub className="ml-2" />
        </button>
      </div>
    </div>
  );
}
