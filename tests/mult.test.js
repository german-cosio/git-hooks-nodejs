const mult = require('../src/mult')
it('should return correct multiplication', () => {
    const result = mult(4, 8)
    expect(result).toBe(32)
})