import { configureStore } from '@reduxjs/toolkit'
import type { Reducer } from 'redux'
import { useDispatch } from 'react-redux'
import expensesReducer from './slices/expensesSlice'
import { filtersReducer } from './filters/reducer'
import { uiReducer } from './ui/reducer'
import type { FiltersState } from './filters/reducer'
import type { UiState } from './ui/reducer'
import { STORAGE_KEY } from '../constants'

export const store = configureStore({
  reducer: {
    expenses: expensesReducer,
    // TODO: Replace filters and ui with createSlice reducers after hands-on #3
    filters: filtersReducer as Reducer<FiltersState>,
    ui: uiReducer as Reducer<UiState>,
  },
})

let hydrated = false

store.subscribe(() => {
  const items = store.getState().expenses.items
  if (!hydrated) {
    if (items.length === 0) return
    hydrated = true
  }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
