import React, { useState } from 'react';
import { IconContext } from 'react-icons';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { primaryColor, textColor } from '../../../helpers/colors';
import { FooterArea } from './styled';

export default function Footer() {
	const defaultColor = primaryColor;
	const [emailColor, setEmailColor] = useState(textColor);
	const [whatsappColor, setWhatsappColor] = useState(textColor);
	const [linkedinColor, setLinkedinColor] = useState(textColor);

	return (
		<IconContext.Provider value={{ size: '18px' }}>
			<FooterArea>
				<div className="container">
					<a
						href={`mailto:email@hotmail.com`}
						target="_blank"
						rel="noreferrer"
						onMouseEnter={() => {
							setEmailColor(defaultColor);
						}}
						onMouseLeave={() => {
							setEmailColor(textColor);
						}}
					>
						<FiMail stroke={emailColor} />
						<span>email@mail.com</span>
					</a>
					<a
						href="https://api.whatsapp.com/send/?phone=%2B5644561132146&text&type=phone_number&app_absent=0"
						target="_blank"
						rel="noreferrer"
						onMouseEnter={() => {
							setWhatsappColor(defaultColor);
						}}
						onMouseLeave={() => {
							setWhatsappColor(textColor);
						}}
					>
						<FaWhatsapp fill={whatsappColor} />
						<span>+55 11 123456789⠀</span>
					</a>
					<a
						href="https://www.linkedin.com/in/paulofarahalves/"
						target="_blank"
						rel="noreferrer"
						onMouseEnter={() => {
							setLinkedinColor(defaultColor);
						}}
						onMouseLeave={() => {
							setLinkedinColor(textColor);
						}}
					>
						<FaLinkedin fill={linkedinColor} />
						<span>Your Likedin</span>
					</a>
				</div>
			</FooterArea>
		</IconContext.Provider>
	);
}
