"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { designExperience } from "../lib/designExperience";
import styles from "./ExperienceClock.module.css";

export function ExperienceClock() {
  const [experience, setExperience] = useState<ReturnType<typeof designExperience> | null>(null);

  useEffect(() => {
    let timer: number;
    function update() {
      const now = new Date();
      setExperience(designExperience(now));
      const nextMonth = Date.UTC(now.getUTCFullYear(), now.getUTCMonth() + 1, 1);
      // Check daily until the next exact calendar boundary; avoid the browser's
      // maximum timeout limit for long months and never approximate month length.
      timer = window.setTimeout(update, Math.min(nextMonth - now.getTime() + 10, 86_400_000));
    }
    update();
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={styles.clock} role="img" aria-label={experience
      ? `${experience.years} years and ${experience.months} months of Product Design experience`
      : "Product Design experience clock"}>
      <Image src="/experience-clock.webp" alt="" width={1774} height={887} unoptimized draggable={false} />
      <div className={styles.display} aria-hidden="true">
        <div className={styles.digits}>
          <span>{experience?.years ?? "--"}</span>
          <span className={styles.separator}>:</span>
          <span>{experience?.months ?? "--"}</span>
        </div>
        <span className={styles.label}>YRS · MOS</span>
      </div>
    </div>
  );
}
