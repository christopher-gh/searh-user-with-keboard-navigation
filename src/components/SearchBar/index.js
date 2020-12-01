import React, { useRef, useEffect } from 'react';
import { Search, Wrap, Icon, Input } from './styles/SearchBar';
import { useDispatch } from 'react-redux';

export default function SearchBar({ searchUser, active, ...resProps }) {
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
        if (active) {
            inputRef.current.focus();
        }else{
            inputRef.current.blur();
        }
    }, [active]);

    return (
        <Search>
            <Wrap>
                <Icon aria-label="MagnifyingGlass" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" xmlns="http://www.w3.org/2000/Icon" role="presentation" focusable="false" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid meet"><path d="M24.064 21.235l3.35 3.35a2 2 0 0 1-2.828 2.83l-3.35-3.351A10.95 10.95 0 0 1 15 26C8.924 26 4 21.076 4 15S8.924 4 15 4s11 4.924 11 11a10.95 10.95 0 0 1-1.936 6.235zM22 15a7 7 0 0 0-7-7 7 7 0 0 0-7 7 7 7 0 0 0 7 7 7 7 0 0 0 7-7z"></path></Icon>
            </Wrap>
            <Input ref={inputRef} onChange={(e) => dispatch(searchUser(e.target.value))} placeholder="Search user"/>
        </Search>
    )
}