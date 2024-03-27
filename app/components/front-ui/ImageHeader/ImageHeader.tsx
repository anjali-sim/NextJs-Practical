import Image from "next/image";
import Link from "next/link";
import headerImage from "../../../../public/beach-boat.jpg";

export default function ImageHeader() {
  return (
    <div  className="container mx-auto bg-black">
    <div className="md:flex md:flex-row mt-20">
      <div className="md:w-2/5 flex flex-col justify-center items-center">
        <h2 className="text-4xl text-white mb-4 text-center md:self-start md:text-left">
          Title
        </h2>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
          Tagline
        </p>
        <p className="uppercase text-gray-600 tracking-wide text-center md:self-start md:text-left">
          Motto
        </p>
        <Link
          href="/about"
          className="bg-gradient-to-r from-red-600 to-pink-500 rounded-full py-4 px-8 text-gray-50 uppercase text-xl md:self-start my-5"
        >
          Shop Now
        </Link>
      </div>
      <div className="md:w-3/5">
        <Image
          src={headerImage}
          alt="picture"
          className="w-full"
          width={500}
          height={500}
        />
      </div>
    </div>
    </div>
  );
}
