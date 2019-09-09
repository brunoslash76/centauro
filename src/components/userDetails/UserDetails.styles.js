import styled from 'styled-components';
import loading from './img/loading.gif';
import arrowUp from './img/up-arrow.png';
import arrowDown from './img/down-arrow.png';
import folder from './img/folder.png';


export const UserReposContainer = styled.div`
	width: 100%;
	display: flex;
	flex-flow: column;
`;

export const LoadingIcon = styled.div`
	background: url(${loading});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	height: 250px;
	width: 250px;
`;

export const Button = styled.button`
	font-weight: 800;
	color: white;
	outline: transparent;
	border: none;
	font-size: 15px;
	cursor: pointer;
	align-self: flex-end;
`;

export const ArrowUp = styled.div`
	background-image: url(${arrowUp});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	height: 20px;
	width: 20px;
	margin-right: 20px;
`;

export const ArrowDown = styled.div`
	background-image: url(${arrowDown});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	height: 20px;
	width: 20px;
	margin-right: 20px;
`;

export const StaredRepos = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	padding: 20px;
	border: 1px solid rgba(0, 0, 0, .3);
	margin-bottom: 40px;
	border-radius: 20px;
`;

export const StaredProject = styled.div`
	padding: 20px;
	display: flex;
	margin: 0 20px;
`;

export const FolderIcon = styled.div`
    background-image: url(${folder});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 20px;
    width: 20px;
	margin-right: 20px;
	padding-right: 20px;
`;
