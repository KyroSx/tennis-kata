import { score, Player } from '../../game/'

describe('game', () => {
  const makePlayer = (points = 0, name = 'player'): Player => ({
    name,
    points
  })
  const makeParams = (p1: Player, p2: Player) => ({ player_1: p1, player_2: p2 })
  const defaultParams = () => makeParams(makePlayer(), makePlayer())

  it('should return Love-Love if its a new game', () => {
    expect(score(defaultParams())).toEqual({ str_score: 'Love-Love' })
  })

  it('should return Fifteen-Love if its a 1-0', () => {
    const player_1 = makePlayer(1)
    const player_2 = makePlayer()

    expect(score(makeParams(player_1, player_2))).toEqual({ str_score: 'Fifteen-Love' })
  })
})
