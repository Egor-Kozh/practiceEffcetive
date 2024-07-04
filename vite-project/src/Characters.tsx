import { FC } from "react"
import './components/App.css'
import { Link } from "react-router-dom"

export interface ICharacter {
    id: number;
    name: string;
    description: string;
    logotip: string;
}

export interface ICharacters {
    characters: ICharacter[];
}

export const Characters: FC<ICharacters> = ({characters}) => {
    return (
        <div className="characters">
            {characters.map(el => (
                <Link key={el.id} to= {`/character/${el.id}`} state={{from: el.id}} className="link_characters">
                    <div className='character'>
                        <div className='logo_character'>
                            <img src={el.logotip} alt="logo" className='logo'/>
                        </div>
                        <div className='info'>
                            <h3>{el.name}</h3>
                            <div className='description'>
                                {el.description}
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )  
}
 