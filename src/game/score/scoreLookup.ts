import { Player, Players } from '../types'

export enum Score {
    love = 'Love',
    fifteen = 'Fifteen',
    thirty = 'Thirty',
    forty = 'Forty'
}

type Lookup = {
    [point: number]: string;
}

const SCORE_LOOKUP: Lookup = {
  0: Score.love,
  1: Score.fifteen,
  2: Score.thirty,
  3: Score.forty
}

export function scoreLookup (point: number): Score {
  return SCORE_LOOKUP[point] as Score
}

const getPoints = (player: Player) => scoreLookup(player.points)
const asStrScore = (point_1: Score, point_2: Score) => `${point_1}-${point_2}`

const isPointValid = ({ points }: Player) => points >= 0 && points <= 4
const isAllPointsValid = ({ player_1, player_2 }: Players) =>
  isPointValid(player_1) && isPointValid(player_2)

export function makeScoreLookup (players: Players) {
  if (!isAllPointsValid(players)) return null

  return asStrScore(
    getPoints(players.player_1),
    getPoints(players.player_2)
  )
}
