var OPoint = [0, 0];
var scale = [1, 0]; // the first number is length of 50px segment
//and the second is scale-code: 10^n -> 0, 2*10^n -> 1, 5*10^n -> 2;

var clr = ['#81d742', '#1e73be', '#dd9933', '#dd3333', '#8224e3', '#eeee22'];

setTimeout(bodyOnLoad, 0);

function bodyOnLoad() {
    setGraphParam();
    graphButtonClick();
    // add events
    let canvas = document.getElementById("graph-canvas");
    canvas.addEventListener("mousemove", showCursorCoordinates);
    let canvasWrapper = document.getElementById("canvas-wrapper");
    canvasWrapper.addEventListener("mousedown", function (event) {
        this.style.cursor = 'move';
        saveCursorCoord(event);
    });
    canvasWrapper.addEventListener("mouseup", function () {
        mouseDown = false;
        this.style.cursor = 'default';
    });
    canvasWrapper.addEventListener("mousemove", moveWithMouse);
}

var cursorPos = [0, 0];
var mouseDown = false;

var plot_mode = 0;

// These variables are used for graph link
var funcString = '';
var tString = ''; //min and max values of parameter

//Variables used for graph plotting
var func = []; // Stores compiled functions
var mint, maxt;

function getGraphLink() {
    var mode = plot_mode == 0 ? '' : '&mode=' + plot_mode;
    var point = OPoint[0] != 0 || OPoint[1] != 0 ? '&point=' + OPoint[0] + ';' + OPoint[1] : '';
    var scales = scale[0] != 1 ? '&scale=' + scale[0] + ';' + scale[1] : '';
    var functions = '&func=' + funcString;
    var param = tString == '' ? '' : '&par=' + tString;
    var url = '/calc/graph/?' + encodeURI(mode + point + scales + functions + param);
    return url;
}

function setGraphURL() { //sets current state URL into adress bar
    var url = getGraphLink();
    window.history.pushState('graph', 'graphState', url);
}

function toggleGraphLink() { //shows and hides graph links in 'graph_link_table'
    if (document.getElementById('graph_link_table').style.display == 'none') {
        var url = "https://umath.ru" + getGraphLink();
        document.getElementById('graph_link_url').innerHTML = url;
        document.getElementById('graph_link_html').innerHTML = '&lt;a href="' + url + '"&gt;Текст ссылки&lt;/a&gt;';
        document.getElementById('graph_link_table').style.display = 'table';

        document.getElementById('graph_link_btn').value = 'Скрыть ссылки';
    } else {
        document.getElementById('graph_link_table').style.display = 'none';

        document.getElementById('graph_link_btn').value = 'Ссылка на график';
    }
}

function setGraphParam() {
    var param = new Array();
    var get = decodeURI(location.search);
    if (get != '') {
        param = (get.substr(1)).split('&'); //divide parameters
        for (var i = 0; i < param.length; i++) {
            var p = param[i].split('=');
            switch (p[0]) {
                case 'mode':
                    document.getElementById('plot_mode').selectedIndex = p[1];
                    plot_mode = parseInt(p[1]);
                    break;
                case 'point':
                    OPoint = p[1].split(';');
                    break;
                case 'scale':
                    scale = p[1].split(';');
                    break;
                case 'func':
                    switch (plot_mode) {
                        case 0:
                            document.getElementById('func_field').value = p[1];
                            break;
                        case 1:
                            var functions = p[1].split(';');
                            document.getElementById('func_field_x').value = '';
                            document.getElementById('func_field_y').value = '';
                            for (var j = 0; j < functions.length - 1; j += 2) {
                                document.getElementById('func_field_x').value += functions[j] + ';';
                                document.getElementById('func_field_y').value += functions[j + 1] + ';';
                            }
                            break;
                        case 2:
                            document.getElementById('func_field_r').value = p[1];
                            break;
                    }
                    break;
                case 'par':
                    var tLimits = p[1].split(';');
                    switch (plot_mode) {
                        case 1:
                            document.getElementById('mint').value = tLimits[0];
                            document.getElementById('maxt').value = tLimits[1];
                            break;
                        case 2:
                            document.getElementById('mina').value = tLimits[0];
                            document.getElementById('maxa').value = tLimits[1];
                            break;
                    }
                    break;
            }
        }
    }
    changeFuncMode();
}

