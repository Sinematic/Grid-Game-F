import AppProviders from "./contexts/AppProviders"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Home from "./components/pages/Home"
import Shop from "./components/pages/Shop"

import './styles/reset.css'
import './App.css'
import Profile from "./components/pages/Profile"
import Play from "./components/pages/Play"


function App() {

	return (
		<Router>
			<AppProviders>

				<Nav />

				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/play" element={<Play />} />
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