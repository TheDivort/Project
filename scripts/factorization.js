(function ($) {
    window.umath = window.umath || {};

    /**
     *
     * @param s integer number itself or it's string representation
     * @returns {Array} all ascending dividers in bigInt format
     */
    umath.factorize = function (s) {
        var MAX_INTEGER = 9007199254740991;
        var n = bigInt(s);

        if (n.lesserOrEquals(MAX_INTEGER)) {
            var dividers = factorizeSmall(n.toJSNumber());
            dividers.forEach(function (divider, index, dividers) {
                dividers[index] = bigInt(divider);
            });
            return dividers;
        } else {
            return factorizeBig(n)
        }

        function factorizeSmall(n) {
            var dividers = [],
                sqrt = Math.floor(Math.sqrt(n)),
                d = 2;

            if (n == 1) {
                return [1];
            }

            var quotient;

            while (d <= sqrt) {
                quotient = n / d;
                if (quotient == Math.floor(quotient)) {
                    n = quotient;
                    dividers.push(d);
                    if (n == 1) {
                        break;
                    }
                } else {
                    d++;
                }
            }

            if (n != 1) {
                dividers.push(n);
            }
            return dividers;
        }

        function factorizeBig(n) {
            var dividers = [],
                N = bigInt(n),
                d = bigInt(2);

            if (n.isUnit()) {
                return [n];
            }

            while (true) {
                var divmod = n.divmod(d);
                if (divmod.remainder.isZero()) {
                    n = divmod.quotient;
                    dividers.push(bigInt(d));
                    if (n.isUnit()) {
                        break;
                    }
                } else {
                    d = d.next();
                    if (d.square().greater(N)) {
                        break;
                    }
                }
            }
            if (!n.isUnit()) {
                dividers.push(bigInt(n));
            }
            return dividers;
        }
    };

    umath.factorizationView = new function () {
        function mapToString(dividers) {
            return dividers.map(function (d) {
                return d.toString();
            });
        }

        this.brief = function (dividers) {
            var multiplicity = 1,
                answer = dividers[0].toString();
            for (var i = 1; i < dividers.length; i++) {
                if (dividers[i].equals(dividers[i - 1])) {
                    multiplicity++;
                } else {
                    answer += multiplicity === 1 ? '' : '<sup>' + multiplicity + '</sup>';
                    multiplicity = 1;
                    answer += ' ∙ ' + dividers[i].toString();
                }
            }
            if (multiplicity !== 1) {
                answer += '<sup>' + multiplicity + '</sup>';
            }
            return answer;
        };

        this.detailed = function (dividers) {
            return mapToString(dividers).join(' ∙ ');
        };

        this.column = function (dividers) {
            var leftColumn = '1',
                product = bigInt.one;
            for (var i = dividers.length - 1; i >= 0; i--) {
                product = dividers[i].multiply(product);
                leftColumn = product.toString() + '<br>' + leftColumn;
            }
            return '<div class="fact-column-wrapper"><div class="left-column">' + leftColumn + '</div>'
                + '<div class="right-column">' + mapToString(dividers).join('<br>') + '</div></div>';
        };
    };

    $(function initialize() {
        var INTEGER_REGEX = /^[1-9]+\d*$/,

            INPUT_ID = '#numToFactor',
            CALCULATE_BUTTON_ID = '#umathCalc',
            RESET_BUTTON_ID = '#umathReset',
            ANSWER_ID = '#umathResult',
            MODE_NAME = 'umathMode';

        var factorizationView = umath.factorizationView,
            factorize = umath.factorize;
        var input = $(INPUT_ID),
            result = $(ANSWER_ID);
        input.keydown(function (event) {
            if (event.keyCode == 13) {
                calculate();
            }
        });
        $(CALCULATE_BUTTON_ID).click(function () {
            calculate();
        });
        $(RESET_BUTTON_ID).click(function () {
            reset();
        });

        function reset() {
            input.val('');
            result.html('');
        }

        function isInteger(s) {
            return INTEGER_REGEX.test(s);
        }

        function validateInput() {
            var s = input.val();
            return isInteger(s);
        }

        /**
         * Launches factorization or shows attention in case value is invalid.
         * Called when calculate button is clicked or enter key is pressed.
         */
        function calculate() {
            if (!validateInput()) {
                result.html('Введите натуральное число!');
                return;
            }
            var n = bigInt(input.val());
            var dividers = factorize(n);
            if (dividers.length == 1) {
                var divider = dividers[0];
                if (divider.equals(bigInt.one)) {
                    result.html('1');
                } else {
                    result.html('Число ' + divider.toString() + ' — простое.');
                }
                return;
            }
            var mode = $('input[name="' + MODE_NAME + '"]:checked');
            switch (mode.val()) {
                case 'brief':
                    result.html(factorizationView.brief(dividers));
                    break;
                case 'detailed':
                    result.html(factorizationView.detailed(dividers));
                    break;
                case 'column':
                    result.html(factorizationView.column(dividers));
                    break;
            }
        }
    });
})(jQuery);
