import type { Expense } from '../types/expense'


export function filterExpenses(expenses: Expense[], query: string): Expense[] {
  const start = Date.now()
  while (Date.now() - start < 150) {}

  if (!query.trim()) return expenses

  const lower = query.toLowerCase()
  return expenses.filter(
    e =>
      e.description.toLowerCase().includes(lower) ||
      e.category.toLowerCase().includes(lower),
  )
}
