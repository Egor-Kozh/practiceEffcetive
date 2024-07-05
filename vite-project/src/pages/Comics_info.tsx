import { FC } from "react"
import { useLocation } from "react-router-dom"
import { IComices, comices } from "./Comices"
import "./Comics_info.css"


function Comices_info_ () {
    return (
        <> 
            <Comices_info comices={comices}/>
        </>
    )
}

export const Comices_info: FC<IComices> = ({comices}) => {
    const location = useLocation()
    const {from} = location.state

    return (
        <div className="comics_info">
           <div className="comics__inner">
                <div className="comics_inner_info">
                    <div className="comics_info_logo">
                        <img src={comices[from].logotip}/>
                    </div>
                    <div className="comics_info_name">
                        {comices[from].name}
                    </div>
                </div>
           </div>
        </div>
    )  
}

export default Comices_info_