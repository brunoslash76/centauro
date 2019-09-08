import styled from 'styled-components';
import folder from './folder.png';

export const RepoContainer = styled.div`
    padding: 20px 20px 20px 0;
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    border-bottom: 1px solid #aaa;
`;

export const Div = styled.div`
    display: flex;
`;

export const Icon = styled.div`
    background-image: url(${folder});
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    height: 20px;
    width: 20px;
    margin-right: 20px;
`;