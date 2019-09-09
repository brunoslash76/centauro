import styled from 'styled-components';
import folder from './img/folder.png';


export const RepoContainer = styled.div`
	padding: 20px 20px 20px 0;
	display: flex;
	align-items: baseline;
	justify-content: space-between;
	border-bottom: 1px solid #aaa;
`;

export const Div = styled.div`
	display: flex;
	cursor: pointer;
	margin-left: 20px;
	padding-right: 20px;
`;

export const Icon = styled.div`
	background-image: url(${folder});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	height: 20px;
	width: 20px;
	margin-right: 10px;
	padding-right: 20px;
`;










