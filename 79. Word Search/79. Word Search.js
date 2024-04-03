/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    let visited = [];
    for (let row of board) {
        let t = [];
        for (let char of row) {
            t.push(false);
        }
        visited.push(t);
    }
    function checkWord(board, visited, i, j, word) {
        if (word.length === 0) {
            return true;
        }
        //console.log(i, j, word)
        if (i >= 0 && j >= 0 && i < board.length && j < board[0].length) {
            if (board[i][j] === word[0] && visited[i][j] === false) {
                visited[i][j] = true;
                let t = false;
                t = checkWord(board, visited, i + 1, j, word.substring(1));
                if (t === true) {
                    visited[i][j] = false;
                    return true;
                }
                t = checkWord(board, visited, i, j + 1, word.substring(1));
                if (t === true) {
                    visited[i][j] = false;
                    return true;
                }
                t = checkWord(board, visited, i - 1, j, word.substring(1));
                if (t === true) {
                    visited[i][j] = false;
                    return true;
                }
                t = checkWord(board, visited, i, j - 1, word.substring(1));
                if (t === true) {
                    visited[i][j] = false;
                    return true;
                }
                visited[i][j] = false;
                return t;
            }
        }
        return false;
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (checkWord(board, visited, i, j, word)) {
                return true;
            }
        }
    }
    return false;
};
