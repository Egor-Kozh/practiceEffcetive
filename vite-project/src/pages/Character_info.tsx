import { FC } from 'react'
import './Character_info.css'
import { ICharacters } from '../Characters'
import { useLocation} from 'react-router-dom'
import { characters } from './HomePage';


function Character_info_ () {
    return (
        <> 
            <Character_info characters={characters}/>
        </>
    )
}

export const Character_info: FC<ICharacters> = ({characters}) => {
    const location = useLocation()
    const {from} = location.state

    return (
      <>
        <div className="conteiner">
            <div className="logo_info">
                <img src={characters[from].logotip}/>
            </div>
            <div className="bottom_info">
                <div className="description_info">
                    <h2>Character Name</h2>
                    <p>{characters[from].name}</p>
                    <h3>Description</h3>
                    <p>{characters[from].description}</p>
                </div>
                <div className="list_comics">

                </div>
            </div>
        </div>
       </>
    )
}

export default Character_info_