import { useState } from 'react'
import type { Expense } from './types/expense'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import './App.css'

function App() {
  const [expenses] = useState<Expense[]>([])

  // TODO: add handleAddExpense and handleDeleteExpense

  return (
    <div className="app-layout">
      <aside>
        <h1>Expense Manager</h1>
        <ExpenseForm />
      </aside>
      <main>
        <ExpenseList expenses={expenses} />
      </main>
    </div>
  )
}

export default App
