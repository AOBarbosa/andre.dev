import { NavMenu } from '@/components/NavMenu'
import { fireEvent, render, screen } from '@testing-library/react'

import NextLink from 'next/link'

import mockRouter from 'next-router-mock'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'

describe('Navigation Menu', () => {
  it('should render all three link names', () => {
    // Arrange
    render(<NavMenu />)

    // Act
    const aboutLink = screen.getByText('About')
    // const setupLink = screen.getByText('Setup')
    const contactLink = screen.getByText('Contact')

    // Assert
    expect(aboutLink).toBeInTheDocument()
    // expect(setupLink).toBeInTheDocument()
    expect(contactLink).toBeInTheDocument()
  })

  describe('Routes', () => {
    it('renders the About Me page', () => {
      render(<NextLink href="/about/me">Me</NextLink>, {
        wrapper: MemoryRouterProvider,
      })

      const link = screen.getByText('Me')

      fireEvent.click(link)
      expect(mockRouter.asPath).toEqual('/about/me')
    })

    it('renders the About Projects page', () => {
      render(<NextLink href="/about/projects">Me</NextLink>, {
        wrapper: MemoryRouterProvider,
      })

      const link = screen.getByText('Me')

      fireEvent.click(link)
      expect(mockRouter.asPath).toEqual('/about/projects')
    })

    it('renders the Contact page', () => {
      render(<NextLink href="/about/contact">Contact</NextLink>, {
        wrapper: MemoryRouterProvider,
      })

      const link = screen.getByText('Contact')

      fireEvent.click(link)
      expect(mockRouter.asPath).toEqual('/about/contact')
    })
  })
})
