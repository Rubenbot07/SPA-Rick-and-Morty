import Header from "../templates/Header";
import Home from "../pages/Home";
import CharacterDetail from "../pages/CharacterDetail";
import NotFound from "../pages/NotFound";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
    "/": Home,
    "/character": CharacterDetail,
}

const router = async () => {
  const header = null || document.querySelector("#header");
  const content = null || document.querySelector("#content");

  header.innerHTML = await Header();

  let { route, id } = getHash();
  let resolvedRoute = await resolveRoutes(route);

  console.log(resolvedRoute, route, id);
  let render = routes[resolvedRoute] ? routes[resolvedRoute] : NotFound;
  content.innerHTML = await render(id ? parseInt(id, 10) : id);
}

export default router
