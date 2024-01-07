import { useState } from "react";
import styles from "./searchBar.module.css";
const SearchFormContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    // Implement your search logic here, for example, fetching data from MongoDB
    console.log(`Searching for: ${searchTerm}`);
    // Add your MongoDB search logic here
  };
  const handleInputChange = (value) => {
    setSearchTerm(value);
  };
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <img className={styles.searchIcon} alt="" src="/searchIcon.svg" />
        <input
          className={styles.parent}
          type="text"
          placeholder="Search destinations, hotels"
          value={searchTerm}
          onChange={(e) => handleInputChange(e.target.value)}
        />
        <button className={styles.searchWrapper} onClick={handleSearch}>
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchFormContainer;
