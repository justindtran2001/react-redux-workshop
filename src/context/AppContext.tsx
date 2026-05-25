import { createContext, useContext, useReducer, useState, useEffect, type ReactNode } from 'react'
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

const AppContext = createContext<AppContextValue | null>(null)

// TODO: A custom hook wraps useContext with a null guard — a small pattern with big payoff
//       Any component can call useAppContext() instead of wiring up useContext + null check.
// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used inside AppProvider')
  return ctx
}

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