function changeFuncMode() {
    var index = document.getElementById('plot_mode').selectedIndex;
    if (index == 0) {
        plot_mode = 0;
        document.getElementById('usual_form').style.display = 'block';
        document.getElementById('parametric_form').style.display = 'none';
        document.getElementById('polar_coordinates').style.display = 'none';
        graphButtonClick();
    } else if (index == 1) {
        plot_mode = 1;
        document.getElementById('usual_form').style.display = 'none';
        document.getElementById('parametric_form').style.display = 'block';
        document.getElementById('polar_coordinates').style.display = 'none';
        graphButtonClick();
    } else {
        plot_mode = 2;
        document.getElementById('usual_form').style.display = 'none';
        document.getElementById('parametric_form').style.display = 'none';
        document.getElementById('polar_coordinates').style.display = 'block';
        graphButtonClick();
    }
}

function saveCursorCoord(event) {
    mouseDown = true;
    var x, y;
    // For IE
    if (document.all) {
        x = event.x + document.body.scrollLeft;
        y = event.y + document.body.scrollTop;
        // For other browsers
    } else {
        x = event.pageX; // Координата X курсора
        y = event.pageY; // Координата Y курсора
    }
    cursorPos[0] = x;
    cursorPos[1] = y;
}

function moveWithMouse(event) {
    /* Moving the plot field */
    if (mouseDown) {
        var x, y;
        // For IE
        if (document.all) {
            x = event.x + document.body.scrollLeft;
            y = event.y + document.body.scrollTop;
            // For other browsers
        } else {
            x = event.pageX; // Координата X курсора
            y = event.pageY; // Координата Y курсора
        }
        OPoint[0] = parseInt(OPoint[0]) + parseInt(x - cursorPos[0]);
        OPoint[1] = parseInt(OPoint[1]) + parseInt(y - cursorPos[1]);
        cursorPos[0] = x;
        cursorPos[1] = y;
        graph();
    }
}

function showCursorCoordinates(event) {
    if (document.getElementById('showCoord').checked) {
        document.getElementById('position-label').style.display = 'block';
        var x = (event.layerX == undefined ? event.offsetX : event.layerX) - 300 - parseInt(OPoint[0]);
        var y = -((event.layerY == undefined ? event.offsetY : event.layerY) - 300 - parseInt(OPoint[1]));
        x = (x / 50.0 * scale[0]).toFixed(4);
        y = (y / 50.0 * scale[0]).toFixed(4);
        document.getElementById('position-label').innerHTML = x + ', ' + y;
    }
}

function changeScale(zoom) {
    if (zoom == 0) {
        OPoint[0] = parseInt(OPoint[0] * scale[0]);
        OPoint[1] = parseInt(OPoint[1] * scale[0]);
        scale[0] = 1;
        scale[1] = 0;
    } else if (zoom > 0) {
        if (scale[0] == 0.001) {
            return;
        }
        if (scale[1] == 0) {
            scale[0] /= 2.0;
            OPoint[0] *= 2;
            OPoint[1] *= 2;
            scale[1] = 2;
        } else if (scale[1] == 1) {
            scale[0] /= 2.0;
            OPoint[0] *= 2;
            OPoint[1] *= 2;
            scale[1] = 0;
        } else {
            scale[0] = (0.4 * scale[0]).toFixed(3);
            OPoint[0] = (2.5 * OPoint[0]).toFixed(0);
            OPoint[1] = (2.5 * OPoint[1]).toFixed(0);
            scale[1] = 1;
        }
    } else {
        if (scale[0] == 1000) {
            return;
        }
        if (scale[1] == 0) {
            scale[0] *= 2;
            OPoint[0] = (OPoint[0] / 2.0).toFixed(0);
            OPoint[1] = (OPoint[1] / 2.0).toFixed(0);
            scale[1] = 1;
        } else if (scale[1] == 1) {
            scale[0] *= 2.5;
            OPoint[0] = (OPoint[0] * 0.4).toFixed(0);
            OPoint[1] = (OPoint[1] * 0.4).toFixed(0);
            scale[1] = 2;
        } else {
            scale[0] *= 2;
            OPoint[0] = (OPoint[0] / 2.0).toFixed(0);
            OPoint[1] = (OPoint[1] / 2.0).toFixed(0);
            scale[1] = 0;
        }
    }
    graph();
}

