import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home, {loader as homeLoader} from './routes/home';
import Author, { loader as authorLoader } from './routes/author';

import Root from './routes/root';
import Books,{loader as booksLoader} from './routes/books';
import Book,{loader as bookLoader} from './routes/book';
import AllBooks, {loader as allBooksLoader} from './routes/allBooks';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
    children: [
      {
        path:"/",
        element:<Home/>,
        loader:homeLoader
        },

        {
          path: "/authors/:authorId",
          element: <Author />,
          loader: authorLoader,
        },

        {
          path: "/books",
          element: <AllBooks/>,
          loader: allBooksLoader
        },

        {
          path:'/books/:authorId',
          element:<Books/>,
          loader:booksLoader
        },

        {
          path:"/book/:bookId",
          element:<Book/>,
          loader:bookLoader
        }
      ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
