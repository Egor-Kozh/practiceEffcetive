import { FC } from "react"
import './components/App.css'
import { Link } from "react-router-dom"
import { IComices } from "./pages/Comices"


export const Comices: FC<IComices> = ({comices}) => {
    return (
        <div className="comices">
            {comices.map(el => (
                <Link key={el.id} to= {`/comics/${el.id}`} state={{from: el.id}} className="link_comices">
                    <div className='comics'>
                        <div className='logo_comics'>
                            <img src={el.logotip} alt="logo" className='logo'/>
                        </div>
                        <div className='info'>
                            <h3>{el.name}</h3>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )  
}


