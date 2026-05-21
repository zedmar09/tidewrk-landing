"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

type ProfilePosition = {
  offset: number;
  left: string;
  top: string;
  className: string;
  scale: number;
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

const profilePositions: ProfilePosition[] = [
  {
    offset: -3,
    left: "8%",
    top: "34%",
    className: "size-14 sm:size-16",
    scale: 0.86,
  },
  {
    offset: -2,
    left: "22%",
    top: "61%",
    className: "size-16 sm:size-20",
    scale: 0.95,
  },
  {
    offset: -1,
    left: "36%",
    top: "27%",
    className: "size-16 sm:size-20",
    scale: 0.98,
  },
  {
    offset: 0,
    left: "50%",
    top: "45%",
    className: "size-20 sm:size-24",
    scale: 1.1,
  },
  {
    offset: 1,
    left: "64%",
    top: "32%",
    className: "size-16 sm:size-20",
    scale: 0.98,
  },
  {
    offset: 2,
    left: "78%",
    top: "61%",
    className: "size-16 sm:size-20",
    scale: 0.95,
  },
  {
    offset: 3,
    left: "92%",
    top: "34%",
    className: "size-14 sm:size-16",
    scale: 0.86,
  },
];

const pathDots = [
  { left: "15%", top: "58%" },
  { left: "30%", top: "38%" },
  { left: "57%", top: "41%" },
  { left: "73%", top: "73%" },
  { left: "88%", top: "25%" },
  { left: "98%", top: "52%" },
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
      className="relative overflow-hidden bg-white px-[4vw] py-16 md:py-24"
      id="testimonials"
    >
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
          initial={{ opacity: 0, y: 18 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-balance text-3xl font-semibold leading-tight tracking-normal text-[#111217] sm:text-4xl lg:text-5xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 max-w-xl text-balance text-sm leading-6 text-[#666666] sm:text-base">
            Real stories from real teams. See how Tidewrk helps transform
            delivery, capability, and customer-focused work.
          </p>
          <a
            className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#003466] px-7 text-sm font-medium text-white shadow-[0_14px_32px_rgba(0,52,102,0.24)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#042a50]"
            href="#contact"
          >
            Contact Us
          </a>
        </motion.div>

        <div className="relative mx-auto mt-12 h-[250px] max-w-7xl sm:h-[318px]">
          <svg
            aria-hidden="true"
            className="absolute inset-x-1/2 top-1/2 h-full w-[1180px] max-w-none -translate-x-1/2 -translate-y-1/2 overflow-visible text-[#003466]/30"
            fill="none"
            viewBox="0 0 1180 320"
          >
            <path
              d="M-32 164 C 64 164 88 72 166 92 S 214 262 318 238 S 374 58 466 78 S 500 206 606 164 S 706 62 806 88 S 792 260 912 238 S 944 94 1042 90 S 1104 166 1212 164"
              stroke="currentColor"
              strokeDasharray="2 7"
              strokeLinecap="round"
              strokeWidth="1.25"
            />
          </svg>

          {pathDots.map((dot) => (
            <span
              key={`${dot.left}-${dot.top}`}
              aria-hidden="true"
              className="absolute z-10 size-2.5 rounded-full bg-[#111217] sm:size-3"
              style={{ left: dot.left, top: dot.top }}
            />
          ))}

          {profilePositions.map((position) => {
            const testimonial =
              testimonials[getWrappedIndex(activeIndex + position.offset)];
            const isActive = position.offset === 0;

            return (
              <motion.button
                key={testimonial.name}
                type="button"
                aria-label={`Show testimonial from ${testimonial.name}`}
                onClick={() =>
                  setActiveIndex(
                    getWrappedIndex(activeIndex + position.offset)
                  )
                }
                className={cn(
                  "absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full p-1 transition-[filter] duration-300 hover:brightness-105",
                  isActive && "z-30"
                )}
                initial={false}
                animate={{
                  left: position.left,
                  scale: isActive ? 1 : position.scale,
                  top: position.top,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span
                  className={cn(
                    "block rounded-full border border-[#d8dde4] bg-white p-1 shadow-[0_18px_45px_rgba(0,52,102,0.12)] transition duration-300",
                    isActive &&
                      "border-[#003466] shadow-[0_22px_55px_rgba(0,52,102,0.2)] ring-4 ring-[#003466]/10"
                  )}
                >
                  <span
                    className={cn(
                      "block rounded-full bg-cover bg-center",
                      position.className
                    )}
                    role="img"
                    aria-label={testimonial.name}
                    style={{ backgroundImage: `url(${testimonial.image})` }}
                  />
                </span>
              </motion.button>
            );
          })}
        </div>

        <div className="mx-auto mt-2 grid max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-4 sm:gap-8">
          <button
            type="button"
            aria-label="Show previous testimonial"
            onClick={goToPrevious}
            className="flex size-12 items-center justify-center rounded-full border border-[#dfe5ec] bg-white text-[#111217] shadow-[0_12px_28px_rgba(0,52,102,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#003466]/35 hover:text-[#003466]"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>

          <motion.div
            key={activeTestimonial.name}
            className="text-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mx-auto max-w-3xl text-balance text-base leading-7 text-[#666666] sm:text-lg">
              {activeTestimonial.text}
            </p>
            <p className="mt-3 text-sm text-[#666666]">
              <span className="font-semibold text-[#111217]">
                {activeTestimonial.name}
              </span>
              <span className="mx-2 text-[#b5bbc3]">/</span>
              {activeTestimonial.role}
            </p>
          </motion.div>

          <button
            type="button"
            aria-label="Show next testimonial"
            onClick={goToNext}
            className="flex size-12 items-center justify-center rounded-full border border-[#dfe5ec] bg-white text-[#111217] shadow-[0_12px_28px_rgba(0,52,102,0.08)] transition duration-300 hover:-translate-y-0.5 hover:border-[#003466]/35 hover:text-[#003466]"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}
