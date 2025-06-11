"use client";

import { Item } from "@/types";
import clsx from "clsx";
import { DynamicIcon } from "lucide-react/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavbarItemProps {
  item: Item;
}

export default function NavbarItem({ item }: NavbarItemProps) {
  const pathname = usePathname();
  const isActive = item.url
    ? pathname === item.url
    : pathname === `/${item.name}`;

  return (
    <li>
      <Link
        href={item.url ?? `/${item.name}`}
        className={clsx(
          "group flex items-center gap-6 px-4 py-2 rounded-md transition-all duration-300 border-l-4",
          isActive
            ? "bg-light-blue/10 border-sith-red shadow-md shadow-light-blue/30"
            : "hover:bg-white/10 border-transparent"
        )}
      >
        <DynamicIcon
          name={item.icon}
          className={clsx(
            "transition-colors",
            isActive
              ? "text-light-blue-soft"
              : "text-white group-hover:text-light-blue-soft"
          )}
          aria-hidden="true"
        />
        <span
          className={clsx(
            "font-semibold capitalize transition-colors",
            isActive
              ? "text-light-blue-soft"
              : "text-white group-hover:text-light-blue-soft"
          )}
        >
          {item.name}
        </span>
      </Link>
    </li>
  );
}
