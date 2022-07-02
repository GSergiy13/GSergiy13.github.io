$(function() {
	testtimer('11/12/2019 03:14:07 AM');
	function testtimer(dateEnd) {
		var testtimer, testdays, testhours, testminutes, testseconds;

		dateEnd = new Date(dateEnd);
		dateEnd = dateEnd.getTime();

		if ( isNaN(dateEnd) ) {
			return;
		}

		testtimer = setInterval(calculate, 1000);

		function calculate() {
			var dateStart = new Date();
			var dateStart = new Date(dateStart.getUTCFullYear(),
				dateStart.getUTCMonth(),
				dateStart.getUTCDate(),
				dateStart.getUTCHours(),
				dateStart.getUTCMinutes(),
				dateStart.getUTCSeconds());
			var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

			if ( timeRemaining >= 0 ) {
				testdays    = parseInt(timeRemaining / 86400);
				timeRemaining   = (timeRemaining % 86400);
				testhours   = parseInt(timeRemaining / 3600);
				timeRemaining   = (timeRemaining % 3600);
				testminutes = parseInt(timeRemaining / 60);
				timeRemaining   = (timeRemaining % 60);
				testseconds = parseInt(timeRemaining);

				document.getElementById("testdays").innerHTML    = parseInt(testdays, 10);
				document.getElementById("testhours").innerHTML   = ("0" + testhours).slice(-2);
				document.getElementById("testminutes").innerHTML = ("0" + testminutes).slice(-2);
				document.getElementById("testseconds").innerHTML = ("0" + testseconds).slice(-2);
			} else {
				return;
			}
		}

		function display(testdays, testhours, testminutes, testseconds) {}
	}
});


$(function() {
	testtimer1('11/12/2019 03:14:07 AM');
	function testtimer1(dateEnd) {
		var testtimer1, testdays1, testhours1, testminutes1, testseconds1;

		dateEnd = new Date(dateEnd);
		dateEnd = dateEnd.getTime();

		if ( isNaN(dateEnd) ) {
			return;
		}

		testtimer1 = setInterval(calculate, 1000);

		function calculate() {
			var dateStart = new Date();
			var dateStart = new Date(dateStart.getUTCFullYear(),
				dateStart.getUTCMonth(),
				dateStart.getUTCDate(),
				dateStart.getUTCHours(),
				dateStart.getUTCMinutes(),
				dateStart.getUTCSeconds());
			var timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

			if ( timeRemaining >= 0 ) {
				testdays1    = parseInt(timeRemaining / 86400);
				timeRemaining   = (timeRemaining % 86400);
				testhours1   = parseInt(timeRemaining / 3600);
				timeRemaining   = (timeRemaining % 3600);
				testminutes1 = parseInt(timeRemaining / 60);
				timeRemaining   = (timeRemaining % 60);
				testseconds1 = parseInt(timeRemaining);

				document.getElementById("testdays1").innerHTML    = parseInt(testdays1, 10);
				document.getElementById("testhours1").innerHTML   = ("0" + testhours1).slice(-2);
				document.getElementById("testminutes1").innerHTML = ("0" + testminutes1).slice(-2);
				document.getElementById("testseconds1").innerHTML = ("0" + testseconds1).slice(-2);
			} else {
				return;
			}
		}

		function display(testdays1, testhours1, testminutes1, testseconds1) {}
	}
});
