import { Player, score } from '../../game/'
import { Score } from '../../game/score/scoreLookup'

describe('game', () => {
  const makePlayer = (points = 0, name = 'player'): Player => ({
    name,
    points
  })
  const makeParams = (p1: Player, p2: Player) => ({ player_1: p1, player_2: p2 })
  const makeStrScore = (s1: Score, s2: Score) => `${s1}-${s2}`

  const game_matchers = [
    {
      player_1_points: 0,
      player_2_points: 0,
      str_score: makeStrScore(Score.love, Score.love)
    },
    {
      player_1_points: 1,
      player_2_points: 0,
      str_score: makeStrScore(Score.fifteen, Score.love)
    },
    {
      player_1_points: 2,
      player_2_points: 0,
      str_score: makeStrScore(Score.thirty, Score.love)
    },
    {
      player_1_points: 3,
      player_2_points: 0,
      str_score: makeStrScore(Score.forty, Score.love)
    },
    {
      player_1_points: 0,
      player_2_points: 1,
      str_score: makeStrScore(Score.love, Score.fifteen)
    },
    {
      player_1_points: 0,
      player_2_points: 2,
      str_score: makeStrScore(Score.love, Score.thirty)
    },
    {
      player_1_points: 0,
      player_2_points: 3,
      str_score: makeStrScore(Score.love, Score.forty)
    },
    {
      player_1_points: 1,
      player_2_points: 1,
      str_score: makeStrScore(Score.fifteen, Score.fifteen)
    }
  ]

  it.each(game_matchers)('should return the correct score for - %s', (game) => {
    const player_1 = makePlayer(game.player_1_points)
    const player_2 = makePlayer(game.player_2_points)

    expect(score(makeParams(player_1, player_2)))
      .toEqual({ str_score: game.str_score })
  })
})