function changeCenter(code) {
    if (code == 4) {
        OPoint[0] = 0;
        OPoint[1] = 0;
    }
    if (code == 0) {
        OPoint[1] = parseInt(OPoint[1]) + 50;
    } else if (code == 1) {
        OPoint[0] = parseInt(OPoint[0]) - 50;
    } else if (code == 2) {
        OPoint[1] = parseInt(OPoint[1]) - 50;
    } else if (code == 3) {
        OPoint[0] = parseInt(OPoint[0]) + 50;
    }
    graph();
}

function showPoint() {
    var x = parseFloat(document.getElementById('xpoint').value.replace(',', '.'));
    var y = parseFloat(document.getElementById('ypoint').value.replace(',', '.'));
    OPoint[0] = parseInt(-(x * 50.0 / scale[0]));
    OPoint[1] = parseInt(y * 50.0 / scale[0]);
    graph();
}

function refreshCanvas() {
    OPoint[0] = 0;
    OPoint[1] = 0;
    scale[0] = 1;
    scale[1] = 0;
    graph();
}

function graphButtonClick() {
    func = [];
    funcString = '';
    tString = '';
    if (plot_mode == 0) {
        var s = document.getElementById('func_field').value.replace('\n', '');
        for (var i = 0; s.length != 0; i++) {
            var index = s.indexOf(';');
            if (index == -1) {
                index = s.length;
            }
            funcString += s.substring(0, index) + ';';
            func[i] = math.compile(convertExpression(s.substring(0, index)));
            s = s.substring(index + 1, s.length);
        }
    } else if (plot_mode == 1) {
        tString = document.getElementById('mint').value + ';' + document.getElementById('maxt').value;
        mint = math.eval(document.getElementById('mint').value);
        maxt = math.eval(document.getElementById('maxt').value);
        var sx = document.getElementById('func_field_x').value.replace('\n', '');
        var sy = document.getElementById('func_field_y').value.replace('\n', '');
        for (var i = 0; sx.length != 0 && sy.length != 0; i += 2) {
            var index = sx.indexOf(';');
            if (index == -1) {
                index = sx.length;
            }
            funcString += sx.substring(0, index) + ';';
            func[i] = math.compile(convertExpression(sx.substring(0, index)));
            sx = sx.substring(index + 1, sx.length);
            index = sy.indexOf(';');
            if (index == -1) {
                index = sy.length;
            }
            funcString += sy.substring(0, index) + ';';
            func[i + 1] = math.compile(convertExpression(sy.substring(0, index)));
            sy = sy.substring(index + 1, sy.length);
        }
    } else {
        tString = document.getElementById('mina').value + ';' + document.getElementById('maxa').value;
        mint = math.eval(document.getElementById('mina').value);
        maxt = math.eval(document.getElementById('maxa').value);
        var s = document.getElementById('func_field_r').value.replace('\n', '');
        for (var i = 0; s.length != 0; i++) {
            var index = s.indexOf(';');
            if (index == -1) {
                index = s.length;
            }
            funcString += s.substring(0, index);
            func[i] = math.compile(convertExpression(s.substring(0, index)));
            s = s.substring(index + 1, s.length);
        }
    }
    setGraphURL();
    graph();
}

