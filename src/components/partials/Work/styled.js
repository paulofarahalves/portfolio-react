import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../../helpers/colors';

export const WorkItem = styled.div`
	width: 265px;
	height: 300px;
	background-color: ${secondaryColor};
	border-radius: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	transition: all 0.3s;
	cursor: pointer;
	border: 2px solid ${primaryColor};

	&:hover {
		transform: translate(0, -20px);
		box-shadow: 0 0 11px rgba(33, 33, 33, 0.5);
		opacity: 0.8;
	}

	img {
		width: 200px;
		height: 200px;
	}

	.type {
		font-size: 20px;
		margin-bottom: 10px;
	}

	.info {
		font-size: 15px;
		color: ${primaryColor};
	}
`;
