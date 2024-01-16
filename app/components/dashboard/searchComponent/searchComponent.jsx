import styles from "./searchComponent.module.css";

import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className={styles.container}>
      <MdSearch placeholder="Search for a user" />
      <input type="text" placeholder={placeholder} className={styles.input} />
    </div>
  );
};

export default Search;
