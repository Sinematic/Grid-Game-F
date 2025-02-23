import { ReactNode } from "react";
import LanguageProvider from "./LanguageContext";
import GameStatusProvider from "./GameStatusContext";

interface AppProvidersProps {
    children: ReactNode
}

export default function AppProviders({ children }: AppProvidersProps) {

    return (
        <LanguageProvider>
            <GameStatusProvider>
                {children}
            </GameStatusProvider>
        </LanguageProvider>
    )
}
