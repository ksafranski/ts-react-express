import { foo } from '../../../server/src/lib/example'

describe('foo', () => {
  it('returns true if foo was passed', () => {
    expect(foo('foo')).toBe(true)
  })
  it('returns false if foo was not passed', () => {
    expect(foo('bar')).toBe(false)
  })
})