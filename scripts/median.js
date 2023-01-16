var mth = {
    solve: function (event) {
        event && event.preventDefault();
        var input = document.getElementById("mth-input").value;
        var outputElem = document.getElementById("mth-answer");
        var error = "";
        var values = input.split(",").map(function (v) {
            var res = parseFloat(v);
            if (isNaN(res)) {
                error = "'" + v + "'";
            }
            return res;
        })
        if (error) {
            outputElem.innerHTML = "Некорректное число " + error + ".";
            return;
        }
        values.sort(function (a, b) {
            return a - b;
        });
        var halfLen = Math.floor(values.length / 2);
        var median;
        if (values.length % 2) {
            median = values[halfLen];
            values[halfLen] = "<u>" + values[halfLen] + "</u>"
        } else {
            median = (values[halfLen - 1] + values[halfLen]) / 2;
            values[halfLen - 1] = "<u>" + values[halfLen - 1] + "</u>"
            values[halfLen] = "<u>" + values[halfLen] + "</u>"
        }
        outputElem.innerHTML = "<p>Упорядоченный ряд чисел: " + values.join(", ") + ".</p>" +
            "<p><strong>Медиана: </strong>" + median + "</p>";
    },
    clear: function () {
        document.getElementById("mth-input").value = "";
        document.getElementById("mth-answer").innerHTML = "";
    }
};
