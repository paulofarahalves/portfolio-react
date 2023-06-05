import React from 'react';
import { motion } from 'framer-motion';
import Header from '../../components/partials/Header';
import Footer from '../../components/partials/Footer';
import Timeline from '../../components/Timeline';
import { PageArea } from './styled';

export default function About() {
	return (
		<>
			<Header />
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
				<PageArea>
					<h1>My story</h1>
					<div className="area">
						<div className="leftSide">
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Vestibulum commodo elit at enim
								dignissim mollis. Donec vitae volutpat dolor.
								Etiam fringilla hendrerit bibendum. Pellentesque
								finibus massa non dolor porta, vitae mattis
								turpis suscipit. Quisque laoreet varius dictum.
								Interdum et malesuada fames ac ante ipsum primis
								in faucibus. Integer varius arcu ex. Cras
								eleifend lobortis posuere.
							</p>
							<p>
								Suspendisse potenti. Vivamus nec magna nec
								turpis auctor pharetra sit amet ut purus.
								Vestibulum suscipit nec mauris a feugiat. Ut
								vulputate diam id pretium fermentum. Phasellus
								dictum ac metus accumsan rhoncus. Donec ac
								libero mi. Nulla vehicula tortor a mauris
								dapibus, vitae facilisis velit euismod. Nullam
								faucibus, quam sed pellentesque porta, ex mauris
								ornare mi, ut sagittis dui lacus sit amet dolor.
							</p>
							<p>
								Sed nec placerat enim. Curabitur semper nisi
								mauris, vel ultricies nunc fringilla eu. Morbi
								aliquet at felis ut condimentum. Nullam eros
								lectus, auctor vel suscipit vel, porttitor ac
								nisi. Ut ac libero nec justo volutpat fermentum
								vel consectetur turpis. Mauris dignissim euismod
								nisi. Integer et elit at augue egestas gravida.
								Etiam luctus blandit condimentum. Mauris quam
								turpis, fringilla eu quam at, ultrices aliquet
								diam. Vestibulum a sapien eget erat pretium
								luctus. Phasellus urna erat, molestie id blandit
								eget, laoreet ut neque. Donec sit amet leo nec
								mi viverra viverra. Cras vel magna vitae quam
								blandit lobortis. Mauris aliquet ornare massa
								vitae pharetra.
							</p>
							<p>
								Quisque suscipit orci at diam aliquet gravida.
								Praesent iaculis turpis enim, non euismod nisl
								tempus non. Interdum et malesuada fames ac ante
								ipsum primis in faucibus. Donec nec suscipit
								nisl. Vestibulum aliquam viverra maximus. Etiam
								pellentesque sodales tristique. Quisque sed dui
								accumsan, elementum ante id, consequat magna.
								Nunc nec nisi dapibus, tincidunt urna sed,
								aliquam ligula. Quisque in laoreet ex, ornare
								ornare arcu.
							</p>
							<p>
								Ut non malesuada nulla. Lorem ipsum dolor sit
								amet, consectetur adipiscing elit. Phasellus
								condimentum, tortor in consequat porttitor, nunc
								sem mollis erat, sit amet euismod enim leo non
								purus. Donec egestas quis metus eu pulvinar.
								Suspendisse dapibus nunc ac est tempor
								sollicitudin. Sed bibendum metus id augue
								aliquam, condimentum accumsan lectus convallis.
							</p>
							<p>
								Vestibulum ante ipsum primis in faucibus orci
								luctus et ultrices posuere cubilia curae; Fusce
								vitae blandit magna. Vestibulum ante ipsum
								primis in faucibus orci luctus et ultrices
								posuere cubilia curae; Nunc finibus facilisis
								eros, non scelerisque nisi placerat at.
							</p>
							<p>
								Maecenas pellentesque, neque quis ullamcorper
								fermentum, risus lorem dictum purus, ac
								elementum lacus purus at ex. Mauris convallis
								porta augue non vestibulum. Ut dapibus sit amet
								tellus a consectetur. Phasellus ut justo
								ullamcorper, viverra odio at, dictum velit.
								Curabitur et lacus id ligula ultrices iaculis
								sit amet aliquet velit. Aenean laoreet, arcu sit
								amet accumsan pellentesque, neque sapien
								molestie ante, id pellentesque mauris magna sed
								sem.
							</p>
						</div>
						<div className="rightSide">
							<Timeline />
						</div>
					</div>
				</PageArea>
			</motion.div>
			<Footer />
		</>
	);
}
