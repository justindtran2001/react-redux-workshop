import { useRef } from 'react'

interface SearchBarProps {
  query: string
  onQueryChange: (query: string) => void
}

function SearchBar({ query, onQueryChange }: SearchBarProps) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)
  // WRONG: const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>()

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    clearTimeout(timerRef.current)
    // WRONG: clearTimeout(timer)
    timerRef.current = setTimeout(() => {
      onQueryChange(e.target.value)
    }, 300)
    // WRONG: setTimer(timerRef.current)
  }

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search expenses..."
        defaultValue={query}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBar
