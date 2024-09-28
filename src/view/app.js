import UniversalRouter from 'universal-router';
import './pages/home-page';
import './pages/about-page';
import './pages/contact-page';

const routes = [
  {
    path: '',
    action: () => {
      return '<home-page></home-page>';
    }
  },
  {
    path: '/about',
    action: () => {
      return '<about-page></about-page>';
    }
  },
  {
    path: '/contact',
    action: () => {
      return '<contact-page></contact-page>';
    }
  }
];

const router = new UniversalRouter(routes);
router.resolve({ pathname: '/' }).then((output) => {
  console.log('resolve', output); // 
});
