interface ExpenseSummaryProps {
  total: number
}

function ExpenseSummary({ total }: ExpenseSummaryProps) {
  return (
    <div className="expense-summary">
      <span className="expense-summary-label">Total</span>
      <span className="expense-summary-amount">${total.toFixed(2)}</span>
    </div>
  )
}

export default ExpenseSummary
