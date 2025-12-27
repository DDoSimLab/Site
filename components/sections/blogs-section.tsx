import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardImage,
  MinimalCardTitle,
} from "@/components/ui/minimal-card";

const cards = [
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
  },
  {
    title: "Sick title",
    description:
      "How to design with gestures and motion that feel intuitive and natural.",
  },
];

export function BlogsSection() {
  return (
    <section className="blogs-section py-16">
      <div className="blogs-container container mx-auto px-8 max-w-7xl ">
        <div className="blogs-grid grid md:grid-cols-3 gap-6 z-20">
          {cards.map((card, _i) => (
            <MinimalCard key={_i}>
              <MinimalCardImage src="/basic-img.png" alt="Blog Image" />
              <MinimalCardTitle>{card.title}</MinimalCardTitle>
              <MinimalCardDescription>
                {card.description}
              </MinimalCardDescription>
            </MinimalCard>
          ))}
        </div>
      </div>
    </section>
  );
}
