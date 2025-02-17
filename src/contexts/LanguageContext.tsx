import { createContext, useState, ReactNode } from "react";
import { LanguageContextType, LanguageCode } from "../types/contexts";

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export default function LanguageProvider({ children }: { children: ReactNode}) {

	const [language, setLanguage] = useState<LanguageCode>("EN");
	
	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}