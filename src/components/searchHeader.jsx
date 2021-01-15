import React from 'react';

const SearchHeader = (props) => {

    const inputRef = React.createRef();

    const onSubmit = e => {
        e.preventDefault();
        const searchValue = inputRef.current.value;
        //검색 값이 있으면 검색콜백 호출
        searchValue && props.search(searchValue);
        inputRef.current.value = '';
    };

    return <>
        <img src="./public/images/logo.png"></img>
        <form onSubmit={onSubmit}>
            <input ref={inputRef} type="text" placeholder="Search..." />
            <button>search</button>
        </form>

    </>
};

export default SearchHeader;