import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { Expense } from '../../types/expense'
import { STORAGE_KEY } from '../../constants'

const SAMPLE_EXPENSES: Expense[] = [
  { id: '1', description: 'Lunch at cafe', amount: 15.5, category: 'Food', date: '2024-06-10' },
  { id: '2', description: 'Weekly bus pass', amount: 45, category: 'Transport', date: '2024-06-09' },
  { id: '3', description: 'Room rent', amount: 1200, category: 'Housing', date: '2024-06-01' },
  { id: '4', description: 'Groceries', amount: 62.3, category: 'Food', date: '2024-06-08' },
  { id: '5', description: 'Gas bill', amount: 85, category: 'Housing', date: '2024-06-05' },
  { id: '6', description: 'Uber ride', amount: 12.75, category: 'Transport', date: '2024-06-07' },
]

export const fetchExpenses = createAsyncThunk('expenses/fetchExpenses', async () => {
  await new Promise(resolve => setTimeout(resolve, 1000))

  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved) {
      return JSON.parse(saved) as Expense[]
    }
  } catch {
    // ignore parse errors
  }

  return SAMPLE_EXPENSES
})

interface ExpensesState {
  items: Expense[]
  editingExpenseId: string | null
  loading: boolean
}

const initialState: ExpensesState = {
  items: [],
  editingExpenseId: null,
  loading: false,
}

const expensesSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense(state, action: { payload: Omit<Expense, 'id'> }) {
      state.items.push({ ...action.payload, id: crypto.randomUUID() })
    },
    updateExpense(state, action: { payload: Expense }) {
      const idx = state.items.findIndex(e => e.id === action.payload.id)
      if (idx !== -1) state.items[idx] = action.payload
    },
    deleteExpense(state, action: { payload: string }) {
      state.items = state.items.filter(e => e.id !== action.payload)
    },
    setEditingExpenseId(state, action: { payload: string | null }) {
      state.editingExpenseId = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchExpenses.pending, state => {
        state.loading = true
      })
      .addCase(fetchExpenses.fulfilled, (state, action) => {
        state.loading = false
        state.items = action.payload
      })
  },
})

export const { addExpense, updateExpense, deleteExpense, setEditingExpenseId } = expensesSlice.actions
export default expensesSlice.reducer
