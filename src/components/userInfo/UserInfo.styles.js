import styled from 'styled-components';

export const Section = styled.section`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	border: 1px solid #999;
	padding: 10px;
	border-radius: 20px;
	box-shadow: 0px 2px 2px 1.5px rgba(0, 0, 0, 0.3);
	width: 100%;
	@media (min-width: 768px) {
		justify-content: space-between;
	}
`;

export const UserImg = styled.div`
	margin-bottom: 30px;
`;

export const InfoDiv = styled.div`
	padding-bottom: 10px;
`;

export const UserInfoContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	width: 100%;
	margin-bottom: 40px;
`;
