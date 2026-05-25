interface ExpenseSummaryProps {
  total: number
  currencySymbol: string
}

function ExpenseSummary({ total, currencySymbol }: ExpenseSummaryProps) {
  // TODO: consume total and currencySymbol from context instead of props
  return (
    <div className="expense-summary">
      <span className="expense-summary-label">Total</span>
      <span className="expense-summary-amount">{currencySymbol}{total.toFixed(2)}</span>
    </div>
  )
}

export default ExpenseSummary
