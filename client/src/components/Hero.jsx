import React from "react";
import blogsBg from "../assets/bg.png";
import { assets, cities } from "../assets/data";

const Hero = () => {
  return (
    <section
      className="h-screen w-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${blogsBg})` }}
    >
      <div className="max-padd-container h-screen w-screen">
        {/* OverLay */}
        <div className="absolute inset-0 bg-black/10 z-0">
          {/* container */}
          <div className="relative max-padd-container flex justify-end mx-auto flex-col gap-4 h-full py-6 sm:pt-16 z-10">
            {/* Content  */}
            <div className="flex flex-col mt-12 mx-4 text-white">
              <button className="max-w-80 flex items-center mx4 space-x-3 border border-white medium-13 rounded-full px-4 pr-0.5 py-1 cursor-pointer">
                <span className="">
                  Explore how we simplify stays and spaces
                </span>
                <span className="flexCenter size-6 py-1 rounded-full bg-white">
                  <img src={assets.right} width={20} alt="rightIcon" />
                </span>
              </button>
              <h2 className="h2 capitalize leading-tight mt-3 my-2 text-white">
                Explore{" "}
                <span className="bg-gradient-to-r from-secondary to-white bg-clip-text text-transparent">
                  exceptional properties{" "}
                </span>{" "}
                located in stunning surroundings.
              </h2>
            </div>
            {/* Search/Booking Form */}
            <form
              action=""
              className="bg-white mx-3 text-gray-500 rounded-lg px-6 py-4 flex flex-col lg:flex-row gap-4 lg:gap-x-8 max-w-md lg:max-w-full ring-1 ring-slate-900/5 relative"
            >
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <img src={assets.pin} alt="pinIcon" className="" width={20} />
                  <label htmlFor="destinationInput">Destination</label>
                </div>
                <input
                  type="text"
                  list="destinations"
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  placeholder="Type here..."
                  id="destinationInput"
                  required
                />
                <datalist id="destinations">
                  {cities.map((city, index) => (
                    <option value={city} key={index} />
                  ))}
                </datalist>
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <img src={assets.calendar} alt="calenderIcon" width={20} />
                  <label htmlFor="checkIn">Check In</label>
                </div>
                <input
                  type="date"
                  id="checkIn"
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <img src={assets.calendar} alt="calenderIcon" width={20} />
                  <label htmlFor="checkOut">Check Out</label>
                </div>
                <input
                  type="date"
                  id="checkOut"
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                />
              </div>
              <div className="flex flex-col w-full">
                <div className="flex items-center gap-2">
                  <img src={assets.user} alt="userIcon" width={20} />
                  <label htmlFor="guests">Guests</label>
                </div>
                <input
                  type="number"
                  id="guests"
                  min={1}
                  max={5}
                  className="rounded border border-gray-200 px-3 py-1.5 mt-1.5 text-sm outline-none"
                  placeholder="0"
                />
              </div>
              <button
                className="flex items-center justify-center gap-1 rounded-md bg-black py-3 px-6 text-white my-auto cursor-pointer max-md:w-full max-md:py-1"
                type="submit"
              >
                <img
                  src={assets.search}
                  width={20}
                  alt="searchIcon"
                  className="invert"
                />
                <span>Search</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
