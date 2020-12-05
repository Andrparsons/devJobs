import { useState, useContext } from "react";
import styles from "./Header.module.css";

import SearchInput from "../SearchInput/SearchInput";
import Button from "../Button/Button";
import Icon from "../Icon/Icon";

import { SearchContext } from "../../context/SearchContext";

export default function HeaderInput() {
  const [search, setSearch] = useState("");
  const [place, setPlace] = useState("");
  const [fullTime, setFulltime] = useState(false);
  const { handleQuery } = useContext(SearchContext);

  function submitQuery(e) {
    e.preventDefault();
    handleQuery({
      search: search,
      place: place,
      fullTime: fullTime,
    });
  }

  return (
    <form className={styles.inputGroup}>
      <Icon iconSvg={"./desktop/icon-search.svg"} />
      <SearchInput
        placeholder="Filter by Title"
        value={search}
        setValue={setSearch}
      />
      <div className={styles.divider} />
      <Icon iconSvg={"./desktop/icon-location.svg"} />
      <SearchInput
        placeholder="Filter by Place"
        value={place}
        setValue={setPlace}
      />
      <div className={styles.divider} />

      <label className={styles.checkLabel}>
        <input
          type="checkbox"
          name="full-time"
          className={styles.checkbox}
          checked={fullTime}
          onChange={(e) => setFulltime(e.target.checked)}
        />
        Full Time Only
      </label>
      <Button btnStyle="primary" action={submitQuery}>
        Search
      </Button>
    </form>
  );
}
