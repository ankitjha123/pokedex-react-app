import React from 'react';
import logo from './logo.svg';
import './App.css';
import { SearchComponent } from './components/search';
import { useLoadData } from './custom-hooks/useLoadData';
import { Details } from './components/details';

function App() {
  
  const [searchQuery, setSearchQuery] = React.useState('')

  const handleSearchQuery = (e, searchValue) => {
    e.preventDefault();
    setSearchQuery(searchValue)
  }

  
  const pokedata =  useLoadData(searchQuery.toLowerCase())

  console.log(pokedata.pokeData);

  return (
    <div className="App">
      <header className="App-header">
        <SearchComponent handleSearchQuery={handleSearchQuery}/>
        {pokedata.loading &&  <div className='pokemon-details-container'>loading . . .</div>}
        {!pokedata.loading && searchQuery && <>
          <h3>{searchQuery}</h3>
          <Details pokedata = {pokedata}></Details>
          </>}
      </header>
    </div>
  );
}

export default App;
