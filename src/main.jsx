import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
    children: [
      {
        path: "about",
        element: <div>About</div>,
      },
      {
        path: "new",
        element: <div>New</div>,
      },
    ]
  },

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
