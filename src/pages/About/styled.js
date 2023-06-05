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
		align-items: center;
		justify-content: space-between;
		padding: 0;
		margin-top: 20px;

		.leftSide {
			flex: 1;

			p {
				margin-top: 20px;
				font-size: 16px;
				line-height: 35px;
				text-align: justify;
			}

			.icons {
				display: flex;
				flex-direction: row;
				justify-content: center;

				.social {
					display: flex;
					flex-direction: row;
					justify-content: center;
				}
			}
		}

		.rightSide {
			flex: 1;
			display: flex;
			justify-content: center;
			align-items: flex-end;

			img {
				width: 400px;
				height: auto;
			}
		}
	}

	@media screen and (max-width: 1024px) {
		padding: 100px 50px;

		.area {
			.leftSide {
				p {
					font-size: 15px;
					line-height: 30px;
				}
			}

			.rightSide {
				img {
					width: 400px;
				}
			}
		}
	}

	@media screen and (max-width: 768px) {
		.area {
			flex-direction: column;
			.rightSide {
				margin-top: 30px;
			}
		}
	}

	@media screen and (max-width: 425px) {
		.area {
			.leftSide {
				p {
					text-align: center;
				}

				.icons {
					flex-direction: column;
					align-items: center;
				}
			}

			.rightSide {
				img {
					width: 200px;
				}
			}
		}
	}
`;
