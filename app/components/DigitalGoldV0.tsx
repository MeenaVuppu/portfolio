import { PegPin } from "./Hardware";
import styles from "./DigitalGoldStory.module.css";

export function DigitalGoldV0() {
  return (
    <article className={`project-story-pin project-reveal ${styles.v0}`}>
      <div className={styles.v0Layout}>
        <figure className={`project-story-pin ${styles.v0Screen}`}>
          <PegPin />
          <div className="dg-phone-device">
            <div className="dg-phone-display dg-phone-display--scroll" tabIndex={0} role="region" aria-label="V0 Digital Gold landing page — scroll to view full screen">
              <img src="/dg-evidence/v0-landing.png" alt="V0 Digital Gold landing page with educational carousel and the unchanged investment calculator" />
            </div>
          </div>
        </figure>
      <div className={`project-story-pin ${styles.v0Copy}`}>
      <PegPin />
      <span className="section-kicker">EARLY EXPLORATION · V0</span>
      <h2>The first direction that changed the scope</h2>
      <p>With two days and limited development scope, I explored a lighter landing-page refresh: clearer investment messaging and educational carousel cards, while keeping the calculator unchanged.</p>
      <p className={styles.v0Followup}>The Growth team's review opened up a broader scope. We shelved V0 and allocated more time to redesign the investment journey, rather than relying on a messaging refresh alone.</p>
      <small className="project-story-footnote">V0 helped align the team on changing the journey, not just its introduction.</small>
        <div className={styles.v0Cards}>
          <img src="/dg-evidence/v0-gold-price.png" alt="V0 educational carousel card: Gold price has grown consistently" />
          <img src="/dg-evidence/v0-jewellery.png" alt="V0 educational carousel card: Gold to Jewellery" />
        </div>
      </div>
      </div>
    </article>
  );
}
