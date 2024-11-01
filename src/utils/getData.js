const API = 'https://rickandmortyapi.com/api/character'
const getData = async (id, page) => {

    const apiUrl = id ? `${API}/${id}` : `${API}?page=${page}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json(); //convertimos a JSON
      return data;
    } catch (error) {
      console.error("FETCH ERROR", error);
    }
    
}

export default getData