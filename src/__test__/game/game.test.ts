import { score } from '../../game/score'

describe('game', () => {
  it('should return Love-Love if its a new game', function () {
    expect(score()).toEqual({ str_score: 'Love-Love' })
  })
})
