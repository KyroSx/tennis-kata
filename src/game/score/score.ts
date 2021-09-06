import { Player } from '../types'

type ScoreParams = {
  player_1: Player;
  player_2: Player;
}

export function score ({ player_1, player_2 }: ScoreParams) {
  if (player_1.points === 1) {
    return {
      str_score: 'Fifteen-Love'
    }
  }

  if (player_1.points === 2) {
    return {
      str_score: 'Thirty-Love'
    }
  }

  if (player_1.points === 3) {
    return {
      str_score: 'Forty-Love'
    }
  }

  return {
    str_score: 'Love-Love'
  }
}
