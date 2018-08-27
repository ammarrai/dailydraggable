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
                    var decimalTimeString = total += parseInt($(inputs[i]).val());

            }
            var integerPart = total;
            total = 0;
            var inputs = $(".taskMinutes");
            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() !== '')
                    var decimalTimeString = total += parseFloat($(inputs[i]).val());

            }
            var decimalPart = total / 100;
            if (decimalPart >= 0.6) {
                while (decimalPart >= 0.6) {

                    integerPart = integerPart + 1;

                    decimalPart = decimalPart - 0.6;
                }
                var totalTaskTime = integerPart + Math.abs(decimalPart);
                totalTaskTime = totalTaskTime.toFixed(2).toString();
                totalTaskTime = totalTaskTime.replace(".",":");
                $("#totalTaskTime").val(totalTaskTime);

            } else {
                newTime = integerPart + decimalPart;
                totalTaskTime = newTime.toFixed(2).toString();
                totalTaskTime = totalTaskTime.replace(".",":");
                $("#totalTaskTime").val(totalTaskTime);
            }


        });

        $(".taskMinutes").change(function () {


            var inputs = $(".taskTimeEstimate");
            var total = 0;
            var totalTaskTimeDecimal;

            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() !== '')
                    var decimalTimeString = total += parseInt($(inputs[i]).val());

            }
            var integerPart = total;
            total = 0;
            var inputs = $(".taskMinutes");
            for (var i = 0; i < inputs.length; i++) {
                if ($(inputs[i]).val() !== '')
                    var decimalTimeString = total += parseFloat($(inputs[i]).val());

            }
            var decimalPart = total / 100;

            if (decimalPart >= 0.6) {
                while (decimalPart >= 0.6) {

                    integerPart = integerPart + 1;

                    decimalPart = decimalPart - 0.6;
                }

                //decimalPart = 0.6 - decimalPart;
                var totalTaskTime1 = integerPart + Math.abs(decimalPart);

                totalTaskTime = totalTaskTime1.toFixed(2).toString();
                totalTaskTime = totalTaskTime.replace(".",":");
                $("#totalTaskTime").val(totalTaskTime);


            } else {
                newTime = integerPart + decimalPart;
                totalTaskTime = newTime.toFixed(2).toString();
                totalTaskTime = totalTaskTime.replace(".",":");
                $("#totalTaskTime").val(totalTaskTime);
            }


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
       // $("#totalTaskTime").val(total - par);
        $row.remove();
        //new code


        var inputs = $(".taskTimeEstimate");
        var total = 0;
        var totalTaskTimeDecimal;

        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() !== '')
                var decimalTimeString = total += parseInt($(inputs[i]).val());

        }
        var integerPart = total;
        total = 0;
        var inputs = $(".taskMinutes");
        for (var i = 0; i < inputs.length; i++) {
            if ($(inputs[i]).val() !== '')
                var decimalTimeString = total += parseFloat($(inputs[i]).val());

        }
        var decimalPart = total / 100;

        if (decimalPart >= 0.6) {
            while (decimalPart >= 0.6) {

                integerPart = integerPart + 1;

                decimalPart = decimalPart - 0.6;
            }

            //decimalPart = 0.6 - decimalPart;
            var totalTaskTime = integerPart + Math.abs(decimalPart);


            totalTaskTime = totalTaskTime.toFixed(2).toString();
            totalTaskTime = totalTaskTime.replace(".",":");
            $("#totalTaskTime").val(totalTaskTime);


        } else {
            newTime = integerPart + decimalPart;
            totalTaskTime = newTime.toFixed(2).toString();
            totalTaskTime = totalTaskTime.replace(".",":");
            $("#totalTaskTime").val(totalTaskTime);
        }
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