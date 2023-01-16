var a, b, neg;
function f2(event) {
    if (event.keyCode == 13) {
        solveit();
    }
}

function timeout1() {
    setTimeout(function () { err1.innerHTML = ""; }, 4000)
}

function findGCD(n, m) {
    while (n != 0 && m != 0) {
        if (n > m) n %= m;
        else m %= n;
    }
    return Math.max(n, m);
}

function reduceit() {
    a = Math.abs(a);
    b = Math.abs(b);
    if (rd.checked) {
        a1 = a;
        b1 = b;
        while (a1 != 0 && b1 != 0) {
            if (a1 > b1) a1 %= b1;
            else b1 %= a1;
        }
        a1 = Math.max(a1, b1);
        a /= a1;
        b /= a1;
    }
    if (a % b == 0) {
        int3.value = neg + a / b;
        t31.value = "";
        t32.value = "";
    } else if (a > b) {
        int3.value = neg + Math.floor(a / b);
        t31.value = a % b;
        t32.value = b;
    } else {
        int3.value = neg;
        t31.value = a;
        t32.value = b;
    }
}

function solveit() {
    var i1 = parseInt(int1.value != "" ? int1.value : 0);
    var i2 = parseInt(int2.value != "" ? int2.value : 0);
    var n11 = parseInt(t11.value);
    var n12 = parseInt(t12.value);
    var n21 = parseInt(t21.value);
    var n22 = parseInt(t22.value);
    var oper = op.value;

    if (n12 == 0 || n22 == 0) {
        err1.innerHTML = '<td style="text-align: center;">Знаменатель дроби не должен быть равен 0!</td>';
        timeout1();
        return;
    }
    if (n21 == 0 && i2 == 0 && oper == '/') {
        err1.innerHTML = '<td style="text-align: center;">Деление на 0!</td>';
        timeout1();
        return;
    }
    if (i1 < 0 || n11 < 0 || n21 < 0 || i2 < 0 || n12 < 0 || n22 < 0) {
        int3.innerHTML = "";
        t31.innerHTML = "";
        t32.innerHTML = "";
        solving.innerHTML = "";
        err1.innerHTML = '<td style="text-align: center;">Числители и знаменатели дробей должны быть положительными!</td>';
        timeout1();
        return;
    }
    if (n11 % 1 != 0 || n21 % 1 != 0 || n12 % 1 != 0 || n22 % 1 != 0 || i1 % 1 != 0 || i2 % 1 != 0) {
        err1.innerHTML = '<td style="text-align: center;">Чисители, знаменатели и целые части дробей должны быть целыми числами!</td>';
        timeout1();
        return;
    }

    document.getElementById("solving").innerHTML = "<p><strong>Задача.</strong> Вычислить выражение:</p>";
    switch (oper) {
        case "+":
            a = n11 * n22 + i1 * n12 * n22 + n21 * n12 + i2 * n22 * n12;
            b = n12 * n22;
            if (a * b >= 0) {
                neg = "";
            } else {
                neg = "-";
            }
            reduceit();
            var expr = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} + " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "}.";
            var expr1 = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} + " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "}";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            document.getElementById("solving").innerHTML += '<p><strong><i>Решение:</i></strong></p>';
            if (i1 != 0 || i2 != 0) {
                document.getElementById("solving").innerHTML += '<p>Приводим дроби к обыкновенному виду:</p>';
                expr = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} + " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "} = ";
                expr += "\\frac{" + (i1 != 0 ? (i1 + "\\cdot" + n12 + "+") : "") + n11 + "}{" + n12 + "} + " + "\\frac{" + (i2 != 0 ? (i2 + "\\cdot" + n22 + "+") : "") + n21 + "}{" + n22 + "}=";
                n11 = i1 * n12 + n11;
                n21 = i2 * n22 + n21;
                expr += "\\frac{" + n11 + "}{" + n12 + "} + " + "\\frac{" + n21 + "}{" + n22 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            if (n12 != n22) {
                document.getElementById("solving").innerHTML += '<p>Теперь приведём дроби к <i>общему знаменателю</i>. Для этого домножим числитель и знаменатель первой дроби на знаменатель второй дроби, а числитель и знаменатель второй дроби - на знаменатель первой:</p>';
                expr = "\\frac{" + n11 + "}{" + n12 + "} + " + "\\frac{" + n21 + "}{" + n22 + "} = ";
                expr += "\\frac{" + n11 + "\\cdot" + n22 + "}{" + n12 + "\\cdot" + n22 + "} + " + "\\frac{" + n21 + "\\cdot" + n12 + "}{" + n22 + "\\cdot" + n12 + "} = ";
                expr += "\\frac{" + n11 * n22 + "}{" + n12*n22 + "} + " + "\\frac{" + n21 * n12 + "}{" + n22 * n12 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            document.getElementById("solving").innerHTML += '<p>Если знаменатели дробей равны, то можно сложить числители:</p>';
            expr = "\\frac{" + n11 * n22 + "}{" + n12 * n22 + "} + " + "\\frac{" + n21 * n12 + "}{" + n22 * n12 + "}=";
            expr += "\\frac{" + n11 * n22 + "+" + n21 * n12 + "}{" + n12 * n22 + "}=";
            var n1 = n11 * n22 + n21 * n12;
            var n2 = n12 * n22;
            if (n1 % n2 == 0) {
                expr += "\\frac{" + n1 + "}{" + n2 + "} = ";
                expr += n1 / n2 + ".";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
                document.getElementById("solving").innerHTML += '<p><strong>Ответ:</strong></p>';
                expr = expr1 + "=" + n1/n2 + ".";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
                break;
            }
            expr += "\\frac{" + n1 + "}{" + n2 + "}.";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            var gcd = findGCD(n1, n2);
            if (gcd > 1) {
                document.getElementById("solving").innerHTML += '<p>Полученную дробь можно сократить на ' + gcd + ':</p>';
                expr = "\\frac{" + n1 + "}{" + n2 + "} = \\frac{" + n1 / gcd + "\\cdot" + gcd + "}{" + n2 / gcd + "\\cdot" + gcd + "} = ";
                n1 /= gcd;
                n2 /= gcd;
                expr += "\\frac{" + n1 + "}{" + n2 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            }
            var int = 0;
            if (n1 > n2) {
                document.getElementById("solving").innerHTML += '<p>Полученную дробь можно привести к смешанному виду:</p>';
                int = (n1 - n1 % n2) / n2;
                expr = "\\frac{" + n1 + "}{" + n2 + "}=" + int + "\\frac{" + (n1%=n2) + "}{" + n2 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            document.getElementById("solving").innerHTML += '<p><strong>Ответ:</strong></p>';
            expr = expr1 + "=" + (int == 0 ? "" : int) + "\\frac{" + n1 + "}{" + n2 + "}.";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            break;
            
/*-----------------------------------------------------------------------------*/

        case "-":
            a = n11 * n22 + i1 * n12 * n22 - n21 * n12 - i2 * n22 * n12;
            b = n12 * n22;
            if (a * b >= 0) {
                neg = "";
            } else {
                neg = "-";
            }
            reduceit();
            var expr = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} - " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "}.";
            var expr1 = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} - " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "}";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            document.getElementById("solving").innerHTML += '<p><strong><i>Решение:</i></strong></p>';
            if (i1 != 0 || i2 != 0) {
                document.getElementById("solving").innerHTML += '<p>Приводим дроби к обыкновенному виду:</p>';
                expr = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} - " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "} = ";
                expr += "\\frac{" + (i1 != 0 ? (i1 + "\\cdot" + n12 + "+") : "") + n11 + "}{" + n12 + "} - " + "\\frac{" + (i2 != 0 ? (i2 + "\\cdot" + n22 + "+") : "") + n21 + "}{" + n22 + "}=";
                n11 = i1 * n12 + n11;
                n21 = i2 * n22 + n21;
                expr += "\\frac{" + n11 + "}{" + n12 + "} - " + "\\frac{" + n21 + "}{" + n22 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            if (n12 != n22) {
                document.getElementById("solving").innerHTML += '<p>Теперь приведём дроби к <i>общему знаменателю</i>. Для этого домножим числитель и знаменатель первой дроби на знаменатель второй дроби, а числитель и знаменатель второй дроби - на знаменатель первой:</p>';
                expr = "\\frac{" + n11 + "}{" + n12 + "} - " + "\\frac{" + n21 + "}{" + n22 + "} = ";
                expr += "\\frac{" + n11 + "\\cdot" + n22 + "}{" + n12 + "\\cdot" + n22 + "} - " + "\\frac{" + n21 + "\\cdot" + n12 + "}{" + n22 + "\\cdot" + n12 + "} = ";
                expr += "\\frac{" + n11 * n22 + "}{" + n12 * n22 + "} - " + "\\frac{" + n21 * n12 + "}{" + n22 * n12 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            document.getElementById("solving").innerHTML += '<p>Если знаменатели дробей равны, то можно вычесть числители:</p>';
            expr = "\\frac{" + n11 * n22 + "}{" + n12 * n22 + "} - " + "\\frac{" + n21 * n12 + "}{" + n22 * n12 + "}=";
            expr += "\\frac{" + n11 * n22 + "-" + n21 * n12 + "}{" + n12 * n22 + "}=";
            var n1 = n11 * n22 - n21 * n12;
            var sign = "";
            if (n1 < 0) {
                sign = "-";
            }
            n1 = Math.abs(n1);
            var n2 = n12 * n22;
            if (n1 % n2 == 0) {
                expr += sign + "\\frac{" + n1 + "}{" + n2 + "} = ";
                expr += sign + n1 / n2 + ".";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
                document.getElementById("solving").innerHTML += '<p><strong>Ответ:</strong></p>';
                expr = expr1 + "=" + sign + n1 / n2 + ".";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
                break;
            }
            expr += sign + "\\frac{" + n1 + "}{" + n2 + "}.";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            var gcd = findGCD(n1, n2);
            if (gcd > 1) {
                document.getElementById("solving").innerHTML += '<p>Полученную дробь можно сократить на ' + gcd + ':</p>';
                expr = sign + "\\frac{" + n1 + "}{" + n2 + "} =" + sign + "\\frac{" + n1 / gcd + "\\cdot" + gcd + "}{" + n2 / gcd + "\\cdot" + gcd + "} = ";
                n1 /= gcd;
                n2 /= gcd;
                expr += sign + "\\frac{" + n1 + "}{" + n2 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            }
            var int = 0;
            if (n1 > n2) {
                document.getElementById("solving").innerHTML += '<p>Полученную дробь можно привести к смешанному виду:</p>';
                int = (n1 - n1 % n2) / n2;
                expr = sign + "\\frac{" + n1 + "}{" + n2 + "}=" + sign + int + "\\frac{" + (n1 %= n2) + "}{" + n2 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            document.getElementById("solving").innerHTML += '<p><strong>Ответ:</strong></p>';
            expr = expr1 + "=" + sign + (int==0 ? "":int) + "\\frac{" + n1 + "}{" + n2 + "}.";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            break;



/*********************************************************************/
        case "*":
            a = (n11 * 1 + i1 * n12) * (n21 * 1 + i2 * n22);
            b = n12 * n22;
            if (a * b >= 0) {
                neg = "";
            } else {
                neg = "-";
            }
            reduceit();
            var expr = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} \\cdot " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "}.";
            var expr1 = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} \\cdot " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "}";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            document.getElementById("solving").innerHTML += '<p><strong><i>Решение:</i></strong></p>';
            if (i1 != 0 || i2 != 0) {
                document.getElementById("solving").innerHTML += '<p>Приводим дроби к обыкновенному виду:</p>';
                expr = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} \\cdot " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "} = ";
                expr += "\\frac{" + (i1 != 0 ? (i1 + "\\cdot" + n12 + "+") : "") + n11 + "}{" + n12 + "} \\cdot " + "\\frac{" + (i2 != 0 ? (i2 + "\\cdot" + n22 + "+") : "") + n21 + "}{" + n22 + "}=";
                n11 = i1 * n12 + n11;
                n21 = i2 * n22 + n21;
                expr += "\\frac{" + n11 + "}{" + n12 + "} \\cdot " + "\\frac{" + n21 + "}{" + n22 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            document.getElementById("solving").innerHTML += '<p>Числитель первой дроби умножаем на числитель второй дроби, знаменатель первой дроби умножаем на знаменатель второй дроби:</p>';
            expr = "\\frac{" + n11 + "}{" + n12 + "} \\cdot " + "\\frac{" + n21 + "}{" + n22 + "} = ";
            expr += "\\frac{" + n11 + "\\cdot" + n21 + "}{" + n12 + "\\cdot" + n22 + "}=";
            var n1 = n11 * n21;
            var n2 = n12 * n22;
            if (n1 % n2 == 0) {
                expr += "\\frac{" + n1 + "}{" + n2 + "} = ";
                expr += n1 / n2 + ".";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
                document.getElementById("solving").innerHTML += '<p><strong>Ответ:</strong></p>';
                expr = expr1 + "=" + n1 / n2 + ".";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
                break;
            }
            expr += "\\frac{" + n1 + "}{" + n2 + "}.";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            var gcd = findGCD(n1, n2);
            if (gcd > 1) {
                document.getElementById("solving").innerHTML += '<p>Полученную дробь можно сократить на ' + gcd + ':</p>';
                expr = "\\frac{" + n1 + "}{" + n2 + "} = \\frac{" + n1 / gcd + "\\cdot" + gcd + "}{" + n2 / gcd + "\\cdot" + gcd + "} = ";
                n1 /= gcd;
                n2 /= gcd;
                expr += "\\frac{" + n1 + "}{" + n2 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            }
            var int = 0;
            if (n1 > n2) {
                document.getElementById("solving").innerHTML += '<p>Полученную дробь можно привести к смешанному виду:</p>';
                int = (n1 - n1 % n2) / n2;
                expr = "\\frac{" + n1 + "}{" + n2 + "}=" + int + "\\frac{" + (n1 %= n2) + "}{" + n2 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            document.getElementById("solving").innerHTML += '<p><strong>Ответ:</strong></p>';
            expr = expr1 + "=" + (int == 0 ? "" : int) + "\\frac{" + n1 + "}{" + n2 + "}.";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            break;

            /*////////////////////////////////////////////////////////////////////////////*/
        case "/":
            a = (n11 + i1 * n12) * n22;
            b = n12 * (n21 + i2 * n22);
            if (a * b >= 0) {
                neg = "";
            } else {
                neg = "-";
            }
            reduceit();
            var expr = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} : " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "}.";
            var expr1 = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} : " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "}";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" alt="" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            document.getElementById("solving").innerHTML += '<p><strong><i>Решение:</i></strong></p>';
            if (i1 != 0 || i2 != 0) {
                document.getElementById("solving").innerHTML += '<p>Приводим дроби к обыкновенному виду:</p>';
                expr = (i1 != 0 ? i1 : "") + "\\frac{" + n11 + "}{" + n12 + "} : " + (i2 != 0 ? i2 : "") + "\\frac{" + n21 + "}{" + n22 + "} = ";
                expr += "\\frac{" + (i1 != 0 ? (i1 + "\\cdot" + n12 + "+") : "") + n11 + "}{" + n12 + "} : " + "\\frac{" + (i2 != 0 ? (i2 + "\\cdot" + n22 + "+") : "") + n21 + "}{" + n22 + "}=";
                n11 = i1 * n12 + n11;
                n21 = i2 * n22 + n21;
                expr += "\\frac{" + n11 + "}{" + n12 + "} : " + "\\frac{" + n21 + "}{" + n22 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            document.getElementById("solving").innerHTML += '<p>Числитель первой дроби умножаем на знаменатель второй дроби, знаменатель первой дроби умножаем на числитель второй дроби:</p>';
            expr = "\\frac{" + n11 + "}{" + n12 + "} : " + "\\frac{" + n21 + "}{" + n22 + "} = ";
            expr += "\\frac{" + n11 + "\\cdot" + n22 + "}{" + n12 + "\\cdot" + n21 + "}=";
            var n1 = n11 * n22;
            var n2 = n12 * n21;
            if (n1 % n2 == 0) {
                expr += "\\frac{" + n1 + "}{" + n2 + "} = ";
                expr += n1 / n2 + ".";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
                document.getElementById("solving").innerHTML += '<p><strong>Ответ:</strong></p>';
                expr = expr1 + "=" + n1 / n2 + ".";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
                break;
            }
            expr += "\\frac{" + n1 + "}{" + n2 + "}.";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            var gcd = findGCD(n1, n2);
            if (gcd > 1) {
                document.getElementById("solving").innerHTML += '<p>Полученную дробь можно сократить на ' + gcd + ':</p>';
                expr = "\\frac{" + n1 + "}{" + n2 + "} = \\frac{" + n1 / gcd + "\\cdot" + gcd + "}{" + n2 / gcd + "\\cdot" + gcd + "} = ";
                n1 /= gcd;
                n2 /= gcd;
                expr += "\\frac{" + n1 + "}{" + n2 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';

            }
            var int = 0;
            if (n1 > n2) {
                document.getElementById("solving").innerHTML += '<p>Полученную дробь можно привести к смешанному виду:</p>';
                int = (n1 - n1 % n2) / n2;
                expr = "\\frac{" + n1 + "}{" + n2 + "}=" + int + "\\frac{" + (n1 %= n2) + "}{" + n2 + "}.";
                document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            }
            document.getElementById("solving").innerHTML += '<p><strong>Ответ:</strong></p>';
            expr = expr1 + "=" + (int == 0 ? "" : int) + "\\frac{" + n1 + "}{" + n2 + "}.";
            document.getElementById("solving").innerHTML += '<div style="text-align:center"><img class="formula" src="http://latex.codecogs.com/gif.latex?' + expr + '"></div>';
            break;
    }
}
