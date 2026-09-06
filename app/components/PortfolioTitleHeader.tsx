"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type PortfolioTitleHeaderProps = {
  title: string;
  compactTitle: string;
  compact?: boolean;
  onHome?: () => void;
  projectMode?: boolean;
};

export function PortfolioTitleHeader({
  title,
  compactTitle,
  compact,
  onHome,
  projectMode = false,
}: PortfolioTitleHeaderProps) {
  const [autoCompact, setAutoCompact] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (compact !== undefined) return;

    let frame = 0;
    const mobileHome = window.matchMedia("(max-width: 760px)");

    function updateCompactState() {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        const scrollY = window.scrollY;

        if (!projectMode && mobileHome.matches) {
          const progress = Math.min(1, Math.max(0, scrollY / 126));
          const compactTitleVisible = progress >= 0.9;
          const fullOpacity = compactTitleVisible ? 0 : 1;
          const compactOpacity = compactTitleVisible ? 1 : 0;
          const header = headerRef.current;

          header?.style.setProperty("--mobile-header-height", `${184 - progress * 112}px`);
          header?.style.setProperty("--mobile-header-brand-y", `${progress * 3}px`);
          header?.style.setProperty("--mobile-header-brand-size", `${14 - progress}px`);
          header?.style.setProperty("--mobile-header-brand-line-height", `${21 - progress * 1.5}px`);
          header?.style.setProperty("--mobile-header-title-top", `${73 - progress * 50}px`);
          header?.style.setProperty("--mobile-header-title-scale", `${1 - progress * 0.58}`);
          header?.style.setProperty("--mobile-header-full-opacity", `${fullOpacity}`);
          header?.style.setProperty("--mobile-header-compact-opacity", `${compactOpacity}`);
          setAutoCompact(false);
          return;
        }

        headerRef.current?.style.removeProperty("--mobile-header-height");
        headerRef.current?.style.removeProperty("--mobile-header-brand-y");
        headerRef.current?.style.removeProperty("--mobile-header-brand-size");
        headerRef.current?.style.removeProperty("--mobile-header-brand-line-height");
        headerRef.current?.style.removeProperty("--mobile-header-title-top");
        headerRef.current?.style.removeProperty("--mobile-header-title-scale");
        headerRef.current?.style.removeProperty("--mobile-header-full-opacity");
        headerRef.current?.style.removeProperty("--mobile-header-compact-opacity");
        setAutoCompact((isCompact) => {
          if (!isCompact && scrollY > 140) return true;
          if (isCompact && scrollY < 70) return false;
          return isCompact;
        });
      });
    }

    updateCompactState();
    window.addEventListener("scroll", updateCompactState, { passive: true });
    document.addEventListener("scroll", updateCompactState, { passive: true });
    window.addEventListener("resize", updateCompactState, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateCompactState);
      document.removeEventListener("scroll", updateCompactState);
      window.removeEventListener("resize", updateCompactState);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [compact, projectMode]);

  const isCompact = compact ?? autoCompact;
  const brand = projectMode && onHome ? (
    <button type="button" onClick={onHome}>← Board</button>
  ) : (
    <Link href="/">Meena Vuppu</Link>
  );

  return (
    <header ref={headerRef} className={`portfolio-title-header ${isCompact ? "is-compact" : ""} ${projectMode ? "is-project-title" : ""}`}>
      <div className="portfolio-title-header__inner">
        <strong className="portfolio-title-header__brand">{brand}</strong>
        <h1>
          <span className="portfolio-title-header__full">
            <span className="portfolio-title-header__current" key={title}>{title}</span>
          </span>
          <span className="portfolio-title-header__compact">{compactTitle}</span>
        </h1>
      </div>
    </header>
  );
}
