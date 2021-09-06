export type Player = {
    points: number;
    name: string;
}

export type Players = {
    player_1: Player;
    player_2: Player;
}

export type WinnerResult = {
    winner: Player;
    str_score: null;
    deuce: false;
}

export type DeuceResult = {
    winner: null;
    str_score: string;
    deuce: true;
}

export type ScoreResult = {
    winner: null;
    str_score: string;
    deuce: false;
}

export type GameResult = WinnerResult | DeuceResult | ScoreResult
