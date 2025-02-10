import { LanguagesTypes } from "../types/languages"
import FranceFlag from "../assets/images/France-flag.webp"
import USAFlag from "../assets/images/Unites-States-of-America-flag.webp"

export const languages: LanguagesTypes = {
    FR : { language: "Français", image: FranceFlag },
    EN: { language: "English", image: USAFlag }
} as const

