import { Players } from '../types'
import { moreThanThreePoints, samePoints } from './points'

export function isDeuce (players: Players): boolean {
  return samePoints(players) && moreThanThreePoints(players)
}
