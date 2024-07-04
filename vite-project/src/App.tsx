import './App.css'
import './Header.css'
import './Footer.css'
import Characters from './Characters'
import marvel_logo from '/marvel-logo.png'
import marvel_logo_gr from '/marvel-grey.png'

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
          <Characters />
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

export default App
