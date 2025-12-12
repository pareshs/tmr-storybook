export const createGlobalAlerts = ({ data }) => {
  const globalAlerts = document.createElement('div');
  globalAlerts.className = 'qld__global_alerts_include';

  const globalAlertsContent = `
   <!-- 
    Default (Yellow):  <div role="region" aria-label="Warning" class="qld__global-alert qld__global-alert--critical">
    Alerts:            <div role="region" aria-label="Warning" class="qld__global-alert qld__global-alert--default">
    Warning:           <div role="region" aria-label="Warning" class="qld__global-alert qld__global-alert--general">
    -->
    <!-- Global Alerts -->
        <div role="region" aria-label="Warning" class="qld__global-alert qld__global-alert--default">
            <div class="container-fluid">
                <div class="qld__global-alert__main">
                    <div class="qld__global-alert__icon">
                        <svg aria-label="Warning" role="img" class="qld__icon qld__icon--md"><use href="/images/icons.svg#alert-warning"></use></svg>
                    </div>
                    <div class="qld__global-alert__content">
                        <div class="qld__global-alert__message">
                            <strong>Testing:</strong> This website is currently undergoing testing
                        </div>
                        <div class="qld__global-alert__action">
                            <a href="#">
                                <span>Learn more</span>
                                <svg class="qld__icon qld__icon--md"><use href="/images/icons.svg#arrow-right"></use></svg>
                            </a>
                        </div>
                    </div>
                    <div class="qld__global-alert__close">
                        <button aria-label="Close alert">
                            <svg role="img" aria-label="Close" class="qld__icon qld__icon--sm"><use href="/images/icons.svg#close"></use></svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

  `;

  globalAlerts.innerHTML = globalAlertsContent;

  return globalAlerts;
};
