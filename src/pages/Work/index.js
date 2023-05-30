import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import handleClick from '../../helpers/filter';
import { works } from '../../helpers/database';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import Work from '../../components/partials/Work';
import Modal from '../../components/Modal';
import { PageArea } from './styled';

export default function WorkHistory() {
	const [filteredWorks, setFilteredWorks] = useState(works);
	const [openModal, setOpenModal] = useState(false);
	const [openedWork, setOpenedWork] = useState({});

	if (openModal) {
		document.body.style.overflow = 'hidden';

		window.addEventListener('click', function (e) {
			if (e.target.id === 'background') {
				setOpenModal(false);
			}
		});

		document.onkeydown = function (e) {
			e = e || window.event;
			var isEscape = false;
			if ('key' in e) {
				isEscape = e.key === 'Escape' || e.key === 'Esc';
			} else {
				isEscape = e.keyCode === 27;
			}
			if (isEscape) {
				setOpenModal(false);
			}
		};
	} else {
		document.body.style.overflow = 'unset';
	}

	return (
		<>
			<Header />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<PageArea>
					<h1>Work History</h1>
					<div className="filters">
						<div
							id="filter-1"
							className="filter active"
							onClick={() => {
								handleClick(1, works, setFilteredWorks);
							}}
						>
							ALL
						</div>
						<div
							id="filter-2"
							className="filter"
							onClick={() => {
								handleClick(2, works, setFilteredWorks);
							}}
						>
							ANALYSIS
						</div>
						<div
							id="filter-3"
							className="filter"
							onClick={() => {
								handleClick(3, works, setFilteredWorks);
							}}
						>
							MANAGEMENT
						</div>
					</div>
					<div className="workList">
						<AnimatePresence>
							{filteredWorks.map((i, k) => (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5 }}
									layout
									key={k}
									onClick={() => {
										setOpenedWork(i);
										setOpenModal(true);
									}}
								>
									<Work data={i} key={k} />
								</motion.div>
							))}
						</AnimatePresence>
					</div>
					{openModal && (
						<Modal
							isOpened={openModal}
							setModalOpen={() => {
								setOpenModal(!openModal);
							}}
							openedWork={openedWork}
						/>
					)}
				</PageArea>
			</motion.div>
			<Footer />
		</>
	);
}
