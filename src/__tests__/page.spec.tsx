import { render, screen, waitFor } from '@testing-library/react'
import Home from '../app/page'

// Função utilitária para adicionar um atraso no teste
function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

describe('Home', () => {
  describe('Presentation section', () => {
    it('should render presentation text', () => {
      render(<Home />)

      const presentationText = screen.getByTestId('presentation-text')

      expect(presentationText).toBeInTheDocument()
    })

    describe('Presentation description', () => {
      it('should render presentation description', () => {
        render(<Home />)

        const presentationDescription = screen.getByTestId(
          'presentation-description',
        )

        expect(presentationDescription).toBeInTheDocument()
      })
    })
  })
})
