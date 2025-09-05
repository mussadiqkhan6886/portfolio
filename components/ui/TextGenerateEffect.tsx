"use client";
import { useCallback, useEffect } from "react";
import { motion, useAnimate } from "framer-motion";
import { stagger } from "motion";
import { cn } from "@/lib/utils";
import React from "react";

export const TextGenerateEffect = React.memo(({
  words,
  className,
  filter = true,
  duration = 0,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords =  useCallback(() => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${idx > 3 ? 'dark:text-purple text-gray-600' : 'dark:text-white text-black'} opacity-0 `}
              style={{
                filter: filter ? "blur(7px)" : "none",
              }}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  }
, [filter, scope, wordsArray])
  return (
    <div className={cn("font-extrabold italic", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
});