function graph() {
    var my_canvas = document.getElementById("graph-canvas");
    var c = my_canvas.getContext("2d");
    c.clearRect(0, 0, 635, 635);
    my_canvas.width = 1000;
    c.translate(300.5, 300.5);

    //drawing coordinate grid 635 +
    c.beginPath();
    for (var x = -600 + OPoint[0] % 50; x <= 600; x += 50) {
        c.moveTo(x, -300);
        c.lineTo(x, 600);
    }

    for (var y = -600 + OPoint[1] % 50; y < 601; y += 50) {
        c.moveTo(-300, y);
        c.lineTo(600, y);
    }
    c.strokeStyle = "#ddf";
    c.closePath();
    c.stroke();

    /*drawing axes*/
    c.beginPath();
    if (Math.abs(OPoint[0]) <= 650) {
        c.moveTo(OPoint[0], -600); //OY axe
        c.lineTo(OPoint[0], 650);
    }
    if (Math.abs(OPoint[1] <= 650)) {
        c.moveTo(600, OPoint[1]); //OX axe
        c.lineTo(-650, OPoint[1]);
    }

    //sign OX axe
    for (var x = OPoint[0] % 50 - 300; x < 550; x += 50) {
        if (x < -290) {
            continue;
        } else {
            c.fillText(1 * ((x - OPoint[0]) * scale[0] / 50).toFixed(3), x - 3, 440);
        }
    }
    //sign OY axe
    for (var y = OPoint[1] % 50 - 300; y < 550; y += 50) {
        if (y < -290) {
            continue;
        } else {
            c.fillText(1 * (-(y - OPoint[1]) * scale[0] / 50).toFixed(3), 590, y + 3);
        }
    }

    c.strokeStyle = "#555";
    c.closePath();
    c.stroke();

    //plotting graph

    if (plot_mode == 0) {
        for (var i = 0; i < func.length; i++) {
            c.beginPath();
            c.lineWidth = 2;
            c.lineJoin = 'round';
            var spacing = 0.5;
            var y = 0, x = 0;
            var cx = [];
            var cy = []; //current and previous point coordinates on canvas
            var scope = {
                x: 0,
                tg: math.tan,
                ctg: math.cot,
                ln: math.log,
                arcsin: math.asin,
                arccos: math.acos,
                arctg: math.atan,
                arcctg: arcctg,
                lg: math.log10,
                sh: math.sinh,
                ch: math.cosh,
                th: math.tanh,
                cth: math.coth
            };
            for (cx[0] = -600; cx[0] <= 600; cx[0] += spacing) {
                scope.x = (cx[0] - OPoint[0]) * scale[0] / 50.0;
                y = func[i].eval(scope);
                cy[0] = (-y * 50.0 / scale[0] + parseInt(OPoint[1]));
                if (Math.abs(cy[0]) <= 600 && Math.abs(cy[1]) <= 600) {
                    c.moveTo(cx[1], cy[1]);
                    c.lineTo(cx[0], cy[0]);
                    if (Math.abs(cy[0] - cy[1]) / spacing > 10) {
                        spacing = Math.max(spacing / Math.abs(cy[0] - cy[1]), 0.01);
                    } else {
                        spacing = 0.5;
                    }
                }
                cy[1] = cy[0];
                cx[1] = cx[0];
            }
            c.strokeStyle = clr[i % 6];
            c.stroke();
        }
    }
    /*-----Parametric plot-----*/
    else if (plot_mode == 1) {
        for (var i = 0; i < func.length; i += 2) {
            c.beginPath();
            c.lineWidth = 2;
            c.lineJoin = 'round';
            var spacing = 0.01;
            var y = 0, x = 0;
            var cx = [];
            var cy = []; //current and previous point coordinates on canvas
            scope = {
                t: 0,
                tg: math.tan,
                ctg: math.cot,
                ln: math.log,
                arcsin: math.asin,
                arccos: math.acos,
                arctg: math.atan,
                arcctg: arcctg,
                lg: math.log10,
                sh: math.sinh,
                ch: math.cosh,
                th: math.tanh,
                cth: math.coth
            };
            for (var t = mint; t <= maxt; t += spacing) {
                scope.t = t;
                x = func[i].eval(scope);
                y = func[i + 1].eval(scope);
                cx[0] = x * 50.0 / scale[0] + parseInt(OPoint[0]);
                cy[0] = -y * 50.0 / scale[0] + parseInt(OPoint[1]);
                if (Math.abs(cy[0]) <= 650 && Math.abs(cy[1]) <= 650 && Math.abs(cx[0]) <= 650 && Math.abs(cx[1]) <= 650) {
                    c.moveTo(cx[1], cy[1]);
                    c.lineTo(cx[0], cy[0]);
                }
                cy[1] = cy[0];
                cx[1] = cx[0];
            }
            c.strokeStyle = clr[((i / 2) + 5) % 6];
            c.stroke();
        }
        /*-----Polar coordinates-----*/
    } else {
        for (var i = 0; i < func.length; i++) {
            c.beginPath();
            c.lineWidth = 2;
            c.lineJoin = 'round';
            var spacing = 0.005;
            var y = 0, x = 0;
            var cx = [];
            var cy = []; //current and previous point coordinates on canvas
            var scope = {
                x: 0,
                tg: math.tan,
                ctg: math.cot,
                ln: math.log,
                arcsin: math.asin,
                arccos: math.acos,
                arctg: math.atan,
                arcctg: arcctg,
                lg: math.log10,
                sh: math.sinh,
                ch: math.cosh,
                th: math.tanh,
                cth: math.coth
            };
            for (var t = mint; t <= maxt; t += spacing) {
                scope.t = t;
                r = func[i].eval(scope);
                x = r * Math.cos(t);
                y = r * Math.sin(t);
                cx[0] = x * 50.0 / scale[0] + parseInt(OPoint[0]);
                cy[0] = -y * 50.0 / scale[0] + parseInt(OPoint[1]);
                if (Math.abs(cy[0]) <= 600 && Math.abs(cy[1]) <= 600 && Math.abs(cx[0]) <= 600 && Math.abs(cx[1]) <= 600) {
                    c.moveTo(cx[1], cy[1]);
                    c.lineTo(cx[0], cy[0]);
                }
                cy[1] = cy[0];
                cx[1] = cx[0];
            }
            c.strokeStyle = clr[(i + 3) % 6];
            c.stroke();
        }

    }
    //drawing border
    c.beginPath();
    c.lineWidth = 1;
    c.lineJoin = 'round';
    c.moveTo(-300, -300);
    c.lineTo(600, -450);
    c.lineTo(600, 450);
    c.lineTo(-600, 450);
    c.lineTo(-600, -450);
    c.strokeStyle = '#1e73be';
    c.stroke();

    function arcctg(x) {
        return Math.PI / 2 - math.atan(x);
    }
}

