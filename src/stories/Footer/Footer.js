export const createFooter = ({ }) => {
  const footer = document.createElement('footer');
  footer.className = 'qld__footer qld__footer--dark';
  footer.role = 'contentinfo';
  
  const wrapper = document.createElement('div');
  wrapper.className = '';

  const footerContent = `
    
    <!-- Section 1: Site title -->
    <div class="container-fluid">
        <div class="row qld__footer__row">
            <div class="col-xs-12 qld__footer__column">
                <div class="qld__footer__title">
                    <h2 class="qld__footer__heading">Site Title</h2>
                </div>
            </div>
        </div>
    </div>

     <!-- Footer content container -->
    <div class="container-fluid">
        <div class="row">

            <!-- Section 2: Contact us and Site wide CTAs -->
            <div class="col-xs-12 col-lg-3 qld__footer__column">
                <div class="container-fluid">
                    <div class="row qld__footer-contact">
                        <div class="col-xs-12 col-sm-8 col-lg-12">
                            <h3 class="qld__footer__heading">Get in touch</h3> 
                            <p class="qld__footer__cta-content">
                                Get in touch for enquiries, feedback, complaints and compliments.
                            </p>
                            <p class="qld__footer__cta-content">
                               <a href="tel:1234567"><svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="https://www.designsystem.qld.gov.au/?a=167672:dist/mysource_files/img/QLD-icons.svg#phone"></use></svg>Phone: 123 4567
                                </a>
                            </p>
                           <p class="qld__footer__cta-content">
                                <a href="mailto:email@qld.gov.au"><svg class="qld__icon qld__icon--lead qld__icon--xs" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="https://www.designsystem.qld.gov.au/?a=167672:dist/mysource_files/img/QLD-icons.svg#Email"></use></svg>Email: email@qld.gov.au</a>
                            </p>
                        </div>
                        <div class="col-xs-12 col-sm-4 col-lg-12">
                                <a href="#" class="qld__btn qld__btn--secondary">Contact us</a>
                        </div>
                    </div>
                </div>
            </div>
             <!-- Section 3: Section links (Custom secondary nav items) -->
            <div class="col-xs-12 col-lg-2 qld__footer__column">
                <nav class="qld__footer__navigation" aria-label="footer navigation">
                <h3 class="sr-only">Custom link heading</h3>
                    <ul class="qld__link-list">
                        <li>
                            <a class="qld__footer__clickable__link" href="#">Custome link 1</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">Custome link 2</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">Custome link 3</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">Custome link 4</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">Custome link 5</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">Custome link 6</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">Custome link 7</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- Section 4: Mandatory QLD Government Links -->
            <div class="col-xs-12 col-lg-2 qld__footer__column">
                <nav class="qld__footer__navigation" aria-label="Queensland Government links">
                <h3 class="sr-only">Queensland Government links</h3>
                    <ul class="qld__link-list">
                        <li>
                            <a class="qld__footer__clickable__link" href="https://www.health.qld.gov.au/global/copyright-statement">Copyright</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="https://www.health.qld.gov.au/global/disclaimer">Disclaimer</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="https://www.health.qld.gov.au/global/privacy">Privacy</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="https://www.health.qld.gov.au/system-governance/contact-us/access-info">Right to information</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="https://www.qld.gov.au/help/accessibility/">Accessibility</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="https://smartjobs.qld.gov.au/jobtools/jncustomsearch.jobsearch?in_organid=14904">Jobs</a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="https://www.qld.gov.au/languages/">Other languages</a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- Section 5: Social media and engagment -->
            <div class="col-xs-12 col-lg-2 qld__footer__column">
                <nav class="qld__footer__social" aria-label="social media links">
                    <h3 class="qld__footer__heading">Follow us</h3>
                    <ul class="qld__link-list">
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                    <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="https://www.designsystem.qld.gov.au/?a=167672:dist/mysource_files/img/QLD-icons.svg#Facebook"></use></svg>
                                <span class="qld__footer__social__label">Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                    <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="https://www.designsystem.qld.gov.au/?a=167672:dist/mysource_files/img/QLD-icons.svg#Instagram"></use></svg>
                                <span class="qld__footer__social__label">Instagram</span>
                            </a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                    <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="https://www.designsystem.qld.gov.au/?a=167672:dist/mysource_files/img/QLD-icons.svg#LinkedIn"></use></svg>
                                <span class="qld__footer__social__label">LinkedIn</span>
                            </a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                    <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="https://www.designsystem.qld.gov.au/?a=167672:dist/mysource_files/img/QLD-icons.svg#YouTube"></use></svg>
                                <span class="qld__footer__social__label">Youtube</span>
                            </a>
                        </li>
                        <li>
                            <a class="qld__footer__clickable__link" href="#">
                                    <svg class="qld__icon qld__icon--md" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><use href="https://www.designsystem.qld.gov.au/?a=167672:dist/mysource_files/img/QLD-icons.svg#X"></use></svg>
                                <span class="qld__footer__social__label">Twitter</span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <!-- Section 6: Aknowlegement, Qld Government Coat of Arms and Copyright information -->
            <div class="col-xs-12 qld__footer__column">
                <div>                  
                    <h3 class="qld__footer__heading">
                        Acknowledgement of Country
                    </h3>
                    <p class="qld__footer__acknowledgements">
                        Queensland Government acknowledges the Traditional Owners of the land and pays respect to Elders past, present and future.
                    </p>      
                    <a class="qld__footer__logo" href="https://www.qld.gov.au/">
                        <img class="qld__footer__logo-image" alt="Queensland Government Coat of Arms" src="./?a=160255">                    
                    </a>
                    <h3 class="sr-only">Copyright statement</h3>
                    <p class="qld__footer__copyrightMessage">
                        © The State of Queensland 1995-2024 (Organisation) Queensland Government
                    </p>
                    <a class="qld__footer__clickable__link qld__footer__copyright-link" href="https://www.qld.gov.au/" rel="external">Queensland Government</a>                                            
                </div>
            </div> 
        </div>

    </div>
`;

  wrapper.insertAdjacentHTML('afterbegin', footerContent);

  footer.appendChild(wrapper);

  return footer;
};
