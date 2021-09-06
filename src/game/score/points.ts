import { Players } from '../types'

export function samePoints ({ player_1, player_2 } : Players): boolean {
  return player_1.points === player_2.points
}

export function moreThanThreePoints ({ player_1, player_2 } : Players): boolean {
  return player_1.points >= 3 && player_2.points >= 3
}
