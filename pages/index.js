"use client";
import { FaSearch } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect } from "react";
import Slider from "@mui/material/Slider";
import Card from "./components/Card";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { BsChevronDown } from "react-icons/bs";
import { BsFilter } from "react-icons/bs";

const data = [
  {
    name: "N6000 (High Speed)",
    btn1: "Pasajeros",
    btn2: "Gran Altura",
    text: "Los ascensores de alta velocidad de Nidec están diseñados en función del ahorro de tiempo, la gestión del tráfico y la seguridad. Calidad basada en la innovación.",
    passenger: [13, 16, 18, 21, 26],
    load: [1000, 1200, 1350, 1600, 2000],
    speed: [3, 3.5],
    image: "/img1.svg",
    room: "yes",
  },
  {
    name: "KLG",
    btn1: "Panorámicos",
    btn2: "Estándar",
    text: "Detalles humanos para que sea más fácil y cómodo, con una mejora general en la experiencia de transporte.",
    passenger: [10, 13, 15, 16, 18, 21],
    load: [800, 1000, 1100, 1250, 1350, 1600],
    speed: [1, 1.61, 2, 2.5],
    image: "/img2.svg",
    room: "yes",
  },
  {
    name: "KLGW",
    btn1: "Panorámicos",
    btn2: "Estándar",
    text: "Detalles humanos para que sea más fácil y cómodo, con una mejora general en la experiencia de transporte.",
    passenger: [6, 8, 10, 13, 14, 15, 16, 18, 21, 26],
    load: [450, 630, 800, 1000, 1050, 1150, 1250, 1350, 1600, 2000],
    speed: [1, 1.6, 1.75],
    image: "/img2.svg",
    room: "",
  },
  {
    name: "KLK2 Blue Leopard",
    btn1: "Panorámicos",
    btn2: "Estándar",
    text: "Hecho especialmente para áreas comerciales de alto nivel, bajo la filosofía de fabricación de diseño confiable y artesanía exquisita.",
    passenger: [10, 13, 14, 15, 16, 18, 21],
    load: [800, 1000, 1050, 1150, 1250, 1350, 1600],
    speed: [2.5, 3, 3.5, 4],
    image: "/img2.svg",
    room: "yes",
  },
  {
    name: "KLW",
    btn1: "Pasajeros",
    btn2: "Gama Estándar",
    text: "Elimina las restricciones del elevador en cuanto a construcción, costos de construcción, estilo de diseño arquitectónico y alcances de utilización, mientras ahorra espacio y costos.",
    passenger: [6, 8, 10, 13, 14, 15, 16, 18, 21, 26],
    load: [450, 630, 800, 1000, 1050, 1150, 1250, 1350, 1600, 2000],
    speed: [1, 1.6, 1.75],
    image: "/img2.svg",
    room: "",
  },
  {
    name: "MP Ares",
    btn1: "Panorámicos",
    btn2: "Estándar",
    text: "La solución eficaz para edificios sin ascensor de tráfico bajo-medio. Máxima flexibilidad para adaptarse a huecos irregulares, y huidas y/o fosos reducidos.",
    passenger: [2, 3, 4, 5, 6, 8],
    load: [150, 180, 225, 320, 375, 400, 450, 480, 630],
    speed: [0.63],
    image: "/img3.svg",
    room: "",
  },
  {
    name: "MP Ares",
    btn1: "Panorámicos",
    btn2: "Estándar",
    text: "La solución eficaz para edificios sin ascensor de tráfico bajo-medio. Máxima flexibilidad para adaptarse a huecos irregulares, y huidas y/o fosos reducidos.",
    passenger: [2, 3, 4, 5, 6, 8],
    load: [150, 180, 225, 320, 375, 400, 450, 480, 630],
    speed: [0.63],
    image: "/img3.svg",
    room: "yes",
  },
  {
    name: "MP H",
    btn1: "Panorámicos",
    btn2: "Estándar",
    text: "Adaptabilidad fiable y máxima optimización de la superficie de cabina. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.",
    passenger: [4, 5, 6, 8, 10, 13, 17, 20],
    load: [320, 375, 450, 480, 630, 800, 1000, 1275, 1500],
    speed: [0.52, 0.63],
    image: "/img3.svg",
    room: "yes",
  },
  {
    name: "MP H",
    btn1: "Panorámicos",
    btn2: "Gama Estándar",
    text: "Adaptabilidad fiable y máxima optimización de la superficie de cabina. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.",
    passenger: [4, 5, 6, 8, 10, 13],
    load: [320, 375, 450, 480, 630, 750, 800, 1000],
    speed: [0.52, 0.63],
    image: "/img3.svg",
    room: "",
  },
  {
    name: "MP H",
    btn1: "Panorámicos",
    btn2: "Gran Capacidad",
    text: "Adaptabilidad fiable y máxima optimización de la superficie de cabina. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.",
    passenger: [26, 33, 40, 46, 53, 60, 66, 73, 80, 86],
    load: [2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500],
    speed: [0.4, 0.5],
    image: "/img3.svg",
    room: "yes",
  },
  {
    name: "MP Mediclift Gearless",
    btn1: "Hospitales",
    btn2: "Gama Estándar",
    text: "Máxima eficiencia de hueco, ecoeficiencia y ecodiseño. Ideal para edificios de hasta 15 paradas, o 50 metros de recorrido, de tráfico medio.",
    passenger: [13, 16, 21, 26, 33],
    load: [1000, 1275, 1600, 2000, 2500],
    speed: [1, 1.6],
    image: "/img3.svg",
    room: "yes",
  },
  {
    name: "MP Mediclift Gearless",
    btn1: "Hospitales",
    btn2: "Gama Estándar",
    text: "Máxima eficiencia de hueco, ecoeficiencia y ecodiseño. Ideal para edificios de hasta 15 paradas, o 50 metros de recorrido, de tráfico medio.",
    passenger: [13, 16, 21, 26, 33],
    load: [1000, 1275, 1600, 2000, 2500],
    speed: [1, 1.6],
    image: "/img3.svg",
    room: "",
  },
  {
    name: "MP Mediclift Gearless",
    btn1: "Hospitales",
    btn2: "Gran Altura",
    text: "Máxima eficiencia de hueco, ecoeficiencia y ecodiseño. Ideal para edificios de hasta 15 paradas, o 50 metros de recorrido, de tráfico medio.",
    passenger: [13, 16, 21, 26, 33],
    load: [1000, 1275, 1600, 2000, 2500],
    speed: [2.5],
    image: "/img3.svg",
    room: "",
  },
  {
    name: "MP Mediclift Gearless",
    btn1: "Hospitales",
    btn2: "Gran Altura",
    text: "Máxima eficiencia de hueco, ecoeficiencia y ecodiseño. Ideal para edificios de hasta 15 paradas, o 50 metros de recorrido, de tráfico medio.",
    passenger: [13, 16, 21, 26, 33],
    load: [1000, 1275, 1600, 2000, 2500],
    speed: [2.5],
    image: "/img3.svg",
    room: "yes",
  },
  {
    name: "MP Mediclift Gearless Hidráulico",
    btn1: "Hospitales",
    btn2: "Gama Estándar",
    text: "Gran adaptabilidad que permite obtener la máxima superficie de cabina en el mínimo espacio. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.",
    passenger: [13, 17, 21],
    load: [1000, 1275, 1600],
    speed: [0.5],
    image: "/img3.svg",
    room: "",
  },
  {
    name: "MP Mediclift Gearless Hidráulico",
    btn1: "Hospitales",
    btn2: "Gama Estándar",
    text: "Gran adaptabilidad que permite obtener la máxima superficie de cabina en el mínimo espacio. Ideal para edificios de hasta 15 metros de recorrido, con un tráfico bajo-medio.",
    passenger: [13, 17, 21, 26, 33],
    load: [1000, 1275, 1600, 2000, 2500],
    speed: [0.5],
    image: "/img3.svg",
    room: "yes",
  },

  {
    name: "Freight",
    btn1: "Carga",
    btn2: "Gran Capacidad",
    text: "Este equipo es ideal en el campo de la logística, en las necesidades de fábricas, almacenes, centros comerciales, supermercados, estaciones y aeropuertos, asegurando la confiabilidad propia de Aoyama Elevator.",
    passenger: [13, 26, 40, 66],
    load: [1000, 2000, 3000, 5000],
    speed: [0.25, 0.5, 1],
    image: "/img4.svg",
    room: "",
  },
  {
    name: "Freight",
    btn1: "Carga",
    btn2: "Gran Capacidad",
    text: "Este equipo es ideal en el campo de la logística, en las necesidades de fábricas, almacenes, centros comerciales, supermercados, estaciones y aeropuertos, asegurando la confiabilidad propia de Aoyama Elevator.",
    passenger: [13, 26, 40, 66, 85, 106, 160],
    load: [1000, 2000, 3000, 5000, 6400, 8000, 12000],
    speed: [0.25, 0.5, 1, 1.75],
    image: "/img4.svg",
    room: "yes",
  },
];

