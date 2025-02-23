import { createContext, useState, ReactNode } from "react";
import { GameStatusContextType } from "../types/contexts";
import { status } from "../types/contexts";

export const GameStatusContext = createContext<GameStatusContextType | undefined>(undefined)

export default function GameStatusProvider({ children }: { children: ReactNode}) {

    const [status, setStatus] = useState<status>("online");
    
    return (
        <GameStatusContext.Provider value={{ status, setStatus }}>
            {children}
        </GameStatusContext.Provider>
    )
}