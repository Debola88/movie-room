import React from "react";
import DeviceBox from "./DeviceBox";
import { IoPhonePortrait } from "react-icons/io5";
import { FaTablet } from "react-icons/fa6";
import { MdLiveTv } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";
import { BsHeadsetVr } from "react-icons/bs";

const Devices = () => {
  return (
    <div className="container px-5 md:px-10 mx-auto mt-20">
      <h2 className="text-white font-bold text-3xl max-md:text-2xl text-left">
        We Provide you streaming experience across various devices.
      </h2>
      <p className="text-sm text-[#999999]">
        With StreamVibe, you can enjoy your favorite movies and TV shows
        anytime, anwhere. Our platform is designed to be compatible with a wide
        range of devices, ensuring that you never miss a moment of
        entertainment.
      </p>
      <div className="grid mt-10 gap-5 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
        <DeviceBox icon={<IoPhonePortrait />} device="Smartphones" />
        <DeviceBox icon={<FaTablet />} device="Tablet" />
        <DeviceBox icon={<MdLiveTv />} device="Smart TV" />
        <DeviceBox icon={<GiLaptop />} device="Laptops" />
        <DeviceBox icon={<IoGameController />} device="Gaming Consoles" />
        <DeviceBox icon={<BsHeadsetVr />} device="VR Headsets" />
      </div>
    </div>
  );
};

export default Devices;
