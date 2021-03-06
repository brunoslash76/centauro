import styled from 'styled-components';
import folder from './img/folder.png';

export const Section = styled.section`
    display: flex;
    border: 1px solid rgba(0, 0, 0, 0.3);
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, .3);
    width: 90%;
    margin: 20px auto;
    padding: 20px;
    max-width: 1024px;
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

export const Div = styled.div`
    display: flex;
`;