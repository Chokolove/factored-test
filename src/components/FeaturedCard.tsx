import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";
import clsx from "clsx";

interface FeaturedCardProps {
  imgUrl: string;
  isReverse?: boolean;
  title: string;
  text: string;
}

export default function FeaturedCard({
  imgUrl,
  isReverse = false,
  title,
  text,
}: FeaturedCardProps) {
  return (
    <div
      className={clsx(
        "group  border border-white flex flex-col rounded-lg",
        "bg-imperial-gray shadow-lg hover:shadow-consul-green text-white transition-shadow duration-1000",
        isReverse ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <div className="relative w-full md:w-full min-h-[300px]">
        <Image
          src={imgUrl}
          alt="Featured Film"
          sizes="300px"
          fill
          className={clsx(
            "object-cover",
            isReverse ? "md:rounded-r-lg" : "md:rounded-l-lg"
          )}
        />
      </div>

      {/* Text Content */}
      <div className=" flex flex-col justify-between py-4 pr-4">
        <div className="p-6 flex flex-col justify-center gap-4 flex-1">
          <AnimatedTitle
            title={title}
            hoverClass="group-hover:text-consul-green"
          />
          <p className="text-sm text-white/80">{text}</p>
        </div>
      </div>
    </div>
  );
}
