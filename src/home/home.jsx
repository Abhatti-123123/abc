import { useState } from 'react';

const Home = () => {


  const [email, setEmail] = useState("");
  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  {/* This site is optimized with the Yoast SEO plugin v18.1 - https://yoast.com/wordpress/plugins/seo/ */}
  <title>UnicusOne - World's first Multi Chain WaaS</title>
  <meta name="description" content="Worlds first Multi Chain WaaS (Web3 as a Service) Platform for Metaverse, Gaming, and NFT Economy. Unlocking The Potential Of Web 3.0 Economy" />
  <link rel="canonical" href="https://unicus.one/" />
  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="UnicusOne - World's first Multi Chain WaaS" />
  <meta property="og:description" content="Worlds first Multi Chain WaaS (Web3 as a Service) Platform for Metaverse, Gaming, and NFT Economy. Unlocking The Potential Of Web 3.0 Economy" />
  <meta property="og:url" content="https://unicus.one/" />
  <meta property="article:modified_time" content="2022-02-17T12:33:45+00:00" />
  <meta property="og:image" content="https://unicus.one/wp-content/uploads/2022/02/Unicus-logo.png" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:label1" content="Est. reading time" />
  <meta name="twitter:data1" content="10 minutes" />
  {/* / Yoast SEO plugin. */}
  <link rel="dns-prefetch" href="//s.w.org" />
  <link rel="alternate" type="application/rss+xml" title=" » Feed" href="https://unicus.one/feed/" />
  <link rel="alternate" type="application/rss+xml" title=" » Comments Feed" href="https://unicus.one/comments/feed/" />
  <style dangerouslySetInnerHTML={{__html: "\nimg.wp-smiley,\nimg.emoji {\n\tdisplay: inline !important;\n\tborder: none !important;\n\tbox-shadow: none !important;\n\theight: 1em !important;\n\twidth: 1em !important;\n\tmargin: 0 0.07em !important;\n\tvertical-align: -0.1em !important;\n\tbackground: none !important;\n\tpadding: 0 !important;\n}\n" }} />
  <link rel="stylesheet" id="jkit-elements-main-css" href="https://unicus.one/wp-content/plugins/jeg-elementor-kit/assets/css/elements/main.css?ver=2.3.0" media="all" />
  <link rel="stylesheet" id="wp-block-library-css" href="https://unicus.one/wp-includes/css/dist/block-library/style.min.css?ver=5.9" media="all" />
  <style id="global-styles-inline-css" dangerouslySetInnerHTML={{__html: "\nbody{--wp--preset--color--black: #000000;--wp--preset--color--cyan-bluish-gray: #abb8c3;--wp--preset--color--white: #ffffff;--wp--preset--color--pale-pink: #f78da7;--wp--preset--color--vivid-red: #cf2e2e;--wp--preset--color--luminous-vivid-orange: #ff6900;--wp--preset--color--luminous-vivid-amber: #fcb900;--wp--preset--color--light-green-cyan: #7bdcb5;--wp--preset--color--vivid-green-cyan: #00d084;--wp--preset--color--pale-cyan-blue: #8ed1fc;--wp--preset--color--vivid-cyan-blue: #0693e3;--wp--preset--color--vivid-purple: #9b51e0;--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%);--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%);--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%);--wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%);--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%);--wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%);--wp--preset--gradient--blush-light-purple: linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%);--wp--preset--gradient--blush-bordeaux: linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%);--wp--preset--gradient--luminous-dusk: linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%);--wp--preset--gradient--pale-ocean: linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%);--wp--preset--gradient--electric-grass: linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%);--wp--preset--gradient--midnight: linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%);--wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');--wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');--wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');--wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');--wp--preset--duotone--midnight: url('#wp-duotone-midnight');--wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');--wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');--wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');--wp--preset--font-size--small: 13px;--wp--preset--font-size--medium: 20px;--wp--preset--font-size--large: 36px;--wp--preset--font-size--x-large: 42px;}.has-black-color{color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-color{color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-color{color: var(--wp--preset--color--white) !important;}.has-pale-pink-color{color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-color{color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-color{color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-color{color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-color{color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-color{color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-color{color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-color{color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-color{color: var(--wp--preset--color--vivid-purple) !important;}.has-black-background-color{background-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-background-color{background-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-background-color{background-color: var(--wp--preset--color--white) !important;}.has-pale-pink-background-color{background-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-background-color{background-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-background-color{background-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-background-color{background-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-background-color{background-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-background-color{background-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-background-color{background-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-background-color{background-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-background-color{background-color: var(--wp--preset--color--vivid-purple) !important;}.has-black-border-color{border-color: var(--wp--preset--color--black) !important;}.has-cyan-bluish-gray-border-color{border-color: var(--wp--preset--color--cyan-bluish-gray) !important;}.has-white-border-color{border-color: var(--wp--preset--color--white) !important;}.has-pale-pink-border-color{border-color: var(--wp--preset--color--pale-pink) !important;}.has-vivid-red-border-color{border-color: var(--wp--preset--color--vivid-red) !important;}.has-luminous-vivid-orange-border-color{border-color: var(--wp--preset--color--luminous-vivid-orange) !important;}.has-luminous-vivid-amber-border-color{border-color: var(--wp--preset--color--luminous-vivid-amber) !important;}.has-light-green-cyan-border-color{border-color: var(--wp--preset--color--light-green-cyan) !important;}.has-vivid-green-cyan-border-color{border-color: var(--wp--preset--color--vivid-green-cyan) !important;}.has-pale-cyan-blue-border-color{border-color: var(--wp--preset--color--pale-cyan-blue) !important;}.has-vivid-cyan-blue-border-color{border-color: var(--wp--preset--color--vivid-cyan-blue) !important;}.has-vivid-purple-border-color{border-color: var(--wp--preset--color--vivid-purple) !important;}.has-vivid-cyan-blue-to-vivid-purple-gradient-background{background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;}.has-light-green-cyan-to-vivid-green-cyan-gradient-background{background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;}.has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;}.has-luminous-vivid-orange-to-vivid-red-gradient-background{background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;}.has-very-light-gray-to-cyan-bluish-gray-gradient-background{background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;}.has-cool-to-warm-spectrum-gradient-background{background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;}.has-blush-light-purple-gradient-background{background: var(--wp--preset--gradient--blush-light-purple) !important;}.has-blush-bordeaux-gradient-background{background: var(--wp--preset--gradient--blush-bordeaux) !important;}.has-luminous-dusk-gradient-background{background: var(--wp--preset--gradient--luminous-dusk) !important;}.has-pale-ocean-gradient-background{background: var(--wp--preset--gradient--pale-ocean) !important;}.has-electric-grass-gradient-background{background: var(--wp--preset--gradient--electric-grass) !important;}.has-midnight-gradient-background{background: var(--wp--preset--gradient--midnight) !important;}.has-small-font-size{font-size: var(--wp--preset--font-size--small) !important;}.has-medium-font-size{font-size: var(--wp--preset--font-size--medium) !important;}.has-large-font-size{font-size: var(--wp--preset--font-size--large) !important;}.has-x-large-font-size{font-size: var(--wp--preset--font-size--x-large) !important;}\n" }} />
  <link rel="stylesheet" id="twentytwenty-style-css" href="https://unicus.one/wp-content/themes/twentytwenty/style.css?ver=1.9" media="all" />
  <style id="twentytwenty-style-inline-css" dangerouslySetInnerHTML={{__html: "\n.color-accent,.color-accent-hover:hover,.color-accent-hover:focus,:root .has-accent-color,.has-drop-cap:not(:focus):first-letter,.wp-block-button.is-style-outline,a { color: #cd2653; }blockquote,.border-color-accent,.border-color-accent-hover:hover,.border-color-accent-hover:focus { border-color: #cd2653; }button,.button,.faux-button,.wp-block-button__link,.wp-block-file .wp-block-file__button,input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"],.bg-accent,.bg-accent-hover:hover,.bg-accent-hover:focus,:root .has-accent-background-color,.comment-reply-link { background-color: #cd2653; }.fill-children-accent,.fill-children-accent * { fill: #cd2653; }body,.entry-title a,:root .has-primary-color { color: #000000; }:root .has-primary-background-color { background-color: #000000; }cite,figcaption,.wp-caption-text,.post-meta,.entry-content .wp-block-archives li,.entry-content .wp-block-categories li,.entry-content .wp-block-latest-posts li,.wp-block-latest-comments__comment-date,.wp-block-latest-posts__post-date,.wp-block-embed figcaption,.wp-block-image figcaption,.wp-block-pullquote cite,.comment-metadata,.comment-respond .comment-notes,.comment-respond .logged-in-as,.pagination .dots,.entry-content hr:not(.has-background),hr.styled-separator,:root .has-secondary-color { color: #6d6d6d; }:root .has-secondary-background-color { background-color: #6d6d6d; }pre,fieldset,input,textarea,table,table *,hr { border-color: #dcd7ca; }caption,code,code,kbd,samp,.wp-block-table.is-style-stripes tbody tr:nth-child(odd),:root .has-subtle-background-background-color { background-color: #dcd7ca; }.wp-block-table.is-style-stripes { border-bottom-color: #dcd7ca; }.wp-block-latest-posts.is-grid li { border-top-color: #dcd7ca; }:root .has-subtle-background-color { color: #dcd7ca; }body:not(.overlay-header) .primary-menu > li > a,body:not(.overlay-header) .primary-menu > li > .icon,.modal-menu a,.footer-menu a, .footer-widgets a,#site-footer .wp-block-button.is-style-outline,.wp-block-pullquote:before,.singular:not(.overlay-header) .entry-header a,.archive-header a,.header-footer-group .color-accent,.header-footer-group .color-accent-hover:hover { color: #cd2653; }.social-icons a,#site-footer button:not(.toggle),#site-footer .button,#site-footer .faux-button,#site-footer .wp-block-button__link,#site-footer .wp-block-file__button,#site-footer input[type=\"button\"],#site-footer input[type=\"reset\"],#site-footer input[type=\"submit\"] { background-color: #cd2653; }.header-footer-group,body:not(.overlay-header) #site-header .toggle,.menu-modal .toggle { color: #000000; }body:not(.overlay-header) .primary-menu ul { background-color: #000000; }body:not(.overlay-header) .primary-menu > li > ul:after { border-bottom-color: #000000; }body:not(.overlay-header) .primary-menu ul ul:after { border-left-color: #000000; }.site-description,body:not(.overlay-header) .toggle-inner .toggle-text,.widget .post-date,.widget .rss-date,.widget_archive li,.widget_categories li,.widget cite,.widget_pages li,.widget_meta li,.widget_nav_menu li,.powered-by-wordpress,.to-the-top,.singular .entry-header .post-meta,.singular:not(.overlay-header) .entry-header .post-meta a { color: #6d6d6d; }.header-footer-group pre,.header-footer-group fieldset,.header-footer-group input,.header-footer-group textarea,.header-footer-group table,.header-footer-group table *,.footer-nav-widgets-wrapper,#site-footer,.menu-modal nav *,.footer-widgets-outer-wrapper,.footer-top { border-color: #dcd7ca; }.header-footer-group table caption,body:not(.overlay-header) .header-inner .toggle-wrapper::before { background-color: #dcd7ca; }\n" }} />
  <link rel="stylesheet" id="twentytwenty-print-style-css" href="https://unicus.one/wp-content/themes/twentytwenty/print.css?ver=1.9" media="print" />
  <link rel="stylesheet" id="elementor-icons-css" href="https://unicus.one/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css?ver=5.14.0" media="all" />
  <link rel="stylesheet" id="elementor-frontend-css" href="https://unicus.one/wp-content/plugins/elementor/assets/css/frontend-lite.min.css?ver=3.5.5" media="all" />
  <link rel="stylesheet" id="elementor-post-1547-css" href="https://unicus.one/wp-content/uploads/elementor/css/post-1547.css?ver=1644576733" media="all" />
  <link rel="stylesheet" id="elementor-post-79-css" href="https://unicus.one/wp-content/uploads/elementor/css/post-79.css?ver=1645032166" media="all" />
  <link rel="stylesheet" id="font-awesome-5-all-css" href="https://unicus.one/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css?ver=5.0.7" media="all" />
  <link rel="stylesheet" id="font-awesome-4-shim-css" href="https://unicus.one/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css?ver=5.0.7" media="all" />
  <link rel="stylesheet" id="google-fonts-1-css" href="https://fonts.googleapis.com/css?family=Poppins%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic%7CMontserrat%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&display=auto&ver=5.9" media="all" />
  <link rel="stylesheet" id="elementor-icons-jkiticon-css" href="https://unicus.one/wp-content/plugins/jeg-elementor-kit/assets/fonts/jkiticon/jkiticon.css?ver=2.3.0" media="all" />
  <link rel="stylesheet" id="elementor-icons-shared-0-css" href="https://unicus.one/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css?ver=5.15.3" media="all" />
  <link rel="stylesheet" id="elementor-icons-fa-solid-css" href="https://unicus.one/wp-content/plugins/elementor/assets/lib/font-awesome/css/solid.min.css?ver=5.15.3" media="all" />
  <link rel="stylesheet" id="elementor-icons-fa-brands-css" href="https://unicus.one/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css?ver=5.15.3" media="all" />
  <link rel="https://api.w.org/" href="https://unicus.one/wp-json/" /><link rel="alternate" type="application/json" href="https://unicus.one/wp-json/wp/v2/pages/79" /><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://unicus.one/xmlrpc.php?rsd" />
  <link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://unicus.one/wp-includes/wlwmanifest.xml" />
  <meta name="generator" content="WordPress 5.9" />
  <link rel="shortlink" href="https://unicus.one/" />
  <link rel="alternate" type="application/json+oembed" href="https://unicus.one/wp-json/oembed/1.0/embed?url=https%3A%2F%2Funicus.one%2F" />
  <link rel="alternate" type="text/xml+oembed" href="https://unicus.one/wp-json/oembed/1.0/embed?url=https%3A%2F%2Funicus.one%2F&format=xml" />
  <link rel="icon" href="https://unicus.one/wp-content/uploads/2022/02/favicon.png" sizes="32x32" />
  <link rel="icon" href="https://unicus.one/wp-content/uploads/2022/02/favicon.png" sizes="192x192" />
  <link rel="apple-touch-icon" href="https://unicus.one/wp-content/uploads/2022/02/favicon.png" />
  <meta name="msapplication-TileImage" content="https://unicus.one/wp-content/uploads/2022/02/favicon.png" />
  <style id="jeg_dynamic_css" type="text/css" data-type="jeg_custom-css" dangerouslySetInnerHTML={{__html: "" }} />		<style id="wp-custom-css" dangerouslySetInnerHTML={{__html: "\n\t\t\t.header-footer-group{\n\tdisplay:none\n}\t\t" }} />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <a className="skip-link screen-reader-text" href="#site-content">Skip to the content</a>		<div data-elementor-type="wp-page" data-elementor-id={79} className="elementor elementor-79" data-elementor-settings="[]">
    <div className="elementor-section-wrap">
      <section className="elementor-section elementor-top-section elementor-element elementor-element-77f4588e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="77f4588e" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-6d2c65f6" data-id="6d2c65f6" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-4abf6539 elementor-widget elementor-widget-image" data-id="4abf6539" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.5.5 - 03-02-2022 */\n.elementor-widget-image{text-align:center}.elementor-widget-image a{display:inline-block}.elementor-widget-image a img[src$=\".svg\"]{width:48px}.elementor-widget-image img{vertical-align:middle;display:inline-block}" }} />													<a href="/">
                    <img width={240} height={86} src="https://unicus.one/wp-content/uploads/2022/02/Unicus-logo.png" className="attachment-full size-full" alt="" loading="lazy" />								</a>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-2ab10513" data-id="2ab10513" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-54172928 elementor-widget-tablet__width-auto elementor-widget elementor-widget-jkit_nav_menu" data-id={54172928} data-element_type="widget" data-widget_type="jkit_nav_menu.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-nav-menu break-point-tablet submenu-click-title jeg_module_79__620f4c4676232" data-item-indicator="<i aria-hidden=&quot;true&quot; class=&quot;jki jki-angle-down-solid&quot;></i>"><button className="jkit-hamburger-menu"><i aria-hidden="true" className="jki jki-bars-solid" /></button>
                    <div className="jkit-menu-wrapper"><div className="jkit-menu-container"><ul id="menu-1" className="jkit-menu"><li id="menu-item-1503" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1503"><a href="https://unicus.one/about/">About</a></li>
                          <li id="menu-item-1923" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1923"><a href="https://unicus.one/for-creator/">For Creators</a></li>
                          <li id="menu-item-1506" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1506"><a href="https://unicus.one/token/">Token</a></li>
                          <li id="menu-item-1884" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1884"><a href="https://unicus.one/blog/">Blog</a></li>
                        </ul></div>
                      <div className="jkit-nav-identity-panel">
                        <div className="jkit-nav-site-title"><a href="https://unicus.one" className="jkit-nav-logo"><img src="https://unicus.one/wp-content/uploads/2022/02/Unicus-logo.png" /></a></div>
                        <button className="jkit-close-menu"><i aria-hidden="true" className="jki jki-times-solid" /></button>
                      </div>
                    </div>
                    <div className="jkit-overlay" /></div>		</div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-25 elementor-top-column elementor-element elementor-element-76219d84" data-id="76219d84" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-c33f63f elementor-widget__width-auto elementor-widget elementor-widget-jkit_button" data-id="c33f63f" data-element_type="widget" data-widget_type="jkit_button.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-button  icon-position-after jeg_module_79_1_620f4c46799b8"><a href="https://marketplace.unicus.one/market-place" className="jkit-button-wrapper">Enter App</a></div>		</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-73a68d21 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="73a68d21" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-7cde9b8d" data-id="7cde9b8d" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-3b6d5666 elementor-widget elementor-widget-jkit_animated_text" data-id="3b6d5666" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_2_620f4c467e35f" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Unlocking The Potential Of Web 3.0 Economy</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-6e743b97 elementor-widget elementor-widget-heading" data-id="6e743b97" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.5.5 - 03-02-2022 */\n.elementor-heading-title{padding:0;margin:0;line-height:1}.elementor-widget-heading .elementor-heading-title[class*=elementor-size-]>a{color:inherit;font-size:inherit;line-height:inherit}.elementor-widget-heading .elementor-heading-title.elementor-size-small{font-size:15px}.elementor-widget-heading .elementor-heading-title.elementor-size-medium{font-size:19px}.elementor-widget-heading .elementor-heading-title.elementor-size-large{font-size:29px}.elementor-widget-heading .elementor-heading-title.elementor-size-xl{font-size:39px}.elementor-widget-heading .elementor-heading-title.elementor-size-xxl{font-size:59px}" }} /><h2 className="elementor-heading-title elementor-size-default">Worlds first Multi Chain WaaS (Web3 as a Service) Platform for Metaverse, Gaming, and NFT Economy</h2>		</div>
              </div>
              <div className="elementor-element elementor-element-3ee8155b elementor-widget elementor-widget-text-editor" data-id="3ee8155b" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.5.5 - 03-02-2022 */\n.elementor-widget-text-editor.elementor-drop-cap-view-stacked .elementor-drop-cap{background-color:#818a91;color:#fff}.elementor-widget-text-editor.elementor-drop-cap-view-framed .elementor-drop-cap{color:#818a91;border:3px solid;background-color:transparent}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap{margin-top:8px}.elementor-widget-text-editor:not(.elementor-drop-cap-view-default) .elementor-drop-cap-letter{width:1em;height:1em}.elementor-widget-text-editor .elementor-drop-cap{float:left;text-align:center;line-height:1;font-size:50px}.elementor-widget-text-editor .elementor-drop-cap-letter{display:inline-block}" }} />				<p>A 360 degree ‘mild code’ solution for Gaming, Metaverse or NFT projects to integrate all their Web 3.0 needs in click of few buttons.</p>						</div>
              </div>
              <div className="elementor-element elementor-element-4f0feaf9 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-spacer" data-id="4f0feaf9" data-element_type="widget" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-1f55b6b1" data-id="1f55b6b1" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-3224bfcd elementor-widget elementor-widget-image" data-id="3224bfcd" data-element_type="widget" data-widget_type="image.default">
                <div className="elementor-widget-container">
                  <a href="https://dev.unicus.one/wp-content/uploads/2022/02/unicus-banner.png" data-elementor-open-lightbox="yes" data-elementor-lightbox-title="unicus banner">
                    <img src="https://unicus.one/wp-content/uploads/2022/02/unicus-banner.png" title="unicus banner" alt="unicus banner" />								</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-35685fc elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="35685fc" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-5de035c5" data-id="5de035c5" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-44766dd elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="44766dd" data-element_type="section">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-561c84d" data-id="561c84d" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-831cd52 elementor-widget elementor-widget-image" data-id="831cd52" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={580} height={580} src="https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-1024x1024.png" className="elementor-animation-bob attachment-large size-large" alt="" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-1024x1024.png 1024w, https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-300x300.png 300w, https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-150x150.png 150w, https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-768x768.png 768w, https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-1536x1536.png 1536w, https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-1200x1200.png 1200w, https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo-1980x1980.png 1980w, https://unicus.one/wp-content/uploads/2022/02/polygon-matic-logo.png 2000w" sizes="(max-width: 580px) 100vw, 580px" />															</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-a5ccfae" data-id="a5ccfae" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-d7bef7e elementor-widget elementor-widget-image" data-id="d7bef7e" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={580} height={580} src="https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-1024x1024.png" className="elementor-animation-bob attachment-large size-large" alt="" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-1024x1024.png 1024w, https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-300x300.png 300w, https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-150x150.png 150w, https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-768x768.png 768w, https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-1536x1536.png 1536w, https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-1200x1200.png 1200w, https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo-1980x1980.png 1980w, https://unicus.one/wp-content/uploads/2022/02/binance-coin-bnb-logo.png 2000w" sizes="(max-width: 580px) 100vw, 580px" />															</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-95f263c" data-id="95f263c" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-669dee4 elementor-widget elementor-widget-image" data-id="669dee4" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={580} height={387} src="https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-1024x683.png" className="elementor-animation-bob attachment-large size-large" alt="" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-1024x683.png 1024w, https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-300x200.png 300w, https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-768x512.png 768w, https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-1536x1024.png 1536w, https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-2048x1365.png 2048w, https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-1200x800.png 1200w, https://unicus.one/wp-content/uploads/2022/02/Ethereum-Logo.wine_-1980x1320.png 1980w" sizes="(max-width: 580px) 100vw, 580px" />															</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-4f90cf7" data-id="4f90cf7" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-b36ba53 elementor-widget elementor-widget-image" data-id="b36ba53" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={580} height={580} src="https://unicus.one/wp-content/uploads/2022/02/MetaMask_Fox.svg-1024x1024.png" className="elementor-animation-bob attachment-large size-large" alt="" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/MetaMask_Fox.svg-1024x1024.png 1024w, https://unicus.one/wp-content/uploads/2022/02/MetaMask_Fox.svg-300x300.png 300w, https://unicus.one/wp-content/uploads/2022/02/MetaMask_Fox.svg-150x150.png 150w, https://unicus.one/wp-content/uploads/2022/02/MetaMask_Fox.svg-768x768.png 768w, https://unicus.one/wp-content/uploads/2022/02/MetaMask_Fox.svg.png 1200w" sizes="(max-width: 580px) 100vw, 580px" />															</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-cd870c6" data-id="cd870c6" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-a50dfbb elementor-widget elementor-widget-image" data-id="a50dfbb" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={205} height={207} src="https://unicus.one/wp-content/uploads/2022/02/coinbase.png" className="elementor-animation-bob attachment-large size-large" alt="" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/coinbase.png 205w, https://unicus.one/wp-content/uploads/2022/02/coinbase-150x150.png 150w" sizes="(max-width: 205px) 100vw, 205px" />															</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-16 elementor-inner-column elementor-element elementor-element-c150a75" data-id="c150a75" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-99bc8df elementor-widget elementor-widget-image" data-id="99bc8df" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={170} height={170} src="https://unicus.one/wp-content/uploads/2022/02/com.myetherwallet.mewwallet_1.png" className="elementor-animation-bob attachment-large size-large" alt="" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/com.myetherwallet.mewwallet_1.png 170w, https://unicus.one/wp-content/uploads/2022/02/com.myetherwallet.mewwallet_1-150x150.png 150w" sizes="(max-width: 170px) 100vw, 170px" />															</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-53be131 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="53be131" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-2afe61b" data-id="2afe61b" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-25065ab elementor-widget elementor-widget-jkit_animated_text" data-id="25065ab" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_3_620f4c468b3cf" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Features &amp; Components</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-0eab3a0 elementor-widget elementor-widget-heading" data-id="0eab3a0" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">UnicusOne Web 3.0 Ecosystem</h2>		</div>
              </div>
              <div className="elementor-element elementor-element-fd7e5ba elementor-widget elementor-widget-text-editor" data-id="fd7e5ba" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p><span style={{fontWeight: 400}}>UnicusOne comes with some of the most advanced features for the Web 3.0 Economy</span></p>						</div>
              </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-335c258 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="335c258" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-bfdcc2e" data-id="bfdcc2e" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-99bddc2 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="99bddc2" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_4_620f4c4691549"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-asterisk" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">NFT Marketplace</h3><p className="icon-box-description">A multi-chain NFT Marketplace supporting both ERC 721 and 1155 standards and a variety of asset classes, supporting payments through both credit cards and cryptocurrencies
                                </p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-ecf3429" data-id="ecf3429" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-15ac89a jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="15ac89a" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_5_620f4c46928f6"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-anchor" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Widget Based Solution</h3><p className="icon-box-description">UnicusOne widgets will allow any developer to integrate Web 3.0 utilities to their Web 2.0 application hassle-free, within 15 minutes</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9c7b277" data-id="9c7b277" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-3c32ac7 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="3c32ac7" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_6_620f4c4693e45"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-store" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Whitelabel NFT Storefronts</h3><p className="icon-box-description">An option for partners to Instantly build their own NFT Marketplace instantly using UnicusOne's NFT infrastructure
                                </p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-3e5c51d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3e5c51d" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-b872768" data-id="b872768" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-f8ec18f jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="f8ec18f" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_7_620f4c4695bd6"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-vr-cardboard" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Seamless to Metaverse</h3><p className="icon-box-description">We offer seamless integration with UnicusOne Web 3.0 modules like Generative Art Engine, Whitelisting &amp; Airdrops, NFT Reveal, and Token Swap for Metaverse and Gaming Projects</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-9c67b9b" data-id="9c67b9b" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-2c8a669 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="2c8a669" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_8_620f4c4696f38"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-user-cog" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Partner APIs and SDKs</h3><p className="icon-box-description">Easy to use APIs and SDKs for partners that convert digital asset platforms to NFT marketplaces
                                </p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-f13a5c8" data-id="f13a5c8" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-a7f5ccf jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="a7f5ccf" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_9_620f4c4698259"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-dollar-sign" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Web 3.0 Payment Gateway</h3><p className="icon-box-description">This module of ours can quickly integrate support of Web3.0 wallets for crypto payments to support and Web2.0 eCommerce Platform</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-69e992e elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="69e992e" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-76757d7" data-id="76757d7" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-7cfa52c elementor-widget elementor-widget-jkit_animated_text" data-id="7cfa52c" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_10_620f4c469a534" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">The Venture</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-0f0d860 elementor-widget elementor-widget-heading" data-id="0f0d860" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Solutions Provided By UnicusOne</h2>		</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-5c084ddb elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5c084ddb" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-885716b" data-id="885716b" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-11d8395 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="11d8395" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-b715f6a" data-id="b715f6a" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-fc5a804 elementor-widget elementor-widget-image" data-id="fc5a804" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={580} height={544} src="https://unicus.one/wp-content/uploads/2022/02/Untitled-10-1024x960.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/Untitled-10-1024x960.png 1024w, https://unicus.one/wp-content/uploads/2022/02/Untitled-10-300x281.png 300w, https://unicus.one/wp-content/uploads/2022/02/Untitled-10-768x720.png 768w, https://unicus.one/wp-content/uploads/2022/02/Untitled-10-1536x1440.png 1536w, https://unicus.one/wp-content/uploads/2022/02/Untitled-10-1200x1125.png 1200w, https://unicus.one/wp-content/uploads/2022/02/Untitled-10.png 1600w" sizes="(max-width: 580px) 100vw, 580px" />															</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-560c7fda" data-id="560c7fda" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-6dd35f61 elementor-widget elementor-widget-jkit_animated_text" data-id="6dd35f61" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_11_620f4c469d677" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Partner with us to unlock the true potential of Web 3.0 Economy</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-558656ed elementor-widget elementor-widget-heading" data-id="558656ed" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Set Up “Decentralized, Scalable, Secure, Branded” Web 3.0 Applications with UnicusOne</h2>		</div>
              </div>
              <div className="elementor-element elementor-element-a4a5d95 elementor-widget elementor-widget-text-editor" data-id="a4a5d95" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>If you are a Web 2.0 developer or a project owner, you no longer need to find Blockchain developers to write smart contracts and build APIs for you. UnicusOne is your Go-To platform. We help you transform into a Web 3.0 ready application with our ‘mild code’ solution, in a matter of a few minutes.</p><p>In addition, Our Storefront offering will enable you to create your Custom, Secured, Branded, Decentralized NFT marketplace in a DIY format. You can create, preview, publish, and monetize your NFT collections using the customized templates and also benefit from the smart contract management of our scalable marketplace. Our auction architecture is completely decentralized and multi-threaded thus facilitating the scalability feature to millions of users across the world!</p>						</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-4ae251c elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="4ae251c" data-element_type="section">
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e63427f" data-id="e63427f" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-fd45768 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="fd45768" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0d90ecf" data-id="0d90ecf" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-c08774e jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="c08774e" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_12_620f4c469f7d7"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-store" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Whitelabel NFT Storefronts</h3><p className="icon-box-description">An option for partners to Instantly build their own NFT Marketplace instantly using UnicusOne’s NFT infrastructure
                                </p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-8254c4b" data-id="8254c4b" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-8a16402 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="8a16402" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_13_620f4c46a0bbc"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-anchor" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Widget Based Solution</h3><p className="icon-box-description">UnicusOne widgets will allow any developer to integrate Web 3.0 utilities to their Web 2.0 application hassle-free, within 15 minutes</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-cea9783" data-id="cea9783" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-2b293f7 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="2b293f7" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_14_620f4c46a1dd8"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-user-cog" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Partner APIs and SDKs</h3><p className="icon-box-description">Easy to use APIs and SDKs for partners that convert digital asset platforms to NFT marketplaces
                                </p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-b474bcb elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="b474bcb" data-element_type="widget" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.5.5 - 03-02-2022 */\n.elementor-widget-divider{--divider-border-style:none;--divider-border-width:1px;--divider-color:#2c2c2c;--divider-icon-size:20px;--divider-element-spacing:10px;--divider-pattern-height:24px;--divider-pattern-size:20px;--divider-pattern-url:none;--divider-pattern-repeat:repeat-x}.elementor-widget-divider .elementor-divider{display:-webkit-box;display:-ms-flexbox;display:flex}.elementor-widget-divider .elementor-divider__text{font-size:15px;line-height:1;max-width:95%}.elementor-widget-divider .elementor-divider__element{margin:0 var(--divider-element-spacing);-ms-flex-negative:0;flex-shrink:0}.elementor-widget-divider .elementor-icon{font-size:var(--divider-icon-size)}.elementor-widget-divider .elementor-divider-separator{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0;direction:ltr}.elementor-widget-divider--view-line_icon .elementor-divider-separator,.elementor-widget-divider--view-line_text .elementor-divider-separator{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.elementor-widget-divider--view-line_icon .elementor-divider-separator:after,.elementor-widget-divider--view-line_icon .elementor-divider-separator:before,.elementor-widget-divider--view-line_text .elementor-divider-separator:after,.elementor-widget-divider--view-line_text .elementor-divider-separator:before{display:block;content:\"\";border-bottom:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--element-align-left .elementor-divider .elementor-divider-separator>.elementor-divider__svg:first-of-type{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:100;flex-shrink:100}.elementor-widget-divider--element-align-left .elementor-divider-separator:before{content:none}.elementor-widget-divider--element-align-left .elementor-divider__element{margin-left:0}.elementor-widget-divider--element-align-right .elementor-divider .elementor-divider-separator>.elementor-divider__svg:last-of-type{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:100;flex-shrink:100}.elementor-widget-divider--element-align-right .elementor-divider-separator:after{content:none}.elementor-widget-divider--element-align-right .elementor-divider__element{margin-right:0}.elementor-widget-divider:not(.elementor-widget-divider--view-line_text):not(.elementor-widget-divider--view-line_icon) .elementor-divider-separator{border-top:var(--divider-border-width) var(--divider-border-style) var(--divider-color)}.elementor-widget-divider--separator-type-pattern{--divider-border-style:none}.elementor-widget-divider--separator-type-pattern.elementor-widget-divider--view-line .elementor-divider-separator,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:after,.elementor-widget-divider--separator-type-pattern:not(.elementor-widget-divider--view-line) .elementor-divider-separator:before,.elementor-widget-divider--separator-type-pattern:not([class*=elementor-widget-divider--view]) .elementor-divider-separator{width:100%;min-height:var(--divider-pattern-height);-webkit-mask-size:var(--divider-pattern-size) 100%;mask-size:var(--divider-pattern-size) 100%;-webkit-mask-repeat:var(--divider-pattern-repeat);mask-repeat:var(--divider-pattern-repeat);background-color:var(--divider-color);-webkit-mask-image:var(--divider-pattern-url);mask-image:var(--divider-pattern-url)}.elementor-widget-divider--no-spacing{--divider-pattern-size:auto}.elementor-widget-divider--bg-round{--divider-pattern-repeat:round}.rtl .elementor-widget-divider .elementor-divider__text{direction:rtl}" }} />		<div className="elementor-divider">
                    <span className="elementor-divider-separator">
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-aeb917a elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="aeb917a" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-9f567fa" data-id="9f567fa" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-f470418 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f470418" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-e48e071" data-id="e48e071" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-a1c2476 elementor-widget elementor-widget-spacer" data-id="a1c2476" data-element_type="widget" data-widget_type="spacer.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-spacer">
                            <div className="elementor-spacer-inner" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-b607d3e" data-id="b607d3e" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-aaae4f7 elementor-widget elementor-widget-jkit_animated_text" data-id="aaae4f7" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_15_620f4c46a5cdd" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Mint, auction and trade your valuable creations</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-4c15c2a elementor-widget elementor-widget-heading" data-id="4c15c2a" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Explore One-of-a-Kind, Next Generation NFT Marketplace
                  </h2>		</div>
              </div>
              <div className="elementor-element elementor-element-15b7a3e elementor-widget elementor-widget-text-editor" data-id="15b7a3e" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>An multi-chain marketplace enabling NFT traders to go on a no-bar trading binge, UnicusOne enables you to hook into the full potential of NFTs. A string of sophisticated tools, backed by fully audited contracts, allows you to discover, mint, buy or sell NFTs with alacrity and convenience. You cannot just transfer tokens to other blockchains with ease but also explore the full history of NFTs. In an ecosystem contoured by limitations, UnicusOne brings in complete transparency and seamless functional efficiency.</p>						</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-5100fdb3 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5100fdb3" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-64c3acc7" data-id="64c3acc7" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-05e5d34 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="05e5d34" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c56ad92" data-id="c56ad92" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-4e54ed1 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="4e54ed1" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_16_620f4c46a8712"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-biohazard" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Seamless &amp; Secure</h3><p className="icon-box-description">UnicusOne features fully trustless NFT trading facilitated by smart contracts on each integrated Blockchain. You can safely discover, buy or sell any NFT without worrying about exposing yourself to risk of lost funds
                                </p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-814a441" data-id="814a441" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-40e09d1 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="40e09d1" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_17_620f4c46a9bfc"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-hands-helping" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Dedicated Support</h3><p className="icon-box-description">Out of the world Experience with User-Friendly Platform, Complete Hand-Holding and Dedicated Account Manager, for Handling of Queries, Grievances and Issues</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-32473fe" data-id="32473fe" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-780f801 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="780f801" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_18_620f4c46ab626"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-file-invoice-dollar" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Catering to Fiat Market</h3><p className="icon-box-description">In addition to the crypto payment option, UnicusOne also allows its users to trade NFTs using Fiat Currency, which opens up an entirely new market for the creators to monetize their valuable assets</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-ad08ed7 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="ad08ed7" data-element_type="widget" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator">
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-ee83b26 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="ee83b26" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-35939b1" data-id="35939b1" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-e86bb06 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e86bb06" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;gradient&quot;}">
                <div className="elementor-container elementor-column-gap-default">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-846d8ab" data-id="846d8ab" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-89a8fbc elementor-widget elementor-widget-spacer" data-id="89a8fbc" data-element_type="widget" data-widget_type="spacer.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-spacer">
                            <div className="elementor-spacer-inner" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-673ffed" data-id="673ffed" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-9684a0f elementor-widget elementor-widget-jkit_animated_text" data-id="9684a0f" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_19_620f4c46af0bd" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">360° Web 3.0 Solutions for Metaverse &amp; Gaming Projects</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-c4829e6 elementor-widget elementor-widget-heading" data-id="c4829e6" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Empowering Metaverse &amp; Gaming Economy With Web 3.0 As A Service</h2>		</div>
              </div>
              <div className="elementor-element elementor-element-6adf047 elementor-widget elementor-widget-text-editor" data-id="6adf047" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p>In the 24/7 hustling crypto economy where time is the most important resource to be utilised, UnicusOne brings you full scale WaaS suite for Metaverse and Gaming projects. The bouquet of Web 3.0 as a Service modules can help you seamlessly integrate services like Generative Art, Airdrops &amp; Whitelisting, Reveals, and even Token Swap features. All this plugged in within 1 hour with our ‘mild code’ solution offering.</p>						</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-99a9628 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="99a9628" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-67aef03" data-id="67aef03" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-68efb72 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="68efb72" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-934e993" data-id="934e993" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-22babbb jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="22babbb" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_20_620f4c46b1602"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-paint-brush" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Generative Art Engine</h3><p className="icon-box-description">This module helps you to generate unlimited distinct images with any number of traits. You can generate every distinct image of possible combinations.</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-c33682e" data-id="c33682e" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-534de16 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="534de16" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_21_620f4c46b2c46"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-adjust" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Whitelisting &amp; Reveals</h3><p className="icon-box-description">This readymade module enables you to implement Whitelist and Reveal feature for your project instantly, saving a lot of cost and time involved in custom development</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-5671ad8" data-id="5671ad8" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-d98dcdb jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box" data-id="d98dcdb" data-element_type="widget" data-widget_type="jkit_icon_box.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-icon-box icon-position-top elementor-animation-float jeg_module_79_22_620f4c46b3f5a"><div className="jkit-icon-box-wrapper hover-from-left"><div className="icon-box icon-box-header elementor-animation-float"><div className="icon style-gradient"><i aria-hidden="true" className="fas fa-tablets" /></div></div><div className="icon-box icon-box-body">
                                <h3 className="title">Airdrops &amp; Token Swap</h3><p className="icon-box-description">We offer Air Drop and Token Swap modules as a service which can be easily and quickly integrated with your project website, saving a lot cost and time involved in custom development</p>
                              </div>
                            </div></div>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-f53424f elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="f53424f" data-element_type="widget" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator">
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-f6f2e16 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="f6f2e16" data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-c3f5cc2" data-id="c3f5cc2" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-646ff4a elementor-widget elementor-widget-jkit_animated_text" data-id="646ff4a" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_23_620f4c46b62a4" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Timelines</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-8ecef44 elementor-widget elementor-widget-heading" data-id="8ecef44" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Road Map</h2>		</div>
              </div>
              <div className="elementor-element elementor-element-dd77e53 elementor-widget elementor-widget-text-editor" data-id="dd77e53" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p><span style={{fontWeight: 400}}>Planning to develop a NFT marketplace? You have landed at the right place. We at UnicusOne will help you develop a customized NFT marketplace with your preferred blockchain network. Our seasoned team will give shape to your ideas to help them turn into reality soon.&nbsp;</span></p>						</div>
              </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-e4adf56 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="e4adf56" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-a7f4a32" data-id="a7f4a32" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-76a8f1e elementor-widget elementor-widget-image" data-id="76a8f1e" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={580} height={435} src="https://unicus.one/wp-content/uploads/2022/02/timeline-final.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/timeline-final.png 1024w, https://unicus.one/wp-content/uploads/2022/02/timeline-final-300x225.png 300w, https://unicus.one/wp-content/uploads/2022/02/timeline-final-768x576.png 768w" sizes="(max-width: 580px) 100vw, 580px" />															</div>
                      </div>
                      <div className="elementor-element elementor-element-e0736a1 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="e0736a1" data-element_type="widget" data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-divider">
                            <span className="elementor-divider-separator">
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-2637844 elementor-section-content-middle elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id={2637844} data-element_type="section">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-77093b6" data-id="77093b6" data-element_type="column" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-7f9bb25 elementor-widget elementor-widget-spacer" data-id="7f9bb25" data-element_type="widget" data-widget_type="spacer.default">
                <div className="elementor-widget-container">
                  <div className="elementor-spacer">
                    <div className="elementor-spacer-inner" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-165b823" data-id="165b823" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-f73c3f3 elementor-widget elementor-widget-jkit_animated_text" data-id="f73c3f3" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_24_620f4c46ba47e" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Tokenomics</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-6df5dd1 elementor-widget elementor-widget-heading" data-id="6df5dd1" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">UnicusOne Token</h2>		</div>
              </div>
              <div className="elementor-element elementor-element-1fd8a90 elementor-widget-tablet__width-inherit elementor-widget elementor-widget-text-editor" data-id="1fd8a90" data-element_type="widget" data-widget_type="text-editor.default">
                <div className="elementor-widget-container">
                  <p><span style={{fontWeight: 400}}>UnicusOne tokens have multiple use cases, as these can be used as security, utility and governance tokens. Try and understand how much an asset might be worth in the future.&nbsp;&nbsp;&nbsp;</span></p>						</div>
              </div>
              <div className="elementor-element elementor-element-4a6d4e7 elementor-widget elementor-widget-jkit_accordion" data-id="4a6d4e7" data-element_type="widget" data-widget_type="jkit_accordion.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-accordion style-default jeg_module_79_25_620f4c46bcaa6"><div className="card-wrapper ">
                      <div className="card-header">
                        <a href="#expand-f4b8cf1" className="card-header-button" aria-expanded="false" data-target="#expand-f4b8cf1" aria-controls="expand-f4b8cf1">
                          <div className="left-icon-group">
                            <div className="normal-icon" />
                            <div className="active-icon" />
                          </div><span className="title">The UnicusOne Token called “U1” is deployed on the Binance Smart Chain</span>
                        </a>
                      </div>
                      <div className="card-expand" id="expand-f4b8cf1" style={{display: 'none'}}><div className="card-body" /></div>
                    </div><div className="card-wrapper ">
                      <div className="card-header">
                        <a href="#expand-df220d0" className="card-header-button" aria-expanded="false" data-target="#expand-df220d0" aria-controls="expand-df220d0">
                          <div className="left-icon-group">
                            <div className="normal-icon" />
                            <div className="active-icon" />
                          </div><span className="title">Total Supply is 150 Million Tokens</span>
                        </a>
                      </div>
                      <div className="card-expand" id="expand-df220d0" style={{display: 'none'}}><div className="card-body" /></div>
                    </div><div className="card-wrapper expand">
                      <div className="card-header">
                        <a href="#expand-5d9d9ce" className="card-header-button" aria-expanded="false" data-target="#expand-5d9d9ce" aria-controls="expand-5d9d9ce">
                          <div className="left-icon-group">
                            <div className="normal-icon" />
                            <div className="active-icon" />
                          </div><span className="title">Token Use Cases:</span>
                        </a>
                      </div>
                      <div className="card-expand" id="expand-5d9d9ce" style={{display: 'block'}}><div className="card-body"><ul><li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Liquidity Mining - Incentivizes users of the platform</span></li><li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Staking Rewards – Such as unlocking access to new markets</span></li><li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>On-chain Platform Governance</span></li><li style={{fontWeight: 400}}><span style={{fontWeight: 400}}>Access to generated markets’ Transactions Fees </span></li></ul></div></div>
                    </div></div>		</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-14d23dc7 elementor-section-full_width elementor-reverse-tablet elementor-reverse-mobile elementor-section-height-default elementor-section-height-default" data-id="14d23dc7" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-no">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4e770540" data-id="4e770540" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-328c1c7 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="328c1c7" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-9b722b0" data-id="9b722b0" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-528e39d elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="528e39d" data-element_type="widget" data-widget_type="divider.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-divider">
                            <span className="elementor-divider-separator">
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-456c27d elementor-widget elementor-widget-jkit_animated_text" data-id="456c27d" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_26_620f4c46be667" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Testimonial</span></span><span className="normal-text style-color" /></p></div>		</div>
                      </div>
                      <div className="elementor-element elementor-element-dbdb260 elementor-widget elementor-widget-heading" data-id="dbdb260" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h1 className="elementor-heading-title elementor-size-default">What Our Clients Say</h1>		</div>
                      </div>
                      <div className="elementor-element elementor-element-84d9c43 elementor-widget elementor-widget-text-editor" data-id="84d9c43" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>We leave no stone unturned to to make our partners and users satisfied</p>						</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-6b9b4e5b elementor-widget elementor-widget-jkit_testimonials" data-id="6b9b4e5b" data-element_type="widget" data-widget_type="jkit_testimonials.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-testimonials arrow-bottom-middle style-1  jeg_module_79_27_620f4c46c317e" data-id="jeg_module_79_27_620f4c46c317e" data-settings="{&quot;autoplay&quot;:false,&quot;autoplay_speed&quot;:3500,&quot;autoplay_hover_pause&quot;:false,&quot;show_navigation&quot;:false,&quot;navigation_left&quot;:&quot;<i aria-hidden=\&quot;true\&quot; class=\&quot;fas fa-angle-left\&quot;><\/i>&quot;,&quot;navigation_right&quot;:&quot;<i aria-hidden=\&quot;true\&quot; class=\&quot;fas fa-angle-right\&quot;><\/i>&quot;,&quot;show_dots&quot;:false,&quot;arrow_position&quot;:&quot;bottom&quot;,&quot;responsive&quot;:{&quot;desktop&quot;:{&quot;items&quot;:3,&quot;margin&quot;:30,&quot;breakpoint&quot;:1025},&quot;tablet&quot;:{&quot;items&quot;:&quot;&quot;,&quot;margin&quot;:20,&quot;breakpoint&quot;:768},&quot;mobile&quot;:{&quot;items&quot;:&quot;&quot;,&quot;margin&quot;:30,&quot;breakpoint&quot;:0}}}"><div className="testimonials-list">
                      <div className="testimonials-track"><div className="testimonial-item  elementor-repeater-item-8edb0ec">
                          <div className="testimonial-box">
                            <div className="testimonial-slider hover-from-left">
                              <div className="comment-bio">
                                <div className="profile-image"><img src="https://unicus.one/wp-content/uploads/2022/02/Screenshot-2022-02-10-at-11.36.11-AM-150x150.png" alt="Sagar Pushp" /></div>
                                <ul className="rating-stars"><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li></ul>
                                <span className="profile-info">
                                  <strong className="profile-name">Sagar Pushp</strong>
                                  <p className="profile-des">Co Founder, Clan Club</p>
                                </span>
                              </div><div className="comment-content"><div className="icon-content"><i aria-hidden="true" className="jki jki-quote-light" /></div><p>We are fortunate enough to have UnicusOne as our Web3.0 Partner. The quality of work with lightning speed integration time sets them way ahead from the entire Web3.0 ecosystem. Kudos to the team.</p></div>
                            </div>
                          </div>
                        </div><div className="testimonial-item  elementor-repeater-item-2a1c64e">
                          <div className="testimonial-box">
                            <div className="testimonial-slider hover-from-left">
                              <div className="comment-bio">
                                <div className="profile-image"><img src="https://unicus.one/wp-content/uploads/2022/02/Nishant-Chandra-150x150.jpeg" alt="Nishant Chandra" /></div>
                                <ul className="rating-stars"><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li></ul>
                                <span className="profile-info">
                                  <strong className="profile-name">Nishant Chandra</strong>
                                  <p className="profile-des">Co Founder, BlockTickets</p>
                                </span>
                              </div><div className="comment-content"><div className="icon-content"><i aria-hidden="true" className="jki jki-quote-light" /></div><p>Our business model is built in such a way which requires us to opt for a Blockchain solution with secure, scalable, and seamless integration with Web3.0 functions . UnicusOne WaaS offerings are a cent percent match to our tech needs.
                                </p></div>
                            </div>
                          </div>
                        </div><div className="testimonial-item  elementor-repeater-item-5251de3">
                          <div className="testimonial-box">
                            <div className="testimonial-slider hover-from-left">
                              <div className="comment-bio">
                                <div className="profile-image"><img src="https://unicus.one/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-10-at-1.54.09-PM-150x150.jpeg" alt="Yash Jejani" /></div>
                                <ul className="rating-stars"><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li><li><i aria-hidden="true" className="jki jki-star-solid" /></li></ul>
                                <span className="profile-info">
                                  <strong className="profile-name">Yash Jejani</strong>
                                  <p className="profile-des">CEO, Strip Finance</p>
                                </span>
                              </div><div className="comment-content"><div className="icon-content"><i aria-hidden="true" className="jki jki-quote-light" /></div><p>We see immense potential in UnicusOne Team, their vision and solutions, and I am sure they will be our perfect partners in our pursuit of unlocking the true value of NFT ecosystem in the coming years. Thanks to the team.</p></div>
                            </div>
                          </div>
                        </div></div>
                    </div></div>		</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-740b976d elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="740b976d" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-4ceea18" data-id="4ceea18" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-7ea70371 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="7ea70371" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-5c73e3f" data-id="5c73e3f" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-56cd89ed elementor-widget elementor-widget-jkit_animated_text" data-id="56cd89ed" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_28_620f4c46c709e" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Our Blog</span></span><span className="normal-text style-color" /></p></div>		</div>
                      </div>
                      <div className="elementor-element elementor-element-1ec24e58 elementor-widget elementor-widget-heading" data-id="1ec24e58" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h1 className="elementor-heading-title elementor-size-default">Last From Our Blog</h1>		</div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-28376214" data-id={28376214} data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-37d3a00e elementor-widget__width-auto elementor-widget elementor-widget-jkit_button" data-id="37d3a00e" data-element_type="widget" data-widget_type="jkit_button.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-button  icon-position-after jeg_module_79_29_620f4c46c929b"><a href className="jkit-button-wrapper">View All Blogs</a></div>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="elementor-element elementor-element-8a30e8a elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="8a30e8a" data-element_type="widget" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator">
                    </span>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-1eb20f1f elementor-widget elementor-widget-jkit_post_block" data-id="1eb20f1f" data-element_type="widget" data-widget_type="jkit_post_block.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-postblock postblock-type-2 jkit-pagination-disable post-element jeg_module_79_30_620f4c46d244c" data-id="jeg_module_79_30_620f4c46d244c" data-settings="{&quot;post_type&quot;:&quot;post&quot;,&quot;number_post&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:3,&quot;sizes&quot;:[]},&quot;post_offset&quot;:0,&quot;unique_content&quot;:&quot;disable&quot;,&quot;include_post&quot;:&quot;&quot;,&quot;exclude_post&quot;:&quot;&quot;,&quot;include_category&quot;:&quot;&quot;,&quot;exclude_category&quot;:&quot;&quot;,&quot;include_author&quot;:&quot;&quot;,&quot;include_tag&quot;:&quot;&quot;,&quot;exclude_tag&quot;:&quot;&quot;,&quot;sort_by&quot;:&quot;latest&quot;,&quot;pagination_mode&quot;:&quot;disable&quot;,&quot;pagination_loadmore_text&quot;:&quot;Load More&quot;,&quot;pagination_loading_text&quot;:&quot;Loading...&quot;,&quot;pagination_number_post&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:3,&quot;sizes&quot;:[]},&quot;pagination_scroll_limit&quot;:0,&quot;pagination_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;},&quot;pagination_icon_position&quot;:&quot;before&quot;,&quot;st_category_position&quot;:&quot;left&quot;,&quot;sg_content_postblock_type&quot;:&quot;type-2&quot;,&quot;sg_content_title_html_tag&quot;:&quot;h3&quot;,&quot;sg_content_category_enable&quot;:&quot;yes&quot;,&quot;sg_content_excerpt_enable&quot;:&quot;yes&quot;,&quot;sg_content_excerpt_length&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:18,&quot;sizes&quot;:[]},&quot;sg_content_excerpt_more&quot;:&quot;...&quot;,&quot;sg_content_readmore_enable&quot;:&quot;yes&quot;,&quot;sg_content_readmore_icon&quot;:{&quot;value&quot;:&quot;&quot;,&quot;library&quot;:&quot;&quot;},&quot;sg_content_readmore_icon_position&quot;:&quot;after&quot;,&quot;sg_content_readmore_text&quot;:&quot;Read More&quot;,&quot;sg_content_comment_heading&quot;:&quot;&quot;,&quot;sg_content_comment_enable&quot;:&quot;&quot;,&quot;sg_content_comment_icon&quot;:{&quot;value&quot;:&quot;fas fa-comment&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;sg_content_comment_icon_position&quot;:&quot;before&quot;,&quot;sg_content_meta_enable&quot;:&quot;&quot;,&quot;sg_content_meta_author_enable&quot;:&quot;&quot;,&quot;sg_content_meta_author_by_text&quot;:&quot;by&quot;,&quot;sg_content_meta_author_icon&quot;:{&quot;value&quot;:&quot;fas fa-user&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;sg_content_meta_author_icon_position&quot;:&quot;before&quot;,&quot;sg_content_meta_date_enable&quot;:&quot;&quot;,&quot;sg_content_meta_date_type&quot;:&quot;published&quot;,&quot;sg_content_meta_date_format&quot;:&quot;default&quot;,&quot;sg_content_meta_date_format_custom&quot;:&quot;F j, Y&quot;,&quot;sg_content_meta_date_icon&quot;:{&quot;value&quot;:&quot;fas fa-clock&quot;,&quot;library&quot;:&quot;fa-solid&quot;},&quot;sg_content_meta_date_icon_position&quot;:&quot;before&quot;,&quot;sg_content_image_size_imagesize_size&quot;:&quot;full&quot;,&quot;paged&quot;:1,&quot;class&quot;:&quot;jkit_post_block&quot;}"><div className="jkit-block-container">
                      <div className="jkit-posts jkit-ajax-flag">
                        <article className="jkit-post post-2265 post type-post status-publish format-standard has-post-thumbnail hentry category-uncategorized">
                          <div className="jkit-thumb"><a href="https://unicus.one/next-gen-nft-marketplace-ecosystem-to-look-out-for/"><div className="thumbnail-container ">
                                <img loading="lazy" width={1024} height={577} src="https://unicus.one/wp-content/uploads/2022/02/blgimage.png" className="attachment-full size-full wp-post-image" alt="" srcSet="https://unicus.one/wp-content/uploads/2022/02/blgimage.png 1024w, https://unicus.one/wp-content/uploads/2022/02/blgimage-300x169.png 300w, https://unicus.one/wp-content/uploads/2022/02/blgimage-768x433.png 768w" sizes="(max-width: 1024px) 100vw, 1024px" />
                              </div></a></div>
                          <div className="jkit-postblock-content"><div className="jkit-post-category "><span><a href="https://unicus.one/category/uncategorized/" className="category-uncategorized">Uncategorized</a></span></div><h3 className="jkit-post-title"><a href="https://unicus.one/next-gen-nft-marketplace-ecosystem-to-look-out-for/">Next-Gen NFT Marketplace Ecosystem to Look Out For</a></h3>
                            <div className="jkit-post-excerpt"><p>Next-Gen NFT Marketplace Ecosystem to Look Out For uniadmin February 11, 2022 Next-Gen NFT Marketplace Ecosystem to Look...</p></div>
                            <div className="jkit-post-meta-bottom">
                              <div className="jkit-meta-readmore icon-position-after">
                                <a href="https://unicus.one/next-gen-nft-marketplace-ecosystem-to-look-out-for/" className="jkit-readmore">Read More</a>
                              </div>
                            </div></div>
                        </article><article className="jkit-post post-1727 post type-post status-publish format-standard has-post-thumbnail hentry category-nft">
                          <div className="jkit-thumb"><a href="https://unicus.one/what-are-the-best-ways-to-market-nft-art/"><div className="thumbnail-container ">
                                <img width={1024} height={577} src="https://unicus.one/wp-content/uploads/2022/02/best-ways-to-market-nft-art.png" className="attachment-full size-full wp-post-image" alt="best ways to market nft art" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/best-ways-to-market-nft-art.png 1024w, https://unicus.one/wp-content/uploads/2022/02/best-ways-to-market-nft-art-300x169.png 300w, https://unicus.one/wp-content/uploads/2022/02/best-ways-to-market-nft-art-768x433.png 768w" sizes="(max-width: 1024px) 100vw, 1024px" />
                              </div></a></div>
                          <div className="jkit-postblock-content"><div className="jkit-post-category "><span><a href="https://unicus.one/category/nft/" className="category-nft">NFT</a></span></div><h3 className="jkit-post-title"><a href="https://unicus.one/what-are-the-best-ways-to-market-nft-art/">What Are The Best Ways To Market NFT Art</a></h3>
                            <div className="jkit-post-excerpt"><p>About For Creators Token Blog Enter App Back What Are The Best Ways To Market NFT Art uniadmin...</p></div>
                            <div className="jkit-post-meta-bottom">
                              <div className="jkit-meta-readmore icon-position-after">
                                <a href="https://unicus.one/what-are-the-best-ways-to-market-nft-art/" className="jkit-readmore">Read More</a>
                              </div>
                            </div></div>
                        </article><article className="jkit-post post-1713 post type-post status-publish format-standard has-post-thumbnail hentry category-nft">
                          <div className="jkit-thumb"><a href="https://unicus.one/how-to-mint-nfts-on-unicusone/"><div className="thumbnail-container ">
                                <img width={1024} height={577} src="https://unicus.one/wp-content/uploads/2022/02/mint-nft.png" className="attachment-full size-full wp-post-image" alt="mint nft" loading="lazy" srcSet="https://unicus.one/wp-content/uploads/2022/02/mint-nft.png 1024w, https://unicus.one/wp-content/uploads/2022/02/mint-nft-300x169.png 300w, https://unicus.one/wp-content/uploads/2022/02/mint-nft-768x433.png 768w" sizes="(max-width: 1024px) 100vw, 1024px" />
                              </div></a></div>
                          <div className="jkit-postblock-content"><div className="jkit-post-category "><span><a href="https://unicus.one/category/nft/" className="category-nft">NFT</a></span></div><h3 className="jkit-post-title"><a href="https://unicus.one/how-to-mint-nfts-on-unicusone/">How to Mint NFTs on UnicusOne</a></h3>
                            <div className="jkit-post-excerpt"><p>About For Creators Token Blog Enter App Back How to Mint NFTs on UnicusOne uniadmin February 4, 2022...</p></div>
                            <div className="jkit-post-meta-bottom">
                              <div className="jkit-meta-readmore icon-position-after">
                                <a href="https://unicus.one/how-to-mint-nfts-on-unicusone/" className="jkit-readmore">Read More</a>
                              </div>
                            </div></div>
                        </article>
                      </div>
                    </div></div>		</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="elementor-section elementor-top-section elementor-element elementor-element-18f961c3 elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="18f961c3" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
        <div className="elementor-background-overlay" />
        <div className="elementor-container elementor-column-gap-default">
          <div className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-70f4dea8" data-id="70f4dea8" data-element_type="column">
            <div className="elementor-widget-wrap elementor-element-populated">
              <div className="elementor-element elementor-element-eb25c18 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="eb25c18" data-element_type="widget" data-widget_type="divider.default">
                <div className="elementor-widget-container">
                  <div className="elementor-divider">
                    <span className="elementor-divider-separator">
                    </span>
                  </div>
                </div>
              </div>
              <div className="elementor-element elementor-element-ca17168 elementor-widget elementor-widget-jkit_animated_text" data-id="ca17168" data-element_type="widget" data-widget_type="jkit_animated_text.default">
                <div className="elementor-widget-container">
                  <div className="jeg-elementor-kit jkit-animated-text jeg_module_79_31_620f4c46d66cf" data-style="none"><p className="animated-text"><span className="normal-text style-color" /><span className="dynamic-wrapper style-gradient"><span className="dynamic-text">Our Newsletter</span></span><span className="normal-text style-color" /></p></div>		</div>
              </div>
              <div className="elementor-element elementor-element-2313d3d5 elementor-widget elementor-widget-heading" data-id="2313d3d5" data-element_type="widget" data-widget_type="heading.default">
                <div className="elementor-widget-container">
                  <h2 className="elementor-heading-title elementor-size-default">Subscribe To Our Newsletter</h2>		</div>
              </div>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-3b06bebb elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="3b06bebb" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-59279339" data-id={59279339} data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-5b3eb1ea elementor-widget elementor-widget-jkit_mailchimp" data-id="5b3eb1ea" data-element_type="widget" data-widget_type="jkit_mailchimp.default">
                        <div className="elementor-widget-container">
                          <div className="jeg-elementor-kit jkit-mailchimp style-inline jeg_module_79_32_620f4c46d8c90"><form method="post" className="jkit-mailchimp-form" data-listed data-success-message="Successfully listed this email" data-error-message="Something went wrong">
                              <div className="jkit-mailchimp-message" />
                              <div className="jkit-form-wrapper email-form">
                                <div className="jkit-mailchimp-email jkit-input-wrapper input-container">
                                  <div className="jkit-form-group">
                                    <div className="jkit-input-element-container jkit-input-group">
                                      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" name="email" className="jkit-email jkit-form-control " placeholder="Your Email" required />
                                    </div>
                                  </div>
                                </div><div className="jkit-submit-input-holder jkit-input-wrapper">
                                  <button type="submit" className="jkit-mailchimp-submit position-before" name="jkit-mailchimp">
                                    Subscribe
                                  </button>
                                </div>
                              </div>
                            </form></div>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-106788f0 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="106788f0" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-22b684a3" data-id="22b684a3" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-626e72f elementor-widget__width-initial elementor-widget-tablet__width-initial elementor-widget elementor-widget-image" data-id="626e72f" data-element_type="widget" data-widget_type="image.default">
                        <div className="elementor-widget-container">
                          <img width={240} height={86} src="https://unicus.one/wp-content/uploads/2022/02/Unicus-logo.png" className="attachment-large size-large" alt="" loading="lazy" />															</div>
                      </div>
                      <div className="elementor-element elementor-element-2d21905a elementor-widget elementor-widget-text-editor" data-id="2d21905a" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Worlds first Multi Chain WaaS (Web3 as a Service) Platform for Metaverse, Gaming, and NFT Economy</p>						</div>
                      </div>
                      <div className="elementor-element elementor-element-1a75c2ae elementor-shape-circle e-grid-align-left e-grid-align-mobile-left e-grid-align-tablet-left elementor-grid-0 elementor-widget elementor-widget-social-icons" data-id="1a75c2ae" data-element_type="widget" data-widget_type="social-icons.default">
                        <div className="elementor-widget-container">
                          <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.5.5 - 03-02-2022 */\n.elementor-widget-social-icons.elementor-grid-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-mobile-0 .elementor-widget-container,.elementor-widget-social-icons.elementor-grid-tablet-0 .elementor-widget-container{line-height:1;font-size:0}.elementor-widget-social-icons:not(.elementor-grid-0):not(.elementor-grid-tablet-0):not(.elementor-grid-mobile-0) .elementor-grid{display:inline-grid}.elementor-widget-social-icons .elementor-grid{grid-column-gap:var(--grid-column-gap,5px);grid-row-gap:var(--grid-row-gap,5px);grid-template-columns:var(--grid-template-columns);-webkit-box-pack:var(--justify-content,center);-ms-flex-pack:var(--justify-content,center);justify-content:var(--justify-content,center);justify-items:var(--justify-content,center)}.elementor-icon.elementor-social-icon{font-size:var(--icon-size,25px);line-height:var(--icon-size,25px);width:calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)));height:calc(var(--icon-size, 25px) + (2 * var(--icon-padding, .5em)))}.elementor-social-icon{--e-social-icon-icon-color:#fff;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;background-color:#818a91;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center;cursor:pointer}.elementor-social-icon i{color:var(--e-social-icon-icon-color)}.elementor-social-icon svg{fill:var(--e-social-icon-icon-color)}.elementor-social-icon:last-child{margin:0}.elementor-social-icon:hover{opacity:.9;color:#fff}.elementor-social-icon-android{background-color:#a4c639}.elementor-social-icon-apple{background-color:#999}.elementor-social-icon-behance{background-color:#1769ff}.elementor-social-icon-bitbucket{background-color:#205081}.elementor-social-icon-codepen{background-color:#000}.elementor-social-icon-delicious{background-color:#39f}.elementor-social-icon-deviantart{background-color:#05cc47}.elementor-social-icon-digg{background-color:#005be2}.elementor-social-icon-dribbble{background-color:#ea4c89}.elementor-social-icon-elementor{background-color:#d30c5c}.elementor-social-icon-envelope{background-color:#ea4335}.elementor-social-icon-facebook,.elementor-social-icon-facebook-f{background-color:#3b5998}.elementor-social-icon-flickr{background-color:#0063dc}.elementor-social-icon-foursquare{background-color:#2d5be3}.elementor-social-icon-free-code-camp,.elementor-social-icon-freecodecamp{background-color:#006400}.elementor-social-icon-github{background-color:#333}.elementor-social-icon-gitlab{background-color:#e24329}.elementor-social-icon-globe{background-color:#818a91}.elementor-social-icon-google-plus,.elementor-social-icon-google-plus-g{background-color:#dd4b39}.elementor-social-icon-houzz{background-color:#7ac142}.elementor-social-icon-instagram{background-color:#262626}.elementor-social-icon-jsfiddle{background-color:#487aa2}.elementor-social-icon-link{background-color:#818a91}.elementor-social-icon-linkedin,.elementor-social-icon-linkedin-in{background-color:#0077b5}.elementor-social-icon-medium{background-color:#00ab6b}.elementor-social-icon-meetup{background-color:#ec1c40}.elementor-social-icon-mixcloud{background-color:#273a4b}.elementor-social-icon-odnoklassniki{background-color:#f4731c}.elementor-social-icon-pinterest{background-color:#bd081c}.elementor-social-icon-product-hunt{background-color:#da552f}.elementor-social-icon-reddit{background-color:#ff4500}.elementor-social-icon-rss{background-color:#f26522}.elementor-social-icon-shopping-cart{background-color:#4caf50}.elementor-social-icon-skype{background-color:#00aff0}.elementor-social-icon-slideshare{background-color:#0077b5}.elementor-social-icon-snapchat{background-color:#fffc00}.elementor-social-icon-soundcloud{background-color:#f80}.elementor-social-icon-spotify{background-color:#2ebd59}.elementor-social-icon-stack-overflow{background-color:#fe7a15}.elementor-social-icon-steam{background-color:#00adee}.elementor-social-icon-stumbleupon{background-color:#eb4924}.elementor-social-icon-telegram{background-color:#2ca5e0}.elementor-social-icon-thumb-tack{background-color:#1aa1d8}.elementor-social-icon-tripadvisor{background-color:#589442}.elementor-social-icon-tumblr{background-color:#35465c}.elementor-social-icon-twitch{background-color:#6441a5}.elementor-social-icon-twitter{background-color:#1da1f2}.elementor-social-icon-viber{background-color:#665cac}.elementor-social-icon-vimeo{background-color:#1ab7ea}.elementor-social-icon-vk{background-color:#45668e}.elementor-social-icon-weibo{background-color:#dd2430}.elementor-social-icon-weixin{background-color:#31a918}.elementor-social-icon-whatsapp{background-color:#25d366}.elementor-social-icon-wordpress{background-color:#21759b}.elementor-social-icon-xing{background-color:#026466}.elementor-social-icon-yelp{background-color:#af0606}.elementor-social-icon-youtube{background-color:#cd201f}.elementor-social-icon-500px{background-color:#0099e5}.elementor-shape-rounded .elementor-icon.elementor-social-icon{-webkit-border-radius:10%;border-radius:10%}.elementor-shape-circle .elementor-icon.elementor-social-icon{-webkit-border-radius:50%;border-radius:50%}" }} />		<div className="elementor-social-icons-wrapper elementor-grid">
                            <span className="elementor-grid-item">
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-twitter elementor-repeater-item-53512dc" href="https://twitter.com/Unicus_One" target="_blank">
                                <span className="elementor-screen-only">Twitter</span>
                                <i className="fab fa-twitter" />					</a>
                            </span>
                            <span className="elementor-grid-item">
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-instagram elementor-repeater-item-4a5a0e6" href="https://www.instagram.com/unicus_one/" target="_blank">
                                <span className="elementor-screen-only">Instagram</span>
                                <i className="fab fa-instagram" />					</a>
                            </span>
                            <span className="elementor-grid-item">
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-telegram elementor-repeater-item-04a99d2" href="https://t.me/UnicusOne_Open" target="_blank">
                                <span className="elementor-screen-only">Telegram</span>
                                <i className="fab fa-telegram" />					</a>
                            </span>
                            <span className="elementor-grid-item">
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-medium elementor-repeater-item-c547629" href="https://unicus.medium.com/" target="_blank">
                                <span className="elementor-screen-only">Medium</span>
                                <i className="fab fa-medium" />					</a>
                            </span>
                            <span className="elementor-grid-item">
                              <a className="elementor-icon elementor-social-icon elementor-social-icon-jki-email-light elementor-repeater-item-c3c057a" href="mailto:info@unicus.one" target="_blank">
                                <span className="elementor-screen-only">Jki-email-light</span>
                                <i className="jki jki-email-light" />					</a>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6694fe2f" data-id="6694fe2f" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-726c168f elementor-widget elementor-widget-heading" data-id="726c168f" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">Usefull Links</h2>		</div>
                      </div>
                      <div className="elementor-element elementor-element-69a0b706 elementor-align-left elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="69a0b706" data-element_type="widget" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <style dangerouslySetInnerHTML={{__html: "/*! elementor - v3.5.5 - 03-02-2022 */\n.elementor-widget.elementor-icon-list--layout-inline .elementor-widget-container{overflow:hidden}.elementor-widget .elementor-icon-list-items.elementor-inline-items{margin-right:-8px;margin-left:-8px}.elementor-widget .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item{margin-right:8px;margin-left:8px}.elementor-widget .elementor-icon-list-items.elementor-inline-items .elementor-icon-list-item:after{width:auto;left:auto;right:auto;position:relative;height:100%;border-top:0;border-bottom:0;border-right:0;border-left-width:1px;border-style:solid;right:-8px}.elementor-widget .elementor-icon-list-items{list-style-type:none;margin:0;padding:0}.elementor-widget .elementor-icon-list-item{margin:0;padding:0;position:relative}.elementor-widget .elementor-icon-list-item:after{position:absolute;bottom:0;width:100%}.elementor-widget .elementor-icon-list-item,.elementor-widget .elementor-icon-list-item a{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:inherit}.elementor-widget .elementor-icon-list-icon+.elementor-icon-list-text{-ms-flex-item-align:center;align-self:center;padding-left:5px}.elementor-widget .elementor-icon-list-icon{display:-webkit-box;display:-ms-flexbox;display:flex}.elementor-widget .elementor-icon-list-icon svg{width:var(--e-icon-list-icon-size,1em);height:var(--e-icon-list-icon-size,1em)}.elementor-widget .elementor-icon-list-icon i{width:1.25em;font-size:var(--e-icon-list-icon-size)}.elementor-widget.elementor-widget-icon-list .elementor-icon-list-icon{text-align:var(--e-icon-list-icon-align)}.elementor-widget.elementor-widget-icon-list .elementor-icon-list-icon svg{margin:var(--e-icon-list-icon-margin,0 calc(var(--e-icon-list-icon-size, 1em) * .25) 0 0)}.elementor-widget.elementor-list-item-link-full_width a{width:100%}.elementor-widget.elementor-align-center .elementor-icon-list-item,.elementor-widget.elementor-align-center .elementor-icon-list-item a{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.elementor-widget.elementor-align-center .elementor-icon-list-item:after{margin:auto}.elementor-widget.elementor-align-center .elementor-inline-items{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.elementor-widget.elementor-align-left .elementor-icon-list-item,.elementor-widget.elementor-align-left .elementor-icon-list-item a{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:left}.elementor-widget.elementor-align-left .elementor-inline-items{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.elementor-widget.elementor-align-right .elementor-icon-list-item,.elementor-widget.elementor-align-right .elementor-icon-list-item a{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:right}.elementor-widget.elementor-align-right .elementor-icon-list-items{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.elementor-widget:not(.elementor-align-right) .elementor-icon-list-item:after{left:0}.elementor-widget:not(.elementor-align-left) .elementor-icon-list-item:after{right:0}@media (max-width:1024px){.elementor-widget.elementor-tablet-align-center .elementor-icon-list-item,.elementor-widget.elementor-tablet-align-center .elementor-icon-list-item a,.elementor-widget.elementor-tablet-align-center .elementor-icon-list-items{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.elementor-widget.elementor-tablet-align-center .elementor-icon-list-item:after{margin:auto}.elementor-widget.elementor-tablet-align-left .elementor-icon-list-items{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.elementor-widget.elementor-tablet-align-left .elementor-icon-list-item,.elementor-widget.elementor-tablet-align-left .elementor-icon-list-item a{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:left}.elementor-widget.elementor-tablet-align-right .elementor-icon-list-items{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.elementor-widget.elementor-tablet-align-right .elementor-icon-list-item,.elementor-widget.elementor-tablet-align-right .elementor-icon-list-item a{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:right}.elementor-widget:not(.elementor-tablet-align-right) .elementor-icon-list-item:after{left:0}.elementor-widget:not(.elementor-tablet-align-left) .elementor-icon-list-item:after{right:0}}@media (max-width:767px){.elementor-widget.elementor-mobile-align-center .elementor-icon-list-item,.elementor-widget.elementor-mobile-align-center .elementor-icon-list-item a,.elementor-widget.elementor-mobile-align-center .elementor-icon-list-items{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.elementor-widget.elementor-mobile-align-center .elementor-icon-list-item:after{margin:auto}.elementor-widget.elementor-mobile-align-left .elementor-icon-list-items{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.elementor-widget.elementor-mobile-align-left .elementor-icon-list-item,.elementor-widget.elementor-mobile-align-left .elementor-icon-list-item a{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;text-align:left}.elementor-widget.elementor-mobile-align-right .elementor-icon-list-items{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.elementor-widget.elementor-mobile-align-right .elementor-icon-list-item,.elementor-widget.elementor-mobile-align-right .elementor-icon-list-item a{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;text-align:right}.elementor-widget:not(.elementor-mobile-align-right) .elementor-icon-list-item:after{left:0}.elementor-widget:not(.elementor-mobile-align-left) .elementor-icon-list-item:after{right:0}}" }} />		<ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="/about">
                                <span className="elementor-icon-list-text">About</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="/for-creator">
                                <span className="elementor-icon-list-text">Creators</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-ee81fca" data-id="ee81fca" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-061a55a elementor-align-left elementor-tablet-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list" data-id="061a55a" data-element_type="widget" data-widget_type="icon-list.default">
                        <div className="elementor-widget-container">
                          <ul className="elementor-icon-list-items">
                            <li className="elementor-icon-list-item">
                              <a href="/token">
                                <span className="elementor-icon-list-text">Token</span>
                              </a>
                            </li>
                            <li className="elementor-icon-list-item">
                              <a href="/blog">
                                <span className="elementor-icon-list-text">Blog</span>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f343e89" data-id="f343e89" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-a4edcce elementor-widget elementor-widget-heading" data-id="a4edcce" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">Marketplace</h2>		</div>
                      </div>
                      <div className="elementor-element elementor-element-ded36a2 elementor-widget elementor-widget-text-editor" data-id="ded36a2" data-element_type="widget" data-widget_type="text-editor.default">
                        <div className="elementor-widget-container">
                          <p>Mint, auction and trade your valuable creations</p>						</div>
                      </div>
                      <div className="elementor-element elementor-element-212aedc elementor-widget elementor-widget-button" data-id="212aedc" data-element_type="widget" data-widget_type="button.default">
                        <div className="elementor-widget-container">
                          <div className="elementor-button-wrapper">
                            <a href="https://marketplace.unicus.one/market-place" className="elementor-button-link elementor-button elementor-size-sm" role="button">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">Enter App</span>
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <section className="elementor-section elementor-inner-section elementor-element elementor-element-58b8a933 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="58b8a933" data-element_type="section">
                <div className="elementor-container elementor-column-gap-no">
                  <div className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-52a3efe9" data-id="52a3efe9" data-element_type="column">
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <div className="elementor-element elementor-element-66625f07 elementor-widget elementor-widget-heading" data-id="66625f07" data-element_type="widget" data-widget_type="heading.default">
                        <div className="elementor-widget-container">
                          <h2 className="elementor-heading-title elementor-size-default">Copyright © 2022. All rights reserved.</h2>		</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
  <link rel="stylesheet" id="tiny-slider-css" href="https://unicus.one/wp-content/plugins/jeg-elementor-kit/assets/js/tiny-slider/tiny-slider.css?ver=2.9.3" media="all" />
  <link rel="stylesheet" id="e-animations-css" href="https://unicus.one/wp-content/plugins/elementor/assets/lib/animations/animations.min.css?ver=3.5.5" media="all" />
</div>

  )
}

export default Home;
