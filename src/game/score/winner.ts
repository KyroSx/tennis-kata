import { Player, Players } from '../types'
import { hasEnoughPoints } from './points'

export function leader (players: Players): Player {
  return players.player_1
}

export function hasWinner (players: Players): boolean {
  return hasEnoughPoints(players)
}
