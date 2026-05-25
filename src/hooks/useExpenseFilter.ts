import { useMemo } from 'react'
import { useAppContext } from '../context/AppContext'
import { filterExpenses } from '../utils/filterExpenses'

// TODO: A custom hook composes other hooks into a reusable unit.
//       Here, useExpenseFilter combines useAppContext + useMemo to derive filtered data.
//       Try creating your own custom hook — e.g. useCurrencyFormat() or useTheme().
export function useExpenseFilter(query: string) {
  const { expenses } = useAppContext()

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
