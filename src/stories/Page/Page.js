import { createHeader } from '../Header/Header';
import { createNavigation } from '../Navigation/Navigation';
import { createFooter } from '../Footer/Footer';

export const createPage = ({data}) => {
  const main = document.createElement('main');
  let header = null;
  let footer = null;

  const createNavigationElement = () => {
    return createNavigation({data}).outerHTML;
  };

  const createHeaderElement = () => {
    return createHeader({data}).outerHTML;
  };

  const createFooterElement = () => {
    return createFooter({data}).outerHTML;
  };

  header = createHeaderElement();
  navigation = createNavigationElement();
  footer = createFooterElement();

  const mainContent = `
<main class="main">
  <div class="qld__body">
    <div class="container-fluid" id="content">
      <section class="qld__page_title">
        <h1>Home</h1>
      </section>
      
      <p>The Citytrain Response Unit was established by the Queensland Government on 8 February 2017 in response to the Queensland Rail Train Crewing Practices Commission of Inquiry (Strachan Inquiry) <a href="https://www.strachaninquiry.qld.gov.au/">Final Report</a> delivered on 31 January 2017.</p>
      <p>The Citytrain Response Unit monitored, independently audited and reported on the implementation of the 36 recommendations contained in the Strachan Inquiry Final Report. The Citytrain Response Unit also led reviews of the governance, legislative framework and structure of passenger rail service delivery in Queensland.</p>
      <p>Jacqui Walters was appointed as Chair of the Citytrain Response Unit and reported directly to the Responsible Ministers for Queensland Rail.</p>
      <p>The Citytrain Response Unit regularly published&nbsp;<a href="/reports">public reports</a>&nbsp;on the progress being made to implement the 36 recommendations of the Strachan Inquiry.</p>
      <p>The Citytrain Response Unit completed its function as at December 2020.</p>
    </div>
  </div>
  <div class="qld__body">
    <div class="container-fluid">
      <p><strong style="padding-right: 12px">Last updated:</strong> 3 July 2025</p>
    </div>
  </div>
</main>
`;

  const pageContents = [header, navigation, mainContent, footer];
  const pageContentRender = pageContents.join('');
  main.innerHTML = pageContentRender;

  return main;
};
