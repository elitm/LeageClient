import Main from "./pages/MainPage";
import NotFound from "./pages/NotFoundPage";

const routes = [
  {
    path: "/",
    name: "main",
    component: Main
  },
  {
    path: "/register",
    name: "register",
    component: () => import("./pages/RegisterPage")
  },
  {
    path: "/login",
    name: "login",
    component: () => import("./pages/LoginPage")
  },
  {
    path: "/search",
    name: "search",
    component: () => import("./pages/SearchPage")
  },
  {
    path: "/about",
    name: "about",
    component: () => import("./pages/AboutPage")
  },
  {
    path: "/player",
    name: "player",
    component: () => import("./pages/PlayerPage")
  },
  {
    path:"/favoriteGames",
    name: "favoriteGames",
    component: () => import("./pages/FavoriteGamesPage")
  },
  {
    path:"/allGames",
    name: "allGames",
    component: () => import("./pages/GamesPage")
  },
  {
    path:"/teamFullDetails",
    name: "teamFullDetails",
    component: () => import("./pages/TeamPage")
  },

  {
    path: "*",
    name: "notFound",
    component: NotFound
  }
];

export default routes;
