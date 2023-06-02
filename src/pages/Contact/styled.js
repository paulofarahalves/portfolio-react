import styled from 'styled-components';
import { primaryColor, secondaryColor, textColor } from '../../helpers/colors';

export const PageArea = styled.div`
	padding: 100px 0px 0px 0px;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	form {
		width: 500px;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		margin-top: 10px;

		input,
		textarea {
			width: 400px;
			background-color: ${secondaryColor};
			color: #000;
			border: none;
			border: 2px solid ${primaryColor};
			border-radius: 10px;
			padding: 10px;
			margin-top: 20px;
			outline: none;
			color: ${textColor};
		}

		input::placeholder,
		textarea::placeholder {
			color: #aaa;
		}

		input {
			height: 50px;
		}

		textarea {
			height: 250px;
			resize: none;
		}

		input[type='submit'] {
			cursor: pointer;
			width: 100px;
		}

		input[type='submit']:hover {
			background-color: ${primaryColor};
		}
	}

	@media screen and (max-width: 425px) {
		padding: 100px 20px;

		form {
			width: 100%;

			input,
			textarea {
				width: 100%;
			}
			input[type='submit'] {
				width: 100%;
			}
		}
	}
`;
