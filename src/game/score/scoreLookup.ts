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

export function makeScoreLookup ({ player_1, player_2 }: Players) {
  return asStrScore(getPoints(player_1), getPoints(player_2))
}
