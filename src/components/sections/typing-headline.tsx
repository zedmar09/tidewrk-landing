"use client";

import { useEffect, useMemo, useState } from "react";

type TypingHeadlineProps = {
  text: string;
};

const storageKey = "tidewrk.heroTypingSeen";

function shouldReduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function TypingHeadline({ text }: TypingHeadlineProps) {
  const [visibleText, setVisibleText] = useState(text);
  const [isTyping, setIsTyping] = useState(false);
  const words = useMemo(() => text.split(" "), [text]);

  useEffect(() => {
    if (shouldReduceMotion()) {
      return;
    }

    const hasSeenTyping = window.localStorage.getItem(storageKey) === "true";
    if (hasSeenTyping) {
      return;
    }

    let index = 0;
    let timer = 0;

    const startTimer = window.setTimeout(() => {
      setVisibleText("");
      setIsTyping(true);

      timer = window.setInterval(() => {
        index += 1;
        setVisibleText(text.slice(0, index));

        if (index >= text.length) {
          window.clearInterval(timer);
          window.localStorage.setItem(storageKey, "true");
          setIsTyping(false);
        }
      }, 68);
    }, 120);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(timer);
    };
  }, [text]);

  return (
    <h1
      aria-label={text}
      className="mx-auto max-w-[16ch] text-balance text-center text-[clamp(2.25rem,10vw,5.4rem)] font-semibold leading-[1.06] tracking-normal text-[#111217] sm:max-w-[18ch] sm:text-[clamp(2.75rem,5.9vw,5.4rem)] sm:leading-[1.04]"
    >
      <span aria-hidden="true">
        {visibleText || "\u00a0"}
        {isTyping ? (
          <span className="ml-1 inline-block h-[0.78em] w-[0.08em] translate-y-[0.08em] animate-pulse rounded-full bg-[#111217]" />
        ) : null}
      </span>
      <span className="sr-only">{words.join(" ")}</span>
    </h1>
  );
}
