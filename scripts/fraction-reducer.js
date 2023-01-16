var mth = {
    gcd: function (a, b) {
        if (b === 0) return a;
        if (a < b) return this.gcd(b, a);
        return this.gcd(b, a % b);
    },
    solve: function (event) {
        event && event.preventDefault();
        var num = document.getElementById("mth-num").value;
        var denum = document.getElementById("mth-denum").value;
        var outputElem = document.getElementById("mth-answer");
        num = parseInt(num);
        denum = parseInt(denum);
        if (isNaN(num) || isNaN(denum)) {
            outputElem.innerHTML = "Введите числитель и знаменатель";
            return;
        }
        if (denum === 0) {
            outputElem.innerHTML = "Знаменатель не должен быть равен 0";
            return;
        }
        var sign = num * denum < 0 ? "- " : "";
        num = Math.abs(num);
        denum = Math.abs(denum);
        var gcd = this.gcd(num, denum);
        if (gcd === 1) {
            outputElem.innerHTML = '<div class="mth-frac"><div class="mth-num">' + sign + num + '</div><div class="mth-denum">' + denum + '</div></div>' +
                '<br>Дробь несократима.';
        } else {
            outputElem.innerHTML = '<div class="mth-frac"><div class="mth-num">' + sign + num + '</div><div class="mth-denum">' + denum + '</div></div>' +
                '<div class="mth-eq"> = </div>' +
                '<div class="mth-frac"><div class="mth-num">' + sign + gcd + ' · ' + (num / gcd) + '</div><div class="mth-denum">' + gcd + ' · ' + (denum / gcd) + '</div></div>' +
                '<div class="mth-eq"> = </div>' +
                '<div class="mth-frac"><div class="mth-num">' + sign + (num / gcd) + '</div><div class="mth-denum">' + (denum / gcd) + '</div></div>';
        }
    },
    reset: function () {
        document.getElementById("mth-num").value = "";
        document.getElementById("mth-denum").value = "";
        document.getElementById("mth-answer").innerHTML = "";
    }
}
