import { Players, Player } from '../types'
import { Score, scoreLookup } from './scoreLookup'
import { isDeuce } from './deuce'

const getPoints = (player: Player) => scoreLookup(player.points)
const asStrScore = (point_1: Score, point_2: Score) => `${point_1}-${point_2}`
const makeScoreLookup = ({ player_1, player_2 }: Players) => asStrScore(getPoints(player_1), getPoints(player_2))

export function score (players: Players) {
  if (isDeuce(players)) {
    return {
      str_score: makeScoreLookup(players),
      deuce: true
    }
  }

  return {
    str_score: makeScoreLookup(players)
  }
}
