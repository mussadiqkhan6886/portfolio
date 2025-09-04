import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact" style={{backgroundImage: "url('/footer-grid.svg')"}}>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="dark:text-purple text-gray-600">your</span> digital
          presence to the next level?
        </h1>
        <p className="dark:text-white-200 text=gray-900 md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="/hire-me">
          <MagicButton
            title="get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2024 Adrian Hajdin
        </p>

        <div className="flex items-center mt-5 md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <Link
              href={info.url}
              key={info.id}
              target="_blank"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
