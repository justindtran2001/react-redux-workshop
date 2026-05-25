import { useState } from 'react'
import { CATEGORIES } from '../constants'
import type { Expense } from '../types/expense'

interface ExpenseFormProps {
  onAddExpense: (expense: Omit<Expense, 'id'>) => void
}

function ExpenseForm({ onAddExpense }: ExpenseFormProps) {
  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState('')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!description || !amount || !category) return
    onAddExpense({
      description,
      amount: parseFloat(amount),
      category,
      date: new Date().toISOString().split('T')[0],
    })
    setDescription('')
    setAmount('')
    setCategory('')
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>Add Expense</h2>
      <label>
        Name
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="e.g. Lunch"
          required
        />
      </label>
      <label>
        Amount ($)
        <input
          value={amount}
          onChange={e => setAmount(e.target.value)}
          type="number"
          placeholder="0.00"
          min={0}
          step="0.01"
          required
        />
      </label>
      <label>
        Category
        <select value={category} onChange={e => setCategory(e.target.value)} required>
          <option value="">Select category</option>
          {CATEGORIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
      <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm
