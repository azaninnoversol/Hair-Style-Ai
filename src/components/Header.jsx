import { IMAGES } from "@/utils/images";
import Image from "next/image";
import React, { memo } from "react";
import Button from "./Button";
import Link from "next/link";

function Header() {
  return (
    <header className="flex items-center justify-between w-[70%] mx-auto h-[70px]">
      <Link href="/">
        <div className="flex items-center gap-[5px]">
          <Image src={IMAGES.Logo} alt="logo" width={32} height={32} />
          <h1 className="text-xl md:text-2xl font-semibold hover:text-purple-700 transition-colors">
            HairStyle AI
          </h1>
        </div>
      </Link>

      <Button className="font-semibold text-sm tracking-wider min-h-[3rem]">
        Login
      </Button>
    </header>
  );
}

export default memo(Header);
