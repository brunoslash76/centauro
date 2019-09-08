import styled from 'styled-components';
import loading from './loading.gif';

export const Section = styled.section`
    display: flex;
    justify-content: space-between;
	border: 1px solid #999;
	padding: 10px;
	border-radius: 20px;
	box-shadow: 0px 2px 2px 1.5px rgba(0, 0, 0, 0.3);
	width: 100%;
`;

export const UserInfo = styled.div`
	display: flex;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 40px;
`;

export const UserReposContainer = styled.div`
	width: 100%;
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
	width: 150px;
	height: 60px;
	background-color: orange;
	font-weight: 800;
	color: white;
	outline: transparent;
	border: none;
	font-size: 15px;
`;