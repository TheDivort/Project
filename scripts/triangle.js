var elm = 0;
var s = "S = ";
var R, r, s1, s2, s3, an1, an2, an3, h, p, P;
var m;
var nrm = "#555";
var knw = "#0f0";
var smb1 = "normal 12pt Arial";
var smb2 = "italic 10pt Arial";
var end = '<tr><td></td><td><input type="button" id="btn" value="Рассчитать" onclick="calc()"/></td></tr><tr><td>Результат:</td><td id="res"></td></tr>';
window.onload = function () {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.moveTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.lineTo(160, 20);
    ctx.strokeStyle = nrm;
    ctx.lineWidth = 2;
    ctx.font = smb1;
    ctx.fillText("A", 15, 175);
    ctx.fillText("B", 155, 16);
    ctx.fillText("C", 230, 175);
    ctx.stroke();
    ctx.beginPath();
    ctx.font = smb2;
    ctx.fillText("α", 42, 153);
    ctx.fillText("γ", 216, 153);
    ctx.fillText("β", 153, 42);
    ctx.fillText("a", 205, 90);
    ctx.fillText("b", 130, 175);
    ctx.fillText("c", 78, 90);
    ctx.stroke();
}
function f1() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.strokeStyle = knw;
    ctx.moveTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.moveTo(160, 20);
    ctx.lineTo(160, 160);
    ctx.moveTo(170, 160);
    ctx.lineTo(170, 150);
    ctx.lineTo(160, 150);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(20, 160);
    ctx.lineTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.font = smb2;
    ctx.fillText("h", 148, 100);
    ctx.fillText("b", 130, 175);
    ctx.strokeStyle = nrm;
    ctx.stroke();
    f_invisible();
    document.getElementById('f1').style.display = 'block';
}
function f2() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.strokeStyle = knw;
    ctx.moveTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.moveTo(160, 20);
    ctx.moveTo(240, 160);
    ctx.arc(240, 160, 15, Math.PI, Math.PI * 1.33, false);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = nrm;
    ctx.font = smb2;
    ctx.fillText("a", 205, 90);
    ctx.fillText("b", 130, 175);
    ctx.fillText("γ", 210, 150);
    ctx.moveTo(20, 160);
    ctx.lineTo(160, 20);
    ctx.stroke();
    f_invisible();
    document.getElementById('f2').style.display = 'block';
}
function f3() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.moveTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.lineTo(160, 20);
    ctx.moveTo(148, 107);
    ctx.lineTo(148, 160);
    ctx.strokeStyle = knw;
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(148, 107, 53, 0, Math.PI * 2, true);
    ctx.strokeStyle = nrm;
    ctx.font = smb2;
    ctx.fillText("a", 205, 90);
    ctx.fillText("b", 130, 175);
    ctx.fillText("c", 78, 90);
    ctx.fillText("r", 152, 140);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.arc(148, 107, 2, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.lineWidth = 2;
    f_invisible();
    document.getElementById('f3').style.display = 'block';
}
function f4() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.strokeStyle = knw;
    ctx.moveTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.lineTo(160, 20);
    ctx.moveTo(130, 130);
    ctx.lineTo(160, 20);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.strokeStyle = nrm;
    ctx.arc(130, 130, 115, 0, Math.PI * 2, true);
    ctx.font = smb2;
    ctx.fillText("a", 205, 90);
    ctx.fillText("b", 130, 175);
    ctx.fillText("c", 78, 90);
    ctx.fillText("R", 150, 90);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = nrm;
    ctx.arc(130, 130, 2, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.lineWidth = 2;
    f_invisible();
    document.getElementById('f4').style.display = 'block';
}
function f5() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.moveTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.lineTo(160, 20);
    ctx.strokeStyle = knw;
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = nrm;
    ctx.font = smb2;
    ctx.fillText("a", 205, 90);
    ctx.fillText("b", 130, 175);
    ctx.fillText("c", 78, 90);
    ctx.stroke();
    f_invisible();
    document.getElementById('f5').style.display = 'block';
}
function f6() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.moveTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.lineTo(160, 20);
    ctx.font = smb1;
    ctx.fillText("A", 12, 180);
    ctx.fillText("B", 168, 18);
    ctx.fillText("C", 232, 180);
    ctx.strokeStyle = nrm;
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.arc(160, 20, 2, 0, Math.PI * 2, false);
    ctx.moveTo(240, 160);
    ctx.arc(240, 160, 2, 0, Math.PI * 2, false);
    ctx.moveTo(20, 160);
    ctx.arc(20, 160, 2, 0, Math.PI * 2, false);
    ctx.strokeStyle = knw;
    ctx.stroke();
    ctx.lineWidth = 2;
    f_invisible();
    document.getElementById('f6').style.display = 'block';
}
function f7() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.strokeStyle = knw;
    ctx.moveTo(160, 20);
    ctx.lineTo(20, 160);
    ctx.arc(20, 160, 15, 3 / 4 * Math.PI + Math.PI, Math.PI * 2, false);
    //Второй угол двумя дугами
    ctx.moveTo(160, 20);
    ctx.arc(160, 20, 15, 1.07, 2.3, false);
    ctx.moveTo(160, 20);
    ctx.arc(160, 20, 20, 1.07, 2.3, false);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.moveTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.font = smb2;
    ctx.fillText("α", 42, 153);
    ctx.fillText("β", 150, 52);
    ctx.fillText("c", 78, 90);
    ctx.strokeStyle = nrm;
    ctx.stroke();
    f_invisible();
    document.getElementById('f7').style.display = 'block';
}
function f8() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.strokeStyle = knw;
    ctx.moveTo(130, 130);
    ctx.lineTo(160, 20);
    ctx.arc(160, 20, 15, 1.07, 2.3, false);
    //Второй угол двумя дугами
    ctx.moveTo(20, 160);
    ctx.arc(20, 160, 15, 3 / 4 * Math.PI + Math.PI, Math.PI * 2, false);
    ctx.moveTo(20, 160);
    ctx.arc(20, 160, 20, 3 / 4 * Math.PI + Math.PI, Math.PI * 2, false);
    //Третий угол тремя дугами
    ctx.moveTo(240, 160);
    ctx.arc(240, 160, 15, Math.PI, Math.PI * 1.33, false);
    ctx.moveTo(240, 160);
    ctx.arc(240, 160, 20, Math.PI, Math.PI * 1.33, false);
    ctx.moveTo(240, 160);
    ctx.arc(240, 160, 25, Math.PI, Math.PI * 1.33, false);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.strokeStyle = nrm;
    ctx.arc(130, 130, 115, 0, Math.PI * 2, true);
    ctx.moveTo(160, 20);
    ctx.lineTo(240, 160);
    ctx.lineTo(20, 160);
    ctx.lineTo(160, 20);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.strokeStyle = nrm;
    ctx.arc(130, 130, 2, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.font = smb2;
    ctx.fillText("α", 42, 153);
    ctx.fillText("γ", 208, 145);
    ctx.fillText("β", 160, 50);
    ctx.fillText("R", 150, 90);
    ctx.strokeStyle = knw;
    ctx.stroke();
    f_invisible();
    document.getElementById('f8').style.display = 'block';
}
function f9() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.strokeStyle = knw;
    ctx.moveTo(200, 190);
    ctx.lineTo(190, 190);
    ctx.lineTo(190, 200);
    ctx.moveTo(159, 159);
    ctx.lineTo(200, 159);
    ctx.moveTo(130, 130);
    ctx.lineTo(200, 60);
    ctx.stroke();
    ctx.beginPath();
    ctx.font = smb2;
    ctx.fillText("R", 150, 92);
    ctx.fillText("r", 180, 155);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.strokeStyle = nrm;
    ctx.arc(130, 130, 100, 0, Math.PI * 2, true);
    ctx.moveTo(200, 159);
    ctx.arc(159, 159, 41, 0, Math.PI * 2, true);
    ctx.moveTo(200, 60);
    ctx.lineTo(200, 200);
    ctx.lineTo(60, 200);
    ctx.lineTo(130, 130);
    ctx.stroke();
    //
    ctx.beginPath();
    ctx.lineWidth = 4;
    ctx.arc(130, 130, 2, 0, Math.PI * 2, true);
    ctx.moveTo(159, 159);
    ctx.arc(159, 159, 2, 0, Math.PI * 2, true);
    ctx.stroke();
    ctx.lineWidth = 2;
    f_invisible();
    document.getElementById('f9').style.display = 'block';
}
function f10() {
    var ctx = document.getElementById("canvas").getContext("2d");
    ctx.beginPath();
    ctx.clearRect(0, 0, 260, 260);
    ctx.strokeStyle = knw;
    ctx.moveTo(130, 20);
    ctx.lineTo(211, 160);
    ctx.font = smb2;
    ctx.fillText("a", 180, 90);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(211, 160);
    ctx.lineTo(49, 160);
    ctx.lineTo(130, 20);
    ctx.strokeStyle = nrm;
    ctx.stroke();
    f_invisible();
    document.getElementById('f10').style.display = 'block';
}
function select() {
    if (elm == 0) {
        document.getElementById("l" + m).style = "color: #444; font-weight:bold;";
        elm = m;
    }
    else {
        document.getElementById("l" + elm).style = "color: #757575; font-weight:normal;";
        document.getElementById("l" + m).style = "color: #444; font-weight:bold;";
        elm = m;
    }
}
function m1() {
    document.getElementById("tb").innerHTML = '<tr><td>Сторона b:</td><td><input type="text" id="s1"/></td></tr><tr><td>Высота h:</td><td><input type="text" id="h"></td></tr>' + end;
    m = 1;
    select();
}
function m2() {
    document.getElementById("tb").innerHTML = '<tr><td>Сторона a:</td><td><input type="text" id="s1"/></td></tr><tr><td>Сторона b:</td><td><input type="text" id="s2"/></td></tr><tr><td>Угол γ, °:</td><td><input type="text" id="an1"></td></tr>' + end;
    m = 2;
    select();
}
function m3() {
    document.getElementById("tb").innerHTML = '<tr><td>Полупериметр, p:</td><td><input type="text" id="p"/></td></tr><tr><td>Радиус вписанной окружности, r:</td><td><input type="text" id="r"></td></tr>' + end;
    m = 3;
    select();
}
function m4() {
    document.getElementById("tb").innerHTML = '<tr><td>Произведение всех сторон, abc:</td><td><input type="text" id="P"/></td></tr><tr><td>Радиус описанной окружности, R:</td><td><input type="text" id="R"></td></tr>' + end;
    m = 4;
    select();
}
function m5() {
    document.getElementById("tb").innerHTML = '<tr><td>Cторона a:</td><td><input type="text" id="s1"/></td></tr><tr><td>Сторона b:</td><td><input type="text" id="s2"></td></tr><tr><td>Сторона c:</td><td><input type="text" id="s3"></td></tr>' + end;
    m = 5;
    select();
}
function m6() {
    document.getElementById("tb").innerHTML = '<tr><td>A:</td><td><input type="text" id="x1" placeholder="x"/> <input type="text" id="y1" placeholder="y"/></td></tr><tr><td>B:</td><td><input type="text" id="x2" placeholder="x"> <input type="text" id="y2" placeholder="y"></td></tr><tr><td>C:</td><td><input type="text" id="x3" placeholder="x"> <input type="text" id="y3" placeholder="y"></td></tr>' + end;
    m = 6;
    select();
}
function m7() {
    document.getElementById("tb").innerHTML = '<tr><td>Cторона c:</td><td><input type="text" id="s1"/></td></tr><tr><td>Угол α, °:</td><td><input type="text" id="an1"></td></tr><tr><td>Угол β, °:</td><td><input type="text" id="an2"></td></tr>' + end;
    m = 7;
    select();
}
function m8() {
    document.getElementById("tb").innerHTML = '<tr><td>Угол α, °:</td><td><input type="text" id="an1"/></td></tr><tr><td>Угол β, °:</td><td><input type="text" id="an2"></td></tr><tr><td>Угол γ, °:</td><td><input type="text" id="an3"></td></tr><tr><td>Радиус описанной окружности, R:</td><td><input type="text" id="R"></td></tr>' + end;
    m = 8;
    select();
}
function m9() {
    document.getElementById("tb").innerHTML = '<tr><td>Радиус описанной окружности, R:</td><td><input type="text" id="R"/></td></tr><tr><td>Радиус вписанной окружности, r:</td><td><input type="text" id="r"></td></tr>' + end;
    m = 9;
    select();
}
function m10() {
    document.getElementById("tb").innerHTML = '<tr><td>Cторона a:</td><td><input type="text" id="s1"/></td></tr>' + end;
    m = 10;
    select();
}
function sf() {
    if (m == 1) f1(); else if (m == 2) f2(); else if (m == 3) f3(); else if (m == 4) f4(); else if (m == 5) f5(); else if (m == 6) f6(); else if (m == 7) f7(); else if (m == 8) f8(); else if (m == 9) f9(); if (m == 10) f10();
}
function error() {
    document.getElementById("res").innerHTML = "Вы неверно ввели данные!"
}
function calc() {
    if (m == 1) {
        s1 = document.getElementById("s1").value.replace(",", ".");
        h = document.getElementById("h").value.replace(",", ".");
        s1 = parseFloat(s1);
        h = parseFloat(h);
        if (isNaN(h) || isNaN(s1)) {
            error();
            return;
        }
        document.getElementById("res").innerHTML = s + s1 * h / 2;
    }
    if (m == 2) {
        s1 = document.getElementById("s1").value.replace(",", ".");
        s2 = document.getElementById("s2").value.replace(",", ".");
        an1 = document.getElementById("an1").value.replace(",", ".");
        s1 = parseFloat(s1);
        s2 = parseFloat(s2);
        an1 = parseFloat(an1);
        if (isNaN(s1) || isNaN(s2) || isNaN(an1)) {
            error();
            return;
        }
        var y = s1 * s2 * Math.sin(an1 * Math.PI / 180);
        document.getElementById("res").innerHTML = s + Math.round(y / 1e-6) * 1e-6;
    }
    if (m == 3) {
        p = document.getElementById("p").value.replace(",", ".");
        r = document.getElementById("r").value.replace(",", ".");
        p = parseFloat(p);
        r = parseFloat(r);
        if (isNaN(p) || isNaN(r)) {
            error();
            return;
        }
        document.getElementById("res").innerHTML = s + p * r;
    }
    if (m == 4) {
        P = document.getElementById("P").value.replace(",", ".");
        R = document.getElementById("R").value.replace(",", ".");
        P = parseFloat(P);
        R = parseFloat(R);
        if (isNaN(P) || isNaN(R)) {
            error();
            return;
        }
        document.getElementById("res").innerHTML = s + P / (4 * R);
    }
    if (m == 5) {
        var a = document.getElementById("s1").value.replace(",", ".");
        var b = document.getElementById("s2").value.replace(",", ".");
        var c = document.getElementById("s3").value.replace(",", ".");
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            error();
            return;
        }
        p = (a + b + c) / 2;
        r = Math.sqrt(p * (p - a) * (p - b) * (p - c));
        document.getElementById("res").innerHTML = s + Math.round(r / 1e-6) * 1e-6;
    }
    if (m == 6) {
        var x1 = document.getElementById("x1").value.replace(",", ".");
        var x2 = document.getElementById("x2").value.replace(",", ".");
        var x3 = document.getElementById("x3").value.replace(",", ".");
        var y1 = document.getElementById("y1").value.replace(",", ".");
        var y2 = document.getElementById("y2").value.replace(",", ".");
        var y3 = document.getElementById("y3").value.replace(",", ".");
        x1 = parseFloat(x1);
        x2 = parseFloat(x2);
        x3 = parseFloat(x3);
        y1 = parseFloat(y1);
        y2 = parseFloat(y2);
        y3 = parseFloat(y3);
        if (isNaN(x1) || isNaN(x2) || isNaN(x3) || isNaN(y1) || isNaN(y2) || isNaN(y3)) {
            error();
            return;
        }
        document.getElementById("res").innerHTML = s + Math.abs(((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)) / 2);
    }
    if (m == 7) {
        var c = document.getElementById("s1").value.replace(",", ".");
        var a = document.getElementById("an1").value.replace(",", ".");
        var b = document.getElementById("an2").value.replace(",", ".");
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        if (isNaN(a) || isNaN(b) || isNaN(c)) {
            error();
            return;
        }
        var S = c * c * Math.sin(Math.PI / 180 * a) * Math.sin(Math.PI / 180 * b) / (2 * Math.sin(Math.PI / 180 * a + Math.PI / 180 * b));
        document.getElementById("res").innerHTML = s + Math.round(S / 1e-6) * 1e-6;
    }
    if (m == 8) {
        var a = document.getElementById("an1").value.replace(",", ".");
        var b = document.getElementById("an2").value.replace(",", ".");
        var c = document.getElementById("an3").value.replace(",", ".");
        R = document.getElementById("R").value.replace(",", ".");
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        R = parseFloat(R);
        if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(R)) {
            error();
            return;
        }
        var S = 2 * R * R * Math.sin(a) * Math.sin(b) * Math.sin(c);
        document.getElementById("res").innerHTML = s + Math.round(S / 1e-6) * 1e-6;
    }
    if (m == 9) {
        R = document.getElementById("R").value.replace(",", ".");
        r = document.getElementById("r").value.replace(",", ".");
        R = parseFloat(R);
        r = parseFloat(r);
        if (isNaN(R) || isNaN(r)) {
            error();
            return;
        }
        document.getElementById("res").innerHTML = s + r * r + 2 * r * R;
    }
    if (m == 10) {
        a = document.getElementById("s1").value.replace(",", ".");
        a = parseFloat(a);
        if (isNaN(a)) {
            error();
            return;
        }
        var S = a * a * Math.sqrt(3) / 4;
        document.getElementById("res").innerHTML = s + Math.round(S / 1e-6) * 1e-6;
    }
}
function f_invisible() {
    for (var i = 1; i <= 10; i++) {
        document.getElementById(('f' + i).toString()).style.display = 'none';
    }
}