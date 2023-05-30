import React from 'react';
import useImage from '../../../helpers/useImage';
import { types } from '../../../helpers/database';
import { WorkItem } from './styled';

export default function Work({ data }) {
	const imgPath = useImage(`works/${data.image}`).image;

	return (
		<WorkItem>
			<img src={imgPath} alt={data.image} />
			<div className="type">{types[data.type]}</div>
			<div className="info">{`${data.start} - ${data.end} • ${data.location} `}</div>
		</WorkItem>
	);
}
