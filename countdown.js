$(document).ready(function () {

    function countdown() {
        var bt = "23:00",  // 11:00 PM
            wt = "08:00";  // 08:00 AM


        var today = new Date(),
            dd = today.getDate(),
            mm = today.getMonth()+1,
            yyyy = today.getFullYear();

        var startTime = new Date(mm + '/' + dd + '/' + yyyy + ' ' + wt),
            endTime = new Date(mm + '/' + dd + '/' + yyyy + ' ' + bt);

        setInterval(function() {
            var now = new Date();
            var nowdd = today.getDate();
            var nowTime = now.getTime();
            if(dd !== nowdd) {
                dd = nowdd;
                var nowmm = now.getMonth() + 1,
                    nowyyyy = now.getFullYear();
                startTime = new Date(dd + '/' + mm + '/' + yyyy + ' wt');
                endTime = new Date(dd + '/' + mm + '/' + yyyy + ' bt');
            }

            if(nowTime > startTime && nowTime < endTime) {
                // Find the distance between now and the count down date
                var distance = endTime - nowTime;

                // Time calculations for days, hours, minutes and seconds
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                    minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds = Math.floor((distance % (1000 * 60)) / 1000);

                if (minutes.toString().length == 1) {
                    minutes = "0" + minutes;
                }

                if (seconds.toString().length == 1) {
                    seconds = "0" + seconds;
                }

                $("#countDown").val(hours + ":" + minutes + ":" + seconds);
            } else {
                $("#countDown").val("00:00:00");
            }
        }, 1000);
    }
    countdown();
});