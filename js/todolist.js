$(document).ready(function () {

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
            var totalTaskTimeDecimal;

            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() !== '')
                    var decimalTimeString = total += parseFloat($(inputs[i]).val());

            // convert TTT to decimal
                var n = new Date(0, 0);
                n.setSeconds(+decimalTimeString * 60 * 60);
                var hrs = n.getHours();
                var mins = n.getMinutes();
                totalTaskTimeDecimal = hrs + (mins / 60);

            }

            // make minutes double digit
            if (mins < 10) {
                mins = "0" + mins;
            }

            // if TTT is greater than DAT, make TTT red and display it.
            if (totalTaskTimeDecimal > datd) {
                document.getElementById('totalTaskTime').style.color = '#db0808';
            } else {
                document.getElementById('totalTaskTime').style.color = '#FFFFFF';
            }
            $("#totalTaskTime").val(hrs + ":" + mins);
        });
    }


    // add row button + add task time
    $(document).on('click', '.addRowButton', function (e) {
        //var $el = $(e.currentTarget);
        var $tableBody = $('#todoListTableBody');
        var htmlString = $('#rowTemplate').html();
        $tableBody.append(htmlString);
        addTaskTime();
        return false;
    });

    // del row button
    $(document).on('click', '.delRowButton', function (e) {
        var $el = $(e.currentTarget);
        var $row = $el.closest('tr');
        var par = $el.closest('td').find("input").val();
        var total = $("#totalTaskTime").val();
        $("#totalTaskTime").val(total - par);
        $row.remove();
        return false;
    });

    // sortable
    Sortable.create(
        $('#todoListTableBody')[0],
        {
            animation: 150,
            scroll: true,
            handle: '.drag-handler'

        }
    );
});