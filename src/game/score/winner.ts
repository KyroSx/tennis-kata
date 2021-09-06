import { Player, Players } from '../types'
import { hasEnoughPoints } from './points'

const player1HasMorePoints = ({ player_1, player_2 }: Players): boolean =>
  player_1.points > player_2.points

export function leader (players: Players): Player {
  return player1HasMorePoints(players)
    ? players.player_1
    : players.player_2
}

export function hasWinner (players: Players): boolean {
  return hasEnoughPoints(players)
}
