import { LanguageCode } from "./languages"

export type ErrorMessages = {
    [key: string]: Record<LanguageCode, string>
}