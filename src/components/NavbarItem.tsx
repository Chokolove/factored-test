"use client";

import { Item } from "@/types";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Film, Users, Ship } from "lucide-react";

const icons = {
  home: Home,
  film: Film,
  users: Users,
  ship: Ship,
};

interface NavbarItemProps {
  item: Item;
  isExpanded?: boolean;
}

export default function NavbarItem({ item, isExpanded }: NavbarItemProps) {
  const pathname = usePathname();
  const itemPath = item.url ?? `/${item.name}`;
  const isActive = pathname === itemPath || pathname.startsWith(`${itemPath}/`);
  const Icon = icons[item.icon as keyof typeof icons];

  return (
    <li className="min-w-fit">
      <Link
        href={item.url ?? `/${item.name}`}
        title={!isExpanded ? item.name : undefined}
        className={clsx(
          "min-w-fit group border-transparent flex items-center py-2 rounded-md transition-all duration-75 ",
          isExpanded
            ? "px-4 gap-6 border-l-4"
            : "px-2 justify-center border-l-2 ",
          isActive
            ? "bg-light-blue/10 border-sith-red! shadow-md shadow-light-blue/30"
            : "hover:bg-white/10 "
        )}
      >
        <Icon
          size={24}
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
            "font-semibold capitalize transition-all duration-75 whitespace-nowrap overflow-hidden",
            isExpanded
              ? "opacity-100 translate-x-0 ml-2 w-24"
              : "opacity-0 -translate-x-2 ml-0 w-0",
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
