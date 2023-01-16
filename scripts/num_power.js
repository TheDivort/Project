function f2(event)
{
	if (event.keyCode == 13)
	{
		button_onclick();
	}
}
function clear1()
{
	t1.value = "";
	t2.value = "";
	t3.innerHTML = "";
}
function button_onclick()
{
    var n = parseFloat(t1.value.replace(',', '.'));
    var p = parseFloat(t2.value.replace(',', '.'));
    if (isNaN(n) || isNaN(p)) {
        t3.innerHTML = 'Ошибка ввода чисел!';
        return;
    }
    var res = Math.pow(n, p);
    if (isNaN(res)) {
        t3.innerHTML = 'Операция не определена! Вероятно, вы попытались возвести отрицательное число в нецелую степень.';
        return;
    }
    if (!isFinite(res)) {
        t3.innerHTML = 'Операция не определена! Вероятно, вы попытались возвести ноль в отрицательную степень.';
        return;
    }
    t3.innerHTML = res.toString().replace('.', ',');
}
