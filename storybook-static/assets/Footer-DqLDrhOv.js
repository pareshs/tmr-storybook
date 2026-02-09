import{B as m}from"./Button-H_6k8mnn.js";const x=({footerVariant:s,footerContactHasPhone:n,footerContactHasEmail:c,footerHasSocialMedia:r,footerHasCoa:d,data:l})=>{const o=document.createElement("footer");let f="qld__footer qld__footer--"+s,e="coa-landscape-2-lines";(s=="dark"||s=="dark-alt")&&(e="coa-landscape-2-lines-white"),o.className=f,o.role="contentinfo";const g=`
    <div class="container-fluid">
        <div class="row qld__footer__row">
            <div class="col-xs-12 qld__footer__column">
                <div class="qld__footer__title">
                    <h2 class="qld__footer__heading">${l.organisationName}</h2>
                </div>
            </div>
        </div>
    </div>
  `,h=`
    <!-- Footer content container -->
    <div class="container-fluid">
        <div class="row">
  `;let a=`
    <p class="qld__footer__cta-content">
        <a href="tel:${l.contact.list.phone.label}"><svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#phone"></use></svg>Phone: ${l.contact.list.phone.label}
        </a>
    </p>
  `;n||(a="");let _=`
    <p class="qld__footer__cta-content">
        <a href="mailto:${l.contact.list.email.label}"><svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#Email"></use></svg>Email: ${l.contact.list.email.label}</a>
    </p>
  `;c||(_="");const v=`
    <div class="col-xs-12 col-lg-3 qld__footer__column">
        <div class="container-fluid">
            <div class="row qld__footer-contact">
                <div class="col-xs-12 col-sm-8 col-lg-12">
                    <h3 class="qld__footer__heading">Contact Us</h3> 
                    <p class="qld__footer__cta-content">
                        If you have a question or would like to give feedback, you can get in touch with us.
                    </p>
                    ${a}
                    ${_}
                </div>
                <div class="col-xs-12 col-sm-4 col-lg-12">
                    ${m({label:"Contact Us",variant:"secondary"}).outerHTML}
                </div>
            </div>
        </div>
    </div>
  `,u=`
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
  `;let t=`
    <div class="col-xs-12 col-lg-2 qld__footer__column">
        <nav class="qld__footer__social" aria-label="social media links">
            <h3 class="qld__footer__heading">Follow us</h3>
            <ul class="qld__link-list">
                <li>
                    <a class="qld__footer__clickable__link" href="#">
                        <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#Facebook"></use></svg>
                        <span class="qld__footer__social__label">Facebook</span>
                    </a>
                </li>
                <li>
                    <a class="qld__footer__clickable__link" href="#">
                        <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#Instagram"></use></svg>
                        <span class="qld__footer__social__label">Instagram</span>
                    </a>
                </li>
                <li>
                    <a class="qld__footer__clickable__link" href="#">
                        <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#LinkedIn"></use></svg>
                        <span class="qld__footer__social__label">LinkedIn</span>
                    </a>
                </li>
                <li>
                    <a class="qld__footer__clickable__link" href="#">
                        <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#YouTube"></use></svg>
                        <span class="qld__footer__social__label">Youtube</span>
                    </a>
                </li>
                <li>
                    <a class="qld__footer__clickable__link" href="#">
                        <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="/images/icons.svg#X"></use></svg>
                        <span class="qld__footer__social__label">Twitter</span>
                    </a>
                </li>
            </ul>
        </nav>
    </div>  
  `;r||(t="");let i="";d&&(i=`
    <a class="qld__footer__logo" href="https://www.qld.gov.au/">
        <img class="qld__footer__logo-image" alt="Queensland Government Coat of Arms" src="/images/${e}.svg">
    </a>`);const q=`
    <div class="col-xs-12 qld__footer__column">
        <div>  
            <h3 class="qld__footer__heading">
                Acknowledgement of Country
            </h3>
            <p class="qld__footer__acknowledgements">
                Queensland Government acknowledges the Traditional Owners of the land and pays respect to Elders past, present and future.
            </p>
            ${i}
            <h3 class="sr-only">Copyright statement</h3>
            <p class="qld__footer__copyrightMessage">
                © The State of Queensland 2017-2025 (${l.organisationName})
            </p>
            <a class="qld__footer__clickable__link qld__footer__copyright-link" href="https://www.qld.gov.au/" rel="external">Queensland Government</a>         
        </div>
    </div>   
  `,w=[g,h,v,u,t,q,`
        </div>

    </div>
  `].join("");return o.innerHTML=w,o};export{x as c};
