import HomePage from '../views/pages/home-page';
import AboutPage from '../views/pages/about-page';
import BlogPage from '../views/pages/blog-page';
import ConsultantPage from '../views/pages/consultant-page';
import BeConsultPage from '../views/pages/be-consult-page';
import RegisterPage from '../views/pages/register-page';
import LoginPage from '../views/pages/login-page';
import SchedulePage from '../views/pages/schedule-page';
import SuccessfullyPage from '../views/pages/successfully-page';

const routes = {
  '/': HomePage, // default page
  '/home-page': HomePage,
  '/about-page': AboutPage,
  '/blog-page': BlogPage,
  '/consultant-page': ConsultantPage,
  '/be-consult-page': BeConsultPage,
  '/register-page': RegisterPage,
  '/login-page': LoginPage,
  '/schedule-page': SchedulePage,
  '/successfully-page': SuccessfullyPage,
};

export default routes;
