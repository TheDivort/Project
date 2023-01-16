var mth = {
    solve: function (event) {
        event && event.preventDefault();
        var input = +document.getElementById("mth-input").value;
        var outputElem = document.getElementById("mth-answer");
        if (isNaN(input) || Math.floor(input) !== input || input <= 0) {
            outputElem.innerHTML = "Введите натуральное число";
            return;
        }
        var res = n = input;
        for (var d = 2; d * d <= n; d++) {
            if (n % d === 0) {
                while (n % d === 0) {
                    n /= d;
                }
                res -= res / d;
            }
        }
        if (n > 1) {
            res -= res / n;
        }
        outputElem.innerHTML = "<em>φ</em>(" + input + ") = <strong>" + res + "</strong>";
    },
    clear: function () {
        document.getElementById("mth-input").value = "";
        document.getElementById("mth-answer").innerHTML = "";
    }
};
