import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import Character_info from './pages/Character_info'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element= {<Layout />}>
          <Route index element={<HomePage/>} />
          <Route path='/character/:id' element={<Character_info/>} />
        </Route>
      </Routes>
    </>
  )
}

const characters = [
  {
      id: 1,
      name: "Spider Man",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logo: "spider_man.jpg",
  },
  {
      id: 2,
      name: "Iron Man",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logo: "iron_man.jpg",
  },
  {
      id: 3,
      name: "Dr. Strange",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logo: "dr_strange.jpg",
  },
  {
      id: 4,
      name: "Tor",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logo: "tor.jpg",
  },
  {
      id: 5,
      name: "Hulk",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logo: "hulk.jpg",
  },
  {
      id: 6,
      name: "Captain America",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logo: "сaptain_america.jpg",
  },
  {
      id: 7,
      name: "Black Panther",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logo: "black_panther.jpg",
  },
  {
      id: 8,
      name: "Wolverine",
      description: "A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.Since his first appearance on the pages of Amazing Fantasy comics.",
      logo: "wolverine.jpg",
  }
]

export default App
