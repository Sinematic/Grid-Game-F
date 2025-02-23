import { useLanguage } from "../hooks/useLanguage"
import { Link } from "react-router-dom"

import { NavContent } from "../assets/translations/nav"
import LanguagePicker from "./UI/LanguagePicker"
import PlayButton from "./UI/PlayButton"

import "../styles/Nav.css"
import { useGameStatus } from "../hooks/useGameStatus"

export default function Nav() {

    const language = useLanguage().language
    const gameStatus = useGameStatus().status

    const links = NavContent.links

    return (
        <nav>
            <ul>
                {links ? links[language].map((element, index) => 
                    <li key={index}>
                        {gameStatus === "online" 
                        ? <Link to={element.link}>{element.value}</Link>
                        : element.value
                        }
                        
                    </li>)
                : null}

                <PlayButton />
            </ul> 

            <LanguagePicker />
        </nav>
    )
}
