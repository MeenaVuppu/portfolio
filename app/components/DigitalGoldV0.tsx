import { PegPin } from "./Hardware";
import styles from "./DigitalGoldStory.module.css";

export function DigitalGoldV0() {
  return (
    <article className={`project-story-pin project-reveal ${styles.v0}`}>
      <PegPin />
      <span className="section-kicker">EARLY EXPLORATION · V0</span>
      <h2>The first direction that changed the scope</h2>
      <p>With a two-day turnaround and limited development scope, I explored a lighter refresh of the existing Digital Gold experience. The investment calculator remained unchanged, while the landing page introduced clearer messaging and educational carousel cards to help users better understand Digital Gold.</p>
      <p className={styles.v0Followup}>When the Growth team reviewed this direction, they recognised the opportunity to improve the experience beyond a surface-level refresh. We decided to shelve V0 and dedicate more time to a comprehensive revamp of the investment journey.</p>
      <div className={styles.v0Visuals}>
        <figure className={styles.v0Screen}><img src="/dg-evidence/v0-landing.png" alt="V0 Digital Gold landing page with educational carousel and the unchanged investment calculator" /></figure>
        <div className={styles.v0Cards}>
          <img src="/dg-evidence/v0-gold-price.png" alt="V0 educational carousel card: Gold price has grown consistently" />
          <img src="/dg-evidence/v0-jewellery.png" alt="V0 educational carousel card: Gold to Jewellery" />
        </div>
      </div>
      <small className="project-story-footnote">A constrained first iteration helped build alignment for a more meaningful product improvement.</small>
    </article>
  );
}
