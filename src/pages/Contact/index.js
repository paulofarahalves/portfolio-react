import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import { PageArea } from './styled';
import { useState } from 'react';

export const ContactUs = () => {};

export default function Contact() {
	const [nameInput, setNameInput] = useState('');
	const [emailInput, setEmailInput] = useState('');
	const [messageInput, setMessageInput] = useState('');

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'YOUR_SERVICE_ID',
				'YOUR_TEMPLATE',
				form.current,
				'YOUR_FORM'
			)
			.then(
				(result) => {
					console.log(result.text);
					alert('Message sent!');
					setNameInput('');
					setEmailInput('');
					setMessageInput('');
				},

				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<>
			<Header />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<PageArea>
					<h1>Contact</h1>
					<form ref={form} onSubmit={sendEmail}>
						<input
							type="text"
							name="user_name"
							placeholder="Your name"
							value={nameInput}
							onChange={(e) => {
								setNameInput(e.target.value);
							}}
						/>

						<input
							type="email"
							name="user_email"
							placeholder="Your email"
							value={emailInput}
							onChange={(e) => {
								setEmailInput(e.target.value);
							}}
						/>

						<textarea
							name="message"
							placeholder="Your message..."
							value={messageInput}
							onChange={(e) => {
								setMessageInput(e.target.value);
							}}
						/>
						<input type="submit" value="Send" />
					</form>
				</PageArea>
			</motion.div>
			<Footer />
		</>
	);
}
