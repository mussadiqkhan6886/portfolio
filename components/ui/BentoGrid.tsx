'use client';

import { cn } from "@/lib/utils";
import Image from "next/image";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GridGlobe } from "./GridGlobe";
import {useState} from "react"
import animationData from "@/data/confetti.json"
import Lottie from "lottie-react"
import MagicButton from "./MagicButton";
import {IoCopyOutline} from "react-icons/io5"

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  spareImg,
  imgClassName,
  titleClassName,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string
  spareImg?: string
  imgClassName?: string
  titleClassName?: string
}) => {

  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = () => {
    navigator.clipboard.writeText("mussadiqkhan6886@gmail.com")

    setCopied(true)

    setTimeout(() => {
      setCopied(false)
    }, 1300)
  }

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border dark:border-white/[0.1] border-black/[0.2] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 dark:bg-[rgba(4,7,29)] bg-gray-200",
        className
      )}
      style={{backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)"}}
    >
  
      <div className={`${id === 6 && 'flex justify-center h-full'}`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image alt={img} src={img} width={80} height={80} className={cn(imgClassName, 'rounded-xl object-cover, object-center')} />
          )}
        </div>
        <div className={`${id === 5 && 'w-full opacity-80'} absolute right-0 -bottom-5`}>
          {spareImg && (
             <Image alt={spareImg} src={spareImg} width={100} height={100} className={'object-cover rounded-xl object-center w-full h-full'} />
          )}
        </div>

          {id === 6 && (
            <BackgroundGradientAnimation>
              {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
            </BackgroundGradientAnimation>
          )}

          <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-3 p-3 md:px-5 md:p-5 lg:p-6')}>
            <div className="font-extralight  dark:text-[#c1c2d3] text-[13px] md:text-base mb-2 z-10 text-gray-800">{description}</div>
            <div className="font-bold text-[16px]  lg:text-2xl z-10 max-w-96 dark:text-white text-gray-900">
              {title}
            </div>
          {id === 2 && <GridGlobe /> }
          {id === 3 && (
            <div className="flex dark:text-white text-gray-800 gap-1 lg:gap-5 top-0 w-fit absolute right-1">
              <div className="flex flex-col gap-3 ">
                {['Frontend', 'SEO', 'Designing'].map(
                  (item) => (
                    <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-60 lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-gray-300">{item}</span>
                  )
                )}
                <span className="py-4 px-3 rounded-lg text-center dark:bg-[#10132E] bg-gray-400" />
              </div>
              <div className="flex flex-col gap-3 ">
                <span className="py-4 px-3 rounded-lg text-center dark:bg-[#10132E] bg-gray-400" />
                {['Next fullstack', "Logo Design", "Responsive"].map(
                  (item) => (
                   <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-60 lg:opacity-100 rounded-lg text-center dark:bg-[#10132E] bg-gray-300">{item}</span>
                  )
                )}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={'absolute -bottom-5 right-0'}>
                <Lottie  animationData={animationData}
                  loop={copied}
                  autoplay={copied}
                  style={{ height: 200, width: 200 }} />
              </div>
              <MagicButton title={copied ? "Email Copied" : "Email"} icon={<IoCopyOutline />} position="left" otherClasses="!bg-[#161a31]" handleClick={handleCopy} />
            </div>
          )}
      </div>
    </div>
    </div>
  );
};

