function solveProportion() {
    var a = getFieldValue('a');
    var b = getFieldValue('b');
    var c = getFieldValue('c');
    var d = getFieldValue('d');

    if (a == '') {
        showAnswer('a', 'b', 'c', 'd');
    } else if (b == '') {
        showAnswer('b', 'a', 'd', 'c');
    } else if (c == '') {
        showAnswer('c', 'a', 'd', 'b');
    } else if (d == '') {
        showAnswer('d', 'b', 'c', 'a');
    }

    function showAnswer(a, b, c, d) {
        var answer = '<div class="frac1">' + a + '</div>' + ' = <div class="frac1"><div class="top1">' +
            b + ' · ' + c + '</div><div class="bottom1">' + d + '</div></div>';
        b = parseFloat(getFieldValue(b));
        c = parseFloat(getFieldValue(c));
        d = parseFloat(getFieldValue(d));
        if (isNaN(b) || isNaN(c) || isNaN(d)) {
            document.getElementById('result').innerHTML = 'Вы ввели некорректные данные!';
            return;
        }
        answer += '= <div class="frac1"><div class="top1">' +
            b + ' · ' + c + '</div><div class="bottom1">' + d + '</div></div> = ' + (b * c / d);
        document.getElementById('result').innerHTML = answer;
    }

    function getFieldValue(name) {
        return document.getElementById('field_' + name).value.replace(',', '.');
    }
}

function resetFields() {
    document.getElementById('field_a').value = '';
    document.getElementById('field_b').value = '';
    document.getElementById('field_c').value = '';
    document.getElementById('field_d').value = '';
    document.getElementById('result').innerHTML = '';
}