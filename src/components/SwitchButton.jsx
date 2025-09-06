import React, { memo, useState } from "react";
import Button from "./Button";

function SwitchButton({
  btn = [],
  activeIndex,
  setActiveIndex,
  setActiveImgIndex,
}) {
  return (
    <div className="bg-[#F9FAFB] py-2 px-2 flex gap-2 w-full rounded-lg">
      {btn.map((single, index) => {
        const isActive = single?.type === activeIndex;
        return (
          <Button
            key={index}
            className={`font-light flex-1 py-3 px-5 rounded-lg text-sm ${
              isActive
                ? "bg-purple-700 !text-white hover:bg-purple-700"
                : "bg-white !text-gray-700 hover:bg-white"
            }`}
            onClick={() => {
              setActiveIndex(single?.type);
              setActiveImgIndex(null);
            }}
          >
            {single.name}
          </Button>
        );
      })}
    </div>
  );
}

export default memo(SwitchButton);
