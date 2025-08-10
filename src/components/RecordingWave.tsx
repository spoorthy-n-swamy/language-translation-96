import React from "react";

const barCls =
  "w-1.5 rounded-full bg-[hsl(var(--brand))] shadow-sm";

export const RecordingWave: React.FC = () => {
  return (
    <div className="flex items-end gap-1 h-10">
      <div className={`${barCls} animate-[pulse_1.2s_ease-in-out_0s_infinite]`} style={{ height: "50%" }} />
      <div className={`${barCls} animate-[pulse_1.2s_ease-in-out_0.2s_infinite]`} style={{ height: "80%" }} />
      <div className={`${barCls} animate-[pulse_1.2s_ease-in-out_0.4s_infinite]`} style={{ height: "60%" }} />
      <div className={`${barCls} animate-[pulse_1.2s_ease-in-out_0.6s_infinite]`} style={{ height: "90%" }} />
      <div className={`${barCls} animate-[pulse_1.2s_ease-in-out_0.8s_infinite]`} style={{ height: "55%" }} />
    </div>
  );
};

export default RecordingWave;
