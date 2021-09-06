import { DeuceResult, Player, ScoreResult, WinnerResult } from '../types'

export function makeScoreResult (score: string): ScoreResult {
  return {
    str_score: score,
    deuce: false,
    winner: null
  }
}

export function makeDeuceResult (score: string): DeuceResult {
  return {
    str_score: score,
    deuce: true,
    winner: null
  }
}

export function makeWinnerResult (leader: Player): WinnerResult {
  return {
    winner: leader,
    deuce: false,
    str_score: null
  }
}
