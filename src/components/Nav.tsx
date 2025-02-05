import { languages } from "../assets/translations"
import { useLanguage } from "../hooks/useLanguage"

import "../styles/Nav.css"
import { LanguageCode } from "../types/languages"


export default function Nav() {

    const { language, setLanguage } = useLanguage()


    const handleLanguage = (lang: LanguageCode):void => {

        if(lang == language) {
            return
        } else {
            setLanguage(lang)
        }
    }

    return (
        <nav>
            <ul>
                {Object.entries(languages).map(([code, name]) => {
                    
                    const langCode = code as LanguageCode
                    return (
                        <li onClick={() => handleLanguage(langCode)} key={code}>{name}</li>
                    )}
                )}
            </ul> 
        </nav>
    )
}
