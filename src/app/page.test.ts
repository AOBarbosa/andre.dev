import { render, screen } from '@testing-library/react'
import Home from './page'

describe('Hello', () => {
  it('hello', () => {
    expect(1).toBe(1)
  })

  it('should render hello', () => {
    render(Home())

    const hello = screen.getByText('Hello world')

    expect(hello).toBeInTheDocument()
  })
})
