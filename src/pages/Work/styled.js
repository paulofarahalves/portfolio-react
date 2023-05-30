import styled from 'styled-components';
import { primaryColor } from '../../helpers/colors';

export const PageArea = styled.div`
	padding: 100px 200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.filters {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		margin-top: 20px;

		.filter {
			margin-left: 10px;
			margin-right: 10px;
			padding: 20px;
			border-radius: 5px;
			transition: all ease 0.3s;
			cursor: pointer;

			&:hover {
				color: ${primaryColor};
			}

			&.active {
				color: ${primaryColor};
			}
		}
	}

	.workList {
		margin-top: 30px;
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 30px;
	}
`;
