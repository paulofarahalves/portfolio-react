import styled from 'styled-components';
import { backgroundColor, primaryColor } from '../../helpers/colors';

export const ModalItem = styled.div`
	#background {
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background-color: rgb(0, 0, 0, 0.3);
		z-index: 1000;
	}

	#close {
		position: fixed;
		top: 0;
		right: 0;
		margin: 2px;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		text-align: center;
		font-weight: bold;
		cursor: pointer;
		border: none;
		font-family: 'Arial';
		font-size: 20px;
		color: ${primaryColor};

		&:hover {
			background-color: rgb(50, 50, 50, 0.6);
		}
	}

	button {
		background-color: transparent;
	}

	#modal {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 900px;
		background-color: ${backgroundColor};
		border-radius: 10px;
		color: black;
		padding: 30px 50px 20px 30px;
		border: 2px solid ${primaryColor};
		font-size: 15px;
		text-align: justify;

		#description,
		#observation,
		#comment {
			font-style: italic;
			margin-top: 15px;
		}

		ul {
			list-style-type: '→';

			li {
				margin-top: 8px;
				margin-left: 15px;
				padding-left: 10px;
			}
		}
	}

	@media screen and (max-width: 768px) {
		#modal {
			width: 95%;
			font-size: 13px;
		}
	}

	@media screen and (max-width: 425px) {
		#modal {
			position: absolute;
			top: 50%;
			left: 50%;
			height: 90%;
			overflow-y: auto;
			text-align: center;
		}
	}
`;
