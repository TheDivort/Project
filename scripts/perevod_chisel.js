function function_1(event)
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
	t3.value = "";
	t4.innerHTML = "";
}
function timeout2()
{
	setTimeout(function () { t4.innerHTML = ""; }, 2000)
}
function button_onclick()
{
	if (t1.value == '' || t2.value == '' || t3.value == '')
	{
		t4.innerHTML = 'Заполните все поля ввода!';
		timeout2();
		return;
	}
	var str1 = t1.value;
	var str2 = t2.value;
	var str3 = t3.value;
	var x1 = 0;
	if (str2 > 36 || str2 < 2 || str3 > 36 || str3 < 2)
	{
		t4.innerHTML = 'Основание должно быть в диапазоне 2-36!';
		timeout2();
		return;
	}
	for (var i1 = 0; i1 < str1.length; i1++)
	{
		var c2 = str1.charAt(i1).toUpperCase();
		var d = -1;
		if (c2 >= '0' && c2 <= '9')
			d = c2.charCodeAt(0) - '0'.charCodeAt(0);
		else if (c2 >= 'A' && c2 <= 'Z')
			d = c2.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
		if (d < 0)
		{
			t4.innerHTML = 'Символы в 1 строке должны быть в диапазоне 0-9, A-Z, a-z!';
			timeout2();
			return;
		}
		if (d >= str2)
		{
			t4.innerHTML = 'Цифры в 1 строке должны быть меньше основания!';
			timeout2();
			return;
		}
		x1 = x1 * str2 + d;
	}
	var str4 = "";
	var q = x1;
	while (q != 0)
	{
		if (q % str3 < 10)
		{
			str4 = String.fromCharCode(q % str3 + '0'.charCodeAt(0)) + str4;
		}
		else if (q % str3 >= 10)
		{
			str4 = String.fromCharCode(q % str3 + 'A'.charCodeAt(0) - 10) + str4;
		}
		q = Math.floor(q / str3);
	}
	t4.innerHTML = str4;
}