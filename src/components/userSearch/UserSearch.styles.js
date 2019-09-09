import styled from 'styled-components';
import loading from './img/loading.gif';

export const Header = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	padding: 20px 40px;
	border: 1px solid #999;
	border-radius: 10px;
	box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.3);
	margin-bottom: 40px;
	flex-wrap: wrap;
`;

export const Button = styled.button`
	background-color: orange;
	cursor: pointer;
	color: white;
	font-weight: 400;
	height: 38px;
	width: 100%;
	border: none;
	border-radius: 10px;
	font-size: 20px;
	outline: transparent;
	
	@media (min-width: 768px) {
		width: 150px;
	}
`;

export const InputSearchCOntainer = styled.div`
	position: relative;
	width: 100%;
	margin-bottom: 40px;
	@media (min-width: 768px) {
		width: 60%;
		margin: 0;
	}
`;

export const Input = styled.input`
	outline: transparent;
	border: none;
	border-radius: 20px;
	box-shadow: 0px 2px 2px 1.5px rgba(0, 0, 0, 0.2);
	width: 100%;
	height: 38px;
	margin-right: 10px;
	padding-left: 20px;
	font-size: 20px;
	@media (min-width: 768px) {
		margin: 0;
	}
`;

export const LoadingIcon = styled.div`
	background: url(${loading});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	position: absolute;
	right: 15px;
	height: 50px;
	width: 50px;
	top: -7px;
`;

export const ClearInoutBtn = styled.button`
	border: none;
	border-radius: 50%;
	height: 20px;
	width: 20px;
	background-color: #cfcece;
	position: absolute;
	right: 10px;
	top: 9px;
	color: white;
	font-weight: 800;
	outline: transparent;
	cursor: pointer;
`;
