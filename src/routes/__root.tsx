import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'


import Navbar from '../components/Navbar/Navbar.tsx'
import Footer from '../components/Footer/Footer.tsx'

import TanstackQueryLayout from '../integrations/tanstack-query/layout'

import type { QueryClient } from '@tanstack/react-query'
import NotFoundPage from "@/routes/NotFoundPage/NotFoundPage.tsx";

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Navbar />

      <Outlet />
      <TanStackRouterDevtools />

      <TanstackQueryLayout />
        <Footer />
    </>
  ),
    notFoundComponent: () => {
        return <NotFoundPage />
    },
})
