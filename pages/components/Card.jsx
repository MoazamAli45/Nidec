import Image from "next/image";
import React from "react";
import { HiOutlineArrowTopRightOnSquare } from "react-icons/hi2";
import { LuCircle } from "react-icons/lu";
const Card = (props) => {
  const { key, name, btn1, btn2, text, passenger, load, speed, image, room } =
    props;
  return (
    <div className="bg-primary py-[2.5rem] px-[2rem] hover:bg-white hover:cursor-pointer transition-all ">
      <div className="flex justify-between ">
        <div className="relative w-[120px] h-[80px] ">
          <Image src={image} fill alt={name} className="object-contain" />
        </div>
        <a className="text-[rgb(95,120,160)] font-bold flex gap-[2px] items-start">
          <span className="hidden sm:block">SEE MORE</span>
          <HiOutlineArrowTopRightOnSquare className="w-[2rem] h-[2rem]" />
        </a>
      </div>

      <div className="flex gap-[1rem]  mt-[1rem]  flex-col lg:flex-row">
        <div className="flex flex-col gap-[1rem] lg:w-1/2">
          <h1 className="text-secondary font-bold text-[2rem] ">{name}</h1>
          <div className="flex gap-2">
            <button className="bg-secondary text-primary border-none outline-none px-[.5rem] py-[.3rem] text-[1.2rem] font-bold">
              {btn1}
            </button>
            <buttonn className="bg-white text-secondary border-none outline-none px-[.5rem] py-[.3rem] text-[1.2rem] font-bold ">
              {btn2}
            </buttonn>
          </div>
          <p className="select-none my-[1rem]">{text}</p>
        </div>
        <div className="flex flex-col gap-[1rem] lg:w-1/2">
          <div className="flex gap-[.5rem]  items-center">
            {/*  Image  */}
            {room && (
              <div className="relative w-[2rem] h-[2rem]">
                <Image
                  src="/tick.png"
                  alt="tick"
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {!room && <LuCircle className="w-[2rem] h-[2rem] text-secondary" />}
            <p className="text-secondary font-semibold">Caurto de maquinas</p>
          </div>

          {/*  Numbers */}
          <div className="flex-col gap-[.5rem]">
            <p className="text-secondary font-bold w-[68%] text-[1.6rem] break-words">
              {passenger.join(",")}
            </p>
            <div className="flex gap-[.5rem] items-center">
              <p className="text-[rgb(95,120,160)]">Pasajeros</p>
              <div class="flex-grow border-b border-[rgb(95,120,160)]"></div>
            </div>
          </div>
          <div className="flex-col gap-[.5rem]">
            <p className="text-secondary font-bold w-[68%] text-[1.6rem] break-words">
              {load.join(",")}
            </p>
            <div className="flex gap-[.5rem] items-center">
              <p className="text-[rgb(95,120,160)]">Carga [kg]</p>
              <div class="flex-grow border-b border-[rgb(95,120,160)]"></div>
            </div>
          </div>
          <div className="flex-col gap-[.5rem]">
            <p className="text-secondary font-bold w-[68%] text-[1.6rem] break-words">
              {speed.join(",")}
            </p>
            <div className="flex gap-[.5rem] items-center">
              <p className="text-[rgb(95,120,160)]">Velocidad [m/s]</p>
              <div class="flex-grow border-b border-[rgb(95,120,160)]"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