export default function Home() {
  //   Option values
  const [category, setCategory] = useState("");
  const [roomType, setRoomType] = useState("");

  // console.log("Category", category);
  // console.log("RoomType", roomType);

  //  Slider values
  const [passengerValue, setPassengerValue] = useState([1, 160]);
  const [loadValue, setLoadValue] = useState([100, 12000]);
  const [speedValue, setSpeedValue] = useState([0.15, 3.5]);

  const [filteredData, setFilteredData] = useState(data);

  //  Now for search Value
  const [searchValue, setSearchValue] = useState("");

  //  accordian fixed
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 0; // Adjust this value as needed

      // Check if the scroll position is beyond the trigger point
      if (scrollPosition > triggerPoint) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  //  Filtering Data
  useEffect(() => {
    // Filter based on category
    let newData = data;
    if (category !== "") {
      newData = newData.filter((item) => item.btn1 === category);
    }

    // Filter based on roomType
    if (roomType !== "") {
      if (roomType === " Cuarto de máquinas") {
        newData = newData;
      } else if (roomType === "CON cuarto de máquinas") {
        newData = newData.filter((item) => item.room === "yes");
      } else {
        newData = newData.filter((item) => item.room === "");
      }
    }

    // Filter based on passenger range
    newData = newData.filter((item) =>
      item.passenger.every(
        //  at 0 index minimum value and at 1 maximum value
        (value) => value >= passengerValue[0] && value <= passengerValue[1]
      )
    );

    // Filter based on load range
    newData = newData.filter((item) =>
      item.load.every((value) => value >= loadValue[0] && value <= loadValue[1])
    );

    // Filter based on speed range
    newData = newData.filter((item) =>
      item.speed.every(
        (value) => value >= speedValue[0] && value <= speedValue[1]
      )
    );

    //   Searching
    if (searchValue.trim() !== "") {
      newData = newData.filter((item) =>
        item.name.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    setFilteredData(newData);
  }, [category, roomType, passengerValue, loadValue, speedValue, searchValue]);

  const handlePassengerChange = (event, newValue) => {
    setPassengerValue(newValue);
  };
  const handleLoadChange = (event, newValue) => {
    setLoadValue(newValue);
  };
  const handleSpeedChange = (event, newValue) => {
    setSpeedValue(newValue);
  };

  //   For getting values
  function valuePassengertext(value) {
    return `${value}`;
  }

  function valueSpeedtext(value) {
    return `${value}`;
  }
  function valueLoadtext(value) {
    return `${value}`;
  }

  //  Option values
  const handleCategoryChange = (e) => {
    // console.log(e.target);
    setCategory(e.currentTarget.value);
  };

  // Event handler for room type select box
  const handleRoomTypeChange = (e) => {
    setRoomType(e.currentTarget.value);
  };

  return (
    <main className="w-[85%] mx-auto my-20">
      {/*  For mobile  */}
      <div className=" block md:hidden  my-[1rem] ">
        <Accordion className={` ${isFixed ? "fixed top-1 " : ""}`}>
          <AccordionSummary
            expandIcon={
              <BsChevronDown color="#C8D5E2" className="text-[2rem] ml-2" />
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <div>
              <p className="text-primary">Filtros de búsqueda</p>
            </div>
            <BsFilter color="#C8D5E2" className="text-[2.5rem]" />
          </AccordionSummary>
          <AccordionDetails>
            <div className="flex flex-col gap-[2rem]  py-[3rem] px-[3rem]">
              {/*search bar   */}

              <div className="flex justify-center items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className=" border-b-2 border-[#5F78A0] focus:outline-none focus:border-[#5F78A0] text-primary text-[1.6rem] placeholder:text-[1.6rem] placeholder-primary  w-full sm:w-[80%]  bg-transparent px-2 py-1"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <FaSearch color="#5F78A0" className=" text-[2rem]" />
                {/* Select Box */}
                <a
                  className="hidden sm:block text-[#5F78A0] text-[1.4rem] underline"
                  href="#"
                >
                  Filtros de
                </a>
              </div>
              <div className="relative w-[90%] mx-auto">
                <select
                  className="bg-[#121622] text-[#D8D9DB] p-[1rem] appearance-none   border-none w-full focus:outline-none "
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="Categoría" className="bg-white text-gray-900">
                    Categoría
                  </option>
                  <option value="Pasajeros" className="bg-white text-gray-900">
                    Pasajeros
                  </option>
                  <option
                    value="Panorámicos"
                    className="bg-white text-gray-900"
                  >
                    Panorámicos
                  </option>
                  <option value="Hospitales" className="bg-white text-gray-900">
                    Hospitales
                  </option>
                  <option value="Carga" className="bg-white text-gray-900">
                    Carga
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <BiChevronDown color="#D8D9DB" className="text-[2.5rem]" />
                </div>
              </div>
              <div className="relative w-[90%] mx-auto">
                <select
                  className="bg-[#121622] text-[#D8D9DB] p-[1rem] appearance-none   border-none w-full focus:outline-none "
                  value={roomType}
                  onChange={handleRoomTypeChange}
                >
                  <option
                    value="Cuarto de máquinas"
                    className="bg-white text-gray-900"
                  >
                    Cuarto de máquinas
                  </option>
                  <option
                    value="CON cuarto de máquinas"
                    className="bg-white text-gray-900"
                  >
                    CON cuarto de máquinas
                  </option>
                  <option
                    value="SIN cuarto de máquinas"
                    className="bg-white text-gray-900"
                  >
                    SIN cuarto de máquinas
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <BiChevronDown color="#D8D9DB" className="text-[2.5rem]" />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-[3rem]">
                {/*  Slider */}
                <div className="flex flex-col gap-[.5rem] w-full">
                  <div className="flex justify-between">
                    <p className="text-[#5F78A0]">Pasajeros</p>
                    <a className="text-[#5F78A0] text-[1.4rem] underline">
                      Limpiar
                    </a>
                  </div>
                  <Slider
                    getAriaLabel={() => "Pasajareous"}
                    value={passengerValue}
                    onChange={handlePassengerChange}
                    getAriaValueText={valuePassengertext}
                    min={1}
                    max={160}
                    sx={{
                      color: "#5F78A0",
                    }}
                  />
                  <div className="flex justify-between">
                    <p className="text-[#DADADA] text-bold">
                      {passengerValue[0]}
                    </p>
                    <a className="text-[#DADADA] text-bold">
                      {passengerValue[1]}
                    </a>
                  </div>
                </div>
                {/*  2nd */}
                <div className="flex flex-col gap-[.5rem] w-full">
                  <div className="flex justify-between">
                    <p className="text-[#5F78A0]">Carga [kg]</p>
                    <a className="text-[#5F78A0] text-[1.4rem] underline">
                      Limpiar
                    </a>
                  </div>
                  <Slider
                    getAriaLabel={() => "Carga [kg]"}
                    value={loadValue}
                    onChange={handleLoadChange}
                    getAriaValueText={valueLoadtext}
                    min={100}
                    max={12000}
                    sx={{
                      color: "#5F78A0",
                    }}
                  />
                  <div className="flex justify-between">
                    <p className="text-[#DADADA] text-bold">{loadValue[0]}</p>
                    <a className="text-[#DADADA] text-bold">{loadValue[1]}</a>
                  </div>
                </div>
              </div>
              {/*  3rd */}
              <div className="flex flex-col gap-[.5rem]">
                <div className="flex justify-between">
                  <p className="text-[#5F78A0]">Velocidad [m/s]</p>
                  <a className="text-[#5F78A0] text-[1.4rem] underline">
                    Limpiar
                  </a>
                </div>
                <Slider
                  getAriaLabel={() => "Velocidad [m/s]"}
                  value={speedValue}
                  onChange={handleSpeedChange}
                  getAriaValueText={valueSpeedtext}
                  sx={{
                    color: "#5F78A0",
                  }}
                  min={0.15}
                  max={3.5}
                />
                <div className="flex justify-between">
                  <p className="text-[#DADADA] text-bold">{speedValue[0]}</p>
                  <a className="text-[#DADADA] text-bold">{speedValue[1]}</a>
                </div>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
      </div>
      {/*   PC View */}

      <div className="flex gap-[2.5rem] ">
        <div className="relative w-1/3 md:block hidden">
          <div
            className={` bg-secondary max-h-[85vh] md:block hidden   ${
              isFixed ? "fixed top-5  z-10 w-[28%]" : ""
            } `}
          >
            <div className="flex flex-col gap-[2rem]  py-[3rem] px-[3rem]">
              {/*search bar   */}

              <div className="flex justify-center items-center gap-2 w-full">
                <input
                  type="text"
                  placeholder="Buscar..."
                  className=" border-b-2 border-[#5F78A0] focus:outline-none focus:border-[#5F78A0] text-primary text-[1.6rem] placeholder:text-[1.6rem] placeholder-primary  w-full  bg-transparent px-2 py-1"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <FaSearch color="#5F78A0" className=" text-[2rem]" />
                {/* Select Box */}
              </div>
              <div className="relative w-[90%] mx-auto">
                <select
                  className="bg-[#121622] text-[#D8D9DB] p-[1rem] appearance-none   border-none w-full focus:outline-none "
                  value={category}
                  onChange={handleCategoryChange}
                >
                  <option value="Categoría" className="bg-white text-gray-900">
                    Categoría
                  </option>
                  <option value="Pasajeros" className="bg-white text-gray-900">
                    Pasajeros
                  </option>
                  <option
                    value="Panorámicos"
                    className="bg-white text-gray-900"
                  >
                    Panorámicos
                  </option>
                  <option value="Hospitales" className="bg-white text-gray-900">
                    Hospitales
                  </option>
                  <option value="Carga" className="bg-white text-gray-900">
                    Carga
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <BiChevronDown color="#D8D9DB" className="text-[2.5rem]" />
                </div>
              </div>
              <div className="relative w-[90%] mx-auto">
                <select
                  className="bg-[#121622] text-[#D8D9DB] p-[1rem] appearance-none   border-none w-full focus:outline-none "
                  value={roomType}
                  onChange={handleRoomTypeChange}
                >
                  <option
                    value="Cuarto de máquinas"
                    className="bg-white text-gray-900"
                  >
                    Cuarto de máquinas
                  </option>
                  <option
                    value="CON cuarto de máquinas"
                    className="bg-white text-gray-900"
                  >
                    CON cuarto de máquinas
                  </option>
                  <option
                    value="SIN cuarto de máquinas"
                    className="bg-white text-gray-900"
                  >
                    SIN cuarto de máquinas
                  </option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <BiChevronDown color="#D8D9DB" className="text-[2.5rem]" />
                </div>
              </div>
              {/*  Slider */}
              <div className="flex flex-col gap-[.5rem]">
                <div className="flex justify-between">
                  <p className="text-[#5F78A0]">Pasajeros</p>
                  <a className="text-[#5F78A0] text-[1.4rem] underline">
                    Limpiar
                  </a>
                </div>
                <Slider
                  getAriaLabel={() => "Pasajareous"}
                  value={passengerValue}
                  onChange={handlePassengerChange}
                  getAriaValueText={valuePassengertext}
                  min={1}
                  max={160}
                  sx={{
                    color: "#5F78A0",
                  }}
                />
                <div className="flex justify-between">
                  <p className="text-[#DADADA] text-bold">
                    {passengerValue[0]}
                  </p>
                  <a className="text-[#DADADA] text-bold">
                    {passengerValue[1]}
                  </a>
                </div>
              </div>
              {/*  2nd */}
              <div className="flex flex-col gap-[.5rem]">
                <div className="flex justify-between">
                  <p className="text-[#5F78A0]">Carga [kg]</p>
                  <a className="text-[#5F78A0] text-[1.4rem] underline">
                    Limpiar
                  </a>
                </div>
                <Slider
                  getAriaLabel={() => "Carga [kg]"}
                  value={loadValue}
                  onChange={handleLoadChange}
                  getAriaValueText={valueLoadtext}
                  min={100}
                  max={12000}
                  sx={{
                    color: "#5F78A0",
                  }}
                />
                <div className="flex justify-between">
                  <p className="text-[#DADADA] text-bold">{loadValue[0]}</p>
                  <a className="text-[#DADADA] text-bold">{loadValue[1]}</a>
                </div>
              </div>
              <div className="flex flex-col gap-[.5rem]">
                <div className="flex justify-between">
                  <p className="text-[#5F78A0]">Velocidad [m/s]</p>
                  <a className="text-[#5F78A0] text-[1.4rem] underline">
                    Limpiar
                  </a>
                </div>
                <Slider
                  getAriaLabel={() => "Velocidad [m/s]"}
                  value={speedValue}
                  onChange={handleSpeedChange}
                  getAriaValueText={valueSpeedtext}
                  sx={{
                    color: "#5F78A0",
                  }}
                  min={0.15}
                  max={3.5}
                />
                <div className="flex justify-between">
                  <p className="text-[#DADADA] text-bold">{speedValue[0]}</p>
                  <a className="text-[#DADADA] text-bold">{speedValue[1]}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  right side */}
        {/*  grow 2 */}
        <div className="w-2/3   flex flex-col gap-[1rem] flex-grow mt-[2rem] translate-y-[6rem] md:translate-y-0 md:my-0  md:max-w-[2/3]">
          {filteredData.length >= 1 &&
            filteredData.map((item, id) => (
              <Card
                key={id}
                name={item.name}
                btn1={item.btn1}
                btn2={item.btn2}
                text={item.text}
                passenger={item.passenger}
                load={item.load}
                speed={item.speed}
                image={item.image}
                room={item.room}
              />
            ))}
          {filteredData.length === 0 && (
            <p className="text-primary text-[2rem] text-center h-[50%] my-auto  text-bold">
              No se han encontrado resultados
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
