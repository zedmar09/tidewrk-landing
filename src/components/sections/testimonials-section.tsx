import { AnimatedTestimonialGrid } from "@/components/ui/testimonial-2";

const testimonials = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=300",
    alt: "Professional Man",
    name: "Marcus Reed",
    role: "Operations Director",
    quote:
      "Tidewrk helped us add the right technical capacity without slowing our roadmap.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=300",
    alt: "Smiling Man",
    name: "Ethan Walsh",
    role: "Product Lead",
    quote:
      "The team understood our priorities quickly and turned messy ideas into clear delivery plans.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300",
    alt: "Professional Woman",
    name: "Nina Alvarez",
    role: "Chief Technology Officer",
    quote:
      "Their mix of talent and technology guidance gave us momentum exactly when we needed it.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300",
    alt: "Smiling Woman",
    name: "Priya Shah",
    role: "Customer Experience VP",
    quote:
      "We improved internal workflows and freed our team to focus on better customer outcomes.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=300",
    alt: "Man in a suit",
    name: "Daniel Brooks",
    role: "Managing Partner",
    quote:
      "Tidewrk brought structure, communication, and dependable execution to a complex build.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300",
    alt: "Bearded Man",
    name: "Oliver Grant",
    role: "Engineering Manager",
    quote:
      "Their specialists blended into our team and helped us ship with more confidence.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=300",
    alt: "Man in a blue shirt",
    name: "Caleb Foster",
    role: "Data Strategy Lead",
    quote:
      "They made our data work more practical, visible, and useful for leadership decisions.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=300",
    alt: "Older Man",
    name: "Henry Lawson",
    role: "Executive Advisor",
    quote:
      "The collaboration felt senior, calm, and focused on business value from day one.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=300",
    alt: "Woman with curly hair",
    name: "Sofia Bennett",
    role: "People Operations Head",
    quote:
      "They helped us scale support roles while keeping quality and accountability high.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=300",
    alt: "Woman in an office",
    name: "Maya Chen",
    role: "Digital Transformation Lead",
    quote:
      "Our automation initiatives became clearer, faster, and easier to adopt across teams.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=300",
    alt: "Woman with glasses",
    name: "Elena Morris",
    role: "QA Director",
    quote:
      "Tidewrk strengthened our release confidence with thoughtful testing and process support.",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=300",
    alt: "Woman with a dog",
    name: "Avery Collins",
    role: "Founder",
    quote:
      "They gave us the extra expertise we needed to grow without overcomplicating the business.",
  },
];

export function TestimonialsSection() {
  return (
    <div className="w-full bg-white" id="testimonials">
      <AnimatedTestimonialGrid
        badgeText="Success Stories"
        ctaHref="#contact"
        ctaText="Talk to Tidewrk"
        description="See how teams use Tidewrk to strengthen delivery, expand capability, and move customer-focused work forward."
        testimonials={testimonials}
        title={
          <>
            Trusted by leaders
            <br />
            across growing teams
          </>
        }
      />
    </div>
  );
}
