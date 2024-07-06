import { Comices } from "../Comics"

function Comices_ () {
    return (
        <> 
            <Body_Comics />
        </>
    )
}

function Body_Comics(){
    return (
      <>
        <div className='body_'>
          <div className='body__inner'>
            <div className='search'>
              <h1>Comices ({comices.length})</h1>
              <div>
              <input type="text" placeholder="Search for Comics by Name"/>
              <button className='search_button'>SEARCH</button>
              </div>
            </div>
            <Comices comices={comices} />
          </div>
        </div>
      </>
    )
  }

  export interface IComics {
    id: number;
    name: string;
    logotip: string;
}

export interface IComices {
    comices: IComics[];
}


  export const comices: IComics[] = [
    {
        id: 0,
        name: "Amazing Spider Man",
        logotip: "/comics_1.jpg"
    },
    {
        id: 1,
        name: "Back Iron Man",
        logotip: "/comics_2.jpg"
    },
    {
        id: 2,
        name: "Dr. Strange",
        logotip: "/comics_3.jpg"
    },
    {
        id: 3,
        name: "Amazing Spider Man",
        logotip: "/comics_1.jpg"
    },
    {
        id: 4,
        name: "Back Iron Man",
        logotip: "/comics_2.jpg"
    },
    {
        id: 5,
        name: "Dr. Strange",
        logotip: "/comics_3.jpg"
    },
    {
        id: 6,
        name: "Amazing Spider Man",
        logotip: "/comics_1.jpg"
    },
    {
        id: 7,
        name: "Back Iron Man",
        logotip: "/comics_2.jpg"
    },
    {
        id: 8,
        name: "Dr. Strange",
        logotip: "/comics_3.jpg"
    },
    {
        id: 9,
        name: "Amazing Spider Man",
        logotip: "/comics_1.jpg"
    },
    {
        id: 10,
        name: "Back Iron Man",
        logotip: "/comics_2.jpg"
    },
    {
        id: 11,
        name: "Dr. Strange",
        logotip: "/comics_3.jpg"
    },
]


export default Comices_