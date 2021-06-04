var count = 1;
var curr = "";
function fill(pooja) {
    if (count <= 9) {
        if (count % 2 != 0) {
            if (document.getElementById(pooja.id).innerHTML === "") {
                document.getElementById(pooja.id).innerHTML = "O";
                curr = "O";
                count++;
            }
        }
        else {
            if (document.getElementById(pooja.id).innerHTML === "") {
                document.getElementById(pooja.id).innerHTML = "X";
                curr = "X";
                count++;
            }

        }

    }
    checkwin();
}
function checkwin() {
    if ((checkdiv('1', '2', '3') && curr === 'O') ||
        (checkdiv('1', '4', '7') && curr === 'O') ||
        (checkdiv('3', '6', '9') && curr === 'O') ||
        (checkdiv('7', '8', '9') && curr === 'O') ||
        (checkdiv('1', '5', '9') && curr === 'O') ||
        (checkdiv('3', '5', '7') && curr === 'O') ||
        (checkdiv('2', '5', '8') && curr === 'O') ||
        (checkdiv('4', '5', '6') && curr === 'O')) {
        alert("Congratulations! Player1 wins");
        nullme();
    }
    else if ((checkdiv('1', '2', '3') && curr === 'X') ||
        (checkdiv('1', '4', '7') && curr === 'X') ||
        (checkdiv('3', '6', '9') && curr === 'X') ||
        (checkdiv('7', '8', '9') && curr === 'X') ||
        (checkdiv('1', '5', '9') && curr === 'X') ||
        (checkdiv('3', '5', '7') && curr === 'X') ||

        (checkdiv('2', '5', '8') && curr === 'X') ||
        (checkdiv('4', '5', '6') && curr === 'X')) {
        alert("Congratulations! Player2 wins");
        nullme();
    }
    else {
        if (count == 10) {
            alert("Draw!");
            nullme();
        }
    }
}
function getData(div) {
    return document.getElementById(div).innerHTML;
}
function checkdiv(div1, div2, div3) {
    if (getData(div1) != "" && getData(div2) != "" && getData(div3) != "" && getData(div1) == getData(div2) && getData(div2) == getData(div3)) {
        return true;
    }

}
function nullme() {
    count = 1;
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).innerHTML = null;
    }
}