import { PlayContent } from "../assets/translations/UI/Elements";
import { useLanguage } from "../hooks/useLanguage";
import { useGameStatus } from "../hooks/usePlayingStatus";

import "../styles/PlayButton.css"

export default function PlayButton() {

    const language = useLanguage().language
    const gameStatus = useGameStatus().playing

    const handleGameStatus = () => {
        /**
         * Il faudra envoyer vérification back du statut du joueur
         * Interdire le changement de page si le joueur est en partie 
         * (liens nav bloqués temporairement)
         * Initialiser partie, charger une carte
         * Réfléchir aux mécaniques de jeu : le joueur place-t-il ses monstres 
         * OU le jeu sélectionne X emplacements pour les monstres de chaque équipe ?
         */
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
