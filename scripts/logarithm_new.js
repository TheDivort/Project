function f2(event) {
    if (event.keyCode == 13) {
        button_onclick();
    }
}
function clear1() {
    document.getElementById('t1').value = "";
    document.getElementById('t2').value = "";
    document.getElementById('t3').innerHTML = "";
}
function button_onclick() {
    var a = parseFloat(document.getElementById('t1').value.replace(',', '.'));
    var f = document.getElementById('t2').value.replace(',', '.');
    if (f == 'e') {
        f = Math.E;
    } else {
        f = parseFloat(f);
    }
    if (isNaN(a) || isNaN(f)) {
        document.getElementById('t3').innerHTML = 'Ошибка при вводе данных!';
        return;
    }
    if (a <= 0) {
        document.getElementById('t3').innerHTML = 'Число должно быть положительным!';
        return;
    }
    if (f <= 0 || f == 1) {
        document.getElementById('t3').innerHTML = 'Основание логарифма должно быть больше нуля и не должно равняться единице!';
        return;
    }
    var res = (Math.log(a) / Math.log(f));
    if (isNaN(res) || !isFinite(res)) {
        document.getElementById('t3').innerHTML = 'Логарифм не определён!';
        return;
    }
    document.getElementById('t3').innerHTML = round(res).toString().replace('.', ',');
}

function round(x) {
    var accuracy = document.getElementById('calc_accuracy').value;
    accuracy = parseInt(accuracy);
    if (isNaN(accuracy)) {
        accuracy = 3;
    }
    x = Math.round(x * Math.pow(10, accuracy)) / Math.pow(10, accuracy);
    return x;
}