import React from "react"
import './components/App.css'
import { Link } from "react-router-dom"

class Characters extends React.Component {
    characters = [
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

    render() {
        return (
            <div className="characters">
                {this.characters.map((el) => (
                    <a ref= {`/character/${el.id}`} className="link_characters">
                        <div className='character'>
                            <div className='logo_character'>
                                <img src={el.logo} alt="logo" className='logo'/>
                            </div>
                            <div className='info'>
                                <h3>{el.name}</h3>
                                <div className='description'>
                                    {el.description}
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        )
    }    
}

export default Characters