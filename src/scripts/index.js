import 'regenerator-runtime';

import '../styles/style.css';
import '../styles/responsive.css';

import './views/pages/home-page';
import './views/pages/about-page';
import './views/pages/blog-page';
import './views/pages/consultant-page';
import './views/pages/be-consult-page';
import './views/pages/faq-page';

import './utils/bar-menu';
// import './utils/card-blog';

import App from './views/app';

const app = new App({
  header: document.querySelector('#headerContent'),
  content: document.querySelector('#mainContent'),
  footer: document.querySelector('#footerContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});
