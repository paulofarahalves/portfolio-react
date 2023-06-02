import styled from 'styled-components';
import { primaryColor } from '../../../helpers/colors';

export const IconItem = styled.div`
	a {
		border: 3px solid ${primaryColor};
		border-radius: 50%;
		width: 50px;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 30px 20px 20px 0px;
		cursor: pointer;
		color: ${primaryColor};

		transition: all linear 0.1s;

		&.resume {
			width: 120px;
			border-radius: 0;
			border-radius: 20px;
		}

		&.location {
			width: 100px;
			border-radius: 0;
			border-radius: 20px;
		}

		&.icon:hover {
			background-color: ${primaryColor};
		}

		span {
			margin-left: 5px;
		}
	}

	@media screen and (max-width: 425px) {
		a {
			margin: 20px 10px 0px 10px;
			width: 40px;
			height: 40px;
		}
	}
`;
