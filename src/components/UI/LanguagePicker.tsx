import { languages } from "../../assets/translations"
import { useLanguage } from "../../hooks/useLanguage"

import { LanguageCode } from "../../types/contexts"
import "../../styles/UI/LanguagePicker.css"
import { useState } from "react"


export default function LanguagePicker() {

        const { language, setLanguage } = useLanguage()
        const [open, setOpen] = useState(false)
    
        const handleLanguage = (lang: LanguageCode):void => {
            if(lang === language) return
            else setLanguage(lang)   
        }


    return (
        <div className="language-picker">

                <div className="flag-holder" onClick={() => setOpen(prev => !prev)}>
                    <img className="flag" src={languages[language].image} alt={"Language used is " + language + ", clic here to select your language"} />
                </div>   

                {open ? 
                    <ul className="languages-list">
                        {Object.entries(languages).map(([code, lang]) => {
                
                        const langCode = code as LanguageCode
                        return (
                            <li onClick={() => handleLanguage(langCode)} key={code} className={languages[language].language === lang.language ? "used" : ""}>
                                <img className="flag flag-element" src={lang.image} alt={"Click to select " + lang.language + "."} />
                                <p>{lang.language}</p>
                            </li>
                        )}
                    )}
                    </ul>
                : null}  

        </div>
    )
}
