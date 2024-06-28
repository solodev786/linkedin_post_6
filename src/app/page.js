"use client";
import { Staatliches, Grand_Hotel, Julius_Sans_One } from "next/font/google";
import Image from "next/image";
import { FaShoppingCart } from "react-icons/fa";
import shoe_one from "../app/assets/1.png";
import Two from "../app/assets/2.png";
import three from "../app/assets/3.png";
import four from "../app/assets/4.png";
import five from "../app/assets/5.png";
import six from "../app/assets/6.png";

import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";

const lobster = Grand_Hotel({ subsets: ["latin"], weight: "400" });
const juli = Julius_Sans_One({ subsets: ["latin"], weight: "400" });

export default function Home() {
  let [changeCount, setChangeCount] = useState(1);
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setChangeCount((prevCount) => {
        if (prevCount < 4) {
          return prevCount + 1;
        } else {
          clearInterval(intervalId);
          return prevCount;
        }
      });
      scrollNext();
    }, 2000);

    return () => clearInterval(intervalId);
  }, [emblaApi, scrollNext]);

  return (
    <>
      <div
        className={`w-full h-screen embla  py-10 ${
          changeCount === 1
            ? " bg-gradient-to-br from-lime-400 to-black"
            : changeCount === 2
            ? "bg-gradient-to-br from-yellow-500 via-yellow-600 to-gray-800"
            : changeCount === 3
            ? "bg-gradient-to-br from-pink-300 via-rose-400 to-gray-800"
            : changeCount === 4
            ? "bg-gradient-to-br from-orange-500 via-orange-600 to-green-800"
            : "bg-gradient-to-br from-white via-gray-500 to-gray-800"
        } flex flex-col justify-between`}
      >
        <div className=" w-full flex justify-between px-10">
          <h1 className={`${lobster.className} text-4xl`}>Hexa shoes</h1>
          <div
            className={`${juli.className} flex items-center gap-10 font-black`}
          >
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Contact us</h1>
            <h1>Products</h1>
          </div>
          <div className=" flex items-center gap-2">
            <FaShoppingCart className=" text-xl" />
            <h1>0</h1>
          </div>
        </div>
        <div className=" relative w-full flex justify-center ">
          <div className=" w-full text-[220px] flex items-center justify-center overflow-hidden gap-20 mt-20 ">
            <Marquee loop={0} autoFill className=" flex items-center gap-20">
              <h1 className={` font-extrabold tracking-wide`}>HEXA SHOES </h1>
            </Marquee>
          </div>
          <div
            className=" absolute top-0 left-0 flex w-full justify-center  z-10 overflow-scroll embla__viewport "
            ref={emblaRef}
          >
            <div className="embla__container flex w-full justify-start">
              {/* <div className=" w-full flex flex-shrink-0 justify-center embla__slide">
                <Image
                  src={shoe_one}
                  width={500}
                  alt="shoe one "
                  className=" mt-[-100px] object-cover"
                />
              </div> */}

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className=" w-full flex flex-shrink-0 justify-center embla__slide"
              >
                <Image
                  src={six}
                  width={600}
                  alt="shoe one "
                  className="mt-[-200px]   object-cover -rotate-[30deg]"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className=" w-full flex flex-shrink-0 justify-center embla__slide"
              >
                <Image
                  src={three}
                  width={600}
                  alt="shoe one "
                  className=" mt-[-200px] object-cover"
                />
              </motion.div>

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className=" w-full flex flex-shrink-0 justify-center embla__slide "
              >
                <Image
                  src={four}
                  width={600}
                  alt="shoe one "
                  className=" mt-[-100px]  object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className=" w-full flex flex-shrink-0 justify-center embla__slide "
              >
                <Image
                  src={five}
                  width={600}
                  alt="shoe one "
                  className=" mt-[-200px]  object-cover -rotate-[30deg]"
                />
              </motion.div>

              {/* <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                className=" w-full flex flex-shrink-0 justify-center embla__slide"
              >
                <Image
                  src={Two}
                  width={600}
                  alt="shoe one "
                  className=" mt-[-100px] object-cover"
                />
              </motion.div> */}
            </div>
          </div>
        </div>
        <div className=" w-full h-60 flex items-end justify-between px-10 ">
          <h1 className=" w-96 ">
            A shoe is an item of footwear intended to protect and comfort the
            human foot. Though the human foot can adapt to varied terrains and
            climate conditions, it is vulnerable, and shoes provide
          </h1>
          <div
            className={`${lobster.className} bg-black w-32 h-16 rounded-2xl flex items-center justify-center text-white`}
          >
            <h1 className=" text-2xl">Shop now</h1>
          </div>
        </div>
      </div>
    </>
  );
}
