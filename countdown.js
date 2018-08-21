$(document).ready(function () {

    var bt = localStorage.getItem('bedTime');
    var wt = localStorage.getItem('wakeTime');

    //  console.log('Bed Time:' + bt);
    //  console.log('Daily Available time' + dat);
    //  console.log('Wake up time:' + wt);

    var dateNow = moment().format('MMM D, YYYY');
    var placeHolderDate = dateNow + " " + bt;

    var countDownDate = new Date(placeHolderDate).getTime();

    var x = setInterval(function () {

        // Get todays date and time
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $("#countDown").val(hours + ":" + minutes + ":" + seconds);

        // If the countdown is over, write some text
        if (hours === 0 && minutes === 0 && seconds === 0) {
            $("#countDown").val("00:00:00");
            document.getElementById('countDown').style.color = 'red';
        }

        if (hours < 0 || minutes < 0 || seconds < 0) {
            $("#countDown").val("00:00:00");
            document.getElementById('countDown').style.color = 'red';
        }

        var timeNow = moment().format('HH:mm');
        if (timeNow === wt) {
            clearInterval(x);
            restartCountdown();
        }

    }, 1000);


    function restartCountdown() {

        var bt = localStorage.getItem('bedTime');

        var dN = (moment().add(moment.duration({d: 1})).format('MMM D, YYYY'));

        var placeHolderDate = dN + " " + bt;
        var countDownDate = new Date(placeHolderDate).getTime();

        // Update the count down every 1 second
        var x = setInterval(function () {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            $("#countDown").val(hours + ":" + minutes + ":" + seconds);

            // If the countdown is over, write some text
            if (hours === 0 && minutes === 0 && seconds === 0) {
                $("#countDown").val("00:00:00");
                document.getElementById('countDown').style.color = '#f08000';
                alert('this');
            }

            if (hours < 0 || minutes < 0 || seconds < 0) {
                $("#countDown").val("00:00:00");
                document.getElementById('countDown').style.color = '#f08000';
                alert('this');
            }

        }, 1000);
    }
});