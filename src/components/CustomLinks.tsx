import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface CustomLinksProps {
  url: string;
  ariaLabel: string;
  text: string;
}

export default function CustomLinks({
  url,
  ariaLabel,
  text,
}: CustomLinksProps) {
  return (
    <Link
      href={url}
      aria-label={ariaLabel}
      className=" group flex gap-2 border border-white rounded-lg p-2 max-w-fit ml-auto hover:bg-white/10 transition-all"
    >
      <span>{text}</span>
      <ArrowRight size={24} className="animate-wiggle" />
    </Link>
  );
}
