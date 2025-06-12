import Image from "next/image";
import AnimatedTitle from "./AnimatedTitle";

export default function FeaturedFilmCard() {
  return (
    <div className="group  border border-white flex flex-col md:flex-row rounded-lg bg-imperial-gray shadow-lg hover:shadow-consul-green text-white transition-shadow duration-1000">
      <div className="relative w-full md:w-full min-h-[300px]">
        <Image
          src="https://media.brisa-bbb.com/sw-fanPage/movies.jpg"
          alt="Featured Film"
          sizes="300px"
          fill
          className="rounded-l-lg object-cover"
        />
      </div>

      {/* Text Content */}
      <div className=" flex flex-col justify-between py-4 pr-4">
        <div className="p-6 flex flex-col justify-center gap-4 flex-1">
          <AnimatedTitle
            title={"The Saga of the Stars"}
            hoverClass="group-hover:text-consul-green"
          />
          <p className="text-sm text-white/80">
            From the twin suns of Tatooine to the icy fields of Hoth, the Star
            Wars films have told tales of hope, darkness, and redemption. Across
            generations, heroes rise, villains fall, and the Force weaves their
            destinies together.
          </p>
        </div>
      </div>
    </div>
  );
}
