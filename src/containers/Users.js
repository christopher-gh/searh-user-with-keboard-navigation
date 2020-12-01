import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ListGroup, SearchBar } from '../components';
import { getUsers, searchUser } from '../redux/actions/users';
import useKeyPress from '../helpers/keyPress';

import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const UsersContainer = () => {
    const dispatch = useDispatch();
    const { searchList, loading } = useSelector(state => state.userReducer);

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    // ************************ Keyboard navgation ************************
    const downPress = useKeyPress('ArrowDown');
    const upPress = useKeyPress('ArrowUp');
    const leftPress = useKeyPress('ArrowLeft');
    const rightPress = useKeyPress('ArrowRight');
    const enterPress = useKeyPress('Enter');
    const [cursor, setCursor] = useState(null);
    const [selectedButton, setSelectedButton] = useState(0);
    const [hovered, setHovered] = useState(undefined);

    useEffect(() => {
        setCursor(null);
    }, [searchList.length, setCursor]);

    // downPress
    useEffect(() => {
        if (searchList.length && downPress) {
            // setSelectedButton(null);
            setCursor( prevState => {
                if(prevState === null) {
                    return 0;
                }

                return prevState < searchList.length - 1 ? prevState + 1 : prevState
            });
        }
    }, [downPress, setSelectedButton, searchList]);

    // upPress
    useEffect(() => {
        if (searchList.length && upPress) {
            // setSelectedButton(null);
            setCursor(prevState => {
                if(prevState === 0) {
                    return null;
                }

                return prevState > 0 ? prevState - 1 : prevState;
            });
        }
    }, [upPress, setSelectedButton, searchList]);

    // leftPress
    useEffect(() => {
        if (searchList.length && leftPress) {
            setSelectedButton(0);
        }
    }, [cursor, leftPress, searchList, setSelectedButton]);

    // rightPress
    useEffect(() => {
        if (searchList.length && rightPress) {
            setSelectedButton(1);
        }
    }, [cursor, rightPress, searchList, setSelectedButton]);

    // enterPress
    useEffect(() => {
        setTimeout(()=>{
            if (searchList.length && enterPress) {
                // setSelected(searchList[cursor]);
                if(selectedButton === 0){
                    window.location = `mailto:${searchList[cursor].email}`;
                }
                if(selectedButton === 1){
                    window.location = `tel:${searchList[cursor].phone}`;
                }
            }
        }, 500);
    }, [cursor, selectedButton, enterPress, searchList]);

    useEffect(() => {
        if (searchList.length && hovered) {
            setCursor(searchList.indexOf(hovered));
        }
    }, [hovered, searchList]);
    // ************************ Keyboard navgation ************************



    const users = loading ? 'Loading...' : searchList.map((item, i) => (
        <ListGroup.Item
            key={item.id}
            item={item}
            active={i === cursor}
            setHovered={setHovered}
        >
            <ListGroup.Name>{item.name}</ListGroup.Name>
            <ListGroup.Username>{item.username}</ListGroup.Username>
            <ListGroup.Block align="center">
                <ListGroup.Contact 
                    active={i === cursor && selectedButton === 0}
                    href={`mailto: ${item.email}`}>
                    <FaEnvelope/>&nbsp;&nbsp;{item.email}
                </ListGroup.Contact>
                <ListGroup.Contact
                    active={i === cursor && selectedButton === 1}
                    href={`tel: ${item.phone}`}>
                    <FaPhoneAlt/>&nbsp;&nbsp;{item.phone}
                </ListGroup.Contact>
            </ListGroup.Block>
        </ListGroup.Item>
    ));

    return (
        <Container>
            <SearchBar active={cursor === null} searchUser={searchUser}/>
            <ListGroup>{users}</ListGroup>
        </Container>
    );
}