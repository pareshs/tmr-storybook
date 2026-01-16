export const createGlobalAlerts = ({ globalAlertsVariant, data }) => {
  const globalAlerts = document.createElement('div');
  globalAlerts.className = 'qld__global_alerts_include';

  let mainGlobalAlertsVariantClass = 'qld__global-alert qld__global-alert--' + globalAlertsVariant;
  let globalAlertsLabel = "Warning";
  let globalAlertsIcon = globalAlertsLabel.toLowerCase();
  if(globalAlertsVariant == "warning"){
    globalAlertsLabel = "Warning";
    globalAlertsIcon = globalAlertsLabel.toLowerCase();
  }else if(globalAlertsVariant == "critical"){
    globalAlertsLabel = "Critical";
    globalAlertsIcon = "danger";
  }else if(globalAlertsVariant == "general"){
    globalAlertsLabel = "Information";
    globalAlertsIcon = globalAlertsLabel.toLowerCase();
  }
  /*
    <!-- 
    Warning (Default - Amber):         <div role="region" aria-label="Warning" class="qld__global-alert qld__global-alert--default">
    Alerts (Critical - Red):            <div role="region" aria-label="Alerts" class="qld__global-alert qld__global-alert--critical">
    General (Information - Pale Blue): <div role="region" aria-label="Information" class="qld__global-alert qld__global-alert--general">
    -->
  */
  const globalAlertsContent = `

    <!-- Global Alerts -->
        <div role="region" aria-label="${globalAlertsLabel}" class="${mainGlobalAlertsVariantClass}">
            <div class="container-fluid">
                <div class="qld__global-alert__main">
                    <div class="qld__global-alert__icon">
                        <svg aria-label="${globalAlertsLabel}" role="img" class="qld__icon qld__icon--md"><use href="/images/icons.svg#alert-${globalAlertsIcon}"></use></svg>
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
