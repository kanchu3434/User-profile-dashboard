interface Props {
  query: string;
  onChange: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onChange }) => (
  <input
    type="text"
    placeholder="Search by name or email..."
    className="p-2 border rounded w-full mb-4"
    value={query}
    onChange={e => onChange(e.target.value)}
  />
);

export default SearchBar;
