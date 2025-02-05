import LanguageProvider from "./contexts/LanguageContext"
import Nav from "./components/Nav"
import GameBoard from "./components/GameBoard"

import boards from "./assets/boards.json"

import './styles/reset.css'
import './App.css'

function App() {

	return (
		<LanguageProvider>

			<>
				<Nav />
				<GameBoard board={boards[0]}/>
			</>

		</LanguageProvider>
	)
}

export default App
