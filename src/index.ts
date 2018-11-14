import ScoreBoard from './ScoreBoard';
import IDisplay from './interface/IDisplay';

const arenaScoreBoards: IDisplay[] = [
    new ScoreBoard('Left'),
    new ScoreBoard('Front')
]

arenaScoreBoards.forEach((display) => {
    display.render(
        {
            playerOneScore: 0,
            playerTwoScore: 0
        }
    );
});
