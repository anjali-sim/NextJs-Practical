import { auth } from "./auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Navbar from "./components/front-ui/Navbar/Navbar";
import ImageHeader from "./components/front-ui/ImageHeader/ImageHeader";
import Card from "./components/front-ui/Card/Card";

export default async function Home() {
  const session = await auth();
  
  if (!session) {
    redirect("/api/auth/signin");
  }
  return (
    <>
      <div>
        {/* Protected Page
        <div>
          Name: {session.user?.name}
          {session.user?.email && <p>Email: {session.user.email}</p>}
        </div>
        <Link
          href="/api/auth/signout"
          className="px-5 py-1 border border-blue-400"
        >
          Signout
        </Link> */}
        <Navbar />
        <ImageHeader />
        <Card />
      </div>
    </>
  );
}
