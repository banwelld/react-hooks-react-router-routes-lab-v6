import { Home, Directors, Actors, Movie, ErrorPage } from './pages';

const routes = [
   {path: '/', element: <Home />, errorElement: <ErrorPage />},
   {path: '/directors', element: <Directors />, errorElement: <ErrorPage />},
   {path: '/actors', element: <Actors />, errorElement: <ErrorPage />},
   {path: '/movie/:id', element: <Movie />, errorElement: <ErrorPage />},
  ];

export default routes;