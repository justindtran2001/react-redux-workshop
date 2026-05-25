import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE, SET_EDITING_EXPENSE_ID, SET_EXPENSES } from './actionTypes'
import type { Reducer } from 'redux'
import type { Expense } from '../../types/expense'
import type { ExpenseAction } from './actions'

export interface ExpensesState {
  items: Expense[]
  editingExpenseId: string | null
}

const initialState: ExpensesState = {
  items: [],
  editingExpenseId: null,
}

export const expensesReducer: Reducer<ExpensesState, ExpenseAction> = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      return { ...state, items: [...state.items, { ...action.payload, id: crypto.randomUUID() }] }
    case UPDATE_EXPENSE:
      return { ...state, items: state.items.map(e => (e.id === action.payload.id ? action.payload : e)) }
    case DELETE_EXPENSE:
      return { ...state, items: state.items.filter(e => e.id !== action.payload) }
    case SET_EDITING_EXPENSE_ID:
      return { ...state, editingExpenseId: action.payload }
    case SET_EXPENSES:
      return { ...state, items: action.payload }
    default:
      return state
  }
}
