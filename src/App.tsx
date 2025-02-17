import LanguageProvider from "./contexts/LanguageContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Home from "./components/pages/Home"
import Play from "./components/pages/Play"

import './styles/reset.css'
import './App.css'
import Shop from "./components/pages/Shop"


function App() {

	return (
		<Router>
			
			<LanguageProvider>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Play />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</LanguageProvider>

		</Router>

	)
}

export default App

		
/*
	<Play />
	? < Profil />
*/