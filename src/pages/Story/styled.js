import styled from 'styled-components';

export const PageArea = styled.div`
	padding: 100px 200px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.area {
		width: inherit;
		padding: inherit;
		display: flex;
		flex-direction: row;
		align-items: flex-start;
		justify-content: space-between;
		margin-top: 30px;
		padding: 0;

		.leftSide {
			flex: 1;

			p {
				margin-top: 20px;
				font-size: 15px;
				padding-right: 20px;
				text-align: justify;
			}
		}

		.rightSide {
			flex: 1.1;
		}
	}

	@media screen and (max-width: 1024px) {
		padding: 100px 50px;
	}

	@media screen and (max-width: 425px) {
		.area {
			flex-direction: column;

			.leftSide {
				p {
					margin-top: 0;
					margin-bottom: 20px;
					padding-right: 0;
					text-align: center;
				}
			}

			.rightSide {
				margin-top: 20px;
				flex: 1;
			}
		}
	}
`;
