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
			flex-direction: row;

			.social {
				display: flex;
				flex-direction: row;
			}
		}
	}

	.rightSide {
		flex: 1;
		display: flex;
		justify-content: center;
		align-items: flex-start;

		img {
			height: 600px;
			margin-top: -40px;
		}
	}

	@media (max-width: 1024px) {
		padding: 50px 50px;
	}

	@media (max-width: 768px) {
		flex-direction: column;
		position: relative;
		top: auto;
		left: auto;
		-webkit-transform: none;
		transform: none;
	}

	@media (max-width: 425px) {
		padding: 100px 20px;

		.leftSide {
			text-align: center;

			h4 span {
				display: none;
			}

			.icons {
				flex-direction: column;
				justify-content: center;
				align-items: center;
			}

			.observation {
				margin-top: 20px;
				font-size: 11px;
			}
		}

		.rightSide {
			img {
				height: 300px;
				margin-top: 0px;
			}
		}
	}
`;
