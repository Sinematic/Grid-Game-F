import MapReader from './components/MapReader'
import maps from "./assets/maps.json"

import './styles/reset.css'
import './App.css'

function App() {

	return (
		<>
			<MapReader map={maps[0]}/>
		</>
	)
}

export default App
