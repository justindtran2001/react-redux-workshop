import { useMemo } from 'react'
import type { Expense } from '../types/expense'
import { filterExpenses } from '../utils/filterExpenses'

export function useExpenseFilter(expenses: Expense[], query: string) {
  const filteredExpenses = useMemo(
    () => filterExpenses(expenses, query),
    [expenses, query],
  )

  const total = useMemo(
    () => filteredExpenses.reduce((sum, e) => sum + e.amount, 0),
    [filteredExpenses],
  )

  return { filteredExpenses, total }
}
