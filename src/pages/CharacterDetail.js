import getData from "../utils/getData"
import getHash from "../utils/getHash"
const CharacterDetail = async (id) => {
    if (!id) {
        window.location.hash = "#";
        return;
      }
    const character = await getData(id)
    const view = `
    <div class="character-detail">
        <article class="character-card">
            <img src=${character.image} alt=${character.name}>
            <h2>${character.name}</h2>
        </article>
        <article class="character-card-info">
            <p>Episodes: <span>${character.episode.length}</span></p>
            <p>Status: <span>${character.status}</span></p>
            <p>Specie: <span>${character.species}</span></p>
            <p>Gender: <span>${character.gender}</span></p>
            <p>Origin: <span>${character.origin.name}</span></p>
            <p>Location: <span>${character.location.name}</span></p>
        </article>
    </div>
    `
    return view
}

export default CharacterDetail