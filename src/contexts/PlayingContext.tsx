import { createContext, useState, ReactNode } from "react";
import { GameStatusContextType } from "../types/contexts";

export const GameStatusContext = createContext<GameStatusContextType | undefined>(undefined)

export default function GameStatusProvider({ children }: { children: ReactNode}) {

    const [playing, setPlaying] = useState<boolean>(false);
    
    return (
        <GameStatusContext.Provider value={{ playing, setPlaying }}>
            {children}
        </GameStatusContext.Provider>
    )
}