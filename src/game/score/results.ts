import { AdvantageResult, DeuceResult, Players, ScoreResult, WinnerResult } from '../types'
import { leader } from './winner'
import { makeScoreLookup } from './scoreLookup'
import { makeAdvantageResult, makeDeuceResult, makeScoreResult, makeWinnerResult } from './factory'

export function winnerResult (players: Players): WinnerResult {
  return makeWinnerResult(leader(players))
}

export function deuceResult (players: Players): DeuceResult {
  return makeDeuceResult(makeScoreLookup(players))
}

export function advantageResult (players: Players): AdvantageResult {
  return makeAdvantageResult(leader(players))
}

export function scoreResult (players: Players): ScoreResult {
  return makeScoreResult(makeScoreLookup(players))
}
