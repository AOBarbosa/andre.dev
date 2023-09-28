import { render, screen } from '@testing-library/react'
import Home from '../app/page'

describe('Home', () => {
  describe('Presentation section', () => {
    it('should render presentation text', () => {
      render(<Home />)

      const presentationText = screen.getByTestId('presentation-text')

      expect(presentationText).toBeInTheDocument()
    })

    it('should render presentation description', () => {
      render(<Home />)

      const presentationDescription = screen.getByTestId(
        'presentation-description',
      )

      expect(presentationDescription).toBeInTheDocument()
    })
  })
})
