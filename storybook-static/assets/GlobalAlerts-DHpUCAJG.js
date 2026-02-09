const n=({globalAlertsVariant:e,data:r})=>{const s=document.createElement("div");s.className="qld__global_alerts_include";let i="qld__global-alert qld__global-alert--"+e,l="Warning",a=l.toLowerCase();e=="warning"?(l="Warning",a=l.toLowerCase()):e=="critical"?(l="Critical",a="danger"):e=="general"&&(l="Information",a=l.toLowerCase());const o=`

    <!-- Global Alerts -->
        <div role="region" aria-label="${l}" class="${i}">
            <div class="container-fluid">
                <div class="qld__global-alert__main">
                    <div class="qld__global-alert__icon">
                        <svg aria-label="${l}" role="img" class="qld__icon qld__icon--md"><use href="/images/icons.svg#alert-${a}"></use></svg>
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

  `;return s.innerHTML=o,s};export{n as c};
