interface SearchBarProps {
    onSearch: (query: string) => void;
  }
  
  const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => (
    <div className="flex justify-center mt-4 mb-8">
      <input
        type="text"
        placeholder="Pesquisar..."
        className="border border-gray-300 rounded-l px-6 py-2 w-2/3 text-black focus:outline-none"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="bg-blue-600 text-black px-4 py-2 rounded-r">🔍</button>
    </div>
  );
  
  export default SearchBar;