import type { Expense } from '../types/expense'
import ExpenseItem from './ExpenseItem'

interface ExpenseListProps {
  expenses: Expense[]
  onDeleteExpense: (id: string) => void
}

function ExpenseList({ expenses, onDeleteExpense }: ExpenseListProps) {
  return (
    <div className="expense-list">
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
            />
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExpenseList
