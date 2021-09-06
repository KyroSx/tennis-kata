import { Player, score, Score } from '../../game/'

describe('game', () => {
  const makePlayer = (points = 0, name = 'player'): Player => ({
    name,
    points
  })
  const makeParams = (p1: Player, p2: Player) => ({ player_1: p1, player_2: p2 })
  const makeStrScore = (s1: Score, s2: Score) => `${s1}-${s2}`

  describe('no deuces, no winner, only score', () => {
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
      },
      {
        player_1_points: 2,
        player_2_points: 2,
        str_score: makeStrScore(Score.thirty, Score.thirty)
      }
    ]

    it.each(game_matchers)('should return the correct score for - %s', (game) => {
      const player_1 = makePlayer(game.player_1_points)
      const player_2 = makePlayer(game.player_2_points)

      expect(score(makeParams(player_1, player_2)))
        .toEqual({ str_score: game.str_score })
    })
  })

  describe('when its a deuce game', () => {
    const deuces_games = [
      {
        player_1_points: 3,
        player_2_points: 3,
        str_score: makeStrScore(Score.forty, Score.forty)
      }
    ]

    it.each(deuces_games)('should return deuce and score for - %s', (game) => {
      const player_1 = makePlayer(game.player_1_points)
      const player_2 = makePlayer(game.player_2_points)

      expect(score(makeParams(player_1, player_2)))
        .toEqual({ str_score: game.str_score, deuce: true })
    })
  })

  describe('when the game has a winner', () => {
    it('should return player_1 as the winner', () => {
      const player_1 = makePlayer(4, 'player_1')
      const player_2 = makePlayer(1)

      expect(score(makeParams(player_1, player_2)))
        .toEqual({ winner: player_1 })
    })

    it('should return player_2 as the winner', () => {
      const player_1 = makePlayer(2)
      const player_2 = makePlayer(4, 'player_2')

      expect(score(makeParams(player_1, player_2)))
        .toEqual({ winner: player_2 })
    })
  })
})
