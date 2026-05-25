import type { Expense } from '../types/expense'
import { STORAGE_KEY } from '../constants'

const SAMPLE_EXPENSES: Expense[] = [
  { id: '1', description: 'Lunch at cafe', amount: 15.5, category: 'Food', date: '2024-06-10' },
  { id: '2', description: 'Weekly bus pass', amount: 45, category: 'Transport', date: '2024-06-09' },
  { id: '3', description: 'Room rent', amount: 1200, category: 'Housing', date: '2024-06-01' },
  { id: '4', description: 'Groceries', amount: 62.3, category: 'Food', date: '2024-06-08' },
  { id: '5', description: 'Gas bill', amount: 85, category: 'Housing', date: '2024-06-05' },
  { id: '6', description: 'Uber ride', amount: 12.75, category: 'Transport', date: '2024-06-07' },
]

export async function fetchExpenses(): Promise<Expense[]> {
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
}
