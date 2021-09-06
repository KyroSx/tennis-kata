import { Players } from '../types'
import { isDeuce } from './deuce'
import { hasWinner } from './winner'
import { deuceResult, scoreResult, winnerResult } from './results'

export function score (players: Players) {
  if (hasWinner(players)) return winnerResult(players)
  if (isDeuce(players)) return deuceResult(players)

  return scoreResult(players)
}
