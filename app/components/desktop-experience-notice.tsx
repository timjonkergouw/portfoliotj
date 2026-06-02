"use client";

import { useCallback, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const STORAGE_KEY = "portfoliotj-desktop-notice-v2";
const MOBILE_MEDIA_QUERY = "(max-width: 1023px)";
const HERO_INTRO_GRADIENT = "linear-gradient(to bottom, #020118, #9A3A0F)";

export default function DesktopExperienceNotice() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);

  const dismiss = useCallback(() => {
    setLeaving(true);
    window.setTimeout(() => {
      setVisible(false);
      window.localStorage.setItem(STORAGE_KEY, "1");
    }, 450);
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    if (window.localStorage.getItem(STORAGE_KEY) === "1") {
      return;
    }

    const mediaQuery = window.matchMedia(MOBILE_MEDIA_QUERY);

    const updateVisibility = () => {
      if (mediaQuery.matches) {
        setVisible(true);
      } else {
        setVisible(false);
        setLeaving(false);
      }
    };

    updateVisibility();
    mediaQuery.addEventListener("change", updateVisibility);

    return () => {
      mediaQuery.removeEventListener("change", updateVisibility);
    };
  }, [mounted]);

  useEffect(() => {
    if (!visible || leaving) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [visible, leaving]);

  useEffect(() => {
    if (!visible || leaving) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [visible, leaving, dismiss]);

  if (!mounted || !visible) {
    return null;
  }

  return createPortal(
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center px-6 transition-opacity duration-500 ease-out ${
        leaving ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
      style={{ backgroundImage: HERO_INTRO_GRADIENT }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="desktop-notice-title"
    >
      <div className="flex max-w-[520px] flex-col items-center gap-8 text-center">
        <p
          id="desktop-notice-title"
          className="font-body text-lg font-bold leading-relaxed text-[#E9E7DA] sm:text-xl"
        >
          Voor de optimale ervaring bekijk je deze portfolio het beste op desktop
          of laptop.
        </p>
        <button
          type="button"
          onClick={dismiss}
          className="btn-primary-lg"
          aria-label="Melding sluiten en verder gaan"
        >
          Begrepen
        </button>
      </div>
    </div>,
    document.body,
  );
}
