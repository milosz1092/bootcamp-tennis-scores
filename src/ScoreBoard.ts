import { ResultWords, BelowFourLink } from './Constants';
import IDisplay from './interface/IDisplay';
import IMatchResult from './interface/IMatchResult';

export default class ScoreBoard implements IDisplay {
    label: string;

    constructor(screenName: string) {
        this.label = screenName;
        console.info(`ScoreBoard:${this.label} initialized!`);
    }

    private getBetterPlayerName(scoreOne: number, scoreTwo: number): string {
        return scoreOne > scoreTwo
            ? ResultWords.PLAYER_ONE
            : ResultWords.PLAYER_TWO;
    }

    getTextForResult(...scores: number[]): string {
        const [scoreOne, scoreTwo] = scores;
        const scoreDiff: number = Math.abs(scoreOne - scoreTwo);

        if (scoreDiff === 0 && scoreOne < 3) {
            return `${BelowFourLink[scoreOne]}-${ResultWords.ALL}`
        }

        if (scoreDiff === 0 && scoreOne >= 3) {
            return ResultWords.DEUCE;
        }

        if (scoreDiff !== 0 && scoreOne < 4 && scoreTwo < 4) {
            return `${BelowFourLink[scoreOne]}-${BelowFourLink[scoreTwo]}`;
        }

        if (scoreDiff === 1 && (scoreOne > 3 || scoreTwo > 3)) {
            return `${ResultWords.ADVANTAGE} ${this.getBetterPlayerName(scoreOne, scoreTwo)}`;
        }

        if (scoreDiff > 1 && (scoreOne > 3 || scoreTwo > 3)) {
            return `${ResultWords.WIN_FOR} ${this.getBetterPlayerName(scoreOne, scoreTwo)}`;
        }
    }

    render(result: IMatchResult): void {
        const text = this.getTextForResult(...Object.values(result));
        console.info(text, `Screen:${this.label}`);
    }
}
