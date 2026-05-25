import { createStore, compose, type Reducer } from 'redux'
import { expensesReducer } from './expenses/reducer'
import { filtersReducer } from './filters/reducer'
import { uiReducer } from './ui/reducer'
import type { ExpensesState } from './expenses/reducer'
import type { FiltersState } from './filters/reducer'
import type { UiState } from './ui/reducer'
import { STORAGE_KEY } from '../constants'

const rootReducer: Reducer<RootState> = (state, action) => ({
  expenses: expensesReducer(state?.expenses, action as never),
  filters: filtersReducer(state?.filters, action as never),
  ui: uiReducer(state?.ui, action as never),
})

export interface RootState {
  expenses: ExpensesState
  filters: FiltersState
  ui: UiState
}

const initialState: RootState = {
  expenses: { items: [], editingExpenseId: null },
  filters: { category: null },
  ui: { loading: false, modalOpen: false },
}

const composeEnhancers =
  (typeof window !== 'undefined' && (window as { __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose }).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export const store = createStore(rootReducer, initialState, composeEnhancers())

let hydrated = false

store.subscribe(() => {
  const items = store.getState().expenses.items
  if (!hydrated) {
    if (items.length === 0) return
    hydrated = true
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
})

export type AppDispatch = typeof store.dispatch
