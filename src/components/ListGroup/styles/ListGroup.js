import styled, { css } from "styled-components/macro";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: .25rem;
`;

export const Item = styled.div`
    padding: .75rem 1.25rem;
    border: 1px solid rgba(0,0,0,.125);
    background-color: ${props => props.active ? '#f3f3f3':'#ffffff'};
    
    &:first-child {
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
    }
    
    &+& {
        border-top-width: 0;
    }
`;


export const Name = styled.div`
    font-size: 1.2rem;
`;

export const Username = styled.div`
    color: #828282;
    padding: .75rem 0;
    border-bottom: 1px dotted #cccccc26;
`;

export const Block = styled.div`
    ${props => props.align === 'center' && css`
        @media only screen and (min-width: 569px) {
            justify-content: space-between;
            display: flex;
            align-items: center;
        }
        `
    }
`;


export const Contact = styled.a`
    display: flex;
    align-items: center;
    height: 2.5rem;
    text-decoration: none;
    color: ${({active}) => active ? 'rgba(0,0,0,0.75)' : '#828282'};

    ${props => props.active && css`
        box-shadow: inset 0px -2px 0px 0px rgba(0,0,0,0.75);
    `}
`;
