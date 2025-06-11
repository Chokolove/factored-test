import clsx from "clsx";
import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";

interface HeroCardProps {
  title: string;
  text?: string;
  tagline?: string;
  imgUrl?: string;
  isLeft?: boolean;
}
export default function HeroCard({
  title,
  text,
  tagline,
  imgUrl,
  isLeft = false,
}: HeroCardProps) {
  return (
    <div
      className={clsx(
        "group flex flex-1 border border-white justify-between hover:shadow-2xl shadow-light-blue transition-shadow duration-1000 rounded-lg lg:rounded-none flex-col-reverse",
        isLeft
          ? "lg:flex-row-reverse  lg:rounded-r-lg shadow-sith-red"
          : "lg:flex-row lg:rounded-l-lg shadow-light-blue"
      )}
    >
      <div className={"p-4 min-w-60 flex flex-col gap-4"}>
        <AnimatedTitle
          title={title}
          color={isLeft ? "sith-red" : "light-blue-soft"}
        />
        <p className="text-sm">{text}</p>
        <p className="text-sm italic">{tagline}</p>
      </div>
      {imgUrl ? (
        <Image
          src={imgUrl}
          alt={title || "Image"}
          width={340}
          height={240}
          className={clsx(
            "w-full md:w-80 rounded-t-lg object-cover",
            isLeft ? "md:rounded-r-lg" : "md:rounded-l-lg"
          )}
        />
      ) : (
        <div className="w-full md:w-80 h-[240px] bg-gray-800 flex items-center justify-center text-sm text-white italic">
          No image available
        </div>
      )}
    </div>
  );
}
