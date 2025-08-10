import { Button } from '../Button/Button';

export const createHeader = ({ data }) => {
  const header = document.createElement('header');
  header.className = 'qld__header';
  header.role = 'banner';

  const headerContent = `
  <header class="qld__header" role="banner">
        <!-- Navigation bar for skip links -->
        <nav class="qld__skip-link" aria-label="skip links" tabindex="-1">
            <a class="qld__skip-link__link" href="#content">Skip to main content</a>
            <a class="qld__skip-link__link" href="#main-nav">Skip to main navigation</a>
        </nav>

        <!-- Pre-header section with logo and links -->
        <div class="qld__header__pre-header qld__header__pre-header--dark">
            <div class="container-fluid">
                    <!-- Government link and logo used for mobile display -->
                    <a href="https://qld.gov.au">
                            <span class="qld__header__pre-header-url">qld.gov.au</span>
                            <img class="qld__header__pre-header-brand-image" alt="Queensland Government" src="../src/images/coa-landscape-white.svg">
                    </a>

                <!-- CTA wrapper for right aligned links in the preheader -->
                <div class="qld__header__cta-wrapper">


                </div>
                <!-- Main navigation controls (Menu button on mobile and tablet screens) -->
                <div class="qld__header__main-nav-controls">
                    <!-- Menu button -->
                    <button aria-controls="main-nav" class="qld__header__toggle-main-nav qld__main-nav__toggle--open">
                        <!-- Menu icon -->
                        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                             class="qld__icon qld__icon--lg">
                            <use href="../src/images/icons.svg#menu"></use>
                        </svg>
                        <!-- Menu button label -->
                        <span class="qld__main-nav__toggle-text">Menu</span>
                    </button>
                </div>
            </div>
        </div>

        <!-- Main header section -->
        <div class="qld__header__main">
            <div class="container-fluid">

                <!-- Header brand section -->
                <div class="qld__header__brand">
                        <a href="/">
                            <!-- QLD Government logo -->
                            <div class="qld__header__brand-image">
                                <img alt="Coat of Arms for Queensland Government on two lines" src="../src/images/coa-landscape-2-lines.svg">
                            </div>
                            <!-- Site name and description -->
                            <div class="qld__header__site-name">
                                <span class="qld__header__heading">Citytrain Response Unit</span>
                            </div>
                        </a>
                </div>
            </div>
        </div>
    </header>
  `;

  //header.innerHTML = headerContentRender;
  header.innerHTML = headerContent;

  return header;
};
