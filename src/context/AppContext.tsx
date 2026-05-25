import { createContext, useContext, useState, type ReactNode } from 'react'

export interface AppContextValue {
  currency: 'USD' | 'VND'
  setCurrency: (c: 'USD' | 'VND') => void
  theme: 'light' | 'dark'
  setTheme: (t: 'light' | 'dark') => void
  currencySymbol: string
}

const AppContext = createContext<AppContextValue | null>(null)

// eslint-disable-next-line react-refresh/only-export-components
export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppContext must be used inside AppProvider')
  return ctx
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<'USD' | 'VND'>('USD')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')
  const currencySymbol = currency === 'USD' ? '$' : '₫'

  return (
    <AppContext.Provider value={{ currency, setCurrency, theme, setTheme, currencySymbol }}>
      {children}
    </AppContext.Provider>
  )
}
