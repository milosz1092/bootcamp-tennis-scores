/**
 * Dictionary for creating scoreboard messages.
 */
export enum ResultWords {
    PLAYER_ONE = 'player1',
    PLAYER_TWO = 'player2',
    WIN_FOR = 'Win for',
    ADVANTAGE = 'Advantage',
    LOVE = 'Love',
    DEUCE = 'Deuce',
    ALL = 'All',
    FIFTEEN = 'Fifteen',
    THIRTY = 'Thirty',
    FORTY = 'Forty'
}

/**
 * Indicates which phrase should be used for describe chosen score from 0-3 range.
 * Array index matches to point number and allows to chose
 * 'All', 'Fifteen', 'Thirty' or 'Forty' word in faster way.
 */
export const BelowFourLink = [
    ResultWords.LOVE,
    ResultWords.FIFTEEN,
    ResultWords.THIRTY,
    ResultWords.FORTY
]