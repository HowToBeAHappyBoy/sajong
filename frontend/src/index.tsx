import { Global } from '@emotion/react';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { IndexPage } from './apps/index/IndexPage';
import { WishItemPage } from './apps/wish-item/WishItemPage';
import { WishListPage } from './apps/wish-list/WishListPage';
import './index.css';
import { worker } from './msw';
import { createQueryClient } from './react-query';
import reportWebVitals from './reportWebVitals';
import { globalStyle } from './styles';

worker.start();
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,
  },
  {
    path: "wish-list/:id/:name",
    element: <WishListPage />,
  },
  {
    path: "wish-item/:id",
    element: <WishItemPage />
  }
]);

const queryClientRef = createQueryClient();

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <QueryClientProvider client={queryClientRef} contextSharing>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
