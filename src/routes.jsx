import { createBrowserRouter } from 'react-router-dom'

import App from './pages/App'
import Home from './pages/Home'
import NotFound from './pages/NotFound'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '*',
        element: <NotFound />
      },
    ]
  }
])

export default routes