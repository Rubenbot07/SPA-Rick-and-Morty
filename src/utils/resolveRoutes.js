const resolveRoutes = (route) => {

    if (route) {
        if (route === "page") {
          return "/";
        }
    
        return `/${route}`;
      }
    
      return "/";

}

export default resolveRoutes