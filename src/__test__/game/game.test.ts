import { score, Player } from '../../game/'

describe('game', () => {
  const makePlayer = (points = 0, name = 'player'): Player => ({
    name,
    points
  })
  const makeParams = (p1: Player, p2: Player) => ({ player_1: p1, player_2: p2 })

  const game_matchers = [
    {
      player_1_points: 0,
      player_2_points: 0,
      str_score: 'Love-Love'
    },
    {
      player_1_points: 1,
      player_2_points: 0,
      str_score: 'Fifteen-Love'
    },
    {
      player_1_points: 2,
      player_2_points: 0,
      str_score: 'Thirty-Love'
    },
    {
      player_1_points: 3,
      player_2_points: 0,
      str_score: 'Forty-Love'
    },
    {
      player_1_points: 0,
      player_2_points: 1,
      str_score: 'Love-Fifteen'
    },
    {
      player_1_points: 0,
      player_2_points: 2,
      str_score: 'Love-Thirty'
    },
    {
      player_1_points: 0,
      player_2_points: 3,
      str_score: 'Love-Forty'
    },
    {
      player_1_points: 1,
      player_2_points: 1,
      str_score: 'Fifteen-Fifteen'
    }
  ]

  it.each(game_matchers)('should return the correct score for - %s', (game) => {
    const player_1 = makePlayer(game.player_1_points)
    const player_2 = makePlayer(game.player_2_points)

    expect(score(makeParams(player_1, player_2)))
      .toEqual({ str_score: game.str_score })
  })
})
