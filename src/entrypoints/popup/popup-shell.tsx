import { extensionMetadata } from '@/shared/constants/extension-metadata';

export function PopupShell() {
  return (
    <main className="popup-shell" aria-labelledby="popup-title">
      <header className="popup-hero">
        <div className="popup-hero__badge">Local-only autofill</div>
        <div className="popup-hero__heading">
          <p className="popup-hero__eyebrow">First-run guidance</p>
          <h1 id="popup-title">{extensionMetadata.displayName}</h1>
          <p className="popup-hero__body">
            Set up your profile once, keep it on this device, and stay in
            control before any autofill happens.
          </p>
        </div>
        <div className="popup-hero__privacy" aria-label="Privacy promise">
          Your profile stays in this browser only.
        </div>
      </header>

      <section className="status-grid" aria-label="Readiness overview">
        <article className="status-card" aria-labelledby="profile-status-title">
          <p className="status-card__kicker">Profile status</p>
          <h2 id="profile-status-title">Setup required before autofill</h2>
          <p className="status-card__body">
            Create your profile before autofill can fill job-application details
            for you.
          </p>
        </article>

        <article className="status-card" aria-labelledby="form-status-title">
          <p className="status-card__kicker">Privacy status</p>
          <h2 id="form-status-title">No account or cloud sync in v1</h2>
          <p className="status-card__body">
            This MVP has no login, backend, or remote data sync. You stay in
            control of what gets stored locally.
          </p>
        </article>
      </section>

      <section className="action-panel" aria-labelledby="autofill-panel-title">
        <div>
          <p className="action-panel__kicker">Primary action</p>
          <h2 id="autofill-panel-title">Start with a calm setup</h2>
          <p className="action-panel__body">
            Add your profile first so later autofill stays explicit, reviewable,
            and easier to trust.
          </p>
        </div>

        <button className="primary-button" type="button">
          Create my profile
        </button>
      </section>

      <section className="privacy-panel" aria-labelledby="privacy-panel-title">
        <div className="privacy-panel__header">
          <p className="privacy-panel__kicker">Privacy promise</p>
          <h2 id="privacy-panel-title">Local-only by default</h2>
        </div>
        <ul className="privacy-panel__list">
          <li>Stored in your browser on this device.</li>
          <li>No account or cloud sync in v1.</li>
          <li>No hidden autofill runs before you choose to start.</li>
        </ul>
      </section>

      <section className="secondary-actions" aria-label="Secondary actions">
        <button className="secondary-button" type="button">
          Why setup matters
        </button>
        <button className="secondary-button secondary-button--ghost" type="button">
          Report issue
        </button>
      </section>

      <section className="popup-note" aria-labelledby="shell-foundation-title">
        <h2 id="shell-foundation-title">What happens next</h2>
        <p>
          The next story adds the real onboarding flow. For now, this first-run
          state explains why setup is required and how your data stays local.
        </p>
      </section>
    </main>
  );
}
