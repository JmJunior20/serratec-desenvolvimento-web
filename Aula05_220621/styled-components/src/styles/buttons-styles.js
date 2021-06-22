import styled from 'styled-components';

export const Button = styled.button`
    font-size: 16px;
    margin: 10px;
    padding: 5px 10px;
    border: 2px solid crimson;
    border-radius: 3px;
    cursor: pointer;
    color: ${props => props.primary ? "#fff" : "crimson" };
    background-color: ${props => props.primary ? "crimson" : "#fff"};

    :hover {
        color: ${props => props.primary ? "#fff" : "#crimson" };
        background-color: ${props => props.primary ? "#FF2E58" : "#E8AAEE"};
    }
`;

export const ButtonUm = styled.button`
    color: #fff;
    background-color: #2562FF;
    padding: 8px 16px;
    transition: .3s;
    border-radius: 12px;
    border: none;
    font-size: 16px;    
    font-weight: 500;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;

    :hover {
        background-color: rgb(16, 52, 145);
    }
`;

export const ButtonDois = styled.button`
    color: #1543B7;
    background-color: #E7F3FF;
    border: none;
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    font-family: 'Rubik', sans-serif;
`;