import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "navy";
}

const FeatureCard = ({
  icon: Icon,
  title,
  description,
  variant = "default",
}: FeatureCardProps) => {
  if (variant === "navy") {
    return (
      <div className="academy-card-navy">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-gold/20 rounded-lg flex-shrink-0">
            <Icon className="w-6 h-6 text-gold" />
          </div>
          <div>
            <h4 className="text-lg font-serif text-off-white mb-2">{title}</h4>
            <p className="text-off-white/80 text-sm leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="academy-card">
      <div className="flex flex-col items-center text-center">
        <div className="p-4 bg-primary/5 rounded-full mb-4">
          <Icon className="w-8 h-8 text-primary" />
        </div>
        <h4 className="text-lg font-serif text-primary mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
