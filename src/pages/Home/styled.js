import styled from 'styled-components';
import { primaryColor } from '../../helpers/colors';

export const PageArea = styled.div`
	padding: 50px 200px;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	position: fixed;
	top: 50%;
	left: 50%;
	-webkit-transform: translate(-50%, -50%);
	transform: translate(-50%, -50%);

	.leftSide {
		flex: 1;

		h3 {
			font-size: 20px;
			margin-bottom: 20px;
			color: ${primaryColor};
		}

		h1 {
			font-size: 50px;
			font-weight: 600;
			margin-bottom: 20px;
		}

		h4 {
			font-size: 20px;
			margin-bottom: 20px;
		}

		p {
			font-size: 16px;
			line-height: 35px;
		}

		.observation {
			font-size: 12px;
		}

		.icons {
			display: flex;
			flex-direction: row-gap;
		}
	}

	.rightSide {
		flex: 1;

		img {
			height: 600px;
			padding-top: 40px;
		}
	}
`;
