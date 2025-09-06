"use client";
import Button from "@/components/Button";
import ImageCard from "@/components/ImageCard";
import Modal from "@/components/Modal";
import SwitchButton from "@/components/SwitchButton";
import Upload from "@/components/Upload";
import { colors, examplesImage, FemaleImg, MaleImg } from "@/utils/constant";
import { IMAGES } from "@/utils/images";
import { Pencil, X } from "lucide-react";
import Image from "next/image";
import React, { memo, useState } from "react";

function Home() {
  const [activeIndex, setActiveIndex] = useState("FemaleImg");
  const [activeImgIndex, setActiveImgIndex] = useState(null);
  const [activeColorIndex, setActiveColorIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [images, setImages] = useState({
    front: null,
    back: null,
    right: null,
    left: null,
  });

  const selectColor = (index, title) => {
    setActiveColorIndex((prev) => (prev === index ? null : index));
    console.log(title, "color name");
  };

  const hair = {
    FemaleImg,
    MaleImg,
  };

  return (
    <section className="w-[70%] mx-auto flex justify-between items-start">
      <div className="flex flex-col">
        <div className="flex justify-start items-center gap-2 mt-16">
          <Upload
            btnName="Upload Front Image"
            clickOnImg={(img) => setImages((prev) => ({ ...prev, front: img }))}
            onRemove={() => setImages((prev) => ({ ...prev, front: null }))}
          />
          <Upload
            btnName="Upload Back Image"
            clickOnImg={(img) => setImages((prev) => ({ ...prev, back: img }))}
            onRemove={() => setImages((prev) => ({ ...prev, back: null }))}
          />
          <Upload
            btnName="Upload Right Image"
            clickOnImg={(img) => setImages((prev) => ({ ...prev, right: img }))}
            onRemove={() => setImages((prev) => ({ ...prev, right: null }))}
          />
          <Upload
            btnName="Upload Left Image"
            clickOnImg={(img) => setImages((prev) => ({ ...prev, left: img }))}
            onRemove={() => setImages((prev) => ({ ...prev, left: null }))}
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-20">
          <p className="text-lg text-gray-600 mb-1 mt-3">
            No photos? Try these examples:
          </p>

          <div className="flex justify-center gap-1.5">
            {examplesImage?.map((single) => (
              <button
                key={single?.title}
                className="w-20 h-20 rounded-md overflow-hidden border border-transparent hover:border-purple-500 transition-all cursor-pointer"
                draggable
                onDragStart={(e) => {
                  e.dataTransfer.setData("text/plain", single?.title);
                }}
              >
                <Image
                  src={single?.img}
                  alt="img"
                  className="w-full h-full object-cover"
                  width={50}
                  height={50}
                />
              </button>
            ))}
          </div>

          <div className="text-center mt-4">
            <button
              className="cursor-pointer inline-flex items-center gap-1 px-3 py-1.5 text-purple-700 hover:text-purple-800 text-xs rounded-lg transition-colors"
              onClick={() => setIsModalOpen(true)}
            >
              <span className="font-medium">Perfect photo guidelines</span>
              <span>✨</span>
            </button>
          </div>

          <div className="flex items-center justify-center space-x-2 mt-1">
            <input
              id="always-show-guidelines-pc-no-image"
              className="h-3 w-3 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              type="checkbox"
            />
            <label
              htmlFor="always-show-guidelines-pc-no-image"
              className="text-xs text-gray-500 cursor-pointer"
            >
              Always show guidelines
            </label>
          </div>
        </div>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <div className="flex flex-col gap-2 text-center">
            <h3 className="text-sm text-gray-900 text-center">
              Image Guidelines
            </h3>
            <h2 className="text-base md:text-lg font-semibold text-green-600 mb-3 text-center">
              ✓ Good Examples
            </h2>

            <div className="flex items-start justify-center gap-8">
              <div className="flex flex-col gap-2 justify-start items-start">
                <Image
                  src={IMAGES.GoodLighning}
                  alt="Good Lighting"
                  width={100}
                  height={100}
                  className="rounded-md shadow-sm object-cover h-[100px]"
                />
                <p className="text-xs md:text-sm font-medium text-gray-900">
                  Good Lighting
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Image
                  src={IMAGES.k}
                  alt="Slightly elevated side angle"
                  width={100}
                  height={100}
                  className="rounded-md shadow-sm object-cover h-[100px]"
                />
                <p className="text-xs md:text-sm font-medium text-gray-900">
                  Slightly elevated <br /> side angle
                </p>
              </div>
            </div>

            <h2 className="text-base md:text-lg font-semibold text-red-600 mb-3 text-center">
              ✗ Avoid These
            </h2>

            <div className="flex items-start justify-center gap-8">
              <div className="flex flex-col gap-2 justify-start items-start w-[100px]">
                <Image
                  src={IMAGES.David}
                  alt="Good Lighting"
                  width={100}
                  height={100}
                  className="rounded-md shadow-sm object-cover h-[100px]"
                />
                <p className="text-xs md:text-sm font-medium text-gray-900">
                  Half or full body shots
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Image
                  src={IMAGES.Michael}
                  alt="Slightly elevated side angle"
                  width={100}
                  height={100}
                  className="rounded-md shadow-sm object-cover h-[100px]"
                />
                <p className="text-xs md:text-sm font-medium text-gray-900">
                  Hair/shadows
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <Image
                  src={IMAGES.nana}
                  alt="Slightly elevated side angle"
                  width={100}
                  height={100}
                  className="rounded-md shadow-sm object-cover h-[100px]"
                />
                <p className="text-xs md:text-sm font-medium text-gray-900">
                  Blurry photos
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-center mt-6">
              <Button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg transition-colors text-sm"
              >
                Cancel
              </Button>
              <Button
                onClick={() => setIsModalOpen(false)}
                className="px-6 py-2 bg-purple-700 text-white hover:bg-purple-800 rounded-lg transition-colors text-sm"
              >
                Upload photo
              </Button>
            </div>
          </div>
        </Modal>

        <div className="grid grid-cols-4 gap-4 mt-10">
          {Object.entries(images).map(
            ([position, imgData]) =>
              imgData && (
                <div
                  key={position}
                  className="relative w-full max-w-[200px] min-h-[200px]"
                >
                  <div className="absolute right-0 -top-[18px] flex items-center gap-2 cursor-pointer">
                    <X
                      size={20}
                      color="black"
                      onClick={() => {
                        setImages((prev) => ({ ...prev, [position]: null }));
                      }}
                    />
                  </div>

                  <img
                    src={imgData}
                    alt={position}
                    className="mt-2 max-h-60 rounded object-cover h-[245px]"
                  />
                </div>
              )
          )}
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-[300px]">
          <SwitchButton
            btn={[
              { name: "Female haristyle", type: "FemaleImg" },
              { name: "Male haristyle", type: "MaleImg" },
            ]}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setActiveImgIndex={setActiveImgIndex}
          />
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-3 gap-2 mb-4 overflow-y-auto overflow-x-hidden h-[380px] mt-2">
          {hair[activeIndex]?.map((single, index) => {
            const isActive = activeImgIndex === index;
            return (
              <ImageCard
                key={index}
                activeImgIndex={activeImgIndex}
                isActive={isActive}
                onClick={() => {
                  setActiveImgIndex((prev) => (prev === index ? null : index));
                  console.log(single?.title, "hair name");
                }}
                {...single}
              />
            );
          })}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {colors?.map((single, index) => {
            const isActive = activeColorIndex === index;
            return (
              <button
                key={single?.title}
                title={single?.title}
                style={{ background: single?.bg }}
                className={`flex-shrink-0 w-10 h-10 rounded-md transition-all border-2 border-gray-200 ring-2 flex items-center justify-center text-white text-sm ${
                  isActive ? "ring-purple-700 ring-offset-2 scale-[1.1]" : ""
                }`}
                onClick={() => selectColor(index, single?.title)}
              >
                {single?.name && <span>{single?.name}</span>}
              </button>
            );
          })}
        </div>

        <Button
          className="!w-full mt-2 py-4 rounded-lg font-medium transition-colors disabled:opacity-60 disabled:cursor-not-allowed bg-purple-700 text-white hover:bg-purple-800"
          disabled={activeImgIndex === null}
        >
          Upload Photo
        </Button>
      </div>
    </section>
  );
}

export default memo(Home);
