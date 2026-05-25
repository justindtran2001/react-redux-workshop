interface SearchBarProps {
  query: string
  onQueryChange: (query: string) => void
}

function SearchBar({ query, onQueryChange }: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search expenses..."
        value={query}
        onChange={e => onQueryChange(e.target.value)}
      />
    </div>
  )
}

export default SearchBar
