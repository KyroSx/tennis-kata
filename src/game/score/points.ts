import { Players } from '../types'

export function samePoints ({ player_1, player_2 } : Players): boolean {
  return player_1.points === player_2.points
}

export function moreThanThreePoints ({ player_1, player_2 } : Players): boolean {
  return player_1.points >= 3 && player_2.points >= 3
}

const highestPoint = ({ player_1, player_2 }: Players) =>
  Math.max(...[player_1.points, player_2.points])

export function hasEnoughPoints (players: Players): boolean {
  return highestPoint(players) >= 4
}

const pointsDifference = ({ player_1, player_2 }: Players): number =>
  Math.abs(player_1.points - player_2.points)

export function hasLeadingByTwo (players: Players): boolean {
  return pointsDifference(players) >= 2
}
