import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Story from './pages/Story';
import Contact from './pages/Contact';
import Notfound from './pages/NotFound';
import { AnimatePresence } from 'framer-motion';

const App = () => {
	const location = useLocation();
	return (
		<div className="app">
			<AnimatePresence>
				<Routes location={location} key={location.pathname}>
					<Route path="/new" element={<Home />} />
					<Route path="/new/home" element={<Home />} />
					<Route path="/new/about" element={<About />} />
					<Route path="/new/work" element={<Work />} />
					<Route path="/new/story" element={<Story />} />
					<Route path="/new/contact" element={<Contact />} />
					<Route path="/new/*" element={<Notfound />} />
				</Routes>
			</AnimatePresence>
		</div>
	);
};

export default App;
