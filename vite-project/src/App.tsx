import './App.css'
import './Header.css'
import './Footer.css'
import marvel_logo from '/marvel-logo.png'
import marvel_logo_gr from '/marvel-grey.png'
import spider_man from '/spider_man.jpg'

function App() {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  )
}

function Header() {
  return (
    <>
      <header className='header'>
        <div className='marvel_logo'>
          <img src={ marvel_logo } alt="marvel-logo" className='marvel-logo-red'/>
        </div>
        <nav className='nav'>
          <a className='nav__link' href="#">Characters</a>
          <a className='nav__link' href="#">Comics</a>
        </nav>
      </header>
    </>
  )
}

function Body(){
  return (
    <>
      <div className='body_'>
        <div className='body__inner'>
          <div className='search'>
            <h1>Characters</h1>
            <div>
            <input type="text" placeholder="Search for Charaters by Name"/>
            <button className='search_button'>SEARCH</button>
            </div>
          </div>
          <div className='characters'>
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
            <Character />
          </div>
        </div>
      </div>
    </>
  )
}

function Footer() {
  return (
    <>
      <header className='footer'>
        <div className='marvel_logo_footer'>
          <img src={ marvel_logo_gr } alt="marvel-logo" className='marvel-logo-grey'/>
        </div>
        <h2>Data provided by Marvel. © 2024 MARVEL</h2>
        <a href="https://developer.marvel.com/">developer.marvel.com</a>
      </header>
    </>
  )
}

function Character() {
  return (
    <>
      <div className='character'>
        <div className='logo_character'>
        <img src={ spider_man } alt="spider" className='spider-man'/>
        </div>
        <div className='info'>
          <h3>Spider Man</h3>
          <div className='description'>
            A superhero appearing in Marvel Comics, created by Stan Lee and Steve Ditko.
             Since his first appearance on the pages of Amazing Fantasy comics.
          </div>
        </div>
      </div>
    </>
  )
}

export default App
