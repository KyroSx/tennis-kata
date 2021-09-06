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
