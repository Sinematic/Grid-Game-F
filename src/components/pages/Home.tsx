import boards from "../../assets/boards.json"

import GameBoard from "../GameBoard"


export default function Home() {

    
    const beginnerMap = boards[0]

    return (
        <>
            <GameBoard board={beginnerMap} />
        </>
    )
}
