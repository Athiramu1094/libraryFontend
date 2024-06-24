import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Home, {loader as homeLoader} from './routes/home';
import Author, { loader as authorLoader } from './routes/author';
import store from './app/store'
import Root from './routes/root';
import Books,{loader as booksLoader} from './routes/books';
import Book,{loader as bookLoader} from './routes/book';
import AllBooks, {loader as allBooksLoader} from './routes/allBooks';
import SignUp from './routes/signup';
import Login from './routes/login';
import Logout from './routes/logout';
import { Provider } from 'react-redux'

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
        },

        {
          path:"/signup",
          element:<SignUp/>
        },

        {
          path:"/login",
          element:<Login/>
        },
  
        {
          path:"/logout",
          element:<Logout/>
        },
  
      ]
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>,
  </React.StrictMode>,
)
