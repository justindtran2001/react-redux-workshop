import { ADD_EXPENSE, UPDATE_EXPENSE, DELETE_EXPENSE, SET_EDITING_EXPENSE_ID } from './actionTypes'
import type { Expense } from '../../types/expense'

export function addExpense(payload: Omit<Expense, 'id'>) {
  return { type: ADD_EXPENSE, payload } as const
}

export function updateExpense(payload: Expense) {
  return { type: UPDATE_EXPENSE, payload } as const
}

export function deleteExpense(payload: string) {
  return { type: DELETE_EXPENSE, payload } as const
}

export function setEditingExpenseId(payload: string | null) {
  return { type: SET_EDITING_EXPENSE_ID, payload } as const
}

export type ExpenseAction =
  | ReturnType<typeof addExpense>
  | ReturnType<typeof updateExpense>
  | ReturnType<typeof deleteExpense>
  | ReturnType<typeof setEditingExpenseId>
