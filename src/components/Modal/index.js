import React from 'react';
import { ModalItem } from './styled';

export default function Modal({ isOpened, setModalOpen, openedWork }) {
	if (isOpened) {
		return (
			<ModalItem>
				<div id="background">
					<div id="modal">
						<button id="close" onClick={setModalOpen}>
							x
						</button>
						<h3>{openedWork?.summary}</h3>
						<div id="description">{openedWork?.description}</div>
						<div id="observation">{openedWork?.observation}</div>
						<ul>
							{openedWork?.activities.map((i, k) => (
								<li key={k}>{i}</li>
							))}
						</ul>
						<div id="comment">{openedWork?.comment}</div>
					</div>
				</div>
			</ModalItem>
		);
	} else return null;
}
