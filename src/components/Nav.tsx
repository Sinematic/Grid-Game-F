import "../styles/Nav.css"
import LanguagePicker from "./LanguagePicker"

import { NavContent } from "../assets/translations/nav"
import { useLanguage } from "../hooks/useLanguage"


export default function Nav() {

    const language = useLanguage().language
    console.log(language)

    const links = NavContent.links

    return (
        <nav>
            <ul>
                {links ? links[language].map((element, index) => 
                    <li key={index}>
                        <link href={element.link}/>{element.value}
                    </li>)
                : null}
            </ul> 

            <LanguagePicker />
        </nav>
    )
}
