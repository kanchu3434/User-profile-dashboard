interface Props {
  query: string;
  onChange: (val: string) => void;
}

const SearchBar: React.FC<Props> = ({ query, onChange }) => (
  <input
    type="text"
    placeholder="Search by name or email..."
    className=" placeholder:text-grey-500 p-2 border rounded w-full mb-4 hover:border-transparent hover:bg-purple-600 hover:text-white active:bg-purple-700"
    value={query}
    onChange={e => onChange(e.target.value)}
  />
);

export default SearchBar;
