import React from 'react';
import { Container, Item, Name, Username, Block, Contact } from './styles/ListGroup';

export default function ListGroup({ children, ...resProps }) {
    return (
        <Container>{children}</Container>
    )
}

ListGroup.Item = function ListGroupItem({
    children,
    item,
    setSelected,
    setHovered,
    ...resProps
}) {
    return <Item
                onMouseEnter={() => setHovered(item)}
                onMouseLeave={() => setHovered(undefined)}
                {...resProps}
            >{children}</Item>;
};

ListGroup.Name = function ListGroupName({ children, ...resProps }) {
    return (
        <Name>{children}</Name>
    )
};

ListGroup.Username = function ListGroupUsername({ children, ...resProps }) {
    return (
        <Username>{children}</Username>
    )
};

ListGroup.Block = function ListGroupBlock({ children, ...resProps }) {
    return (
        <Block {...resProps}>{children}</Block>
    )
};

ListGroup.Contact = function ListGroupContact({ children, ...resProps }) {
    return (
        <Contact {...resProps}>{children}</Contact>
    )
};