$(document).ready(function () {

    debugger;

    var dat = localStorage.getItem('dailyAvailableTime');
    var datd = localStorage.getItem('dailyAvailableTimeDecimal');
    var bt = localStorage.getItem('bedTime');
    var wt = localStorage.getItem('wakeTime');
    var tstd = localStorage.getItem('totalSleepTimeDecimal');

    addTaskTime();

    function addTaskTime() {
        $(".taskTimeEstimate").change(function () {
            var inputs = $(".taskTimeEstimate");
            var total = 0;
            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() !== '')
                    total += parseFloat($(inputs[i]).val());

                var decimalTimeString = total;
                var n = new Date(0, 0);
                n.setSeconds(+decimalTimeString * 60 * 60);
                var hrs = n.getHours();
                var mins = n.getMinutes();
            }

            if (mins < 10) {
                mins = "0"+mins;
            }


            if (hrs > dat) {
                console.log("tasks can't be more than available hours!");
            }

            $("#totalTaskTime").val(hrs+":"+mins);



        });
    }

    function minTommss(minutes) {
        var sign = minutes < 0 ? "-" : "";
        var min = Math.floor(Math.abs(minutes));
        var sec = Math.floor((Math.abs(minutes) * 60) % 60);
        return sign + (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec;
    }


    $(document).on('click', '.addRowButton', function (e) {
        //var $el = $(e.currentTarget);
        var $tableBody = $('#todoListTableBody');
        var htmlString = $('#rowTemplate').html();
        $tableBody.append(htmlString);
        addTaskTime();
        return false;
    });

    $(document).on('click', '.delRowButton', function (e) {
        var $el = $(e.currentTarget);
        var $row = $el.closest('tr');
        var par = $el.closest('td').find("input").val();
        var total = $("#totalTaskTime").val();
        $("#totalTaskTime").val(total - par);
        $row.remove();
        return false;
    });
    Sortable.create(
        $('#todoListTableBody')[0],
        {
            animation: 150,
            scroll: true,
            handle: '.drag-handler',

        }
    );
});