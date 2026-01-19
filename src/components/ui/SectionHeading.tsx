import { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string | ReactNode;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`mb-4 ${light ? "text-off-white" : "text-primary"}`}>
        {title}
      </h2>
      <div className={centered ? "gold-divider" : "gold-divider-left"} />
      {subtitle && (
        <p
          className={`mt-6 max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-off-white/80" : "text-muted-foreground"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
