import { extensionMetadata } from '@/shared/constants/extension-metadata';

export function PopupShell() {
  return (
    <main
      className="popup-shell"
      aria-labelledby="popup-title"
      aria-describedby="popup-summary"
    >
      <p id="popup-summary" className="sr-only">
        This popup keeps the onboarding shell accessible with clear status, privacy,
        and focus targets for the primary and secondary actions.
      </p>

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

      <section
        className="status-grid"
        aria-label="Readiness overview"
        aria-describedby="status-grid-summary"
      >
        <p id="status-grid-summary" className="sr-only">
          Profile status: setup is required before autofill can run. Privacy status:
          no account or cloud sync is present in v1.
        </p>
        <article className="status-card" aria-labelledby="profile-status-title">
          <p className="status-card__kicker">Profile status</p>
          <h2 id="profile-status-title">Setup required before autofill</h2>
          <p
            id="profile-status-body"
            className="status-card__body"
          >
            Create your profile before autofill can fill job-application details
            for you.
          </p>
          <p id="profile-status-helper" className="sr-only">
            Profile setup is the first step; focus will move from this status
            explanation to the primary action.
          </p>
        </article>

        <article className="status-card" aria-labelledby="form-status-title">
          <p className="status-card__kicker">Privacy status</p>
          <h2 id="form-status-title">No account or cloud sync in v1</h2>
          <p id="form-status-body" className="status-card__body">
            This MVP has no login, backend, or remote data sync. You stay in
            control of what gets stored locally.
          </p>
          <p id="form-status-helper" className="sr-only">
            Privacy status highlights the local-only promise and that autofill waits
            for explicit profile creation.
          </p>
        </article>
      </section>

      <section
        className="action-panel"
        aria-labelledby="autofill-panel-title"
        aria-describedby="action-panel-description"
      >
        <div>
          <p className="action-panel__kicker">Primary action</p>
          <h2 id="autofill-panel-title">Start with a calm setup</h2>
          <p className="action-panel__body">
            Add your profile first so later autofill stays explicit, reviewable,
            and easier to trust.
          </p>
        </div>
        <p id="action-panel-description" className="sr-only">
          Use the primary button to start the calm setup flow that precedes
          future onboarding steps.
        </p>

        <button
          className="primary-button"
          type="button"
          aria-describedby="primary-action-desc"
        >
          Create my profile
        </button>
        <p id="primary-action-desc" className="sr-only">
          Opens the calm setup experience where you can prepare your profile before
          any autofill attempts.
        </p>
      </section>

      <section
        className="privacy-panel"
        aria-labelledby="privacy-panel-title"
        aria-describedby="privacy-panel-description"
      >
        <div className="privacy-panel__header">
          <p className="privacy-panel__kicker">Privacy promise</p>
          <h2 id="privacy-panel-title">Local-only by default</h2>
        </div>
        <p id="privacy-panel-description" className="sr-only">
          Privacy copy reiterates the local-only promise, listing what is and is
          not present in the MVP.
        </p>
        <ul className="privacy-panel__list">
          <li>Stored in your browser on this device.</li>
          <li>No account or cloud sync in v1.</li>
          <li>No hidden autofill runs before you choose to start.</li>
        </ul>
      </section>

      <section className="secondary-actions" aria-label="Secondary actions">
        <div className="secondary-actions__item">
          <button
            className="secondary-button"
            type="button"
            aria-describedby="secondary-why-setup-desc"
          >
            Why setup matters
          </button>
          <p id="secondary-why-setup-desc" className="sr-only">
            Shares why creating a profile first makes future autofill safer and easier.
          </p>
        </div>
        <div className="secondary-actions__item">
          <button
            className="secondary-button secondary-button--ghost"
            type="button"
            aria-describedby="secondary-report-issue-desc"
          >
            Report issue
          </button>
          <p id="secondary-report-issue-desc" className="sr-only">
            Opens a read-only report screen so you can flag issues without leaving the popup.
          </p>
        </div>
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
