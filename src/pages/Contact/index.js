import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import { PageArea } from './styled';

export const ContactUs = () => {};

export default function Contact() {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'service_hbxej3u',
				'template_fhhdz7e',
				form.current,
				'gPwJAzb7fwcK7zBuw'
			)
			.then(
				(result) => {
					console.log(result.text);
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
						/>

						<input
							type="email"
							name="user_email"
							placeholder="Your email"
						/>

						<textarea
							name="message"
							placeholder="Your message..."
						/>
						<input type="submit" value="Send" />
					</form>
				</PageArea>
			</motion.div>
			<Footer />
		</>
	);
}
