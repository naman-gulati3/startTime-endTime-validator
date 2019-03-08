var startAndEndTimeValidator = function (startInput, endInput, currentTime) {
    this.startInput = startInput;
    this.endInput = endInput;
    var currentDate = new Date();
    var currentTime = Date.parse(currentDate);
    this.currentTime = currentTime;

}
startAndEndTimeValidator.prototype.startTimeValidator = function () {
    var startinputTime = Date.parse(this.startInput);
    if (startinputTime > this.currentTime) {
        console.log('wrong input');
    }
}
startAndEndTimeValidator.prototype.endTimeValidator = function () {
    var endInputTime = Date.parse(this.endInput);
    if (endInputTime > this.currentTime) {
        console.log('wrong input')
    }
}
startAndEndTimeValidator.prototype.validateBothStartAndEnd = function () {
    var startinputTime = Date.parse(this.startInput);
    var endInputTime = Date.parse(this.endInput);
    if (startinputTime <= this.currentTime && endInputTime <= this.currentTime) {
        if (startinputTime > endInputTime) {
            console.log('wrong input');
        }
    } else if (startinputTime > endInputTime) {
        console.log('wrong input');
    }
}
$(document).ready(function () {
    var $startDate = $('#startDate');
    var $endDate = $('#endDate');
    $startDate.change(function () {
        var startValue = $startDate.val();
        var dateObject = new startAndEndTimeValidator(startValue, "");
        dateObject.startTimeValidator();
    });
    $endDate.change(function () {
        var endValue = $endDate.val();
        var startValue = $startDate.val();
        var dateObject = new startAndEndTimeValidator("", endValue);
        var dateObj = new startAndEndTimeValidator(startValue, endValue);
        dateObject.endTimeValidator();
        dateObj.validateBothStartAndEnd();
    });
});