import { useState, useEffect } from 'react'
import { Provider, useDispatch } from 'react-redux'
import { store } from './store'
import { setExpenses } from './store/expenses/actions'
import { setLoading } from './store/ui/actions'
import { fetchExpenses } from './api/expenses'
import { AppProvider, useAppContext } from './context/AppContext'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import SearchBar from './components/SearchBar'
import AppHeader from './components/AppHeader'
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <AppProvider>
        <AppBody />
      </AppProvider>
    </Provider>
  )
}

function AppBody() {
  const [query, setQuery] = useState('')
  const { theme } = useAppContext()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLoading(true))
    fetchExpenses()
      .then(items => {
        dispatch(setExpenses(items))
      })
      .finally(() => {
        dispatch(setLoading(false))
      })
  }, [dispatch])

  return (
    <div className="app-layout" data-theme={theme}>
      <aside>
        <h1>Expense Manager</h1>
        <AppHeader />
        <ExpenseForm />
      </aside>
      <main>
        <SearchBar query={query} onQueryChange={setQuery} />
        <ExpenseList query={query} />
      </main>
    </div>
  )
}

export default App
