interface AppHeaderProps {
  currency: string
  theme: string
  onCurrencyChange: (currency: 'USD' | 'VND') => void
  onThemeChange: (theme: 'light' | 'dark') => void
}

function AppHeader({ currency, theme, onCurrencyChange, onThemeChange }: AppHeaderProps) {
  // TODO: consume from context instead of props
  return (
    <div className="app-header">
      <div className="app-header-row">
        <span className="app-header-label">Currency</span>
        <button
          className="app-header-btn"
          onClick={() => onCurrencyChange(currency === 'USD' ? 'VND' : 'USD')}
        >
          {currency === 'USD' ? '$ USD' : '₫ VND'}
        </button>
      </div>
      <div className="app-header-row">
        <span className="app-header-label">Theme</span>
        <button
          className="app-header-btn"
          onClick={() => onThemeChange(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? '\u2600 Light' : '\uD83C\uDF19 Dark'}
        </button>
      </div>
    </div>
  )
}

export default AppHeader
