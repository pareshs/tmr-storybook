(function() {
    /* 
        Break Points
        ------------------------------ 
        --QLD-media-sm: 400px;
        --QLD-media-md: 699px;
        --QLD-media-lg: 992px;
        --QLD-media-xl: 1312px;
        --QLD-media-xxl: 1599px;
    */
    let TMR_DS = {
        init: function () {
            this.cacheDom();
            this.activateIsNotDesktop();
        },
        cacheDom: function () {
            //Body
            this.mainNav_ScrollUnlocked = document.querySelector(".qld__main-nav__scroll--unlocked"),
            //Main Nav
            this.mainNav_ToggleOpen = document.querySelector(".qld__main-nav__toggle--open"),
            this.mainNav_ToggleClose = document.querySelector(".qld__main-nav__toggle--close"),
            this.mainNav_MenuInner = document.querySelector('.qld__main-nav__menu-inner');
        },
        /* QDGS Bug Fixes START */
        mainNav_ToggleFocus: function () {
            /* PBI 79970, PBI 79987 */
            this.mainNav_ToggleClose.addEventListener("click", () => {                 
                setTimeout(() => {
                    this.mainNav_ToggleOpen.focus();
                }, 300);
            });
            this.mainNav_ToggleOpen.addEventListener("click", () => {
                this.mainNav_ToggleClose.focus();
            });
        },
        mainNav_HandleBackgroundClick: function () {
            /* PBI 79972 - see discussion/comment section */ 
            this.mainNav_MenuInner.addEventListener('click', () => {
                setTimeout(() => {
                    $('.qld__main-nav__menu-sub.qld__accordion--closed').parent().find('.qld__main-nav__item-link').removeClass('qld__main-nav__item-link--open').addClass('qld__main-nav__item-link--closed');
                }, 300);
            });
        },
        mainNav_ItemToggleIconStatus: function () {    
            /* PBI 79972 */    
            document.body.addEventListener('click', () => {
                if($('body').hasClass('qld__main-nav__scroll--unlocked')){
                    setTimeout(() => {
                        $('.qld__main-nav__menu-sub.qld__accordion--open').parent().find('.qld__main-nav__item-toggle').removeClass('qld__accordion--closed').addClass('qld__accordion--open');
                    }, 300);
                }
            });
        },
        /* QDGS Bug Fixes END */
        /* ------------------ */
        /* Custom Code START */
        linkDecorator: function () {
            // Link Decorator Code
            document.querySelectorAll('#content a').forEach(function(link) {
                var href = link.getAttribute('href');

                if (!link.querySelector('img') && !Array.from(link.parentElement.childNodes).some(function(node) {
                    return node.nodeType === 3 && /\(\w+, \d+(\.\d+)? \w{1,3}\)/.test(node.textContent.trim());
                })) {
                    var sizeMatch = href && href.match(/[?&]size=(\d+)/);
                    var extensionMatch = href && href.match(/[?&]extension=([a-z0-9]+)/i);

                    if (sizeMatch && extensionMatch) {
                        var size = parseInt(sizeMatch[1], 10);
                        var extension = extensionMatch[1];
                        var units = ['B', 'KB', 'MB', 'GB', 'TB'];
                        var unitIndex = 0;

                        while (size >= 1000 && unitIndex < units.length - 1) {
                            size /= 1000;
                            unitIndex++;
                        }

                        var displaySize;
                        if (unitIndex === 1) {
                            displaySize = Math.round(size);
                        } else if (unitIndex === 0) {
                            displaySize = size.toString();
                        } else {
                            displaySize = size.toFixed(1).replace(/[.]0$/, '');
                        }

                        if (link.textContent.trim() && !link.querySelector('img')) {
                            var metadataSpan = document.createElement('span');
                            metadataSpan.className = 'file-metadata';
                            metadataSpan.textContent = ' (' + extension.toUpperCase() + ', ' + displaySize + units[unitIndex] + ')';
                            link.appendChild(metadataSpan);
                        }
                    }
                }
            });
        },
        activateIsNotDesktop: function () {
            // isMobile: True && isTablet: True
            if (window.matchMedia("(max-width: 991.99px)").matches) {
                // QDGS Bug Fixes START
                this.mainNav_ToggleFocus();
                this.mainNav_ItemToggleIconStatus();
                this.mainNav_HandleBackgroundClick();
                // QDGS Bug Fixes END

                // Custom START
            }

            // Custom START
            this.linkDecorator();
        },
    };
    
    window.addEventListener('DOMContentLoaded', function () {
        TMR_DS.init();
    });

})();