import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import HomePage from './pages/home';
import ProductPage from './pages/product';
import OrderPage from './pages/order';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/product",
        element: <ProductPage />,
      },
      {
        path: "/order",
        element: <OrderPage />,
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
