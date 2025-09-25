import { render, screen } from '@testing-library/react'
import App from './App'

test('renders heading', () => {
  render(<App />)
  const h = screen.getByText(/incident reporting/i)
  expect(h).toBeInTheDocument()
})
