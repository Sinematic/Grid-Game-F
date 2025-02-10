export type LanguageCode = "FR" | "EN"
export type LanguageType = "Français" | "English"
export type LangData = { language: LanguageType, image: string }

export type LanguagesTypes = Record<LanguageCode, LangData>

export type LanguageContextType = {
    language: LanguageCode;
    setLanguage: (lang: LanguageCode) => void;
}