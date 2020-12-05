import { createContext, useState, useEffect } from "react";

export const SearchContext = createContext();

const SearchContextProvider = (props) => {
  const [query, setQuery] = useState({
    search: "",
    place: "",
    fullTime: false,
  });
  const [darkMode, setDarkMode] = useState(false);

  function handleQuery(newValue) {
    setQuery(newValue);
  }

  function onChangeMode(checked) {
    setDarkMode(checked);
  }

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <SearchContext.Provider
      value={{ query, handleQuery, darkMode, onChangeMode }}
    >
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
