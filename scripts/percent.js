function getAccuracy(par) {
	    return document.getElementById('accuracyOpt' + par).value;
}

function myRound(x, par) {
	    var accuracy = getAccuracy(par);
	    return Math.round(x * Math.pow(10, accuracy)) / Math.pow(10, accuracy);
}

function f2(par, event) {
	    if (event.keyCode == 13) {
		            solve(par);
		        }
}

function highlight(s) {
	    return '<span style="color: #de3939;">' + s + '</span>';
}

function solve(par) {
	    switch (par) {
		            case 0:
			                var a = document.getElementById('b0').value.replace(',', '.');
			                var b = document.getElementById('c0').value.replace(',', '.');
			                if (a == '') {
						                a = 0;
						            }
			                if (b == '') {
						                b = 0;
						            }
			                a = parseFloat(a);
			                b = parseFloat(b);
			                var ans = myRound(a * b / 100, 0);
			                document.getElementById('a0').innerHTML = '<strong>' + highlight(a + '%') + ' от числа ' + highlight(b) + ' = ' + highlight(ans) + '</strong>';
			                break;
			            case 1:
			                var a = document.getElementById('b1').value.replace(',', '.');
			                var b = document.getElementById('c1').value.replace(',', '.');
			                if (a == '') {
						                a = 0;
						            }
			                if (b == '') {
						                b = 0;
						            }
			                a = parseFloat(a);
			                b = parseFloat(b);
			                var ans = myRound(a * 100 / b, 0);
			                if (isNaN(ans)) {
						                ans = 'неопределённость';
						            } else {
								                    ans += '%';
								                }
			                document.getElementById('a1').innerHTML = '<strong>' + highlight(a + '%') + ' от числа ' + highlight(b) + ' = ' + highlight(ans) + '</strong>';
			                break;
			            case 2:
			                var a = document.getElementById('b2').value.replace(',', '.');
			                var b = document.getElementById('c2').value.replace(',', '.');
			                if (a == '') {
						                a = 0;
						            }
			                if (b == '') {
						                b = 0;
						            }
			                a = parseFloat(a);
			                b = parseFloat(b);
			                var ans = myRound(a + a * b / 100, 0);
			                document.getElementById('a2').innerHTML = '<strong>' + highlight(a) + ' + ' + highlight(b + '%') + ' = ' + highlight(ans) + '</strong>';
			                break;
			            case 3:
			                var a = document.getElementById('b3').value.replace(',', '.');
			                var b = document.getElementById('c3').value.replace(',', '.');
			                if (a == '') {
						                a = 0;
						            }
			                if (b == '') {
						                b = 0;
						            }
			                a = parseFloat(a);
			                b = parseFloat(b);
			                var ans = myRound(a - a * b / 100, 0);
			                document.getElementById('a3').innerHTML = '<strong>' + highlight(a) + ' - ' + highlight(b + '%') + ' = ' + highlight(ans) + '</strong>';
			                break;
			        }
}

function cleanFields(par) {
	    document.getElementById('a' + par).innerHTML = '';
	    document.getElementById('b' + par).value = '';
	    document.getElementById('c' + par).value = '';
	    solve(par);
}

function solve4() {
	    var a = document.getElementById('b4').value.replace(',', '.');
	    var b = document.getElementById('c4').value.replace(',', '.');
	    if (a == '') {
		            a = 0;
		        }
	    if (b == '') {
		            b = 0;
		        }
	    a = parseFloat(a);
	    b = parseFloat(b);
	    var ans = myRound(a * b / 100, 4);
	    document.getElementById('a4').innerHTML = '<strong>' + highlight(a + '%') + ' от числа ' + highlight(b) + ' = ' + highlight(ans) + '</strong>';
}

function cleanFields4() {
	    document.getElementById('a4').innerHTML = '';
	    document.getElementById('b4').value = '';
	    document.getElementById('c4').value = '';
	    solve4();
}

/*--------*/
function solve5() {
	    var a = document.getElementById('b5').value.replace(',', '.');
	    var b = document.getElementById('c5').value.replace(',', '.');
	    if (a == '') {
		            a = 0;
		        }
	    if (b == '') {
		            b = 0;
		        }
	    a = parseFloat(a);
	    b = parseFloat(b);
	    var ans = myRound(a * 100 / b, 5);
	    if (isNaN(ans)) {
		            ans = 'неопределённость';
		        } else {
				        ans += '%';
				    }
	    document.getElementById('a5').innerHTML = '<strong>' + highlight(a) + ' от числа ' + highlight(b) + ' = ' + highlight(ans) + '</strong>';
}

function cleanFields5() {
	    document.getElementById('a5').innerHTML = '';
	    document.getElementById('b5').value = '';
	    document.getElementById('c5').value = '';
	    solve5();
}

/*--------*/
function solve6() {
	    var a = document.getElementById('b6').value.replace(',', '.');
	    var b = document.getElementById('c6').value.replace(',', '.');
	    if (a == '') {
		            a = 0;
		        }
	    if (b == '') {
		            b = 0;
		        }
	    a = parseFloat(a);
	    b = parseFloat(b);
	    var ans = myRound(a + a * b / 100, 6);
	    document.getElementById('a6').innerHTML = '<strong>' + highlight(a) + ' + ' + highlight(b + '%') + ' = ' + highlight(ans) + '</strong>';
}

function cleanFields6() {
	    document.getElementById('a6').innerHTML = '';
	    document.getElementById('b6').value = '';
	    document.getElementById('c6').value = '';
	    solve6();
}

/*--------*/
function solve7() {
	    var a = document.getElementById('b7').value.replace(',', '.');
	    var b = document.getElementById('c7').value.replace(',', '.');
	    if (a == '') {
		            a = 0;
		        }
	    if (b == '') {
		            b = 0;
		        }
	    a = parseFloat(a);
	    b = parseFloat(b);
	    var ans = myRound(a - a * b / 100, 7);
	    document.getElementById('a7').innerHTML = '<strong>' + highlight(a) + ' + ' + highlight(b + '%') + ' = ' + highlight(ans) + '</strong>';
}

function cleanFields7() {
	    document.getElementById('a7').innerHTML = '';
	    document.getElementById('b7').value = '';
	    document.getElementById('c7').value = '';
	    solve7();
}

