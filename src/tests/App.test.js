import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import App from '../components/App'

it('has div', () => {
  const { container } = render(<App />)
  const actual = container.querySelector('div')

  expect(actual).toBeInTheDocument()
})
