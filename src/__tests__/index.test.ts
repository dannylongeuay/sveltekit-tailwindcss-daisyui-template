/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import index from '../routes/index.svelte'
import { render, fireEvent } from '@testing-library/svelte'

describe('Index Component Content', () => {
  it('contains Home Content', () => {
    const { getByText } = render(index)
    expect(getByText('Home Content')).toBeInTheDocument()
  })
  it('contains increment', () => {
    const { component } = render(index)
    expect(component.increment).toBeDefined()
  })
})

describe('Index Component Counters', () => {
  it('changes up count when button is clicked', async () => {
    const { getByText } = render(index)
    const button = getByText(/Up Clicks:/)
    expect(button.innerHTML).toBe('Up Clicks: 0')
    await fireEvent.click(button)
    expect(button.innerHTML).toBe('Up Clicks: 1')
  })
  it('changes up down count when button is clicked', async () => {
    const { getByText } = render(index)
    const button = getByText(/Down Clicks:/)
    expect(button.innerHTML).toBe('Down Clicks: 0')
    await fireEvent.click(button)
    expect(button.innerHTML).toBe('Down Clicks: -1')
  })
})
