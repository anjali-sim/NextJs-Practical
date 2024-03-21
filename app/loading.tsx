import Image from "next/image";
import loadingGif from "../public/74H8.gif";

export default function Loading() {
  return (
    <div className="h-screen flex justify-center items-center">
      <Image src={loadingGif} alt="Loading" width={100} height={100} />
    </div>
  );
}
