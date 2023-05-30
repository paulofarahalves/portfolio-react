import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import { PageArea } from './styled';

export default function Notfound() {
	return (
		<>
			<Header />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<PageArea>Not Found</PageArea>
			</motion.div>
			<Footer />
		</>
	);
}
