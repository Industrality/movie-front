import {createRootRoute, createRoute} from "@tanstack/react-router";
import {MoviesComponent} from "@/movies/Movies.tsx";
import {RootComponent} from "@/movies/Root.tsx";


const rootRoute = createRootRoute({
  component: RootComponent,
})

const moviesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/movies",
  component: MoviesComponent
})

export const routeTree = rootRoute.addChildren([moviesRoute]);
