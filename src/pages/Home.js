import getData from '../utils/getData.js'


const Home = async (page = 1) => {
    const {results: characters, info} = await getData(null, page)
    const view = `
    <div class="characters-container">    
        <div class="characters">
        ${characters.map(character => `
            <article class="character-item">
                <a href=#/character/${character.id}/>
                    <img src=${character.image} alt=${character.name}>
                    <h2>${character.name}</h2>
                </a>
            </article>
        `).join('')}        
        </div>
           <div class="Pagination">
            ${
                info.prev
                ? `<a href="#/page/${
                    page - 1
                    }"><button class="Prev-button"> << </button></a>`
                : ""
            }
            ${
                info.next
                ? `<a href="#/page/${page + 1}"><button> >> </button></a>`
                : ""
            }
            </div>
        </div>
    </div>
    `
    return view
}


export default Home 