import { FC } from 'react'
import './Character_info.css'
import { ICharacters } from '../Characters'
import { useLocation} from 'react-router-dom'
import { characters } from './HomePage';
import { Link } from 'react-router-dom';
import { IComices, comices } from './Comices';


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
                <Comices_list comices={comices}/>
            </div>
        </div>
       </>
    )
}

export const Comices_list: FC<IComices> = ({comices}) => {
    const location = useLocation()
    const {comics} = location.state

    return(
        <div className="list_comics">
            <h1>Comics</h1>
            {comics.map((el: any) => (
                <li>
                    <Link key={el} to= {`/comics/${el}`} state={{from: el}} className="link_comics">
                        {comices[el].name}
                    </Link>
                </li>
            ))}
        </div>
    )
}


export default Character_info_