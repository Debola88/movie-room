"use client";
import React, { useState } from "react";
import PlanCard from "./PlanCard";

const PlanPackages = () => {
  const [activeButton, setActiveButton] = useState("Monthly");

  return (
    <div className="container px-5 md:px-10 mx-auto mt-20">
      <div className="flex max-md:flex-col justify-between items-start space-y-4">
        <div>
          <h2 className="text-3xl max-md:text-2xl text-white font-bold">
            Choose the plan that`s right for you
          </h2>
          <p className="text-[#999999] text-sm">
            Join StreamVibe and select from our flexible subscription options
            tailored to suit your viewing preferences. Get ready for non-stop
            entertainment!
          </p>
        </div>
        <div className="p-2 border border-[#262626] rounded bg-[#0F0F0F] max-w-max">
          <button
            onClick={() => setActiveButton("Monthly")}
            className={`px-3 py-2 rounded text-sm ${
              activeButton === "Monthly"
                ? "bg-[#1F1F1F] text-white"
                : "bg-[#0F0F0F] text-[#999999]"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setActiveButton("Yearly")}
            className={`px-3 py-2 rounded text-sm ${
              activeButton === "Yearly"
                ? "bg-[#1F1F1F] text-white"
                : "bg-[#0F0F0F] text-[#999999]"
            }`}
          >
            Yearly
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
        <PlanCard
          props={"Basic Plan"}
          info={
            "Enjoy an extensive library of movies and shows, featuring a range of content, including recently released titles."
          }
          price={"$9.99"}
        />
        <PlanCard
          props={"Standard Plan"}
          info={
            "Access to a wider selection of movies and shows, including most new releases and exclusive content"
          }
          price={"$12.99"}
        />
        <PlanCard
          props={"Premium Plan"}
          info={
            "Access to a widest selection of movies and shows, including all new releases and Offline Viewing"
          }
          price={"$14.99"}
        />
      </div>
    </div>
  );
};

export default PlanPackages;
