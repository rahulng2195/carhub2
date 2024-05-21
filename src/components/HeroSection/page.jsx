"use client"; // Ensure this is at the very top of the file

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const HeroSection = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [carType, setCarType] = useState("used"); // State to track the selected car type

  const onSubmit = (data) => {
    const carTypeValue = carType === "used" ? "Used Car" : "New Car";
    const carData = {
      make: data.make,
      model: data.model,
      zip: data.zip,
      distance: data.distance,
      carType: carTypeValue,
    };

    // Construct query string from carData
    const query = new URLSearchParams(carData).toString();
    router.push(`/CarList?${query}`);
  };

  return (
    <>
      <div className="md:relative md:h-[95vh]">
        <section className=" h-[100%]">
          <video
            preload="auto"
            autoPlay={true}
            muted={true}
            playsInline={false}
            loop={true}
            className="banner-video h-full w-full md:object-fill object-cover"
            src="Assets/home-banner-video.mp4"
          >
            <source src="Assets/home-banner-video.mp4" type="video/mp4" />
          </video>

          <div className="md:absolute h-[30%] bottom-3 left-0 right-0 flex justify-center items-center">
            <div className="w-[90%] h-[100%]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className=" h-[100%]  mt-2"
              >
                <div className="h-[30%] flex ">
                  <button
                    type="button"
                    className={`h-full  px-6 py-4 font-bold ${
                      carType === "used"
                        ? "bg-[#0A1C26] text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setCarType("used")}
                  >
                    Used Car
                  </button>
                  <button
                    type="button"
                    className={`h-full px-6 py-4 font-bold ${
                      carType === "new"
                        ? "bg-[#0A1C26] text-white"
                        : "bg-white text-black"
                    }`}
                    onClick={() => setCarType("new")}
                  >
                    New Car
                  </button>
                </div>
                <div className="md:flex  justify-between items-center h-auto md:h-[70%] bg-white">
                  <div className="flex flex-col md:w-[17%] p-2">
                    <label htmlFor="make">Make</label>
                    <select
                      name="make"
                      id="make"
                      {...register("make")}
                      className="p-2 border"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="">Make</option>
                      <option value="">Make</option>
                      <option value="">Make</option>
                      <option value="">Make</option>
                    </select>
                  </div>
                  <div className="flex flex-col md:w-[17%] p-2">
                    <label htmlFor="model">Model</label>
                    <select
                      name="model"
                      id="model"
                      {...register("model")}
                      className="p-2 border"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="2017">Model 2017</option>
                      <option value="2018">Model 2018</option>
                      <option value="2019">Model 2019</option>
                      <option value="2020">Model 2020</option>
                    </select>
                  </div>
                  <div className="flex flex-col md:w-[17%] p-2">
                    <label htmlFor="zip">Zip/Postal*</label>
                    <input
                      type="text"
                      id="zip"
                      placeholder="eg:90210"
                      {...register("zip", { required: true })}
                      className="p-2 border"
                    />
                    {errors.zip && (
                      <span className="text-red-500">
                        Zip/Postal is required
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col md:w-[17%] p-2">
                    <label htmlFor="distance">Distance</label>
                    <select
                      name="distance"
                      id="distance"
                      {...register("distance", { required: true })}
                      className="p-2 border"
                    >
                      <option value="" disabled selected>
                        Select
                      </option>
                      <option value="200">200km</option>
                      <option value="300">300km</option>
                      <option value="400">400km</option>
                      <option value="500">500km</option>
                    </select>
                    {errors.distance && (
                      <span className="text-red-500">Distance is required</span>
                    )}
                  </div>
                  <div className="md:w-[17%] p-2">
                    <button
                      type="submit"
                      className="bg-[#b91c1c] w-full h-full py-4 text-white font-bold hover:bg-[#0A1C26] transition duration-300 ease-in-out"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default HeroSection;
