import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import Genres from './components/genre/genres.tsx'
import Authors from './components/author/authors.tsx'
import AI from './components/ai/ai.tsx'
import Randomizer from './components/randomizer/randomizer.tsx'
import './index.css'
import PageNotFound from './components/PageNotFound.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <PageNotFound />,
  },
  {
    path: '/genres',
    element: <Genres />,
  },
  {
    path: '/authors',
    element: <Authors />
  },
  {
    path: '/ai',
    element: <AI />
  },
  {
    path: '/randomizer',
    element: <Randomizer />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>,
)
