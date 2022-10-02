import React from 'react';

export const SearchComponent = ({handleSearchQuery}) => {
    const [searchValue, setSearchValue] = React.useState('');

    
    
    return (
        <div className='search-form'>
            <form onSubmit={(e) => handleSearchQuery(e, searchValue)}>
                <input className='search-input' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
                <button type='submit' className='search-button'>Search Pokemon</button>
            </form>
        </div>
    )
}