import { Players } from '../types'
import { makeScoreLookup } from './scoreLookup'
import { isDeuce } from './deuce'
import { hasWinner, leader } from './winner'

export function score (players: Players) {
  if (hasWinner(players)) {
    return {
      winner: leader(players)
    }
  }

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
