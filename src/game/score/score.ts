import { GameResult, Players } from '../types'
import { isDeuce } from './deuce'
import { hasWinner } from './winner'
import { advantageResult, deuceResult, scoreResult, winnerResult } from './results'
import { hasAdvantage } from './advantage'

export function score (players: Players): GameResult {
  if (hasWinner(players)) return winnerResult(players)
  if (isDeuce(players)) return deuceResult(players)
  if (hasAdvantage(players)) return advantageResult(players)

  return scoreResult(players)
}
