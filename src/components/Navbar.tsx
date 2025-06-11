import { DynamicIcon } from "lucide-react/dynamic";
import NavbarItem from "./NavbarItem";
import { Item } from "@/types";
import clsx from "clsx";

const ITEMS: Item[] = [
  { name: "home", icon: "home", url: "/" },
  { name: "films", icon: "film" },
  { name: "characters", icon: "users" },
];
export default function Navbar() {
  return (
    <nav
      className="w-fit flex flex-col gap-4 px-9 py-14 my-6 shadow-md
    shadow-light-blue hover:shadow-lg hover:shadow-light-blue transition-shadow ease-in-out duration-300 bg-imperial-gray rounded-r-lg"
    >
      <div
        className={clsx(
          "group flex items-center gap-6 p-2 rounded-md transition-all duration-300 hover:bg-white/10 text-white hover:text-light-blue-soft border-transparent "
        )}
      >
        <DynamicIcon name="menu" aria-hidden="true" />
        <span className="font-bold capitalize text-xl">Menu</span>
      </div>
      <ul className="flex flex-col mt-14 gap-4">
        {ITEMS.map((item) => (
          <NavbarItem key={item.name} item={item} />
        ))}
      </ul>
    </nav>
  );
}
