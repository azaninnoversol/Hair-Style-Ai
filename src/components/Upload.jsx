"use client";
import React, { memo, useRef, useState } from "react";
import { CloudUpload, Pencil, X } from "lucide-react";
import Button from "./Button";
import toast from "react-hot-toast";

const DEFAULT_ACCEPTED_TYPES = ["image/jpeg", "image/png", "image/webp"];

const DEFAULT_MAX_SIZE_MB = 10;

function Upload({
  text = "Click or drag image here to upload",
  btnName = "Upload",
  onFileSelect = () => {},
  acceptedTypes = DEFAULT_ACCEPTED_TYPES,
  maxSizeMB = DEFAULT_MAX_SIZE_MB,
  showPreview = true,
  multiple = false,
  clickOnImg = () => {},
  onRemove = () => {},
}) {
  const inputRef = useRef(null);
  const [preview, setPreview] = useState(null);

  const validateFile = (file) => {
    if (!acceptedTypes.includes(file.type)) {
      return toast.error("Only JPG, JPEG, PNG formats are supported.");
    }

    const maxSizeBytes = maxSizeMB * 1024 * 1024;
    if (file.size > maxSizeBytes) {
      return toast.error(`File must be less than ${maxSizeMB}MB.`);
    }

    return "";
  };

  const handleFiles = (files) => {
    const fileArray = Array.from(files);
    const firstError = fileArray.map(validateFile).find((err) => err);

    if (firstError) {
      setPreview(null);
      return;
    }

    if (!multiple && showPreview) {
      setPreview(URL.createObjectURL(fileArray[0]));
      toast.success("Image uploaded successfully!");
    }

    onFileSelect(multiple ? fileArray : fileArray[0]);
  };

  const handleChange = (e) => {
    if (e.target.files?.length) {
      handleFiles(e.target.files);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files?.length) {
      handleFiles(e.dataTransfer.files);
    }
  };

  const triggerInput = () => inputRef.current.click();

  return (
    <>
      <input
        type="file"
        accept={acceptedTypes.join(",")}
        multiple={multiple}
        className="hidden"
        ref={inputRef}
        onChange={handleChange}
      />

      {showPreview && preview ? (
        <div className="relative w-full max-w-[200px] min-h-[200px]">
          <div className="absolute right-0 -top-[18px] flex items-center gap-2 cursor-pointer">
            <Pencil size={18} color="black" onClick={triggerInput} />
            <X
              size={20}
              color="black"
              onClick={() => {
                onRemove();
                setPreview(null);
                if (inputRef.current) {
                  inputRef.current.value = "";
                }
                toast.success("Image removed successfully!");
              }}
            />
          </div>

          <img
            src={preview}
            alt="Preview"
            className="mt-2 max-h-60 rounded object-cover h-[245px] cursor-pointer"
            onClick={() => clickOnImg(preview)}
          />
        </div>
      ) : (
        <div
          className="w-full max-w-[200px] min-h-[200px] border-2 border-dashed hover:border-purple-500 transition cursor-pointer border-purple-300 rounded-md flex flex-col justify-center items-center text-center gap-3 p-4"
          onClick={triggerInput}
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
        >
          <CloudUpload size={60} color="#9333EA" />

          <h1 className="text-lg md:text-[15px] font-medium text-gray-900 leading-4">
            {text}
          </h1>

          <p className="text-[12px] text-gray-500">
            {acceptedTypes.join(", ").replace("image/", "").toUpperCase()} —
            Less than {maxSizeMB}MB
          </p>

          <Button className="bg-purple-600 hover:bg-purple-700 text-white rounded-md text-[12px]">
            {btnName}
          </Button>
        </div>
      )}
    </>
  );
}

export default memo(Upload);
