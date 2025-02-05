export type LanguageCode = "FR" | "EN"
export type LanguageType = "Français" | "English"

export type LanguagesTypes = Record<LanguageCode, LanguageType>


export type LanguageContextType = {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void
}