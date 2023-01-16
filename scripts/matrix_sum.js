var CurrentHeight = 2;
var CurrentWidth = 2;

function f2(event) {
    if (event.keyCode == 13) {
        ChangeOrder();
    }
}

function ChangeOrder() {
    document.getElementById('matr1').innerHTML = '';
    document.getElementById('matr2').innerHTML = '';
    document.getElementById('ans').innerHTML = '';
    var n = document.getElementById('h1').value;
    var m = document.getElementById('w1').value;
    if (n > 9) {
        n = 9;
        document.getElementById('h1').value = 9;
    }
    if (n < 1) {
        n = 1;
        document.getElementById('h1').value = 1;
    }
    if (m > 9) {
        m = 9;
        document.getElementById('w1').value = 9;
    }
    if (m < 1) {
        m = 1;
        document.getElementById('w1').value = 1;
    }
    CurrentHeight = n;
    CurrentWidth = m;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            document.getElementById('matr1').innerHTML += '<input type="text" size="3" id="a' + (i - '0') + (j - '0') + '" style="text-align: center;" />';
            document.getElementById('matr2').innerHTML += '<input type="text" size="3" id="b' + (i - '0') + (j - '0') + '" style="text-align: center;" />';
        }
        document.getElementById('matr1').innerHTML += '<br/>';
        document.getElementById('matr2').innerHTML += '<br/>';
    }
}

function timeout1() {
    setTimeout(function () { ans.innerHTML = ''; }, 2000);
}

function SolveMatr() {
    var a = [];
    var b = [];
    var n = CurrentHeight;
    var m = CurrentWidth;
    document.getElementById('h1').value = CurrentHeight;
    document.getElementById('w1').value = CurrentWidth;
    for (var i = 0; i < n; i++) {
        a[i] = [];
        b[i] = [];
        for (var j = 0; j < m; j++) {
            a[i][j] = document.getElementById('a' + (i - '0') + (j - '0')).value.replace(',', '.');
            a[i][j] = parseFloat(a[i][j]);
            b[i][j] = document.getElementById('b' + (i - '0') + (j - '0')).value.replace(',', '.');
            b[i][j] = parseFloat(b[i][j]);
            if (isNaN(a[i][j]) || isNaN(b[i][j])) {
                ans.innerHTML = 'Вы ввели не число!';
                timeout1();
                return;
            }
        }
    }
    var oper = op.value;
    var sign = 1;
    if (oper == '-') {
        sign = -1;
    }
    document.getElementById('ans').innerHTML = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
            document.getElementById('ans').innerHTML += '<input type="text" size="3" readonly="readonly" style="text-align:center;" value="' + (a[i][j] + sign * b[i][j]) + '" />';
        }
        document.getElementById('ans').innerHTML += '<br/>';
    }
}