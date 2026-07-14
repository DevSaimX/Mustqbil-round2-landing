interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const isCentered = align === "center";

  return (
    <div
      className={
        isCentered ? "motion-heading mx-auto max-w-3xl text-center" : "motion-heading max-w-3xl"
      }
    >
      <p className="text-sm font-semibold text-[#5c665d]">{eyebrow}</p>
      <h2 className="font-display mt-3 text-3xl font-extrabold leading-[1.08] text-[#07140f] [text-wrap:balance] sm:text-4xl md:text-5xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#47534b] sm:text-lg">
        {description}
      </p>
    </div>
  );
}
