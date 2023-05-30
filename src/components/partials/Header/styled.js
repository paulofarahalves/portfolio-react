import styled from 'styled-components';
import { secondaryColor, primaryColor } from '../../../helpers/colors';

export const HeaderArea = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
	background-color: ${secondaryColor};

	.container {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding: 20px 200px 20px 200px;
	}

	.leftSide {
		a {
			color: ${primaryColor};
			font-size: 25px;
			font-weight: 700;
		}
	}

	.rightSide {
		a {
			font-size: 15px;
			font-weight: 600;
			margin-left: 20px;
			transition: all ease 0.3s;

			&:hover {
				color: ${primaryColor};
			}

			&.active {
				color: ${primaryColor};
			}
		}
	}
`;
