const getHash = () => {
    const infoLocation =
      location.hash.slice(1).toLowerCase().split("/").slice(1, 3) || "/";
    const route = infoLocation[0];
    const id = infoLocation[1];
  
    return { route, id };
  };

export default getHash
