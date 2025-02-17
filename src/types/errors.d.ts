import { LanguageCode } from "./contexts"

export type ErrorMessages = {
    [key: string]: Record<LanguageCode, string>
}