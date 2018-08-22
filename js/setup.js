$(document).ready(function(){

$("#submitBtn").click(function(){
	
	var sleepHours = parseInt($('#sleepHours').val());
	//console.log(sleepHours);

	var sleepMinutes = parseInt($('#sleepMinutes').val());
	//console.log(sleepMinutes);

	var totalSleepTime = sleepHours + sleepMinutes;
	// console.log(totalSleepTime)

	var totalSleepTimeInMinutes = (sleepHours *60) + sleepMinutes;
	// console.log('Total Sleep Time:' + totalSleepTimeInMinutes)

	var wakeupTimeString = ($('#wakeupTime').val());

	var sleepPrep = $("input[name='sleepPrep']:checked").val();
    //console.log('Sleep Prep:' + sleepPrep);

	var time = moment.utc(wakeupTimeString, "HH:mm");
	time.subtract(sleepHours, 'hours');
	time.subtract(parseInt(sleepPrep), 'hours');

	time.subtract(sleepMinutes, 'minutes');
	var bedTime = time.format("HH:mm");
	console.log('Bed Time:' + bedTime);

	var wakeupTimeArray = (wakeupTimeString.split(":"));
	var wakeUpTimeInMinutes = (parseInt(wakeupTimeArray[0])*60 + parseInt(wakeupTimeArray[1]));
//	console.log('Wakeup time in Minutes:'+ wakeUpTimeInMinutes);

	var recommendedSleepTimeInMinutes = (wakeUpTimeInMinutes - totalSleepTimeInMinutes);
//	console.log('Recommend Sleep Time in Minutes:' + recommendedSleepTimeInMinutes);

	var essentialHours = $('#essentialHours').val();
	var essentialMinutes = $('#essentialMinutes').val();
//	console.log(essentialHours);

	var dailyAvailableTime  = moment.utc("24:00", "HH:mm");
	dailyAvailableTime.subtract(parseInt(essentialHours), 'hours');
	dailyAvailableTime.subtract(parseInt(essentialMinutes), 'minutes');

	dailyAvailableTime.subtract(parseInt(sleepHours),'hours');
	dailyAvailableTime.subtract(parseInt(sleepMinutes),'minutes');

	dailyAvailableTime.subtract(parseInt(sleepPrep), 'hours');

	var dat = dailyAvailableTime.format("HH:mm");
	console.log('Daily Availble Time:'+dat);

    localStorage.setItem('dailyAvailableTime', dat);
    localStorage.setItem('bedTime', bedTime);
    localStorage.setItem('wakeTime', wakeupTimeString);
    localStorage.setItem('essentialHours', essentialHours);
    localStorage.setItem('essentialMinutes', essentialMinutes);
	});

});




