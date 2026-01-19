interface StepCardProps {
  step: number;
  title: string;
  description: string;
}

const StepCard = ({ step, title, description }: StepCardProps) => {
  return (
    <div className="relative">
      <div className="flex items-start gap-6">
        {/* Step Number */}
        <div className="flex-shrink-0 w-14 h-14 bg-primary rounded-full flex items-center justify-center">
          <span className="text-xl font-serif font-bold text-gold">{step}</span>
        </div>

        {/* Content */}
        <div className="flex-grow pt-2">
          <h4 className="text-lg font-serif text-primary mb-2">{title}</h4>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default StepCard;
