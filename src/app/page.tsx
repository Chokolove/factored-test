import Container from "@/components/Container";
import CustomLink from "@/components/CustomLink";
import FeaturedCard from "@/components/FeaturedCard";
import HeroCard from "@/components/HeroCard";
import IntroText from "@/components/IntroText";
import React from "react";

const introText = (
  <p className="text-base">
    You&apos;ve landed on the ultimate{" "}
    <strong>Star Wars Film and Character Explorer!</strong>
    <br />
    Search, filter, and discover your favorite heroes, villains, and droids from
    across the galaxy.
    <br />
    Whether you&apos;re a Rebel, a Sith, or just a curious Jawa —{" "}
    <em>the Force brought you here.</em>
  </p>
);

const HEROCARDS = [
  {
    title: "Jedi – Whisper of the Light",
    text: "In silence, they move—guardians of peace, wielding the Force not for glory, but for balance. Cloaked in robes and resolve, Jedi listen more than they speak, and act only when the galaxy demands it. Yet even the brightest star casts a shadow...",
    tagline: "But what happens when the light begins to question itself?",
    imgUrl: "https://media.brisa-bbb.com/sw-fanPage/jedi.jpg",
  },
  {
    title: "Sith – Echoes of the Dark",
    text: "Passion fuels them. Power defines them. The Sith rise not in secret, but with purpose—unafraid to claim what others fear to seek. Their strength is forged in fire, their will unbreakable.",
    tagline:
      "And when the darkness grows, who dares to stop it—if they even want to?",
    imgUrl: "https://media.brisa-bbb.com/sw-fanPage/sith.jpg",
  },
];

export default function Home() {
  return (
    <Container>
      <IntroText title="In a galaxy far, far away…" text={introText} />
      <div className="flex gap-4 items-center">
        <div className="flex items-stretch flex-col gap-4 lg:gap-0 lg:flex-row">
          {HEROCARDS.map((card, index) => (
            <HeroCard key={index} {...card} isLeft={index % 2 !== 0} />
          ))}
        </div>
      </div>
      <CustomLink
        url="/characters"
        ariaLabel="Navigate to Star Wars characters page"
        text="Check out the characters"
      />
      <FeaturedCard
        imgUrl="https://media.brisa-bbb.com/sw-fanPage/movies.jpg"
        title="The Saga of the Stars"
        text="From the twin suns of Tatooine to the icy fields of Hoth, the Star
            Wars films have told tales of hope, darkness, and redemption. Across
            generations, heroes rise, villains fall, and the Force weaves their
            destinies together."
      />
      <CustomLink
        url="/films"
        ariaLabel="Navigate to Star Wars films page"
        text="Check out the films"
      />
      <FeaturedCard
        imgUrl="https://media.brisa-bbb.com/sw-fanPage/starships.jpg"
        title="The Vessels of the Void"
        shadowHoverColor="hover:shadow-purple-saber"
        textHoverColor="group-hover:text-purple-saber-soft"
        text="From the sleek silhouette of the X-wing to the ominous bulk of 
            the Star Destroyer, starships have shaped the fate of the galaxy. 
            In battles above Coruscant and chases through asteroid fields, these ships carry smugglers, 
            soldiers, and legends — each hyperspace jump echoing with the stories of rebellion, empire, and destiny."
        isReverse
      />
      <CustomLink
        url="/starships"
        ariaLabel="Navigate to Star Wars ships page"
        text="Check out the ships"
      />
    </Container>
  );
}
