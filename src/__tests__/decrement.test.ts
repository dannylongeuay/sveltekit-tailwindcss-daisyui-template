import { decrement } from '$lib/decrement'

describe('decrement', () => {
  it('returns value - 1 to given value when called', () => {
    expect(decrement(0)).toBe(-1)
  })
})
