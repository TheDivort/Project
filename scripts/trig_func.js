var eps = 1e-10;

function f2(event)
{
	if (event.keyCode == 13)
	{
		button_onclick();
	}
}
function timeout1()
{
	setTimeout(function () { t2.innerHTML = ""; }, 2000)
}
function button_onclick()
{
    var x = document.getElementById('t1').value.replace(',', '.');
    var func = document.getElementById('trig_func').value;
    if (isNaN(x)) {
        document.getElementById('t2').innerHTML = 'Введите число!';
        return;
    }
    var unitFactor = Math.PI / 180;
    if (document.getElementById('r2').checked) {
        unitFactor = 1
    } else if (document.getElementById('r3').checked) {
        unitFactor = Math.PI / 200;
    }
    var input = x;
    x *= unitFactor;
    var ans;
    switch (func) {
        case 'sin':
            ans = Math.sin(x);
            break;
        case 'cos':
            ans = Math.cos(x);
            break;
        case 'tg':
            ans = Math.tan(x);
            break;
        case 'ctg':
            ans = 1 / Math.tan(x);
            break;
    }
    if (Math.abs(ans) < eps) {
        ans = 0;
    }
    if (Math.abs(ans) > 1e+12) {
        ans = 'значение не определено.';
    }
    document.getElementById('t2').innerHTML = func + '(' + input + ') = ' + ans;
}