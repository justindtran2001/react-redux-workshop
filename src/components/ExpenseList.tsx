import type { Expense } from '../types/expense'
import ExpenseItem from './ExpenseItem'
import ExpenseSummary from './ExpenseSummary'

interface ExpenseListProps {
  expenses: Expense[]
  onDeleteExpense: (id: string) => void
  currencySymbol: string
  total: number
  theme: string
}

function ExpenseList({ expenses, onDeleteExpense, currencySymbol, total, theme }: ExpenseListProps) {
  // TODO: consume currencySymbol, total, and theme from context instead of props
  return (
    <div className="expense-list">
      <ExpenseSummary total={total} currencySymbol={currencySymbol} />
      <h2>Expenses</h2>
      {expenses.length === 0 ? (
        <p className="empty-state">No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map(expense => (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              onDeleteExpense={onDeleteExpense}
              currencySymbol={currencySymbol}
              theme={theme}
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExpenseList
