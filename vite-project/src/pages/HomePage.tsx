import {ICharacter} from "../Characters"
import {Characters} from "../Characters"
import '../components/App.css'

function HomePage () {
    return (
        <> 
            <Body />
        </>
    )
}

export const characters: ICharacter[] = [
    {
      id: 0,
      name: "Spider Man",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logotip: "/spider_man.jpg"
    },
    {
        id: 1,
        name: "Iron Man",
        description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
        logotip: "/iron_man.jpg"
    },
    {
        id: 2,
        name: "Dr. Strange",
        description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
        logotip: "/dr_strange.jpg"
    },
    {
        id: 3,
        name: "Tor",
        description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
        logotip: "/tor.jpg"
    },
    {
        id: 4,
        name: "Hulk",
        description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
        logotip: "/hulk.jpg"
    },
    {
        id: 5,
        name: "Captain America",
        description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
        logotip: "/сaptain_america.jpg"
    },
    {
        id: 6,
        name: "Black Panther",
        description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
        logotip: "/black_panther.jpg"
    },
    {
        id: 7,
        name: "Wolverine",
        description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
        logotip: "/wolverine.jpg"
    }
  ]


function Body(){
    return (
      <>
        <div className='body_'>
          <div className='body__inner'>
            <div className='search'>
              <h1>Characters ({characters.length})</h1>
              <div>
              <input type="text" placeholder="Search for Charaters by Name"/>
              <button className='search_button'>SEARCH</button>
              </div>
            </div>
            <Characters characters={characters} />
          </div>
        </div>
      </>
    )
  }

export default HomePage
