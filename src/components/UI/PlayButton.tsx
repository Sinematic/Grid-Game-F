import { PlayContent } from "../../assets/translations/UI/Elements";
import { useLanguage } from "../../hooks/useLanguage";
import { useGameStatus } from "../../hooks/useGameStatus";

import "../../styles/UI/PlayButton.css"

export default function PlayButton() {

    const language = useLanguage().language
    const gameStatus = useGameStatus()
    const status = gameStatus.status

    const handleGameStatus = () => {
        /*
         * Il faudra envoyer vérification back du statut du joueur
         * Interdire le changement de page si le joueur est en partie 
         * (liens nav bloqués temporairement)
         * Initialiser partie, charger une carte
         * Réfléchir aux mécaniques de jeu : le joueur place-t-il ses monstres 
         * OU le jeu sélectionne X emplacements pour les monstres de chaque équipe ?
        */

        if(status === "online") {
            gameStatus.setStatus("in queue")
        } else if (status === "in queue") {
            gameStatus.setStatus("online")
        }
    }

    return (
        <button className={[
            "play-btn",
            status === "online" ? "online" : "in-queue"
        ].join(' ')} onClick={() => handleGameStatus()}>
            {status === "online" 
                ? PlayContent.playButton.value[language][0].toUpperCase()
                : PlayContent.playButton.value[language][1].toUpperCase()
            }
        </button>
    )
}
