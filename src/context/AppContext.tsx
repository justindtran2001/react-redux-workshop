import { createContext, useReducer, useState, useEffect, type ReactNode } from 'react'
import type { Expense } from '../types/expense'
import { expensesReducer, type ExpenseAction } from '../reducers/expensesReducer'
import { STORAGE_KEY } from '../constants'

export interface AppContextValue {
  expenses: Expense[]
  dispatchExpenses: React.Dispatch<ExpenseAction>
  currency: 'USD' | 'VND'
  setCurrency: (c: 'USD' | 'VND') => void
  theme: 'light' | 'dark'
  setTheme: (t: 'light' | 'dark') => void
  currencySymbol: string
}

export const AppContext = createContext<AppContextValue | null>(null)

// TODO: in 09-custom-hooks, extract a useAppContext() custom hook with a null guard

export function AppProvider({ children }: { children: ReactNode }) {
  const [expenses, dispatchExpenses] = useReducer(
    expensesReducer,
    null,
    () => {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? (JSON.parse(saved) as Expense[]) : []
    },
  )

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses))
  }, [expenses])

  const [currency, setCurrency] = useState<'USD' | 'VND'>('USD')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const currencySymbol = currency === 'USD' ? '$' : '₫'

  return (
    <AppContext.Provider value={{ expenses, dispatchExpenses, currency, setCurrency, theme, setTheme, currencySymbol }}>
      {children}
    </AppContext.Provider>
  )
}
