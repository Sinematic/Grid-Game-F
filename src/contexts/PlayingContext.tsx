import { createContext, useState, ReactNode, SetStateAction } from "react";

interface PlayingBooleanContextType {
    playing: boolean;
    setPlaying: React.Dispatch<SetStateAction<boolean>>
}

export const PlayingBooleanContext = createContext<PlayingBooleanContextType | undefined>(undefined)

export default function PlayingBooleanProvider({ children }: { children: ReactNode}) {

    const [playing, setPlaying] = useState<boolean>(false);
    
    return (
        <PlayingBooleanContext.Provider value={{ playing, setPlaying }}>
            {children}
        </PlayingBooleanContext.Provider>
    )
}