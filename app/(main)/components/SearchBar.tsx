// app/discover/components/SearchBar.tsx
import { FaSearch } from 'react-icons/fa';
import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  return (
    <div className="searchDiv">
      {/* <FaSearch size={24} /> */}
      <CiSearch size={24} />

    </div>
  );
};

export default SearchBar;