import { DeuceResult, Players, ScoreResult, WinnerResult } from '../types'
import { leader } from './winner'
import { makeScoreLookup } from './scoreLookup'

export function winnerResult (players: Players): WinnerResult {
  return {
    winner: leader(players),
    deuce: false,
    str_score: null
  }
}

export function deuceResult (players: Players): DeuceResult {
  return {
    str_score: makeScoreLookup(players),
    deuce: true,
    winner: null
  }
}

export function scoreResult (players: Players): ScoreResult {
  return {
    str_score: makeScoreLookup(players),
    deuce: false,
    winner: null
  }
}
