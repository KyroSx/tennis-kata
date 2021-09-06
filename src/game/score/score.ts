import { Players } from '../types'
import { makeScoreLookup } from './scoreLookup'
import { isDeuce } from './deuce'

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
