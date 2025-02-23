import { useContext } from "react";
import { GameStatusContext } from "../contexts/GameStatusContext";

import { ErrorMessages } from "../assets/translations/errors";

export function useGameStatus() {

    const context = useContext(GameStatusContext);
    
    if(!context) throw new Error(ErrorMessages.Dev.gameStatus["EN"])

    return context
};