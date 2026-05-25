import { useReducer, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../store'
import { addExpense, updateExpense, setEditingExpenseId } from '../store/expenses/actions'
import { formReducer, initialFormState } from '../reducers/formReducer'
import { CATEGORIES } from '../constants'

function ExpenseForm() {
  const dispatch = useDispatch()
  const editingExpenseId = useSelector((state: RootState) => state.expenses.editingExpenseId)
  const expenses = useSelector((state: RootState) => state.expenses.items)

  const [form, formDispatch] = useReducer(formReducer, initialFormState)

  useEffect(() => {
    if (editingExpenseId) {
      const editingExpense = expenses.find(e => e.id === editingExpenseId)
      if (editingExpense) {
        formDispatch({
          type: 'LOAD_FORM',
          payload: {
            description: editingExpense.description,
            amount: String(editingExpense.amount),
            category: editingExpense.category,
            error: '',
          },
        })
      }
    } else {
      formDispatch({ type: 'RESET' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingExpenseId])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!form.description || !form.amount || !form.category) return

    if (editingExpenseId) {
      dispatch(updateExpense({
        id: editingExpenseId,
        description: form.description,
        amount: parseFloat(form.amount),
        category: form.category,
        date: new Date().toISOString().split('T')[0],
      }))
      dispatch(setEditingExpenseId(null))
    } else {
      dispatch(addExpense({
        description: form.description,
        amount: parseFloat(form.amount),
        category: form.category,
        date: new Date().toISOString().split('T')[0],
      }))
      formDispatch({ type: 'RESET' })
    }
  }

  return (
    <form onSubmit={handleSubmit} className="expense-form">
      <h2>{editingExpenseId ? 'Edit Expense' : 'Add Expense'}</h2>
      <label>
        Name
        <input
          value={form.description}
          onChange={e => formDispatch({ type: 'SET_FIELD', field: 'description', value: e.target.value })}
          placeholder="e.g. Lunch"
          required
        />
      </label>
      <label>
        Amount ($)
        <input
          value={form.amount}
          onChange={e => formDispatch({ type: 'SET_FIELD', field: 'amount', value: e.target.value })}
          type="number"
          placeholder="0.00"
          min={0}
          step="0.01"
          required
        />
      </label>
      <label>
        Category
        <select value={form.category} onChange={e => formDispatch({ type: 'SET_FIELD', field: 'category', value: e.target.value })} required>
          <option value="">Select category</option>
          {CATEGORIES.map(c => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
      <div className="form-actions">
        {editingExpenseId && (
          <button type="button" className="cancel-btn" onClick={() => dispatch(setEditingExpenseId(null))}>
            Cancel
          </button>
        )}
        <button type="submit">{editingExpenseId ? 'Update' : 'Add Expense'}</button>
      </div>
    </form>
  )
}

export default ExpenseForm
