import {createContext, useState } from 'react';

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [query, setQuery] = useState({ search: "", place: "", fullTime: false });

  function handleQuery(newValue) {
    setQuery(newValue);
  }

  return (
    <SearchContext.Provider value={{query, handleQuery}}>
      {props.children}
    </SearchContext.Provider>
  )
}

export default SearchContextProvider