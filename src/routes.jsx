import { createBrowserRouter } from 'react-router-dom'

import App from './pages/App'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/dashboard',
        element: <Home />
      },
      {
        path: '/form',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])

export default routes