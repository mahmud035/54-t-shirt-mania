import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Grandpa from './Components/Grandpa/Grandpa';
import Home from './Components/Home/Home';
import Orders from './Components/Orders/Orders';
import Main from './Layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
          path: '/',
          loader: () => fetch('tshirts.json'),
          element: <Home></Home>,
        },

        {
          path: '/orders',
          element: <Orders></Orders>,
        },

        {
          path: '/grandpa',
          element: <Grandpa></Grandpa>,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
