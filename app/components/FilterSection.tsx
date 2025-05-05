import React, { useState } from 'react';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

type FilterDropdownProps = {
  label: string;
  options: string[];
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (value: string) => void;
  selected: string | null;
  onClear: () => void;
};

const FilterDropdown: React.FC<FilterDropdownProps> = ({
  label,
  options,
  isOpen,
  onToggle,
  onSelect,
  selected,
  onClear,
}) => {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 transition"
      >
        {selected || label}
        <FaChevronDown
          className={`transition-transform text-gray-800 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="absolute z-10 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
          <ul>
            {options.map((option) => (
              <li
                key={option}
                onClick={() => onSelect(option)}
                className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 cursor-pointer"
              >
                {option}
              </li>
            ))}
          </ul>
          <div className="px-4 py-2 mt-2 text-sm text-gray-500 cursor-pointer hover:bg-gray-100" onClick={onClear}>
            <FaTimes className="inline mr-2" /> Clear Filter
          </div>
        </div>
      )}
    </div>
  );
};

const FilterSection: React.FC = () => {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [selections, setSelections] = useState<{
    [key: string]: string | null;
  }>({
    Year: null,
    Genre: null,
    Artist: null,
  });

  const handleToggle = (dropdownName: string) => {
    setOpenDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  const handleSelect = (dropdownName: string, value: string) => {
    setSelections((prev) => ({ ...prev, [dropdownName]: value }));
    setOpenDropdown(null); // close after selection
  };

  const handleClearAll = () => {
    setSelections({
      Year: null,
      Genre: null,
      Artist: null,
    });
  };

  const handleClearCategory = (category: string) => {
    setSelections((prev) => ({
      ...prev,
      [category]: null,
    }));
  };

  const handleApplyFilters = () => {
    // You can integrate your backend logic here
    console.log('Applying filters:', selections);
  };

  return (
    <div className="flex flex-wrap gap-6 mb-6">
      {/* Filter action buttons */}
      <div className="flex gap-4">
        <button
          onClick={handleClearAll}
          className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          Clear All Filters
        </button>
        <button
          onClick={handleApplyFilters}
          className="px-4 py-2 text-sm font-medium text-gray-800 bg-gray-200 rounded-full hover:bg-gray-300 transition"
        >
          Apply Filters
        </button>
      </div>

      {/* Filter dropdowns */}
      <div className="flex gap-4">
        <FilterDropdown
          label="Year"
          options={['2024', '2023', '2022']}
          isOpen={openDropdown === 'Year'}
          onToggle={() => handleToggle('Year')}
          onSelect={(val) => handleSelect('Year', val)}
          selected={selections.Year}
          onClear={() => handleClearCategory('Year')}
        />
        <FilterDropdown
          label="Genre"
          options={['Rock', 'Pop', 'Jazz']}
          isOpen={openDropdown === 'Genre'}
          onToggle={() => handleToggle('Genre')}
          onSelect={(val) => handleSelect('Genre', val)}
          selected={selections.Genre}
          onClear={() => handleClearCategory('Genre')}
        />
        <FilterDropdown
          label="Artist"
          options={['Artist A', 'Artist B', 'Artist C']}
          isOpen={openDropdown === 'Artist'}
          onToggle={() => handleToggle('Artist')}
          onSelect={(val) => handleSelect('Artist', val)}
          selected={selections.Artist}
          onClear={() => handleClearCategory('Artist')}
        />
      </div>
    </div>
  );
};

export default FilterSection;
