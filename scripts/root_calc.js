function calcRoot() {
    var num = document.getElementById('root_num').value;
    var index = document.getElementById('root_index').value;
    if (index == '') {
        index = 2;
    }
    num = parseFloat(num);
    index = parseFloat(index);
    if (isNaN(num) || isNaN(index)) {
        document.getElementById('answer').innerHTML = 'Ошибка при вводе данных!';
        return;
    }
    var res = Math.pow(num, 1 / index);
    if (isNaN(res)) {
        document.getElementById('answer').innerHTML = 'Значение не определено.';
    } else {
        document.getElementById('answer').innerHTML = round(res);
    }
}

function round(x) {
    var accuracy = parseInt(document.getElementById('accuracy').value);
    if (isNaN(accuracy)) {
        accuracy = 3;
    }
    return Math.round(x * Math.pow(10, accuracy)) / Math.pow(10, accuracy);
}

function resetFields() {
    document.getElementById('root_num').value = '';
    document.getElementById('root_index').value = '';
    document.getElementById('answer').innerHTML = '';
}