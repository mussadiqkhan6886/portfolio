import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";

const RecentProjects = () => {
    return (
        <div id="projects" className="py-20">
            <h1 className="heading">
                A small selection of {' '} 
                <span className="dark:text-purple text-gray-600">recent Projects</span>
            </h1>
            <div className="grid grid-cols-1 xl:grid-cols-2 place-items-center p-4 gap-x-24 lg:gap-y-34 mt-10">
                {projects.map(({id, title, des, img, link, iconLists}) => (
                    <div key={id} className="sm:h-[41rem] h-[30rem] lg:h-[38rem] flex items-center justify-center sm:w-[570px] w-[80vw] ">
                        <PinContainer title={link} href={link}>
                            <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[40vh] lg:h-[50vh] sm:h-[40vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <Image src="/bg.png" alt="bg image" width={100} height={100} />
                                </div>
                                <Image src={img} alt={title} className="z-20 absolute bottom-0" width={500} height={500} />
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">{title}</h1>
                            <p className="lg:text-lg lg:font-normal font-light text-sm line-clamp-2">{des}</p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon, index) => (
                                        <div key={icon} className="border border-gray-500 rounded-full dark:bg-black bg-gray-400 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center" style={{transform:`translateX(-${5 * index * 2}px)`}}>
                                            <Image src={icon} alt={icon} className="p-2" width={40} height={40} />
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex lg:text-xl md:text-xs text-sm dark:text-purple text-gray-400">Live Site</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentProjects;