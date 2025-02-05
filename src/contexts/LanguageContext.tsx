import { createContext, useState, ReactNode, useEffect } from "react";
import { LanguageContextType, LanguageCode } from "../types/languages";

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export default function LanguageProvider({ children }: { children: ReactNode}) {

	const [language, setLanguage] = useState<LanguageCode>("EN");

    useEffect(() => {
        console.log(language)
    }, [language]);
	
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}