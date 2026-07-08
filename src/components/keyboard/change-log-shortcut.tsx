"use client";

import { useEffect } from "react";

const FORM_FIELD_SELECTORS = [
  "input",
  "textarea",
  "select",
  "[contenteditable='true']",
  "[contenteditable='']",
].join(",");

function isFormField(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  return Boolean(target.closest(FORM_FIELD_SELECTORS));
}

function isChangeLogShortcut(event: KeyboardEvent) {
  const hasModifier = event.ctrlKey || event.metaKey;
  const isShiftOne =
    event.shiftKey &&
    (event.code === "Digit1" || event.key === "1" || event.key === "!");

  return hasModifier && isShiftOne;
}

export function ChangeLogShortcut() {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (!isChangeLogShortcut(event) || isFormField(event.target)) {
        return;
      }

      event.preventDefault();
      window.open("/change-logs", "_blank", "noopener,noreferrer");
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return null;
}
