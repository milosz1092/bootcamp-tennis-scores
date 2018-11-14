import ScoreBoard from './ScoreBoard';

const board = new ScoreBoard();

describe('ScoreBoard', () => {
    describe('getTextForResult', () => {
        it('test_LoveAll_0_0', () => { 
            expect('Love-All').toEqual(board.getTextForResult(0, 0));
        });
        
        it('test_FifteenAll_1_1', () => { 
            expect('Fifteen-All').toEqual(board.getTextForResult(1, 1));
        });
        
        it('test_ThirtyAll_2_2', () => { 
            expect('Thirty-All').toEqual(board.getTextForResult(2, 2));
        });
        
        it('test_Deuce_3_3', () => { 
            expect('Deuce').toEqual(board.getTextForResult(3, 3));
        });
        
        it('test_Deuce_4_4', () => { 
            expect('Deuce').toEqual(board.getTextForResult(4, 4));
        });
        
        it('test_FifteenLove_1_0', () => { 
            expect('Fifteen-Love').toEqual(board.getTextForResult(1, 0));
        });
        
        it('test_LoveFifteen_0_1', () => { 
            expect('Love-Fifteen').toEqual(board.getTextForResult(0, 1));
        });
        
        it('test_ThirtyLove_2_0', () => { 
            expect('Thirty-Love').toEqual(board.getTextForResult(2, 0));
        });
        
        it('test_LoveThirty_0_2', () => { 
            expect('Love-Thirty').toEqual(board.getTextForResult(0, 2));
        });
        
        it('test_FortyLove_3_0', () => { 
            expect('Forty-Love').toEqual(board.getTextForResult(3, 0));
        });
        
        it('test_LoveForty_0_3', () => { 
            expect('Love-Forty').toEqual(board.getTextForResult(0, 3));
        });
        
        it('test_Winforplayer1_4_0', () => { 
            expect('Win for player1').toEqual(board.getTextForResult(4, 0));
        });
        
        it('test_Winforplayer2_0_4', () => { 
            expect('Win for player2').toEqual(board.getTextForResult(0, 4));
        });
        
        it('test_ThirtyFifteen_2_1', () => { 
            expect('Thirty-Fifteen').toEqual(board.getTextForResult(2, 1));
        });
        
        it('test_FifteenThirty_1_2', () => { 
            expect('Fifteen-Thirty').toEqual(board.getTextForResult(1, 2));
        });
        
        it('test_FortyFifteen_3_1', () => { 
            expect('Forty-Fifteen').toEqual(board.getTextForResult(3, 1));
        });
        
        it('test_FifteenForty_1_3', () => { 
            expect('Fifteen-Forty').toEqual(board.getTextForResult(1, 3));
        });
        
        it('test_Winforplayer1_4_1', () => { 
            expect('Win for player1').toEqual(board.getTextForResult(4, 1));
        });
        
        it('test_Winforplayer2_1_4', () => { 
            expect('Win for player2').toEqual(board.getTextForResult(1, 4));
        });
        
        it('test_FortyThirty_3_2', () => { 
            expect('Forty-Thirty').toEqual(board.getTextForResult(3, 2));
        });
        
        it('test_ThirtyForty_2_3', () => { 
            expect('Thirty-Forty').toEqual(board.getTextForResult(2, 3));
        });
        
        it('test_Winforplayer1_4_2', () => { 
            expect('Win for player1').toEqual(board.getTextForResult(4, 2));
        });
        
        it('test_Winforplayer2_2_4', () => { 
            expect('Win for player2').toEqual(board.getTextForResult(2, 4));
        });
        
        it('test_Advantageplayer1_4_3', () => { 
            expect('Advantage player1').toEqual(board.getTextForResult(4, 3));
        });
        
        it('test_Advantageplayer2_3_4', () => { 
            expect('Advantage player2').toEqual(board.getTextForResult(3, 4));
        });
        
        it('test_Advantageplayer1_5_4', () => { 
            expect('Advantage player1').toEqual(board.getTextForResult(5, 4));
        });
        
        it('test_Advantageplayer2_4_5', () => { 
            expect('Advantage player2').toEqual(board.getTextForResult(4, 5));
        });
        
        it('test_Advantageplayer1_15_14', () => { 
            expect('Advantage player1').toEqual(board.getTextForResult(15, 14));
        });
        
        it('test_Advantageplayer2_14_15', () => { 
            expect('Advantage player2').toEqual(board.getTextForResult(14, 15));
        });
        
        it('test_Winforplayer1_6_4', () => { 
            expect('Win for player1').toEqual(board.getTextForResult(6, 4));
        });
        
        it('test_Winforplayer2_4_6', () => { 
            expect('Win for player2').toEqual(board.getTextForResult(4, 6));
        });
        
        it('test_Winforplayer1_16_14', () => { 
            expect('Win for player1').toEqual(board.getTextForResult(16, 14));
        });
        
        it('test_Winforplayer2_14_16', () => { 
            expect('Win for player2').toEqual(board.getTextForResult(14, 16));
        });
    });
});