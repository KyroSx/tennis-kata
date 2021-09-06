import { Player } from '../types'
import { scoreLookup } from './scoreLookup'

type ScoreParams = {
  player_1: Player;
  player_2: Player;
}

export function score ({ player_1, player_2 }: ScoreParams) {
  return {
    str_score: `${scoreLookup(player_1.points)}-${scoreLookup(player_2.points)}`
  }
}
