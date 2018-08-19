$(document).ready(function () {

    var bt = localStorage.getItem('bedTime');
    var dat = localStorage.getItem('dailyAvailableTime');
    var wt = localStorage.getItem('wakeTime');


//    console.log('Bed Time:' + bt);
    //   console.log('Daily Available time' + dat);
    //  console.log('Wake up time:' + wt);

    var dateNow = moment().format('MMM D, YYYY');
    placeHolderDate = dateNow + " " + bt;

    var timeNow = moment().format('HH:mm');

    var countDownDate = new Date(placeHolderDate).getTime();

    var countDownHourMin = (wt.split(":"));


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
            //clearInterval(x);
            $("#countDown").val("00:00:00");
        }

        if (hours < 0 || minutes < 0 || seconds < 0) {
            //clearInterval(x);
            $("#countDown").val("00:00:00");
        }
        var timeNow = moment().format('HH:mm');
        //console.log('Time Now:' + timeNow);
        //console.log('Wake Time:' + wt);
        if (timeNow === wt) {
            clearInterval(x);
            restartCountdown();
        }


        //console.log(hours + ":" + minutes + ":" + seconds);

    }, 1000);


    function restartCountdown() {
        //console.log("restartCountdown Started!");

        var bt = localStorage.getItem('bedTime');
        var dat = localStorage.getItem('dailyAvailableTime');
        var wt = localStorage.getItem('wakeTime');

        //console.log('Bed Time:' + bt);
        //console.log('Daily Available time' + dat);
        //console.log('Wake up time:' + wt);

        var dN = (moment().add(moment.duration({d: 1})).format('MMM D, YYYY'));
        console.log('dn ' + dN);

        var placeHolderDate = dN + " " + bt;
        var countDownDate = new Date(placeHolderDate).getTime();

        var countDownHourMin = (wt.split(":"));


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
                //clearInterval(x);
                $("#countDown").val("00:00:00");
            }

            if (hours < 0 || minutes < 0 || seconds < 0) {
                //clearInterval(x);
                $("#countDown").val("00:00:00");
            }

            //  console.log(hours + ":" + minutes + ":" + seconds);

        }, 1000);

    }
});
