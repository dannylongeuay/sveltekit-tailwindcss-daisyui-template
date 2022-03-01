/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom'
import index from '../routes/index.svelte'
import { render } from '@testing-library/svelte'

describe('Test if Jest is working', () => {
  test('Index', () => {
    const { getByText } = render(index)
    expect(getByText('Home Content')).toBeInTheDocument()
  })
})
