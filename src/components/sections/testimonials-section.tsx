"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion } from "motion/react";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

const testimonials: Testimonial[] = [
  {
    text: "Tidewrk helped us add the right technical capacity without slowing our roadmap. The team brought calm structure to a very busy delivery season.",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200",
    name: "Marcus Reed",
    role: "Operations Director",
  },
  {
    text: "The team understood our priorities quickly and turned messy ideas into clear delivery plans we could actually execute.",
    image:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=200",
    name: "Ethan Walsh",
    role: "Product Lead",
  },
  {
    text: "Their mix of talent and technology guidance gave us momentum exactly when we needed it. Communication stayed sharp from kickoff to release.",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
    name: "Nina Alvarez",
    role: "Chief Technology Officer",
  },
  {
    text: "We improved internal workflows and freed our team to focus on better customer outcomes instead of chasing manual handoffs.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200",
    name: "Priya Shah",
    role: "Customer Experience VP",
  },
  {
    text: "Tidewrk brought structure, communication, and dependable execution to a complex build with a lot of moving parts.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200",
    name: "Daniel Brooks",
    role: "Managing Partner",
  },
  {
    text: "Their specialists blended into our team and helped us ship with more confidence. It felt like added capacity without added noise.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
    name: "Oliver Grant",
    role: "Engineering Manager",
  },
  {
    text: "They made our data work more practical, visible, and useful for leadership decisions. The difference showed up quickly.",
    image:
      "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=200",
    name: "Caleb Foster",
    role: "Data Strategy Lead",
  },
  {
    text: "The collaboration felt senior, calm, and focused on business value from day one. We always knew what was happening next.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200",
    name: "Henry Lawson",
    role: "Executive Advisor",
  },
  {
    text: "They helped us scale support roles while keeping quality and accountability high. Our team felt supported, not replaced.",
    image:
      "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=200",
    name: "Sofia Bennett",
    role: "People Operations Head",
  },
  {
    text: "Our automation initiatives became clearer, faster, and easier to adopt across teams.",
    image:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=200",
    name: "Maya Chen",
    role: "Digital Transformation Lead",
  },
  {
    text: "Tidewrk strengthened our release confidence with thoughtful testing and process support.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200",
    name: "Elena Morris",
    role: "QA Director",
  },
  {
    text: "They gave us the extra expertise we needed to grow without overcomplicating the business.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200",
    name: "Avery Collins",
    role: "Founder",
  },
];

function getWrappedIndex(index: number) {
  return (index + testimonials.length) % testimonials.length;
}

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((currentIndex) => getWrappedIndex(currentIndex - 1));
  };

  const goToNext = () => {
    setActiveIndex((currentIndex) => getWrappedIndex(currentIndex + 1));
  };

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((currentIndex) => getWrappedIndex(currentIndex + 1));
    }, 6000);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-16 xl:px-20"
      id="testimonials"
    >
      <div className="relative mx-auto w-full max-w-[1900px] border border-[#e4e7ec] bg-white px-5 py-12 sm:px-8 md:px-12 md:py-16 lg:px-16 xl:px-20">
        <div className="relative mx-auto grid max-w-[1500px] gap-12 md:grid-cols-[0.82fr_1.18fr] md:items-center lg:gap-20">
          <motion.div
            className="max-w-md text-left"
            initial={{ opacity: 0, y: 18 }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, margin: "-80px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-balance text-4xl font-normal leading-[1.05] tracking-normal text-[#111217] sm:text-5xl lg:text-6xl">
              From our <span className="block font-semibold">community.</span>
            </h2>
            <p className="mt-7 max-w-sm text-base leading-8 text-[#333333] sm:text-lg">
              Real stories from real teams. See how Tidewrk helps transform
              delivery, capability, and customer-focused work.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                type="button"
                aria-label="Show previous testimonial"
                onClick={goToPrevious}
                className="flex size-12 items-center justify-center rounded-full border border-[#dfe5ec] bg-white text-[#111217] shadow-[0_12px_28px_rgba(0,52,102,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#003466]/35 hover:text-[#003466]"
              >
                <ChevronLeft className="size-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Show next testimonial"
                onClick={goToNext}
                className="flex size-12 items-center justify-center rounded-full border border-[#dfe5ec] bg-white text-[#111217] shadow-[0_12px_28px_rgba(0,52,102,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#003466]/35 hover:text-[#003466]"
              >
                <ChevronRight className="size-5" aria-hidden="true" />
              </button>
            </div>
          </motion.div>

          <div className="relative min-h-[320px]">
            <motion.div
              key={activeTestimonial.name}
              className="max-w-4xl"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            >
              <Quote
                aria-hidden="true"
                className="mb-4 size-10 fill-[#003466] text-[#003466]"
              />
              <blockquote className="text-balance text-3xl font-normal leading-[1.14] tracking-normal text-[#111217] sm:text-4xl lg:text-[2.7rem]">
                {activeTestimonial.text}
              </blockquote>

              <div className="mt-8 flex items-center gap-4">
                <span
                  className="block size-14 shrink-0 rounded-full bg-cover bg-center ring-1 ring-[#d8dde4]"
                  role="img"
                  aria-label={activeTestimonial.name}
                  style={{
                    backgroundImage: `url(${activeTestimonial.image})`,
                  }}
                />
                <p className="text-sm leading-5 text-[#333333]">
                  <span className="block text-base font-semibold text-[#111217]">
                    {activeTestimonial.name}
                  </span>
                  {activeTestimonial.role}
                </p>
              </div>

              <div className="mt-8 flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    aria-label={`Show testimonial from ${testimonial.name}`}
                    onClick={() => setActiveIndex(index)}
                    className="h-1.5 rounded-full bg-[#d5dbe3] transition-all duration-300 data-[active=true]:w-9 data-[active=true]:bg-[#003466] data-[active=false]:w-3"
                    data-active={index === activeIndex}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
