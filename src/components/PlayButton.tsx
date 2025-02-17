import { PlayContent } from "../assets/translations/UI/Elements";
import { useLanguage } from "../hooks/useLanguage";
import { useGameStatus } from "../hooks/usePlayingStatus";

import "../styles/PlayButton.css"

export default function PlayButton() {

    const language = useLanguage().language
    const gameStatus = useGameStatus().playing

    const handleGameStatus = () => {
        if(!gameStatus) {
            console.log("not playing")
        }
    }

    return (
        <button className="play-btn" onClick={() => handleGameStatus()}>
            {PlayContent.playButton.value[language].toUpperCase()}
        </button>
    )
}
