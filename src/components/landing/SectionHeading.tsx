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
      <h2 className="font-display mt-3 text-4xl font-extrabold leading-tight text-[#07140f] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-[#47534b] sm:text-lg">{description}</p>
    </div>
  );
}
