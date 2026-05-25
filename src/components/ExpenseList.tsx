import { useSelector } from 'react-redux'
import type { RootState } from '../store'
import { useExpenseFilter } from '../hooks/useExpenseFilter'
import ExpenseItem from './ExpenseItem'
import ExpenseSummary from './ExpenseSummary'
import FilterBar from './FilterBar'

interface ExpenseListProps {
  query: string
}

function ExpenseList({ query }: ExpenseListProps) {
  const items = useSelector((state: RootState) => state.expenses.items)
  const activeCategory = useSelector((state: RootState) => state.filters.category)
  const loading = useSelector((state: RootState) => state.ui.loading)

  const filteredByCategory = activeCategory
    ? items.filter(e => e.category === activeCategory)
    : items
  const { filteredExpenses, total } = useExpenseFilter(filteredByCategory, query)

  if (loading) {
    return <p className="loading-indicator">Loading expenses...</p>
  }

  return (
    <div className="expense-list">
      <FilterBar />
      <ExpenseSummary total={total} />
      <h2>Expenses</h2>
      {filteredExpenses.length === 0 ? (
        <p className="empty-state">No expenses yet.</p>
      ) : (
        <ul>
          {filteredExpenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExpenseList
