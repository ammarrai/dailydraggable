$(document).ready(function () {

    $("#submitBtn").click(function () {

        var sleepHours = parseInt($('#sleepHours').val());

        var sleepMinutes = parseInt($('#sleepMinutes').val());

        var totalSleepTimeDecimal = sleepHours + (sleepMinutes/60);

        var totalSleepTimeInMinutes = (sleepHours * 60) + sleepMinutes;

        var wakeupTimeString = ($('#wakeupTime').val());

        var sleepPrep = $("input[name='sleepPrep']:checked").val();

        var time = moment.utc(wakeupTimeString, "HH:mm");
        time.subtract(sleepHours, 'hours');
        time.subtract(parseInt(sleepPrep), 'hours');

        time.subtract(sleepMinutes, 'minutes');
        var bedTime = time.format("HH:mm");

        var wakeupTimeArray = (wakeupTimeString.split(":"));
        var wakeUpTimeInMinutes = (parseInt(wakeupTimeArray[0]) * 60 + parseInt(wakeupTimeArray[1]));

        //var recommendedSleepTimeInMinutes = (wakeUpTimeInMinutes - totalSleepTimeInMinutes);

        var essentialHours = $('#essentialHours').val();
        var essentialMinutes = $('#essentialMinutes').val();

        var dailyAvailableTime = moment.utc("24:00", "HH:mm");
        dailyAvailableTime.subtract(parseInt(essentialHours), 'hours');
        dailyAvailableTime.subtract(parseInt(essentialMinutes), 'minutes');

        dailyAvailableTime.subtract(parseInt(sleepHours), 'hours');
        dailyAvailableTime.subtract(parseInt(sleepMinutes), 'minutes');

        dailyAvailableTime.subtract(parseInt(sleepPrep), 'hours');

        var dat = dailyAvailableTime.format("HH:mm");
        var dat = dailyAvailableTime.format


        localStorage.setItem('dailyAvailableTime', dat);
        localStorage.setItem('bedTime', bedTime);
        localStorage.setItem('wakeTime', wakeupTimeString);
        localStorage.setItem('essentialHours', essentialHours);
        localStorage.setItem('essentialMinutes', essentialMinutes);
        localStorage.setItem('totalSleepTimeDecimal', totalSleepTimeDecimal);

        console.log('Bed Time:' + bedTime);
        console.log('Wake-up Time: '+wakeupTimeString);
        console.log('Total Sleep Time:'+totalSleepTimeDecimal);
        console.log('Daily Available Time:' + dat);
        console.log('Daily Available Time (Decimal):' + datDecimal);
    });
});




