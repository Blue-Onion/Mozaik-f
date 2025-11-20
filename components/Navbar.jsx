"use client";

import { Video } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <header className="mx-auto px-5 max-w-7xl">
      <nav className="w-full shadow-sm border-0 bg-white px-5 py-3 rounded-full flex justify-between items-center">
        <Link href={"/"}>
          <div className="flex items-center ">
            <Image
              src="/logo.png"
              alt="Mozaik Logo"
              width={24}
              height={24}
              className="object-contain"
            />
            <h3 className="text-xl font-extrabold">Mozaik</h3>
          </div>
        </Link>

        <div className="flex items-center gap-5">
          <Link href={"/project"}>
            <Video className="w-6 h-6" />
          </Link>

          <Link href={"/project"}>
            <Button className="rounded-full text-black text-md px-6 py-4 border-2 border-lime-500 bg-lime-200 hover:bg-lime-300 transition">
              Start Creating
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
