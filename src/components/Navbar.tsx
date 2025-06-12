"use client";
import NavbarItem from "./NavbarItem";
import { Item } from "@/types";
import { useState } from "react";
import clsx from "clsx";
import { Menu } from "lucide-react";

const ITEMS: Item[] = [
  { name: "home", icon: "home", url: "/" },
  { name: "films", icon: "film" },
  { name: "characters", icon: "users" },
  { name: "starships", icon: "ship" },
];
export default function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);
  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <nav
      className={clsx(
        "min-w-fit transition-[width] duration-300 ease-in-out overflow-hidden w-fit flex flex-col gap-4 px-5 md:px-9 py-14 my-6 shadow-md",
        "shadow-light-blue hover:shadow-lg hover:shadow-light-blue duration-1000",
        "bg-imperial-gray rounded-r-lg",
        isExpanded ? "w-60 px-6 py-14" : "w-20 px-4 py-6"
      )}
    >
      <button
        onClick={handleToggle}
        className={clsx(
          "min-w-fit h-11 flex items-center p-2 rounded-md transition-all duration-300 cursor-pointer text-white border-transparent hover:bg-white/10 hover:text-light-blue-soft",
          isExpanded ? "gap-6 justify-start" : "justify-center"
        )}
      >
        <Menu aria-hidden="true" size={24} />
        <span
          className={clsx(
            "overflow-hidden whitespace-nowrap transition-all duration-300 font-bold text-xl",
            isExpanded
              ? "ml-2 opacity-100 translate-x-0 w-auto"
              : "ml-0 opacity-0 -translate-x-2 w-0"
          )}
        >
          Menu
        </span>
      </button>
      <ul className="flex flex-col gap-4 min-w-fit">
        {ITEMS.map((item) => (
          <NavbarItem key={item.name} item={item} isExpanded={isExpanded} />
        ))}
      </ul>
    </nav>
  );
}
