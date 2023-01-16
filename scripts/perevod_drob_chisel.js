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
	var str1 = t1.value.replace(',', '.');
	var del_index = str1.indexOf('.');
	if (del_index != -1) {
	    var str1_i = str1.substring(0, str1.indexOf('.'));
	    var str1_f = str1.substring(str1.indexOf('.') + 1, str1.length);
	} else {
	    var str1_i = str1;
	    var str1_f = '0';
	}
	var str2 = t2.value;
	var str3 = t3.value;
	var x_i = 0;
	var x_f = 0;
	str2 = parseInt(str2);
	str3 = parseInt(str3);
	if (isNaN(str2) || isNaN(str3) || str2 > 36 || str2 < 2 || str3 > 36 || str3 < 2) {
	    t4.innerHTML = 'Основание должно быть целым числом в диапазоне 2-36!';
	    timeout2();
	    return;
	}
	for (var i = 0; i < str1_i.length; i++)
	{
		var c = str1_i.charAt(i).toUpperCase();
		var d = -1;
		if (c >= '0' && c <= '9')
			d = c.charCodeAt(0) - '0'.charCodeAt(0);
		else if (c >= 'A' && c <= 'Z')
			d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
		if (d < 0)
		{
			t4.innerHTML = 'Символы в первой строке должны быть в диапазоне 0-9, A-Z, a-z!';
			timeout2();
			return;
		}
		if (d >= str2)
		{
			t4.innerHTML = 'Цифры в первой строке должны быть меньше основания!';
			timeout2();
			return;
		}
		x_i = x_i * str2 + d;
	}
	var del = str2;
	for (var i = 0; i < str1_f.length; i++) {
	    var c = str1_f.charAt(i).toUpperCase();
	    var d = -1;
	    if (c >= '0' && c <= '9')
	        d = c.charCodeAt(0) - '0'.charCodeAt(0);
	    else if (c >= 'A' && c <= 'Z')
	        d = c.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
	    if (d < 0) {
	        t4.innerHTML = 'Символы в первой строке должны быть в диапазоне 0-9, A-Z, a-z!';
	        timeout2();
	        return;
	    }
	    if (d >= str2) {
	        t4.innerHTML = 'Цифры в первой строке должны быть меньше основания!';
	        timeout2();
	        return;
	    }
	    x_f += d / del;
	    del *= str2;
	}
    var str4 = "";
    var q = x_i;
    if (q == 0) {
        str4 += "0";
    }
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
	var q = x_f;
	str4 += ",";
	if (q == 0) {
	    str4 += "0";
	}
	for (var i = 0; i < 13 && q != 0; i++) {
	    q *= str3;
	    if (Math.floor(q) < 10) {
	        str4 += String.fromCharCode(Math.floor(q) + '0'.charCodeAt(0));
	    } else if (Math.floor(q) >= 10) {
	        str4 += String.fromCharCode(Math.floor(q) + 'A'.charCodeAt(0) - 10);
	    }
	    q -= Math.floor(q);
	}
	t4.innerHTML = str4;
}