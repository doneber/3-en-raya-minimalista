const boxList = document.querySelectorAll('.table .box')
let turn = true
function win(i, j, k) {
    if (movesArray[i] == movesArray[j] &&
        movesArray[j] == movesArray[k] &&
        movesArray[i] != null)
        return true
    return false
}
function numberWin() {
    if (win(0, 1, 2)) {
        return 1
    }
    if (win(3, 4, 5)) {
        return 2
    }
    if (win(6, 7, 8)) {
        return 3
    }
    if (win(0, 3, 6)) {
        return 4
    }
    if (win(1, 4, 7)) {
        return 5
    }
    if (win(2, 5, 8)) {
        return 6
    }
    if (win(0, 4, 8)) {
        return 7
    }
    if (win(2, 4, 6)) {
        return 8
    }
    return null
}
const movesArray = new Array(9).fill(null)
boxList.forEach(function (box, index) {
    box.addEventListener('click', function () {
        if (turn) {
            box.classList.add('mark-x')
        } else {
            box.classList.add('mark-o')
        }
        movesArray[index] = turn
        const mayWinner = numberWin()
        if (mayWinner) {
            const lineWinner = document.createElement('div')
            lineWinner.classList.add('line')
            lineWinner.classList.add('line-winner-' + mayWinner)
            document.querySelector('.table').append(lineWinner)
        }
        turn = !turn
    }, { once: true })
})