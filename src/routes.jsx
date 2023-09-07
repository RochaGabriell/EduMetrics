import { createBrowserRouter } from 'react-router-dom'

import Base from './pages/Base'
import Home from './pages/Home'
import EvaluationForm from './pages/EvaluationForm'
import Contact from './pages/Contact'
import About from './pages/About'
import NotFound from './pages/NotFound'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <Base />,
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
        element: <EvaluationForm />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
    ]
  }
])

export default routes