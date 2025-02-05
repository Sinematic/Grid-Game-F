import { useContext } from "react";
import { LanguageContext } from "../contexts/LanguageContext";

import { ErrorMessages } from "../assets/translations/errors";

export function useLanguage() {

    const context = useContext(LanguageContext);
    
    if(!context) throw new Error(ErrorMessages.Dev.languageContext["EN"])

    return context
};