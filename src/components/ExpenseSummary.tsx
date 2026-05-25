import { useContext } from 'react'
import { AppContext } from '../context/AppContext'

interface ExpenseSummaryProps {
  total: number
}

function ExpenseSummary({ total }: ExpenseSummaryProps) {
  const { currencySymbol } = useContext(AppContext)!

  return (
    <div className="expense-summary">
      <span className="expense-summary-label">Total</span>
      <span className="expense-summary-amount">{currencySymbol}{total.toFixed(2)}</span>
    </div>
  )
}

export default ExpenseSummary
