import { MapType } from "../types/common"
import "../styles/GameBoard.css"

export default function GameBoard(props: { board : MapType }) {

    const { board } = props

    return (
        <div className="board">
            {board.name ? board.width: <p>Error !</p>}
        </div>
    )
}
