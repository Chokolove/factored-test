import clsx from "clsx";

interface AnimatedTitleProps {
  title: string;
  hoverClass?: string;
}

export default function AnimatedTitle({
  title,
  hoverClass = "group-hover:text-white",
}: AnimatedTitleProps) {
  return (
    <h3
      className={clsx(
        "relative inline-block group text-xl font-bold transition-colors duration-1000",
        hoverClass
      )}
    >
      <span className="group-hover:before:scale-x-100 before:scale-x-0 before:origin-center before:transition-transform before:duration-500 before:ease-out before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-current">
        {title}
      </span>
    </h3>
  );
}
