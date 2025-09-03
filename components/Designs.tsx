"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
      "/d20.png",
      "/d14.png",
      "/d3.png",
      "/d4.png",
      "/d5.png",
      "/d7.png",
      "/d8.png",
      "/d10.png",
      "/d11.png",
      "/d1.png",
      "/d12.png",
    "/d13.png",
    "/d2.png",
    "/d15.png",
      "/d9.png",
    "/d16.png",
    "/promptPic.png",
    "/d17.png",
    "/d18.png",
    "/d19.png",
    "/d21.png",
    "/d22.png",
    
    "/d24.png",
    "/d25.png",
    "/d26.png",
    "/d27.png",
    "/cryPic.png",
    "/adminPic.png",
    "/zaypPic.png",
    "/d6.png",
    "/d29.png",
    "/d28.png",
  ];
  return (
    <div className="mx-auto my-30 w-full rounded-3xl  p-2 ring-1 ring-neutral-700/10 ">
      <ThreeDMarquee images={images} />
    </div>
  );
}
