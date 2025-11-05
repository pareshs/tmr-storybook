import { Button } from '../Button/Button';

export const createHeader = ({ preHeaderVariant, headerVariant, data }) => {
  const header = document.createElement('header');
  header.className = 'qld__header';
  //preheader.className = `qld__header__pre-header--dark--${variant}`;
  header.role = 'banner';
  header.variant = 'header';

  const skipNavigation = `         
        <!-- Navigation bar for skip links -->
        <nav class="qld__skip-link" aria-label="skip links" tabindex="-1">
            <a class="qld__skip-link__link" href="#content">Skip to main content</a>
            <a class="qld__skip-link__link" href="#main-nav">Skip to main navigation</a>
        </nav>
`;
  const preHeaderCTAIconHome =`
            <a class="qld__header__cta-link" href="tel:${data.contact.list.home.label}">
                <span class="qld__header__cta-link-icon">
                    <svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#home"></use></svg>
                </span>
                <span class="qld__header__cta-link-text">Home Page</span>
            </a>
  `;
  const preHeaderCTA = `
        <!-- CTA wrapper for right aligned links in the preheader -->
        <div id="cta-wrapper" class="qld__header__cta-wrapper">
            <a class="qld__header__cta-link" href="tel:${data.contact.list.home.label}">
                <span class="qld__header__cta-link-icon">
                    <svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#home"></use></svg>
                </span>
                <span class="qld__header__cta-link-text">Home Page</span>
            </a>
            <a class="qld__header__cta-link" href="tel:${data.contact.list.phone.label}">
                <span class="qld__header__cta-link-icon">
                    <svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#phone"></use></svg>
                </span>
                <span class="qld__header__cta-link-text">Contact us</span>
            </a>
            <a class="qld__header__cta-link" href="tel:${data.contact.list.tmr.label}">
                <span class="qld__header__cta-link-icon">
                    <svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#language"></use></svg>
                </span>
                <span class="qld__header__cta-link-text">TMR Website</span>
            </a>
        </div>
  `;

 let preHeaderVariantClass = 'qld__header__pre-header--' + preHeaderVariant;
 let coaLandscapeLogo = 'coa-landscape';
 if((preHeaderVariant == 'dark') || preHeaderVariant == 'dark-alt'){
    coaLandscapeLogo = 'coa-landscape-white';
 }
  const preHeader = `
        <!-- Pre-header section with logo and links -->
        <div class="qld__header__pre-header ${preHeaderVariantClass}">
            <div class="container-fluid">
                    <!-- Government link and logo used for mobile display -->
                    <a href="https://qld.gov.au">
                            <span class="qld__header__pre-header-url">qld.gov.au</span>
                            <img class="qld__header__pre-header-brand-image" alt="Queensland Government" src="/images/${coaLandscapeLogo}.svg">
                    </a>

                ${preHeaderCTA}

                </div>
                <!-- Main navigation controls (Menu button on mobile and tablet screens) -->
                <div class="qld__header__main-nav-controls">
                    <!-- Menu button -->
                    <button aria-controls="main-nav" class="qld__header__toggle-main-nav qld__main-nav__toggle--open">
                        <!-- Menu icon -->
                        <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                             class="qld__icon qld__icon--lg">
                            <use href="/images/icons.svg#menu"></use>
                        </svg>
                        <!-- Menu button label -->
                        <span class="qld__main-nav__toggle-text">Menu</span>
                    </button>
                </div>
            </div>
        </div>
  `;


  const search = `
<!-- Search form section -->
<div class="qld__header__search" id="qld-header-search">
    <div class="qld__main-nav__focus-trap-top"></div>
            
    <div class="qld__search-form--wrapper">
        <form role="search" aria-label="sitewide" class="qld__search-form" id="search-input-global-header" action="#">
            <label for="search-input-global-header-query" class="qld__label qld__display-lg qld__search-form__label">Search this website</label>
            <div class="qld__search-form__inner">
                <input type="search" id="search-input-global-header-query" name="query" class="qld__text-input data-hj-allow" autocomplete="off">
                <input type="text" id="name" name="name" autocomplete="off" tabindex="-1" class="qld__text-input--validation">
                <div class="qld__search-form__btn">
                    <button class="qld__btn qld__btn--search" type="submit" aria-label="Search">
                        <span class="qld__btn__icon"></span>
                        <span class="qld__btn__text">Search</span>
                    </button>
                </div>
            </div>
        </form>
    </div>
    <div class="qld__main-nav__focus-trap-bottom"></div>
</div>  
  `;

  let mainHeaderVariantClass = 'qld__header__main--' + headerVariant;
  let coaLandscape2LinesLogo = 'coa-landscape-2-lines';
  if((headerVariant == 'dark') || headerVariant == 'dark-alt'){
    coaLandscape2LinesLogo = 'coa-landscape-2-lines-white';
  }
  const mainHeader = `
        <!-- Main header section -->
        <div class="qld__header__main ${mainHeaderVariantClass}">
            <div class="container-fluid">

                <!-- Header brand section -->
                <div class="qld__header__brand">
                    <a href="/">
                        <!-- QLD Government logo -->
                        <div class="qld__header__brand-image">
                            <img alt="Coat of Arms for Queensland Government on two lines" src="/images/${coaLandscape2LinesLogo}.svg">
                        </div>
                        <!-- Site name and description -->
                        <div class="qld__header__site-name">
                            <span class="qld__header__heading">Citytrain Response Unit</span>
                        </div>
                    </a>
                </div>
                ${search}
            </div>
        </div>
  `;
  
  const headerContents = [skipNavigation, preHeader, mainHeader];
  const headerContentRender = headerContents.join('');
  header.innerHTML = headerContentRender;

  return header;
};
