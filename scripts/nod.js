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
	t3.innerHTML = "";
}
function button_onclick()
{
    var s = t1.value.replace(" ", "");
    var a = [];
    var i = 0;
    while (s != "")
    {
        var u = s.indexOf(',');
        if (u == -1)
        {
            var num = s.substring(0, s.length);
            s = "";
        }
        else
        {
            var num = s.substring(0, u);
            s = s.substring(u + 1, s.length);
        }
        num = parseFloat(num);
        if (!isNaN(num))
        {
            a[i] = num;
            i += 1;
        } else {
            t3.innerHTML = '<div class="err">Ошибка ввода!</div>';
            return;
        }

    }
    var nod = 0;
    var nok = 0;
    if (a.length != 0)
    {
        nod = a[0];
        nok = a[0];
    }
    for (var i = 1; i < a.length; i++)
    {
        var t = a[i];
        var tmp = nod;
        while (tmp != 0 && t != 0)
        {
            if (t > tmp)
            {
                t = t % tmp;
            }
            else tmp = tmp % t;
        }
        nod = Math.max(tmp, t);
        tmp = nok;
        t = a[i];
        while (tmp != 0 && t != 0)
        {
            if (tmp > t)
            {
                tmp %= t;
            }
            else t %= tmp;
        }
        nok *= a[i] / Math.max(t, tmp);
    }
    t3.innerHTML = nod;
}
