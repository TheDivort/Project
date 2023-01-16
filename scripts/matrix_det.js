var CurrentOrder = 3;

function f2(event) {
    if (event.keyCode == 13) {
        ChangeOrder();
    }
}
function Determinant(B) {
    var N = B.length;
    var denom = 1, exchanges = 0;
    for (var i = 0; i < N - 1; i++) {
        var maxN = i, max = Math.abs(B[i][i]);
        for (var j = i + 1; j < N; j++) {
            var t = Math.abs(B[j][i]);
            if (t > max) {
                maxN = j;
                max = t;
            }
        }        
        if (maxN > i) { //swap(B[i], B[maxN])
            var temp = B[i];
            B[i] = B[maxN];
            B[maxN] = temp;
            exchanges++;
        }
        else {
            if (max == 0)
                return max;
        }
        var n1 = B[i][i];
        for (var j = i + 1; j < N; j++) {
            var n2 = B[j][i];
            B[j][i] = 0;
            for (var k = i + 1; k < N; k++)
                B[j][k] = (B[j][k] * n1 - B[i][k] * n2) / denom;
        }
        denom = n1;
    }
    if (exchanges % 2)
        return -B[N - 1][N - 1];
    else
        return B[N - 1][N - 1];
}
function ChangeOrder() {
    document.getElementById('matr').innerHTML = '';
    document.getElementById('ans').innerHTML = '';
    var n = document.getElementById('ord').value;
    if (n > 9) {
        n = 9;
        document.getElementById('ord').value = 9;
    }
    if (n < 1) {
        n = 1;
        document.getElementById('ord').value = 1;
    }
    CurrentOrder = n;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            document.getElementById('matr').innerHTML += '<input type="text" size="3" id="a' + (i - '0') + (j - '0') + '" style="text-align: center;" />';
        }
        document.getElementById('matr').innerHTML += '<br/>';
    }
}

function timeout1() {
    setTimeout(function () { ans.innerHTML = ''; }, 2000);
}

function SolveMatr() {
    var a = [];
    var n = CurrentOrder;
    document.getElementById('ord').value = CurrentOrder;
    for (var i = 0; i < n; i++) {
        a[i] = [];
        for (var j = 0; j < n; j++) {
            a[i][j] = document.getElementById('a' + (i - '0') + (j - '0')).value.replace(',', '.');
            a[i][j] = parseFloat(a[i][j]);
            if (isNaN(a[i][j])) {
                ans.innerHTML = 'Вы ввели не число!';
                timeout1();
                return;
            }
        }
    }
    var det = Determinant(a);
    if (Math.abs(Math.round(det * 1000000) - det * 1000000) <= Math.pow(10, -4)) {
        det = Math.round(det * 1000000) / 1000000;
    }
    document.getElementById('ans').innerHTML = det;
}