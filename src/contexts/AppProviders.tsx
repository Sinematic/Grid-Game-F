import { ReactNode } from "react";
import LanguageProvider from "./LanguageContext";
import PlayingBooleanProvider from "./PlayingContext";

interface AppProvidersProps {
    children: ReactNode
}

export default function AppProviders({ children }: AppProvidersProps) {

    return (
        <LanguageProvider>
            <PlayingBooleanProvider>
                {children}
            </PlayingBooleanProvider>
        </LanguageProvider>
    )
}
