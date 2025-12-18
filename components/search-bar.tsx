'use client'
import { useState } from "react";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Select, SelectSection, SelectItem } from "@heroui/select";

interface SearchBarProps {
  placeholder?: string;
  filters?: string[];
  onSearch?: (query: string, filter: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Buscar...",
  filters = [],
  onSearch,
}) => {
  const [query, setQuery] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>(filters[0] || "");

  const handleSearch = () => {
    if (onSearch) onSearch(query, selectedFilter);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 w-full">
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="flex-1"
      />

      {filters.length > 0 && (
        <Select
          onSelectionChange={(val) => setSelectedFilter(val as string)}
          className="w-[150px]"
        >
          <SelectSection>
            {filters.map((filter) => (
              <SelectItem key={filter} id={filter}>
                {filter}
              </SelectItem>
            ))}
          </SelectSection>
        </Select>
      )}

      <Button
        onPress={handleSearch}
        className="bg-blue-500 hover:bg-blue-600 text-white"
      >
        Buscar
      </Button>
    </div>
  );
};

export default SearchBar;
