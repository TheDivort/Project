function f2(event) {
	if (event.keyCode == 13) {
		SolveEq();
	}
}

function clear1() {
    t0.value = "";
    t1.value = "";
    t2.value = "";
	ans.innerHTML = "";
}

function timeout1() {
	setTimeout(function () { ans.innerHTML = ''; }, 8000)
}

function SolveEq() {
    var a = document.getElementById('t0').value.replace(',', '.');
    var b = document.getElementById('t1').value.replace(',', '.');
    var c = document.getElementById('t2').value.replace(',', '.');
    if (a == '') {
        a = 1;
    } else if (a == '-') {
        a = -1;
    }
    if (b == '') {
        b = 1;
    }
    if (c == '') {
        c = 0;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    c = parseFloat(c);
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        ans.innerHTML = 'Ошибка ввода коэффициентов в уравнении!';
        timeout1();
        return;
    }
    if (a == 0) {
        ans.innerHTML = 'Введённое уравнение не является квадратным!';
        timeout1();
        return;
    }

    var as = '';
    if (a == -1) {
        as = '-x^2';
    } else if (a == 1) {
        as = 'x^2'
    } else {
        as = NumIntoString(a) + 'x^2';
    }

    var bs = '';
    if (b == -1) {
        bs = '-x';
    } else if (b == 1) {
        bs = '+x';
    } else if (b < 0) {
        bs = NumIntoString(b) + 'x';
    } else if (b > 0) {
        bs = '&plus;' + NumIntoString(b) + 'x';
    }

    var cs = '';
    if (c < 0) {
        cs = NumIntoString(c);
    } else if (c > 0) {
        cs = '&plus;' + NumIntoString(c);
    }
    ans.innerHTML = '<p><strong>Задача.</strong> Решить уравнение<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?' + as + bs + cs + '= 0." /></div></p>';
    var D = b * b - 4 * a * c;
    if (a < 0) {
        as = '(' + NumIntoString(a) + ')';
    } else {
        as = NumIntoString(a);
    }
    if (b < 0) {
        bs = '(' + NumIntoString(b) + ')';
    } else {
        bs = NumIntoString(b);
    }
    if (c < 0) {
        cs = '(' + NumIntoString(c) + ')';
    } else {
        cs = NumIntoString(c);
    }
    ans.innerHTML += '<p><em>Решение.</em> Вычисляем дискриминант:<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?D=b^2-4ac=' + bs + '^2 - ' + '4' + '%5Ccdot' + as + '%5Ccdot' + cs + '=' + NumIntoString(D) + '." /></div></p>';

    if (D > 0) {
        ans.innerHTML += '<p>Дискриминант больше нуля, поэтому уравнение имеет два корня<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?x_{1,2}=%5Cfrac{-b %5Cpm %5Csqrt{D}}{2a}." /></div></p>';
        if (Math.round(D) == D && Math.round(a) == a && Math.round(b) == b) {
            var NormD = SimpleSqrt(D);

            var step1 = 'x_{1,2}=%5Cfrac{' + (-b) + '%5Cpm %5Csqrt{' + D + '}}{' + (2 * a) + '}';

            var step2 = '';
            if (NormD[0] != 1) {
                var NormD2 = NiceRoot(NormD);
                step2 = '=%5Cfrac{' + (-b) + '%5Cpm' + NormD2[0] + NormD2[1] + '}{' + (2 * a) + '}';
            }

            var step3 = '';
            var gcd = mygcd(NormD[0], mygcd(b, 2 * a));
            NormD[0] /= gcd;
            var NormD3 = NiceRoot(NormD);
            if (gcd == 2 * Math.abs(a)) {
                step3 = '=' + (-b / (2 * a)) + '%5Cpm' + NormD3[0] + NormD3[1];
            } else if (gcd != 1) {
                step3 = '=%5Cfrac{' + (-b / gcd) + '%5Cpm' + NormD3[0] + NormD3[1] + '}{' + (2 * a / gcd) + '}';
            }

            var step4 = '';
            if (NormD[1] == 1 && gcd == 2 * Math.abs(a)) {
                step4 = '=%5Cleft[%5Cbegin{array}{l}x=' + (-b / (2 * a) - NormD[0]) + '%5C%5C x=' + (-b / (2 * a) + NormD[0]) + '%5Cend{array}%5Cright';
            } else {
                step4 = '=%5Cleft[%5Cbegin{array}{l}x' + NumIntoStringEq((-b - gcd * NormD[0] * Math.sqrt(NormD[1])) / (2 * a)) + '%5C%5C x' + NumIntoStringEq((-b + gcd * NormD[0] * Math.sqrt(NormD[1])) / (2 * a)) + '%5Cend{array}%5Cright';
            }
            ans.innerHTML += '<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?' + step1 + step2 + step3 + step4 +'." /></div>';
        } else {
            var step1 = 'x_{1,2}=%5Cfrac{' + (-b) + '\\pm \\sqrt{' + NumIntoString(D) + '}}{' + (2 * a) + '}';
            var step4 = '=%5Cleft[%5Cbegin{array}{l}x' + NumIntoStringEq((-b - Math.sqrt(D))/ (2 * a) ) + '%5C%5C x' + NumIntoStringEq((-b  + Math.sqrt(D))/ (2 * a)) + '%5Cend{array}%5Cright';
            ans.innerHTML += '<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?' + step1 + step4 + '." /></div>';
        }
    } else if (D == 0) {
        var mul = 10000;
        var gcd = mygcd(2 * a, b);
        var endres = '';
        var eq = '=';
        if ((Math.round(a * mul) == a * mul) && (Math.round(b * mul) == b * mul)) {
            var sign = '';
            if ((a > 0 && b > 0) || (a < 0 && b < 0)) {
                sign = '-';
            }
            if (gcd == 2 * a) {
                endres = -b / (2 * a);
            } else {
                endres = '%5Cfrac{' + sign + Math.abs(b / gcd) + '}{' + Math.abs(2 * a / gcd) + '}';
            }
        } else {
            endres = (-b / (2 * a));
            eq = '%5Capprox';
        }
        ans.innerHTML += '<p>Дискриминант равен нулю, поэтому уравнение имеет только один корень<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?x=%5Cfrac{-b}{2a}=%5Cfrac{' + (-b) + '}{' + '2%5Ccdot' + as + '}' + eq + endres + '." /></div><em>Ответ:</em> <img style="position:relative; top: 1px;" class="formula" alt="" src="http://latex.codecogs.com/gif.latex?x' + eq + endres + '." /></p>';
    } else {
        ans.innerHTML += '<p>Так как дискриминант меньше нуля, то уравнение не имеет действительных корней.<br/><em>Ответ:</em> нет корней.</p>';
    }
}

