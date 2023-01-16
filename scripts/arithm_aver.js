function function2(event)
{
	if (event.keyCode == 13)
	{
		calc();
	}
}
function clear1()
{
	t1.value = "";
	t3.innerHTML = "";
	t4.innerHTML = "";
}
function calc()
{
	var s = t1.value.replace(",", ".");
	s = s.replace(" ", "");
	var a = [];
	var ai = 0;
	var sum = 0;
	var pr = 1;
	if (s == '') {
		t3.innerHTML = 'Введите ряд чисел!';
		return;
	}
	while (s != '')
	{
		var i = s.indexOf(';');
		if (i == -1)
		{
			var num = s.substring(0, s.length);
			s = '';
		}
		else
		{
			var num = s.substring(0, i);
			s = s.substring(i + 1, s.length);
		}
		num = parseFloat(num);
		if (!isNaN(num))
		{
			a[ai] = num;
			sum += num;
			pr *= num;
			ai += 1;
		} else {
		    t3.innerHTML = 'Недопустимый символ!';
		    return;
		}
	}
	a.sort(function (x, y) { if (x < y) return -1; if (x > y) return 1; return 0; });
	var med = 0;
	if (a.length % 2 == 0 && a.length > 0)
	{
		med = (a[a.length / 2 - 1] + a[a.length / 2]) / 2;
	}
	else if (a.length > 0)
	{
		med = a[Math.floor(a.length / 2)];
	}
	var sra = sum / a.length;
	var srg = Math.pow(pr, 1 / a.length);
	if (isNaN(srg))
	{
	    srg = '—';
	}
	t3.innerHTML = sra;
	t4.innerHTML = srg;
}
