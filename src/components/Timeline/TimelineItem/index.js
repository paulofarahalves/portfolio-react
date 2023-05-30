import React from 'react';
import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
	primaryColor,
	secondaryColor,
	textColor,
} from '../../../helpers/colors';

export default function TimelineItem({ title, subtitle, date, icon }) {
	const width = 'inherit';
	return (
		<VerticalTimelineElement
			className="vertical-timeline-element--education"
			contentStyle={{
				background: secondaryColor,
				color: textColor,
				boxShadow: `0 3px 0 ${primaryColor}`,
				width,
			}}
			contentArrowStyle={{
				borderRight: `7px solid ${primaryColor}`,
			}}
			date={date}
			iconStyle={{
				background: secondaryColor,
				color: textColor,
				boxShadow: `0 0 0 4px ${primaryColor}`,
			}}
			icon={icon()}
		>
			<h3 className="vertical-timeline-element-title">{title}</h3>
			<p className="vertical-timeline-element-subtitle">{subtitle}</p>
		</VerticalTimelineElement>
	);
}
