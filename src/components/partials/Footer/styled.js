import styled from 'styled-components';
import { primaryColor, secondaryColor } from '../../../helpers/colors';

export const FooterArea = styled.div`
	width: 100%;
	height: 60px;
	background-color: ${secondaryColor};
	margin-top: auto;

	.container {
		width: 100%;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
		cursor: pointer;
		font-size: 12px;

		a {
			margin: 20px 50px 20px 50px;
			display: flex;
			justify-content: center;
			align-items: center;

			&:hover {
				color: ${primaryColor};
			}

			span {
				margin-left: 5px;
				color: inherit;
			}
		}
	}

	@media screen and (max-width: 425px) {
		height: auto;
		.container {
			flex-direction: column;
		}
	}
`;
