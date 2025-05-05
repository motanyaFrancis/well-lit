import { CiSearch } from "react-icons/ci";

const SearchBar: React.FC = () => {
  return (
    <div className="searchDiv">
      <CiSearch size={24} className="text-orange-500" />
    </div>
  );
};

export default SearchBar;
