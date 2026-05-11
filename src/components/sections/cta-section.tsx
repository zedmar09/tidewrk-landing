import { Cta4 } from "@/components/ui/cta-4";

export function CtaSection() {
  return (
    <Cta4
      buttonText="Start a Conversation"
      buttonUrl="#contact"
      description="Tidewrk helps businesses strengthen vendor collaboration, improve existing systems with automation and workflow design, and adopt emerging technologies with confidence."
      items={[
        "Align vendors and teams",
        "Automate everyday workflows",
        "Improve existing systems",
        "Adopt emerging technology",
        "Scale with expert support",
      ]}
      title="Bring talent, systems, and technology into sync"
    />
  );
}
