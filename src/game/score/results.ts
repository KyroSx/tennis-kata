import { Players } from '../types'
import { leader } from './winner'
import { makeScoreLookup } from './scoreLookup'

export function winnerResult (players: Players) {
  return {
    winner: leader(players),
    deuce: false,
    score: null
  }
}

export function deuceResult (players: Players) {
  return {
    str_score: makeScoreLookup(players),
    deuce: true,
    winner: null
  }
}

export function scoreResult (players: Players) {
  return {
    str_score: makeScoreLookup(players),
    deuce: false,
    winner: null
  }
}
