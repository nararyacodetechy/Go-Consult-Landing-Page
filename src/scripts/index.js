import 'regenerator-runtime';

import '../styles/style.css';
import '../styles/responsive.css';

import './views/pages/home-page';
import './views/pages/about-page';

import './utils/bar-menu';

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
