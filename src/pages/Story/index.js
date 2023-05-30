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
								During my time at university, I co-founded a
								sustainable innovation start-up called Sedra. We
								created it around a business model focused on
								circular economy. After winning the Desafio
								Unicamp 2016 (Unicamp Challenge) under the
								fantasy name Equipe Cristalina and achieving
								some visibility, I got the opportunity to go to
								Portugal to learn from Bluemater, an innovative
								company with a similar business model. The
								company was also founded as a sustainable
								innovation start-up. It had been incubated by
								UPTEC and was starting to scale its business.
							</p>
							<p>
								I intended to work with them as an
								entrepreneur-in-residence for three months,
								learn from their expertise, and then go back to
								Brazil to take Sedra to the next level. However,
								during my stay, I received a proposal to join
								the company and become a key team member in the
								company scaling – as they had just been
								successful in raising capital. I accepted the
								proposal, stopped working on Sedra, and moved to
								Europe.
							</p>
							<p>
								In Portugal, I worked with project planning,
								project management, business analysis, and
								financial analysis in a fast-paced and rapidly
								changing environment for two and a half years. I
								transferred my BSc course in engineering from
								Unicamp to the integrated MSc course (BSc + MSc)
								of the University of Porto. Throughout that work
								period, I sharpened my cross-functional
								collaboration skills and learned the benefits
								and challenges of working with stakeholders
								across time zones.
							</p>
							<p>
								I traveled to different countries to represent
								the company, built business relationships with
								people from different cultures, raised capital
								from a European Fund, and coordinated
								simultaneous projects reporting directly to
								executive management – all the while studying
								for my integrated master’s degree. After two and
								a half years, I decided to leave the company to
								focus on and complete my master’s, so I could go
								back to Brazil and resume my career in my
								homeland.
							</p>
							<p>
								Once I left the company, one of our business
								partners approached me to work as a project
								manager there. Although it was a good
								opportunity, it would take me in the opposite
								direction of my plan. At the same time, they had
								noticed shortfalls in their pricing strategy for
								B2B projects with corporate clients. So, I made
								them a counterproposal: I would analyze their
								business, evaluate their past projects and
								results, and develop a project valuation model
								to estimate the fair value of projects and
								improve the pricing strategy. And this is how I
								started working with Inegi, an innovation
								development services and consulting firm.
							</p>
							<p>
								I successfully developed the valuation model,
								identified considerable differences between
								project pricing and fair value, recommended
								pricing strategy improvements to executive
								management, and presented this work as my MSc
								dissertation. After that, I was ready to go
								back.
							</p>
							<p>
								I arrived in Brazil in 2021. And after a
								well-earned vacation period, I started working
								with Buyself. The start-up is rapidly growing
								its micromarket business and starting its
								expansion into online marketplaces. The
								corporate development goal is to raise capital
								to expand and invest in growth. My role is to
								guide them through capital raising, analyze
								their business and financial performance,
								evaluate the company, develop and improve
								business processes, and advise on scaling and
								growth strategies.
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
