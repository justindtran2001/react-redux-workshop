import { createStore, compose, type Reducer } from 'redux'
import { expensesReducer } from './expenses/reducer'
import type { ExpensesState } from './expenses/reducer'
import { STORAGE_KEY } from '../constants'
import type { ExpenseAction } from './expenses/actions'

const rootReducer: Reducer<RootState, ExpenseAction> = (state = { expenses: { items: [], editingExpenseId: null } }, action) => ({
  expenses: expensesReducer(state.expenses, action),
})

export interface RootState {
  expenses: ExpensesState
}

function loadState(): RootState {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return { expenses: saved ? { items: JSON.parse(saved) as never[], editingExpenseId: null } : { items: [], editingExpenseId: null } }
  } catch {
    return { expenses: { items: [], editingExpenseId: null } }
  }
}

const composeEnhancers =
  (typeof window !== 'undefined' && (window as { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose }).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, loadState(), composeEnhancers())

store.subscribe(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState().expenses.items))
})

export type AppDispatch = typeof store.dispatch
