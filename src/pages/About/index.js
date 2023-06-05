import React from 'react';
import { motion } from 'framer-motion';
import { PageArea } from './styled';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import Icon from '../../components/partials/Icon';
import Photo from '../../assets/images/personal/about.png';

export default function About() {
	return (
		<>
			<Header />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<PageArea>
					<h1>About me</h1>

					<div className="area">
						<div className="leftSide">
							<div className="icons">
								<div className="social">
									<Icon title={'linkedin'} />
									<Icon title={'email'} />
									<Icon title={'whatsapp'} />
								</div>

								<Icon title={'resume'} />
								<Icon title={'location'} />
							</div>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vestibulum commodo elit at enim
								dignissim mollis. Donec vitae volutpat dolor.
								Etiam fringilla hendrerit bibendum. Pellentesque
								finibus massa non dolor porta, vitae mattis
								turpis suscipit. Quisque laoreet varius dictum.
							</p>
							<p>
								Suspendisse potenti. Vivamus nec magna nec
								turpis auctor pharetra sit amet ut purus.
								Vestibulum suscipit nec mauris a feugiat. Ut
								vulputate diam id pretium fermentum. Phasellus
								dictum ac metus accumsan rhoncus.
							</p>
							<p>
								Sed nec placerat enim. Curabitur semper nisi
								mauris, vel ultricies nunc fringilla eu. Morbi
								aliquet at felis ut condimentum. Nullam eros
								lectus, auctor vel suscipit vel, porttitor ac
								nisi. Ut ac libero nec justo volutpat fermentum
								vel consectetur turpis. Mauris dignissim euismod
								nisi. Integer et elit at augue egestas gravida.
							</p>
						</div>
						<div className="rightSide">
							<img src={Photo} alt="About" />
						</div>
					</div>
				</PageArea>
			</motion.div>

			<Footer />
		</>
	);
}
