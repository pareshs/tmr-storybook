export const createNavigation = ({ data }) => {
  const navigation = document.createElement('nav');
  navigation.className = 'qld__main-nav qld__main-nav--mega';
  navigation.id ='mainmenu';
  navigation.label = 'main';

  const navigationContent = `
    <div class="container-fluid">
        <!-- Main navigation content wrapper -->
        <div class="qld__main-nav__content" id="main-nav">
            <!-- Navigation menu wrapper -->
            <div class="qld__main-nav__menu qld__main-nav__menu--dark">
                <!-- Inner navigation menu wrapper -->
                <div class="qld__main-nav__menu-inner">
                    <!-- Focus trap for accessibility purposes (keyboard navigation) -->
                    <div class="qld__main-nav__focus-trap-top"></div>
                    <!-- Navigation header which contains menu title and close button -->
                    <div class="qld__main-nav__header">
                        <h6 class="qld__main-nav__menu-heading">Menu</h6>
                        <!-- Close button for the menu -->
                        <button aria-controls="main-nav" class="qld__main-nav__toggle qld__main-nav__toggle--close">
                            <!-- SVG icon for the close button -->
                            <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                                 class="qld__icon qld__icon--md">
                                <use href="../src/images/icons.svg#close"></use>
                            </svg>
                            <span class="qld__main-nav__toggle-text">Close</span>
                        </button>
                    </div>
                    <!-- Navigation link list -->
                    <ul class="qld__link-list qld__link-list--flex">
                            <li class="qld__main-nav__item active">
                                <div class="qld__main-nav__item-title">
                                        <a class="qld__main-nav__item-home qld__main-nav__item-link" href="/">
                                            <!-- SVG icon for the link -->
                                            <span class="qld__main-nav__item-icon">
                                                <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg"
                                                     class="qld__icon qld__icon--md">
                                                    <use href="../src/images/icons.svg#home"></use>
                                                </svg>

                                            </span>
                                            <span class="qld__main-nav__item-text" data-name="">Home</span>
                                        </a>
                                </div>
                            </li>
                            <li class="qld__main-nav__item ">
                                <div class="qld__main-nav__item-title">
                                        <a class="qld__main-nav__item-link" href="/chair">
                                            Chair
                                        </a>
                                </div>
                            </li>
                            <li class="qld__main-nav__item ">
                                <div class="qld__main-nav__item-title">
                                        <a class="qld__main-nav__item-link" href="/reports">
                                            Reports
                                        </a>
                                </div>
                            </li>
                    </ul>
                    <div class="qld__mega-nav_mobile-filler-60"></div>
                        <div class="qld__main-nav__cta-wrapper">
                            <ul class="qld__link-list qld__link-list--flex">
                            </ul>
                    </div>


                    <!-- Focus trap for accessibility purposes (keyboard navigation) -->
                    <div class="qld__main-nav__focus-trap-bottom"></div>
                </div>
            </div>
            <!-- Overlay element, which usually displayed when menu is open -->
            <div class="qld__main-nav__overlay" aria-controls="main-nav"></div>
        </div>
    </div>
  `;

  navigation.innerHTML = navigationContent;

  return navigation;
};
