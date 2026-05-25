import type { Expense } from '../types/expense'

export type ExpenseAction =
  | { type: 'ADD_EXPENSE'; payload: Omit<Expense, 'id'> }
  | { type: 'DELETE_EXPENSE'; payload: string }

export function expensesReducer(state: Expense[], action: ExpenseAction): Expense[] {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, { ...action.payload, id: crypto.randomUUID() }]
    case 'DELETE_EXPENSE':
      return state.filter(e => e.id !== action.payload)
    default:
      return state
  }
}
