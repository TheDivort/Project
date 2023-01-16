var aux1 = 0;
var aux2 = 0;
var x1 = 0;
var x2 = 0;
var x3 = 0;
var msg = "";
var dis = "";
function calculate(mainform) {
    var dec = (document.mainform.dec.value)
    if (dec != parseInt(dec) || dec == "") {
        dec = 2;
    }
    var a = (document.mainform.a.value)
    var b = (document.mainform.b.value)
    var c = (document.mainform.c.value)
    var d = (document.mainform.d.value)
    if (a == "" && b == "" && c == "" && d == "") {
        document.getElementById('calc_message').innerHTML = "Введите коэффициенты!";
        document.getElementById('dis_message').innerHTML = "";
        document.mainform.x1.value = "";
        document.mainform.x2.value = "";
        document.mainform.x3.value = "";
        return;
    }
    if (a == 0 | a == "") {
        document.getElementById('calc_message').innerHTML = "Уравнение не является кубическим!";
        document.getElementById('dis_message').innerHTML = "";
        document.mainform.x1.value = "";
        document.mainform.x2.value = "";
        document.mainform.x3.value = "";
        return;
    }
    f = (((3 * c) / a) - (((b * b) / (a * a)))) / 3
    g = ((2 * ((Math.pow(b, 3)) / (Math.pow(a, 3))) - (9 * b * c / (a * a)) + ((27 * (d / a))))) / 27 // Math.pow(b,3)
    h = (((g * g) / 4) + ((f * f * f) / 27))
    var dis = h;
    if (h > 0) {
        m = (-(g / 2) + (Math.sqrt(h)))
        k = 1
        if (m < 0) k = -1; else k = 1
        m2 = (Math.pow((m * k), (1 / 3)))
        m2 = m2 * k
        k = 1
        n = (-(g / 2) - (Math.sqrt(h)))
        if (n < 0) k = -1; else k = 1
        n2 = (Math.pow((n * k), (1 / 3)))
        n2 = n2 * k
        k = 1
        x1 = preFormat(((m2 + n2) - (b / (3 * a))), dec);
//ax2

        x2 = ((preFormat(-1 * (m2 + n2) / 2 - (b / (3 * a)), dec) + "  + i * " ) + ( preFormat(((m2 - n2) / 2) * Math.pow(3, .5), dec)));
        x3 = ((preFormat(-1 * (m2 + n2) / 2 - (b / (3 * a)), dec) + "  - i * " ) + ( preFormat(((m2 - n2) / 2) * Math.pow(3, .5), dec)));
        dis = "Дискриминант больше нуля."; //The equation has only one real root.;
        msg = "Уравнение имеет только один действительный корень."
    }
    if (h <= 0) {
        r = ((Math.sqrt((g * g / 4) - h)));
        k = 1;
        if (r < 0) k = -1;
        rc = Math.pow((r * k), (1 / 3)) * k;
        k = 1;
        theta = Math.acos((-g / (2 * r)));
        x1 = (2 * (rc * Math.cos(theta / 3)) - (b / (3 * a)));
        x2a = rc * -1;
        x2b = Math.cos(theta / 3);
        x2c = Math.sqrt(3) * (Math.sin(theta / 3));
        x2d = (b / 3 * a) * -1;
        x2 = (x2a * (x2b + x2c)) - (b / (3 * a));
        x3 = (x2a * (x2b - x2c)) - (b / (3 * a));

        x1 = x1 * 1E+16
        ;
        x1 = (x1);
        x1 = preFormat((x1 / 1E+16), dec);
        x2 = x2 * 1E+16;
        x2 = (x2);
        x2 = preFormat((x2 / 1E+16), dec);
        x3 = x3 * 1E+16;
        x3 = (x3);
        x3 = preFormat((x3 / 1E+16), dec);
        dis = "Дискриминант меньше нуля."; //The equation has real rootss;
        msg = "Все корни уравнения - действительные.";

        if (h == 0) {
            dis = "Дискриминант равен нулю"; //inferior a zero, a equa��o tem todas as ra�zes reais;
        }


    }
    /* if ((f+g+h)==0)
     {
     if (d<0) {aux1=-1};if (d>=0) {aux1=1};
     if (aux1>0){aux2=Math.pow((d/a),(1/3));aux2=aux2*-1};
     if (aux1<0){d=d*-1;aux2=Math.pow((d/a),(1/3))};
     x1=aux2; x2=aux2;x3=aux2;
     dis = "Equal to zero"; //The equation has real and equal roots.
     msg = "All of the roots are real and equals";
     }

     */
    document.mainform.dec.value = dec;
    document.getElementById('calc_message').innerHTML = msg;  //document.getElementById('calc_message').innerHTML=  msg;  //
    document.getElementById('dis_message').innerHTML = dis;
    document.mainform.x1.value = "  " + x1;
    document.mainform.x2.value = "  " + x2;
    document.mainform.x3.value = "  " + x3;
}


function filterChars(s, charList) {
    var s1 = "" + s; // force s1 to be a string data type
    var i;
    for (i = 0; i < s1.length;) {
        if (charList.indexOf(s1.charAt(i)) < 0)
            s1 = s1.substring(0, i) + s1.substring(i + 1, s1.length);
        else
            i++;
    }
    return s1;
}

function numeric(s) {
    return filterChars(s, "1234567890.-");
}

function numericVal(val, digits, minval, maxval) {
    val = numeric(val);
    if (val == "" || isNaN(val)) val = 0;
    val = parseFloat(val);
    if (digits != null) {
        var dec = Math.pow(10, digits);
        val = (Math.round(val * dec)) / dec;
    }
    if (minval != null && val < minval) val = minval;
    if (maxval != null && val > maxval) val = maxval;
    return parseFloat(val);
}

function preFormat(val, digits, minval, maxval) {
    var sval = "" + numericVal(val, digits, minval, maxval);
    var i;
    var iDecpt = sval.indexOf(".");
    if (iDecpt < 0) iDecpt = sval.length;
    if (digits != null && digits > 0) {
        if (iDecpt == sval.length)
            sval = sval + ".";
        var places = sval.length - sval.indexOf(".") - 1;
        for (i = 0; i < digits - places; i++)
            sval = sval + "0";
    }
    var firstNumchar = 0;
    if (sval.charAt(0) == "-") firstNumchar = 1;
    for (i = iDecpt - 3; i > firstNumchar; i -= 3)
        sval = sval.substring(0, i) + "," + sval.substring(i);

    return sval;
}

