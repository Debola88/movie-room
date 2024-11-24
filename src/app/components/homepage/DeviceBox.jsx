import React from "react";

const DeviceBox = ({ icon, device }) => {
  return (
    <div className="rounded-lg border border-[#262626] p-5 w-full max-w-max bg-gradient-to-tr from-[#0F0F0F]/100 via-[#0F0F0F] to-[#E50000]/10">
      <div className="flex items-center gap-4 pb-5">
        <div className="grid place-items-center rounded p-3 text-lg bg-black text-[#E50000]">{icon}</div>
        <h3 className="text-white font-semibold">{device}</h3>
      </div>
      <p className="text-[#999999] text-sm">
        StreamVibe is optimized for both Android and iOS smartphones. Download
        our app from the Google Play Store or the Apple App Store
      </p>
    </div>
  );
};

export default DeviceBox;
