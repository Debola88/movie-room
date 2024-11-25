import React from "react";
import Button from "../Button";

const PlanCard = ({props, info, price}) => {
  return (
    <div className="rounded-lg md:p-8 p-5 bg-[#262626] w-full max-w-max space-y-4">
      <h3 className="text-white font-semibold">{props}</h3>
      <p className="text-[#999999] text-sm">{info}</p>
      <p className="text-white font-semibold text-2xl">
        {price}
        <span className="text-sm text-[#999999]">/month</span>
      </p>
      <div className="flex justify-between gap-2">
        <Button className="px-5 py-3 text-xs text-white rounded bg-[#141414] w-full">Start Free Trial</Button>
        <Button className="px-5 py-3 text-xs text-white rounded bg-[#E50000] w-full">Choose Plan</Button>
      </div>
    </div>
  );
};

export default PlanCard;
