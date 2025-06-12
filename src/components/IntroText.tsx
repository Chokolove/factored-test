import { JSX } from "react";

interface IntroTextProps {
  title: string;
  text: string | JSX.Element;
}
export default function IntroText({ title, text }: IntroTextProps) {
  return (
    <div className="flex flex-col gap-4 items-center text-center">
      <h2 className="text-2xl font-bold">{title}</h2>
      {text}
    </div>
  );
}
