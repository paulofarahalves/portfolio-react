import React from 'react';
import { motion } from 'framer-motion';
import { IconContext } from 'react-icons';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import Icon from '../../components/partials/Icon';
import ProfileImage from '../../assets/images/personal/profile.png';
import { PageArea } from './styled';

export default function Home() {
	return (
		<>
			<IconContext.Provider value={{ size: '20px' }}>
				<Header />
				<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
					<PageArea>
						<div className="leftSide">
							<h3>WELCOME !</h3>
							<h1>Júlio Manta Roberto</h1>
							<h4>
								Project Management <span> • </span>Business
								Analysis <span> • </span>
								Financial Analysis
							</h4>
							<p>
								Dedicated to managing through leadership.
								Enthusiastic about data-driven strategies.
								Committed to continuous improvement.
							</p>
							<div className="icons">
								<div className="social">
									<Icon title={'linkedin'} />
									<Icon title={'email'} />
									<Icon title={'whatsapp'} />
								</div>

								<Icon title={'resume'} />
							</div>
							<p className="observation">
								*Navigate through menus to find more about me!
							</p>
						</div>
						<div className="rightSide">
							<img
								//src="https://belaltheme.com/Tp/Masud/Masud/images/banner.png"
								src={ProfileImage}
								alt=""
							/>
						</div>
					</PageArea>
				</motion.div>

				<Footer />
			</IconContext.Provider>
		</>
	);
}
