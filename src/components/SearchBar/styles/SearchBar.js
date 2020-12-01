import styled from "styled-components/macro";

export const Search = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 15px;
    margin-bottom: 15px;
`;

export const Wrap = styled.span`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 3rem;
    height: 100%;
    display: flex;
    justify-content: center;
`;

export const Icon = styled.svg`
    width: 24px;
`;

export const Input = styled.input`
    border: 1px solid #ced4da;
    outline: none;
    width: 100%;
    height: 3rem;
    padding-left: 3rem;
    border-radius: .25rem;

    &:focus{
        border-color: #ccc;
    }
`;