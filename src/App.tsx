import AppProviders from "./contexts/AppProviders"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"
import Play from "./components/pages/Play"

import './styles/reset.css'
import './App.css'


function App() {

	return (
		<Router>
			
			<AppProviders>
				<Nav />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Play />} />
					<Route path="/shop" element={<Shop />} />
				</Routes>
			</AppProviders>

		</Router>

	)
}

export default App

		
/*
	<Play />
	? < Profil />
*/