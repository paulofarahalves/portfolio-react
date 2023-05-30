import React from 'react';
import { motion } from 'framer-motion';
import { PageArea } from './styled';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import Icon from '../../components/partials/Icon';

export default function About() {
	return (
		<>
			<Header />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<PageArea>
					<h1>More about me</h1>

					<div className="area">
						<div className="leftSide">
							<div className="icons">
								<Icon title={'linkedin'} />
								<Icon title={'email'} />
								<Icon title={'whatsapp'} />
								<Icon title={'resume'} />
								<Icon title={'location'} />
							</div>
							<p>
								I am a Brazilian that believes in the
								transformational power of leadership, teamwork,
								and data. Leadership brings the best out of
								people, teamwork allows us to achieve more than
								by working alone, data maps the landscape, and
								it is up to us to find the best path forward. By
								working with start-ups and innovative companies,
								I have learned that the combination of these
								three elements in an environment of continuous
								improvement and creativity is likely to surpass
								expectations. By living abroad and through a
								wide range of life settings, I have learned that
								adaptability is key to turning chaos into order
								consistently. By nurturing relationships with
								people from various cultures and nations, I have
								learned that communication is a powerful shaper
								that builds and binds us. There is still much to
								learn, and I am just getting started.
							</p>
						</div>
						<div className="rightSide">Fotos</div>
					</div>
				</PageArea>
			</motion.div>

			<Footer />
		</>
	);
}
