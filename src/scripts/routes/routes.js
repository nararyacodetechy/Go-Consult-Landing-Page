import HomePage from '../views/pages/home-page';
import AboutPage from '../views/pages/about-page';
import BlogPage from '../views/pages/blog-page';
import ConsultantPage from '../views/pages/consultant-page';
import BeConsultPage from '../views/pages/be-consult-page';
import FaqPage from '../views/pages/faq-page';

const routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/about-page': AboutPage,
  '/faq-page': FaqPage,
  '/blog-page': BlogPage,
  '/consultant-page': ConsultantPage,
  '/be-consult-page': BeConsultPage,
};

export default routes;
