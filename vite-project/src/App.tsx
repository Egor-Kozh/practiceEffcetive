import './App.css'
import marvel_logo from '/public/marvel-logo.png'

function App() {
  return (
    <>
    <Header />
      <body>
        
      </body>
    </>
  )
}

function Header() {
  return (
    <>
      <header className='header'>
        <div className='marvel_logo'>
          <img src={ marvel_logo } alt="marvel-logo" className='marvel-logo'/>
        </div>
        <nav className='nav'>
          <a className='nav__link' href="#">Characters</a>
          <a className='nav__link' href="#">Comics</a>
        </nav>
      </header>
    </>
  )
}

export default App
