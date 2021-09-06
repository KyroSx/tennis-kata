import { Players } from '../types'
import { moreThanThreePoints, samePoints } from './points'

export function hasAdvantage (players: Players): boolean {
  return moreThanThreePoints(players) && !samePoints(players)
}
