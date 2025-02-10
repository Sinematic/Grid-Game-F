import { languages } from "../assets/translations"
import { useLanguage } from "../hooks/useLanguage"

import { LanguageCode } from "../types/languages"

export default function LanguagePicker() {


        const { language, setLanguage } = useLanguage()
    
    
        const handleLanguage = (lang: LanguageCode):void => {
    
            if(lang === language) return
            else setLanguage(lang)
        
        }

    return (
        <div className="language-picker">
            {Object.entries(languages).map(([code, lang]) => {
                
                const langCode = code as LanguageCode
                return (
                    <li onClick={() => handleLanguage(langCode)} key={code}>{lang.language}</li>
                )}
            )}
        </div>
    )
}
