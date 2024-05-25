import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import Context from './assets/Firebase/Context.jsx'

// tanstrack qery
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <div className=''>
    <Context>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <HelmetProvider>
            <RouterProvider router={router}></RouterProvider>
          </HelmetProvider>
        </QueryClientProvider>
      </React.StrictMode>,
    </Context>
  </div>
)
