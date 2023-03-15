  var clock = setInterval(function () {
    var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
    $('.clock').text(time);

    console.log('Tick tock')
}, 1000);

var dueDate = dayjs(03/15/2023).format('MMM D, YYYY');
$('.duedate').text(dueDate);