function SimpleSqrt(D) {
    var a = [];
    a[0] = 1;
    for (var i = 2; i < D; i++) {
        while (D % (i * i) == 0) {
            D /= (i * i);
            a[0] *= i;
        }
    }
    a[1] = D;
    return a;
}

function NiceRoot(b) {
    var a = [];
    a[0] = b[0];
    a[1] = b[1];
    if (a[1] == 1) {
        a[1] = '';
    } else if (a[0] == 1) {
        a[0] = '';
        a[1] = '%5Csqrt{' + a[1] + '}';
    } else {
        a[1] = '%5Csqrt{' + a[1] + '}';
    }
    return a;
}

function mygcd(n, m) {
    var t;
    var a;
    var b;
    a = Math.abs(n);
    b = Math.abs(m);
    while (b != 0) {
        t = a % b;
        a = b;
        b = t;
    }
    return a;
}
function NumIntoString(x) {
    if (Math.round(x) != x && Math.abs(Math.round(x * 10000) - x * 10000) < Math.pow(10, -4)) {
        x = Math.round(x * 10000) / 10000;
    }
    var s = x.toString();
    s = s.replace('.', '{,}');
    return s;
}

function NumIntoStringEq(x) {
    var s = '';
    if (Math.abs(Math.round(x * 10000) - x * 10000) < Math.pow(10, -4)) {
        x = Math.round(x * 10000) / 10000;
        s = '=' + x.toString();
    } else {
        s = '%5Capprox' + (Math.round(x * Math.pow(10, 7))/Math.pow(10, 7)).toString();
    }
    s = s.replace('.', '{,}');
    return s;
}