function convertExpression(s) {
    //absolute value
    s = s.replace(/\|(.*?)\|/gi, 'abs($1)');
    s = s.replace(' ', '');

    //log(a, b)
    while (s.indexOf('log') != -1) {
        var index = s.indexOf('log');
        var leftIndex = index + 3;
        var rightIndex = findPairBreaket(s, leftIndex);
        var args = s.substring(leftIndex + 1, rightIndex);
        var arg1 = s.substring(leftIndex + 1, findTopLevelComma(args) + leftIndex + 1);
        var arg2 = s.substring(findTopLevelComma(args) + leftIndex + 2, rightIndex);
        s = s.substring(0, index) + '(ln(' + arg2 + ')/ln(' + arg1 + '))' + s.substring(rightIndex + 1, s.length);
    }

    return s;
}

function findTopLevelComma(s) {
    var i;
    var br = 0;
    for (i = 0; i < s.length; i++) {
        if (s.charAt(i) == '(') {
            br++;
        } else if (s.charAt(i) == ')') {
            br--;
        } else if (s.charAt(i) == ',' && br == 0) {
            return i;
        }
    }
    return -1;
}

function findPairBreaket(s, index) {
    var breaket = 0;
    if (s.charAt(index) == '(') {
        breaket++;
        while (breaket != 0 && index < s.length - 1) {
            index++;
            if (s.charAt(index) == '(') {
                breaket++;
            } else if (s.charAt(index) == ')') {
                breaket--;
            }
        }
        return index;
    } else if (s.charAt(index) == ')') {
        breaket--;
        while (breaket != 0 && index > 0) {
            index--;
            if (s.charAt(index) == '(') {
                breaket++;
            } else if (s.charAt(index) == ')') {
                breaket--;
            }
        }
        return index;
    }
    return 0;
}
