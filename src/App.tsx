import './App.css'
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {routeTree} from "@/routes.tsx";

const router = createRouter({ routeTree })

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
    <RouterProvider router={routeTree}></RouterProvider>
    </>
  )
}

export default App
