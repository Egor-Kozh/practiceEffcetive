import Characters from "../Characters"
import '../components/App.css'

function HomePage () {
    return (
        <> 
            <Body />
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

export default HomePage