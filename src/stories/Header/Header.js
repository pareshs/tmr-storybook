import { Button } from '../Button/Button';

export const createHeader = ({ headerContactHasPhone, headerContactHasEmail, headerHasSocialMedia, headerHasCoa, data }) => {
  const header = document.createElement('header');
  header.className = 'qld__footer qld__footer--dark';
  header.role = 'contentinfo';

  const headerSections_organisationTitle = `
    <div class="container-fluid">
        <div class="row qld__footer__row">
            <div class="col-xs-12 qld__footer__column">
                <div class="qld__footer__title">
                    <h2 class="qld__footer__heading">${data.organisationName}</h2>
                </div>
            </div>
        </div>
    </div>
  `;

  const headerContainerStart = `
    <!-- Header content container -->
    <div class="container-fluid">
        <div class="row">
  `;

  let headerPhone = `
                            <p class="qld__footer__cta-content">
                               <a href="tel:${data.contact.list.phone.label}"><svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="../src/images/icons.svg#phone"></use></svg>Phone: ${data.contact.list.phone.label}
                                </a>
                            </p>
  `;
  if(!headerContactHasPhone){
    headerPhone = '';
  }

  let headerEmail = `
                            <p class="qld__footer__cta-content">
                                <a href="mailto:${data.contact.list.email.label}"><svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="../src/images/icons.svg#Email"></use></svg>Email: ${data.contact.list.email.label}</a>
                            </p>
  `;
  if(!headerContactHasEmail){
    headerEmail = '';
  }
  const headerContact = `
            <div class="col-xs-12 col-lg-3 qld__footer__column">
                <div class="container-fluid">
                    <div class="row qld__footer-contact">
                        <div class="col-xs-12 col-sm-8 col-lg-12">
                            <h3 class="qld__footer__heading">Contact Us</h3> 
                            <p class="qld__footer__cta-content">
                                If you have a question or would like to give feedback, you can get in touch with us.
                            </p>
                            ${headerPhone}
                            ${headerEmail}
                        </div>
                        <div class="col-xs-12 col-sm-4 col-lg-12">
                            ${Button({ label: 'Contact Us', variant: 'secondary' }).outerHTML}
                        </div>
                    </div>
                </div>
            </div>
  `;

  const headerLinks = `
            <div class="col-xs-12 col-lg-2 qld__footer__column">
                <nav class="qld__footer__navigation" aria-label="Queensland Government links">
                <h3 class="sr-only">Queensland Government links</h3>
                    <ul class="qld__link-list">
                        <li><a class="qld__footer__clickable__link" href="https://www.qld.gov.au/legal/copyright">Copyright</a></li>
                        <li><a class="qld__footer__clickable__link" href="https://www.qld.gov.au/legal/disclaimer/">Disclaimer</a></li>
                        <li><a class="qld__footer__clickable__link" href="https://www.qld.gov.au/legal/privacy/">Privacy</a></li>
                        <li><a class="qld__footer__clickable__link" href="https://www.tmr.qld.gov.au/About us/Right to Information">Right to information</a></li>
                        <li><a class="qld__footer__clickable__link" href="https://www.qld.gov.au/help/accessibility/">Accessibility</a></li>
                        <li><a class="qld__footer__clickable__link" href="https://smartjobs.qld.gov.au/">Jobs in Queensland Government</a></li>
                        <li><a class="qld__footer__clickable__link" href="https://www.qld.gov.au/help/languages">Other languages</a></li>
                    </ul>
                </nav>
            </div>
  `;

  let headerSocialMedia = `
            <div class="col-xs-12 col-lg-2 qld__footer__column">
                <nav class="qld__footer__social" aria-label="social media links">
                    <h3 class="qld__footer__heading">Follow us</h3>
                    <ul class="qld__link-list">
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="../src/images/icons.svg#Facebook"></use></svg>
                                <span class="qld__footer__social__label">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="../src/images/icons.svg#Instagram"></use></svg>
                                <span class="qld__footer__social__label">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="../src/images/icons.svg#LinkedIn"></use></svg>
                                <span class="qld__footer__social__label">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="../src/images/icons.svg#YouTube"></use></svg>
                                <span class="qld__footer__social__label">Youtube</span>
                            </a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="../src/images/icons.svg#X"></use></svg>
                                <span class="qld__footer__social__label">Twitter</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>  
  `; 

  if(!headerHasSocialMedia){
    headerSocialMedia = '';
  }

  let headerCOA = '';
  if(headerHasCoa){
    headerCOA = `
                    <a class="qld__footer__logo" href="https://www.qld.gov.au/">
                        <img class="qld__footer__logo-image" alt="Queensland Government Coat of Arms" src="../src/images/coa-landscape-2-lines.svg">                    
                    </a>`;
  }

  const headerAcknowledgements = `
            <div class="col-xs-12 qld__footer__column">
                <div>                  
                    <h3 class="qld__footer__heading">
                        Acknowledgement of Country
                    </h3>
                    <p class="qld__footer__acknowledgements">
                        Queensland Government acknowledges the Traditional Owners of the land and pays respect to Elders past, present and future.
                    </p>
                    ${headerCOA}
                    <h3 class="sr-only">Copyright statement</h3>
                    <p class="qld__footer__copyrightMessage">
                        © The State of Queensland 2017-2025 (${data.organisationName})
                    </p>
                    <a class="qld__footer__clickable__link qld__footer__copyright-link" href="https://www.qld.gov.au/" rel="external">Queensland Government</a>                                            
                </div>
            </div>   
  `;

  const headerContainerEnd = `
        </div>

    </div>
  `;

  const headerContents = [headerSections_organisationTitle, headerContainerStart, headerContact, headerLinks, headerSocialMedia, headerAcknowledgements, headerContainerEnd];
  const headerContentRender = headerContents.join('');
  header.innerHTML = headerContentRender;

  return header;
};
