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
		flex: 2;

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

		ul {
			display: inline-flex;
			align-items: center;
			justify-content: flex-start;
			list-style-type: none;

			li {
				white-space: nowrap;
				margin-right: 5px;
			}
			margin-bottom: 20px;
		}

		h4 {
			font-size: 18px;
			//margin-bottom: 20px;
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
			height: 500px;
			//margin-top: -40px;
		}
	}

	@media screen and (max-width: 1024px) {
		padding: 50px 50px;

		.rightSide {
			img {
				height: 500px;
			}
		}
	}

	@media screen and (max-width: 768px) {
		flex-direction: column;
		position: relative;
		top: auto;
		left: auto;
		-webkit-transform: none;
		transform: none;

		.leftSide {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			text-align: center;

			.icons {
				margin-left: 20px;
			}
		}
	}

	@media screen and (max-width: 425px) {
		padding: 100px 20px;

		.leftSide {
			text-align: center;

			ul {
				flex-direction: column;
				li {
					margin-bottom: 10px;
				}

				span {
					display: none;
				}
			}

			p {
				white-space: normal;
			}

			.icons {
				flex-direction: column;
				justify-content: center;
				align-items: center;
				margin-left: 0px;
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
