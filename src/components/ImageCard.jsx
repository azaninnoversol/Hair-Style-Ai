import { IMAGES } from "@/utils/images";
import Image from "next/image";
import React, { memo } from "react";

function ImageCard({
  title = "bob cut",
  img = IMAGES.Female.bobCut,
  onClick = () => {},
  isActive = "",
}) {
  return (
    <button
      className={`p-1 rounded-2xl border transition-all flex flex-col hover:border-gray-200 h-[170px] w-[100px] cursor-pointer ${
        isActive
          ? "border-purple-700 bg-purple-700"
          : "border-transparent bg-gray-100 hover:shadow-sm"
      }`}
      onClick={onClick}
    >
      <div className="w-full h-32 mb-1 overflow-hidden rounded-xl">
        <Image
          src={img}
          alt="images"
          width={100}
          height={100}
          className="rounded-md w-full h-full object-cover"
        />
      </div>

      <p
        className={`text-xs font-medium min-h-[2.0em] flex items-center justify-center text-center w-full capitalize ${
          isActive ? "text-white" : "text-gray-700"
        }`}
      >
        {title}
      </p>
    </button>
  );
}

export default memo(ImageCard);
