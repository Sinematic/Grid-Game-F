import { useLanguage } from "../hooks/useLanguage"
import { Link } from "react-router-dom"

import { NavContent } from "../assets/translations/nav"
import LanguagePicker from "./UI/LanguagePicker"
import PlayButton from "./UI/PlayButton"

import "../styles/Nav.css"

export default function Nav() {

    const language = useLanguage().language

    const links = NavContent.links

    return (
        <nav>
            <ul>
                {links ? links[language].map((element, index) => 
                    <li key={index}>
                        <Link to={element.link}>{element.value}</Link>
                    </li>)
                : null}

                <PlayButton />
            </ul> 


            <LanguagePicker />
        </nav>
    )
}
