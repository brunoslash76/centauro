import styled from 'styled-components';
import emptyStar from './img/empty_star.png';
import star from './img/star.png';

export const StarCountContainer = styled.div`
	display: flex;
	border: 1px solid rgba(0, 0, 0, 0.3);
	border-radius: 5px;
	align-items: center;
`;

export const StarContainer = styled.div`
	padding: 10px;
	margin: 0;
	border-right: 1px solid rgba(0, 0, 0, 0.3);
`;

export const CountContainer = styled.div`
	padding: 10px;
`;

export const EmptyStar = styled.div`
	background-image: url(${emptyStar});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	height: 20px;
	width: 20px;
	margin-right: 20px;
`;

export const Star = styled.div`
	background-image: url(${star});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	height: 20px;
	width: 20px;
	margin-right: 20px;
`;
