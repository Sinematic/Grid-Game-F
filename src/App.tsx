import LanguageProvider from "./contexts/LanguageContext"
import Nav from "./components/Nav"
import GameBoard from "./components/GameBoard"

import boards from "./assets/boards.json"

import './styles/reset.css'
import './App.css'

const beginnerMap = boards[0]

function App() {

	return (
		<LanguageProvider>

			<>
				<Nav />
				<GameBoard board={beginnerMap}/>
			</>

		</LanguageProvider>

		
/*
	<Play />
	? < Profil />
*/

	)
}

export default App
