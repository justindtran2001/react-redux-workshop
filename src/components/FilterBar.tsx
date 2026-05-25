import { CATEGORIES } from '../constants'

// TODO: Import useDispatch and useSelector from react-redux
// TODO: Import setFilter and clearFilters from '../store/filters/actions'
// TODO: Import RootState from '../store'

function FilterBar() {
  // TODO: Get dispatch from useDispatch()
  // TODO: Get activeCategory from useSelector((state: RootState) => state.filters.category)

  const activeCategory = null // placeholder — remove when wired

  function handleCategoryClick(category: string) {
    // TODO: If category === activeCategory, dispatch clearFilters(); else dispatch setFilter(category)
    console.log('Filter by:', category) // placeholder
  }

  function handleClear() {
    // TODO: dispatch clearFilters()
    console.log('Clear filters') // placeholder
  }

  return (
    <div className="filter-bar">
      <span className="filter-bar-label">Filter by category:</span>
      <div className="filter-bar-chips">
        {CATEGORIES.map(category => (
          <button
            key={category}
            className={`filter-chip${activeCategory === category ? ' active' : ''}`}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {activeCategory && (
        <button className="filter-clear-btn" onClick={handleClear}>
          Clear filter
        </button>
      )}
    </div>
  )
}

export default FilterBar
