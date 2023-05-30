import React from 'react';
import { VerticalTimeline } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { primaryColor } from '../../helpers/colors';
import { timeline } from '../../helpers/database';
import TimelineItem from './TimelineItem';

export default function Timeline() {
	return (
		<VerticalTimeline layout="1-column-left" lineColor={primaryColor}>
			{timeline.map((item) => (
				<TimelineItem
					title={item.title}
					subtitle={item.subtitle}
					date={item.date}
					icon={item.icon}
				/>
			))}
		</VerticalTimeline>
	);
}
