  var clock = setInterval(function () {
    var time = dayjs().format('MMM D, YYYY, hh:mm:ss a');
    $('.clock').text(time);

    console.log('Tick ${time} tock')
}, 1000);