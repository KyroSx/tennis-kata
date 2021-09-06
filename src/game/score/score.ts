import { Player } from '../types'
import { Score, scoreLookup } from './scoreLookup'

type ScoreParams = {
  player_1: Player;
  player_2: Player;
}

const getPoints = (player: Player) => scoreLookup(player.points)
const asStrScore = (point_1: Score, point_2: Score) => `${point_1}-${point_2}`
const makeScoreLookup = (p1: Player, p2: Player) => asStrScore(getPoints(p1), getPoints(p2))

export function score ({ player_1, player_2 }: ScoreParams) {
  return {
    str_score: makeScoreLookup(player_1, player_2)
  }
}
