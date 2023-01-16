var CurrentHeight1 = 2;
var CurrentWidth1 = 2;
var CurrentHeight2 = 2;
var CurrentWidth2 = 2;

function f2(event) {
    if (event.keyCode == 13) {
        ChangeOrder();
    }
}

function timeout1() {
    setTimeout(function () { ans.innerHTML = ''; err1.innerHTML = '';}, 8000);
}

function ChangeOrder() {
    var h1 = document.getElementById('h1').value;
    var w1 = document.getElementById('w1').value;
    var h2 = document.getElementById('h2').value;
    var w2 = document.getElementById('w2').value;

    if (h1 < 1 || h1 > 9 || h2 < 1 || h2 > 9 || w1 < 1 || w1 > 9 || w2 < 1 || w2 > 9) {
        err1.innerHTML = 'Размеры матриц должны быть целыми числами от 1 до 9!';
        timeout1();
        return -1;
    }
    if (w1 != h2) {
        err1.innerHTML = 'Количество столбцов в первой матрице должно быть равно количеству строк во второй матрице!';
        timeout1();
        return -1;
    }

    document.getElementById('matr1').innerHTML = '';
    document.getElementById('matr2').innerHTML = '';
    document.getElementById('ans').innerHTML = '';

    CurrentHeight1 = h1;
    CurrentWidth1 = w1;
    CurrentHeight2 = h2;
    CurrentWidth2 = w2;

    for (var i = 0; i < h1; i++) {
        for (var j = 0; j < w1; j++) {
            document.getElementById('matr1').innerHTML += '<input type="text" size="3" id="a' + (i - '0') + (j - '0') + '" style="text-align: center;" />';
        }
        document.getElementById('matr1').innerHTML += '<br/>';
    }
    for (var i = 0; i < h2; i++) {
        for (var j = 0; j < w2; j++) {
            document.getElementById('matr2').innerHTML += '<input type="text" size="3" id="b' + (i - '0') + (j - '0') + '" style="text-align: center;" />';
        }
        document.getElementById('matr2').innerHTML += '<br/>';
    }
}

function SolveMatr() {
    var a = [];
    var b = [];
    var h1 = CurrentHeight1;
    var w1 = CurrentWidth1;
    var h2 = CurrentHeight2;
    var w2 = CurrentWidth2;

    document.getElementById('h1').value = CurrentHeight1;
    document.getElementById('w1').value = CurrentWidth1;
    document.getElementById('h2').value = CurrentHeight2;
    document.getElementById('w2').value = CurrentWidth2;
    for (var i = 0; i < h1; i++) {
        a[i] = [];
        for (var j = 0; j < w1; j++) {
            a[i][j] = document.getElementById('a' + (i - '0') + (j - '0')).value.replace(',', '.');
            a[i][j] = parseFloat(a[i][j]);
            if (isNaN(a[i][j])) {
                ans.innerHTML = 'Вы ввели не число!';
                timeout1();
                return;
            }
        }
    }
    for (var i = 0; i < h2; i++) {
        b[i] = [];
        for (var j = 0; j < w2; j++) {
            b[i][j] = document.getElementById('b' + (i - '0') + (j - '0')).value.replace(',', '.');
            b[i][j] = parseFloat(b[i][j]);
            if (isNaN(b[i][j])) {
                ans.innerHTML = 'Вы ввели не число!';
                timeout1();
                return;
            }
        }
    }
    document.getElementById('ans').innerHTML = '';
    for (var i = 0; i < h1; i++) {
        for (var j = 0; j < w2; j++) {
            var el = 0;
            for (var k = 0; k < w1; k++) {
                el += a[i][k] * b[k][j];
            }
            document.getElementById('ans').innerHTML += '<input type="text" size="3" readonly="readonly" style="text-align:center;" value="' + el + '" />';
        }
        document.getElementById('ans').innerHTML += '<br/>';
    }
}